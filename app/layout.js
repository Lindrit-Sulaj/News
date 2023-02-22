import './globals.css';
import Navbar from '@/components/Navbar';
import Provider from './Provider';

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
