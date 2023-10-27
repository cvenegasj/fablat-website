import './globals.css';
import { Providers } from "./providers";
import { Urbanist } from 'next/font/google';

import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Image } from '@nextui-org/image';

import React from 'react';



const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Fab Lat',
  description: 'Red latinoamericana de Fab Labs',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Providers>

          <Navbar
            classNames={{
              wrapper: "max-w-full xl:px-64 lg:px-36 px-20",
            }}>
            <NavbarBrand>
              <Link href="/">
                <Image
                  className="invert"
                  src="/fablat_2023_logo.png"
                  alt="FabLat Logo"
                  width={40}
                  height={40}
                />
                {/* <p className="font-bold text-inherit">FAB LAT</p> */}
              </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-6" justify="end">
              <NavbarItem>
                <Link className='text-neutral-600 uppercase font-normal' href="/participant/">
                  Miembros
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className='text-neutral-600 uppercase font-normal' href="/group/">
                  Grupos
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className='text-neutral-600 uppercase font-normal' href="https://www.fablabs.io/labs" target='_blank'>
                  Labs
                </Link>
              </NavbarItem>

              <NavbarItem className="ml-10">
                <Button as={Link} href="https://app.fab.lat" variant="flat" color="primary" className='uppercase font-semibold'>
                  Accede
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>

        
          {children}

        </Providers>
      </body>
    </html>
  )
}
