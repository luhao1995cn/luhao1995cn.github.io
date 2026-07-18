import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    "out/**",
    "public/assets/**",
    "_site/**",
    "assets/**",
    "_posts/**",
    "_tabs/**",
    "_includes/**",
    "purgecss.js",
    "rollup.config.js"
  ])
]);
