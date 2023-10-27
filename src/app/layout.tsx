import './globals.css'
import { Urbanist } from 'next/font/google'
import Navigation from './components/Navigation';

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Fab Lat',
  description: 'Red latinoamericana de Fab Labs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {/* <Navigation/> */}

        {children}

        {/* <footer>
          Footer FabLat 2023
        </footer> */}
      </body>
    </html>
  )
}
