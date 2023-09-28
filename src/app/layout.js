import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahead',
  description: 'Redesigning ahead app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
