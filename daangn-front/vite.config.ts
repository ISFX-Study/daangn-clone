import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), vue()],
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
          // target 프로젝트 구성에 맞게 포트 변경하면 됨
          target: "http://localhost:8080",
          changeOrigin: true,
          // 예) http://localhost:5173/api/test/hello -> http://localhost:8080/test/hello 로 변환해줌
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
          ws: true,
      },
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
})
