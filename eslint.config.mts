import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import ts from "typescript-eslint";
import * as js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      prettier,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "commitlint.config.js",
    "husky/**",
    "package-lock.json",
  ]),
]);
