import React from 'react'
import logo from '../src/logo.svg'
import { PageContextProvider } from '../renderer/usePageContext'
import type { PageContext } from '../renderer/types'
import './SrkLayout.scss'
import { SrkHeader } from '../components/header/SrkHeader'
import { Footer } from '../components/footer/Footer'



export { SrkLayout }


function SrkLayout({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <SrkHeader></SrkHeader>

        {children}
        <Footer></Footer>

      </PageContextProvider>
    </React.StrictMode>
  )
}

