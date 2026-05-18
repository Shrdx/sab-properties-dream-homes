import * as z from "zod";

// List of blacklisted names (common fake/test entries)
const BLACKLISTED_NAMES = [
  "test", "demo", "dummy", "fake", "admin", "unknown", 
  "asdf", "qwer", "zxcv", "abcd", "nobody", "noname", 
  "guest", "user", "placeholder", "system", "testing",
  "anonymous", "null", "undefined"
];

// List of blacklisted email domains (disposable and test domains)
const BLACKLISTED_DOMAINS = [
  "test.com", "example.com", "dummy.com", "fake.com", "asdf.com",
  "mailinator.com", "yopmail.com", "dispostable.com", "tempmail.com",
  "junkmail.com", "spambox.com"
];

// Helper to check for repetitive character patterns in name (e.g. "aaaa", "asdfasdf")
export const isRepetitiveName = (name: string): boolean => {
  const clean = name.toLowerCase().replace(/\s+/g, "");
  if (clean.length < 3) return true;
  
  // All same characters (e.g. "aaa")
  if (/^([a-z])\1+$/.test(clean)) return true;
  
  // Repetitive 2-char pattern (e.g. "ababab")
  if (/^([a-z]{2})\1+$/.test(clean)) return true;
  
  // Repetitive 3-char pattern (e.g. "abcabc")
  if (/^([a-z]{3})\1+$/.test(clean)) return true;
  
  return false;
};

// Helper to check for fake phone numbers
export const isFakePhone = (phone: string): boolean => {
  const clean = phone.replace(/\D/g, "");
  if (clean.length !== 10) return true;
  
  // All same digits (e.g., "9999999999")
  if (/^(\d)\1{9}$/.test(clean)) return true;
  
  // Active mobile numbers almost never have only 2 or fewer unique digits
  if (new Set(clean).size <= 2) return true;

  // Check for consecutive sequential runs of length 7 or more (e.g. 1234567)
  let maxRun = 1;
  let currentRun = 1;
  for (let i = 0; i < clean.length - 1; i++) {
    const diff = Number(clean[i+1]) - Number(clean[i]);
    if (diff === 1 || diff === -9) {
      if (currentRun >= 0) {
        currentRun++;
      } else {
        currentRun = 2;
      }
    } else if (diff === -1 || diff === 9) {
      if (currentRun <= 0) {
        currentRun--;
      } else {
        currentRun = -2;
      }
    } else {
      maxRun = Math.max(maxRun, Math.abs(currentRun));
      currentRun = 1;
    }
  }
  maxRun = Math.max(maxRun, Math.abs(currentRun));
  if (maxRun >= 7) return true;
  
  // Obvious test/placeholder prefixes
  if (clean.startsWith("912345") || clean.startsWith("987654") || clean.startsWith("123456")) return true;
  
  return false;
};

// Custom Zod Validators
export const nameValidation = z.string()
  .min(3, "Name must be at least 3 characters")
  .max(50, "Name is too long")
  .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/, "Please enter both First Name and Last Name")
  .refine(
    (val) => {
      const parts = val.trim().toLowerCase().split(/\s+/);
      return !parts.some(part => BLACKLISTED_NAMES.includes(part));
    },
    { message: "Please enter a valid real name" }
  )
  .refine(
    (val) => !isRepetitiveName(val),
    { message: "Please enter a valid real name (no repetitive characters)" }
  );

// For forms that have single name input field that might not require full name but still needs to be real
export const singleNameValidation = z.string()
  .min(3, "Name must be at least 3 characters")
  .max(50, "Name is too long")
  .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
  .refine(
    (val) => {
      const parts = val.trim().toLowerCase().split(/\s+/);
      return !parts.some(part => BLACKLISTED_NAMES.includes(part));
    },
    { message: "Please enter a valid real name" }
  )
  .refine(
    (val) => !isRepetitiveName(val),
    { message: "Please enter a valid real name" }
  );

export const phoneValidation = z.string()
  .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number starting with 6-9")
  .refine(
    (val) => !isFakePhone(val),
    { message: "Please enter a valid active mobile number" }
  );

export const emailValidation = z.string()
  .email("Please enter a valid email address")
  .refine(
    (val) => {
      const domain = val.trim().toLowerCase().split("@")[1];
      return !BLACKLISTED_DOMAINS.includes(domain);
    },
    { message: "Please use a standard standard email address" }
  );

// Input Sanitization Controllers
export const sanitizeName = (value: string): string => {
  return value.replace(/[^a-zA-Z\s]/g, "");
};

export const sanitizePhone = (value: string): string => {
  return value.replace(/\D/g, "").slice(0, 10);
};

export const sanitizeEmail = (value: string): string => {
  return value.replace(/\s/g, "");
};
