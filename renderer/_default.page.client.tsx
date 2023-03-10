import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { SrkLayout } from '../layouts/SrkLayout'
import type { PageContextClient } from './types'

export { render }

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById('main-content')!,
    <SrkLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </SrkLayout>
  )
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */