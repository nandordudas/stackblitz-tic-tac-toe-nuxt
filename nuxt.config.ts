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
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    transformers: [transformerVariantGroup()],
    attributify: true,
    preflight: true,
    // safelist: [
    //   'grid-cols-[repeat(3,1fr)]',
    //   'grid-cols-[repeat(5,1fr)]',
    // ],
  },
})
