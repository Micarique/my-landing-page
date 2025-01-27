import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Micael Machado',
  description: 'Micael Machado is a Software Developer.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
