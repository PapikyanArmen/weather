import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import crypto from "crypto";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    modules: {
      localsConvention: "camelCase",

      //This method help us to generate css classname from sass module

      // generateScopedName: (name, filename, css) => {
      //   console.log(name);
      //   const componentName = filename
      //     .replace(/\.\w+$/, "")
      //     .replace(".module", "")
      //     .split("/")
      //     .pop();
      //   const hash = crypto
      //     .createHash("md5")
      //     .update(css)
      //     .digest("base64")
      //     .substring(0, 5);
      //
      //   return `${componentName}__${name}__${hash}`;
      // },
    },
  },
});
