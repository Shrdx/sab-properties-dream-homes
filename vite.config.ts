import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

import prerender from '@prerenderer/rollup-plugin';
import puppeteer from '@prerenderer/renderer-puppeteer';
import { allProperties } from './src/data/properties';

const propertyRoutes = allProperties.map(p => `/property/${p.id}`);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && prerender({
      routes: [
        '/',
        '/about',
        '/services',
        '/properties',
        '/contact',
        '/exclusive-offer',
        '/office-space-delhi',
        '/commercial-spaces-delhi',
        '/pre-rented-properties-delhi',
        ...propertyRoutes
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      server: {
        port: 8000
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
