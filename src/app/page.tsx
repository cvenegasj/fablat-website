import Image from 'next/image';
import { Link } from '@nextui-org/link';
import { IconArrowRight } from '@tabler/icons-react';

import MembersSectionLanding from './components/MembersSectionLanding';
import GroupsSectionLanding from './components/GroupsSectionLanding';
import { SummaryStats } from './components/SummaryStats';

import React from "react";


export default function Home() {

  return (
    <main id="home" className="flex flex-col min-h-screen xl:px-80 lg:px-36 px-20 py-9">
      
      <div id="landing-top" className="flex w-full max-w-8xl">
        <div className="flex-grow">
          <a
            className="pointer-events-auto inline-block w-140 h-140 pb-0.5"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/fablat_logo.svg"
              alt="FabLat Logo"
              width={140}
              height={140}
              priority
            />
          </a>
          <h1 className="text-5xl"><span className='font-thin'>fab</span><span className='font-semibold'>lat</span></h1>
          <h2 className="text-2xl">Red Latinoamericana de Fab Labs</h2>
        </div>
      </div>

      <SummaryStats />
      

      {/* Section: Personas */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='flex items-center justify-between'>
          <Link className='relative left-[-27.5px]' href='/participant'>
            <span className='w-[80px] h-[80px] gradient-section-landing flex justify-center items-center mr-3'>
              <Image
                className='inline-block'
                src="/groups_icon.png"
                alt="Groups icon"
                width={25}
                height={25}
                priority
              />
            </span>
            
            <span className='text-2xl font-light text-neutral-100 uppercase'>Miembros</span>
          </Link>

          <Link href="/participant" className='text-sm text-neutral-200'>
            ver todos
            <IconArrowRight size={20} />
          </Link>
        </h3>

        <MembersSectionLanding />
      </div>



      {/* Section: Grupos */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='flex items-center justify-between'>
          <Link className='relative left-[-27.5px]' href='/group'>
            <span className='w-[80px] h-[80px] gradient-section-landing flex justify-center items-center mr-3'>
              <Image
                className='inline-block'
                src="/groups_icon.png"
                alt="Groups icon"
                width={25}
                height={25}
                priority
              />
            </span>
            
            <span className='text-2xl font-light text-neutral-100 uppercase'>Grupos</span>
          </Link>

          <Link href="/group" className='text-sm text-neutral-200'>
            ver todos
            <IconArrowRight size={20} />
          </Link>
        </h3>

        <GroupsSectionLanding />
      </div>


      {/* Section: Labs */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='flex items-center justify-between'>
          <Link className='relative left-[-27.5px]' href='https://www.fablabs.io/labs' target='_blank'>
            <span className='w-[80px] h-[80px] gradient-section-landing flex justify-center items-center mr-3'>
              <Image
                className='inline-block'
                src="/groups_icon.png"
                alt="Groups icon"
                width={25}
                height={25}
                priority
              />
            </span>
            
            <span className='text-2xl font-light text-neutral-100 uppercase'>Labs</span>
          </Link>
        </h3>

        <div className='w-full flex py-8 overflow-hidden'>
          <Link className='w-full block p-6 rounded-3xl bg-pink-200/30 text-center text-xl font-medium text-neutral-100' href="https://www.fablabs.io/labs" target='_blank'>
            Ver todos los fab labs en https://www.fablabs.io/labs
          </Link>
        </div>

      </div>

    </main>
  )
}