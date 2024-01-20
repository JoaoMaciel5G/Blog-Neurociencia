import type { Metadata } from 'next'
import { roboto } from './fonts'
import './globals.css'
import Header from './components/Header'
import { ReactNode} from 'react'

export const metadata: Metadata = {
  title: 'Compreendendo o cérebro',
  description: 'Blog de artigos sobre neurociência e comportamento',
}

export default function RootLayout({children,}: {children: ReactNode}) {
  return (
    <html lang="pt-br">
        <body className={`${roboto.className}`}>
          <Header/>
          {children}
        </body>
    </html>
  )
}
