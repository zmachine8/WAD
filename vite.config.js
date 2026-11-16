import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // The existing repository is published at https://zmachine8.github.io/WAD/.
  base: "/WAD/",
});
