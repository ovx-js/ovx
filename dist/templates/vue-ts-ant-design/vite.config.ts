import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      dts: true,
      eslintrc: { enabled: true },
      imports: ['vue', 'vue-router'],
      include: [ /\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/ ],
    }),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'css',
          resolveIcons: true
        }),
      ],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    vue()
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
