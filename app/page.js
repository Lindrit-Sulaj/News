import { Inter } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin']
})

export default function Home() {
  return (
    <main>
      
      <h1 className="text-4xl font-bold font-inter">Daily news</h1>
    </main>
  )
}
