import { describe, it, expect } from "vitest";
import { 
  nameValidation, 
  phoneValidation, 
  emailValidation, 
  singleNameValidation,
  isFakePhone, 
  isRepetitiveName 
} from "../utils/leadValidation";

describe("Lead Validation Utility Functions", () => {
  describe("isRepetitiveName", () => {
    it("should detect repetitive character strings in names", () => {
      expect(isRepetitiveName("aaaa")).toBe(true);
      expect(isRepetitiveName("xyzxyzxyz")).toBe(true);
      expect(isRepetitiveName("ababab")).toBe(true);
      expect(isRepetitiveName("abcabc")).toBe(true);
      expect(isRepetitiveName("Rahul Sharma")).toBe(false);
      expect(isRepetitiveName("Amit")).toBe(false);
    });
  });

  describe("isFakePhone", () => {
    it("should detect obviously fake or placeholder mobile numbers", () => {
      expect(isFakePhone("9999999999")).toBe(true);
      expect(isFakePhone("1234567890")).toBe(true);
      expect(isFakePhone("9876543210")).toBe(true);
      expect(isFakePhone("6789012345")).toBe(true);
      expect(isFakePhone("9898989898")).toBe(true); // Repetitive pairs
      expect(isFakePhone("9988998899")).toBe(true); // Repetitive pattern / 2 unique digits
      expect(isFakePhone("9123456789")).toBe(true); // Obvious sequential start
      expect(isFakePhone("9876543211")).toBe(true); // Obvious descending sequential start
      expect(isFakePhone("9810057291")).toBe(false); // Valid number format
      expect(isFakePhone("9560783214")).toBe(false); // Valid number format
    });
  });

  describe("nameValidation Schema", () => {
    it("should reject invalid names and accept valid ones", () => {
      // nameValidation expects First Name and Last Name
      expect(nameValidation.safeParse("Rahul Sharma").success).toBe(true);
      expect(nameValidation.safeParse("Amit Kumar").success).toBe(true);
      
      // Too short
      expect(nameValidation.safeParse("R").success).toBe(false);
      // Only one word
      expect(nameValidation.safeParse("Rahul").success).toBe(false);
      // Contains numbers/special chars
      expect(nameValidation.safeParse("Rahul123 Sharma").success).toBe(false);
      expect(nameValidation.safeParse("Rahul@ Sharma").success).toBe(false);
      // Blacklisted names
      expect(nameValidation.safeParse("Test Lead").success).toBe(false);
      expect(nameValidation.safeParse("Dummy User").success).toBe(false);
      expect(nameValidation.safeParse("Anonymous Person").success).toBe(false);
    });
  });

  describe("singleNameValidation Schema", () => {
    it("should accept valid single words or full names but block spam", () => {
      expect(singleNameValidation.safeParse("Rahul").success).toBe(true);
      expect(singleNameValidation.safeParse("Rahul Sharma").success).toBe(true);
      
      expect(singleNameValidation.safeParse("asdf").success).toBe(false);
      expect(singleNameValidation.safeParse("test").success).toBe(false);
      expect(singleNameValidation.safeParse("dummy").success).toBe(false);
    });
  });

  describe("phoneValidation Schema", () => {
    it("should validate Indian mobile numbers correctly", () => {
      expect(phoneValidation.safeParse("9810057291").success).toBe(true);
      expect(phoneValidation.safeParse("8765401298").success).toBe(true); // valid
      expect(phoneValidation.safeParse("7896541230").success).toBe(true);
      expect(phoneValidation.safeParse("6325410987").success).toBe(true);
      
      // Fake/Placeholder
      expect(phoneValidation.safeParse("9999999999").success).toBe(false);
      expect(phoneValidation.safeParse("1234567890").success).toBe(false);
      // Doesn't start with 6-9
      expect(phoneValidation.safeParse("5551234567").success).toBe(false);
      // Wrong length
      expect(phoneValidation.safeParse("981001234").success).toBe(false);
      expect(phoneValidation.safeParse("98100123456").success).toBe(false);
    });
  });

  describe("emailValidation Schema", () => {
    it("should validate emails and reject fake domains", () => {
      expect(emailValidation.safeParse("rahul@gmail.com").success).toBe(true);
      expect(emailValidation.safeParse("hr@sabproperties.com").success).toBe(true);
      
      // Fake/Disposable domains
      expect(emailValidation.safeParse("test@example.com").success).toBe(false);
      expect(emailValidation.safeParse("user@mailinator.com").success).toBe(false);
      expect(emailValidation.safeParse("test@yopmail.com").success).toBe(false);
      expect(emailValidation.safeParse("dummy@fake.com").success).toBe(false);
    });
  });
});
