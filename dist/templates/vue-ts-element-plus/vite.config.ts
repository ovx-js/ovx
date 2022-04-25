import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      eslintrc: { enabled: true },
      // Auto Import functions from Vue, e.g. ref, reactive, toRef...
      imports: ['vue', 'vue-router'],
      include: [ /\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/ ],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [
        // Auto register el-icon components
        IconsResolver({
          prefix: false,
          enabledCollections: ['ep'],
        }),
        // Auto register Element Plus components
        ElementPlusResolver()
      ],
    }),
    Icons({
      autoInstall: true,
    })
  ],
  server: {
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'https://example.com',
      }
    },
    https: false,
  }
})
