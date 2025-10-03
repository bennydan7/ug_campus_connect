import './globals.css'
import React from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'UG Campus Connect',
  description: 'Discover • Join • Connect'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto py-6">{children}</main>
      </body>
    </html>
  )
}
