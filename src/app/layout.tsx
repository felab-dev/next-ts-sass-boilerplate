import '@/styles/globals.scss'

import { MainProviders } from './providers'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <MainProviders>{children}</MainProviders>
      </body>
    </html>
  )
}
