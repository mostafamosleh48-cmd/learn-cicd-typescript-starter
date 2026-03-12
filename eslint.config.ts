import Array from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";

export default tseslint.config(
  {
    ignores: ["dist/"],
  },
  Array.configs.recommended,
  ...tseslint.configs.recommended,

  pluginSecurity.configs.recommended,
  {
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "security/detect-eval-with-expression": "error"
    },
  },
);
