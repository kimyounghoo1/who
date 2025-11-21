// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    // 프로젝트 페이지로 배포할 때 경로(base)를 리포지토리 이름에 맞춰 설정합니다.
    // GitHub Pages: https://<username>.github.io/who/ 처럼 접근할 경우 '/who/'로 설정하세요.
    base: '/who/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
});
