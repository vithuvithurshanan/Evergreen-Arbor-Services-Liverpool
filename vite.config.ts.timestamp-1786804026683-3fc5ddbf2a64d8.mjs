// vite.config.ts
import { defineConfig } from "file:///C:/Users/wwwvi/OneDrive/Documents/GitHub/Evergreen-Arbor-Services-Liverpool/node_modules/vitest/dist/config.js";
import react from "file:///C:/Users/wwwvi/OneDrive/Documents/GitHub/Evergreen-Arbor-Services-Liverpool/node_modules/@vitejs/plugin-react/dist/index.js";
import { fileURLToPath, URL } from "node:url";
import sitemap from "file:///C:/Users/wwwvi/OneDrive/Documents/GitHub/Evergreen-Arbor-Services-Liverpool/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/wwwvi/OneDrive/Documents/GitHub/Evergreen-Arbor-Services-Liverpool/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.evergreenarborservices.co.uk",
      dynamicRoutes: ["/", "/privacy-policy", "/cookie-policy"],
      generateRobotsTxt: false
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
          if (id.includes("node_modules/react-hook-form") || id.includes("node_modules/@hookform") || id.includes("node_modules/zod")) {
            return "form";
          }
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/") || id.includes("node_modules/react-router-dom/")) {
            return "react-vendor";
          }
        }
      }
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3d3d2aVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXEV2ZXJncmVlbi1BcmJvci1TZXJ2aWNlcy1MaXZlcnBvb2xcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHd3d3ZpXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcRXZlcmdyZWVuLUFyYm9yLVNlcnZpY2VzLUxpdmVycG9vbFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvd3d3dmkvT25lRHJpdmUvRG9jdW1lbnRzL0dpdEh1Yi9FdmVyZ3JlZW4tQXJib3ItU2VydmljZXMtTGl2ZXJwb29sL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcclxuaW1wb3J0IHNpdGVtYXAgZnJvbSAndml0ZS1wbHVnaW4tc2l0ZW1hcCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHNpdGVtYXAoe1xyXG4gICAgICBob3N0bmFtZTogJ2h0dHBzOi8vd3d3LmV2ZXJncmVlbmFyYm9yc2VydmljZXMuY28udWsnLFxyXG4gICAgICBkeW5hbWljUm91dGVzOiBbJy8nLCAnL3ByaXZhY3ktcG9saWN5JywgJy9jb29raWUtcG9saWN5J10sXHJcbiAgICAgIGdlbmVyYXRlUm9ib3RzVHh0OiBmYWxzZSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdmcmFtZXItbW90aW9uJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LWhvb2stZm9ybScpIHx8XHJcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvQGhvb2tmb3JtJykgfHxcclxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy96b2QnKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZm9ybSdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9yZWFjdC8nKSB8fFxyXG4gICAgICAgICAgICBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS8nKSB8fFxyXG4gICAgICAgICAgICBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vJylcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3JlYWN0LXZlbmRvcidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgc2V0dXBGaWxlczogWycuL3NyYy90ZXN0L3NldHVwLnRzJ10sXHJcbiAgICBnbG9iYWxzOiB0cnVlLFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaWEsU0FBUyxvQkFBb0I7QUFDOWIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZSxXQUFXO0FBQ25DLE9BQU8sYUFBYTtBQUh1UCxJQUFNLDJDQUEyQztBQU01VCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixlQUFlLENBQUMsS0FBSyxtQkFBbUIsZ0JBQWdCO0FBQUEsTUFDeEQsbUJBQW1CO0FBQUEsSUFDckIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixhQUFhLElBQUk7QUFDZixjQUFJLEdBQUcsU0FBUyw0QkFBNEIsR0FBRztBQUM3QyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUNFLEdBQUcsU0FBUyw4QkFBOEIsS0FDMUMsR0FBRyxTQUFTLHdCQUF3QixLQUNwQyxHQUFHLFNBQVMsa0JBQWtCLEdBQzlCO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FDRSxHQUFHLFNBQVMscUJBQXFCLEtBQ2pDLEdBQUcsU0FBUyx5QkFBeUIsS0FDckMsR0FBRyxTQUFTLGdDQUFnQyxHQUM1QztBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxJQUNiLFlBQVksQ0FBQyxxQkFBcUI7QUFBQSxJQUNsQyxTQUFTO0FBQUEsRUFDWDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
