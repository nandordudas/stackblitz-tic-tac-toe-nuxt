import { defineNuxtConfig } from 'nuxt'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineNuxtConfig({
  // Disable @builtin vscode.typescript-language-features, because of volar.
  typescript: {
    shim: false,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  unocss: {
    transformers: [transformerVariantGroup()],
    attributify: true,
    preflight: true,
    safelist: [
      'grayscale',
    ],
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
    ],
  },
})
