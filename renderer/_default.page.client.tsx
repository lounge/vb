import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageLayout } from '../layouts/Layout'
import type { PageContextClient } from './types'

export { render }

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById('main-content')!,
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>
  )
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */