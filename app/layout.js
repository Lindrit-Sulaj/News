import './globals.css';
import Navbar from '@/components/Navbar';
import Provider from './Provider';

import { Roboto, Rubik } from '@next/font/google'

export const roboto = Roboto({
  variable: '--font-roboto',
  display: 'swap',
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const rubik = Rubik({
  variable: '--font-rubik',
  display: 'swap',
  subsets: ['latin'],
  weight: ["300", "400", "500", "700", "900"]
})

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </Provider>
  )
}
