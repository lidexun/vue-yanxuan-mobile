import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          replaceOldImport: false,
          style: (name) => `vant/es/${name}/style/index.js`
        }
      ]
    })
  ],
  build:{
    terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {}
  },
})
