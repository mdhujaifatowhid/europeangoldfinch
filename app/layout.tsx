import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = { title: 'European Goldfinch.net', description: 'Fan-made Prison Break prop site' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <Header />
          <div className="main"><Sidebar /><section className="content">{children}</section></div>
          <div className="foot" />
        </div>
        <p className="disc">Fan-made tribute site. Not affiliated with Fox or the Prison Break TV series.</p>
      </body>
    </html>
  )
}
