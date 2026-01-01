import '@docsearch/css'
import docsearch from '@docsearch/js'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { docsearchOptions } from './docsearchOptions'

const theme: Theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)

    if (import.meta.env.SSR) return

    const { router } = ctx
    let destroy: (() => void) | undefined

    const mountSearch = () => {
      const container = document.querySelector('#docsearch')
      if (!container) return

      destroy?.()
      const instance = docsearch({
        container,
        ...docsearchOptions
      })

      destroy = instance?.destroy
    }

    router.onAfterRouteChanged = () => {
      requestAnimationFrame(mountSearch)
    }

    requestAnimationFrame(mountSearch)
  }
}

export default theme