import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    './**/*.{js,ts,jsx,tsx}'
  ],
  presets: [sharedConfig],
};

export default config;


// import config from "@repo/tailwind-config";

// export default config;