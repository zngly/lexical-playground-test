import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		mountId: "app",
	},
	server: {
		port: 3002,
	},
});
