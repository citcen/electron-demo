import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
      alias: {
        "/@": resolve(__dirname, './src')
      }
    },
  }
})
