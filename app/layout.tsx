import './globals.css'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import Link from 'next/link'

const ebGaramond = EB_Garamond({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kira Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        <div className="bg-black w-full h-screen flex justify-center items-center text-white">
          <div className="fixed z-10 top-0 left-0 flex ml-3 mt-3 animate-fade-out animate-fade-in">
            <Link href={'/'} className="mr-3 opacity-50 hover:opacity-100 smooth-transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </Link>
            <Link href={'/write'} className="mr-3 opacity-50 hover:opacity-100 smooth-transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </Link>
            <Link href={'/book'} className="mr-3 opacity-50 hover:opacity-100 smooth-transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </Link>
          </div>
          <div className="absolute top-0 bottom-0 w-full h-screen flex flex-col items-center justify-center">
          {children}
          </div>
        </div>
      </body>
    </html>
  )
}
