import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/**/*.ts"],
  format: ["esm", "cjs"],
  clean: true,
  splitting: true,
  sourcemap: true,
});
