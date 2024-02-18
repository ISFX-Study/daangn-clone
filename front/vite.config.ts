import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""), //http://localhost:5173/api/test/hello -> http://localhost:8080/test/hello 로 변환해줌
          secure: false,
          ws: true,
      },
    },
  },
})
