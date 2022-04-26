import { defineNuxtConfig } from 'nuxt'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineNuxtConfig({
  // Disable @builtin vscode.typescript-language-features, because of volar.
  typescript: {
    shim: false,
    strict: true,
  },
  modules: [
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  unocss: {
    transformers: [transformerVariantGroup()],
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
