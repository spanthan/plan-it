import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-a6k",
  project: "plan-it",
  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  authToken: "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",
  // ...
};


// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
//   ssr: {
//     noExternal: [/@syncfusion/]
//   }
// });


export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
  ssr: {
    noExternal: [/@syncfusion/]
  }
  };
});