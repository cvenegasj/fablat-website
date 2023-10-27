import Image from 'next/image';
import { Link } from '@nextui-org/link';
import { IconArrowRight, IconCell, IconHexagon, IconHexagonalPrism } from '@tabler/icons-react';

import MembersSectionLanding from './components/MembersSectionLanding';
import GroupsSectionLanding from './components/GroupsSectionLanding';

import React from "react";


// var peopleToDisplay: {id: string, displayName: string, avatarUrl: string, score: number, groupsJoined: any[]}[] = [
//   {id: "fs", displayName: "Grace Schwan", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 50, groupsJoined: [{id: "4asdf", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "44rf", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "52345f", name: "third", avatarUrl: null}]},
//   {id: "fg", displayName: "Benito Juárez", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d", score: 43, groupsJoined: [{id: "543ff", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "432", name: "second", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fsasdf", displayName: "Carlos Venegas", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 40, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fsasef", displayName: "Miguel Cervantes", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 26, groupsJoined: [{id: "5544g", name: "first", avatarUrl: null}, {id: "7675g", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "ffff5", displayName: "Albert Einstein", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 22, groupsJoined: []},
//   {id: "fs", displayName: "Charles Darwin", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 22, groupsJoined: [{id: "4asdf", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "44rf", name: "second", avatarUrl: null}, {id: "52345f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fg", displayName: "Otro Nombre", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d", score: 15, groupsJoined: [{id: "543ff", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "432", name: "second", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fsasdf", displayName: "Foo Bar", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 14, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fsase4555", displayName: "Milagros Saavedra", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 14, groupsJoined: [{id: "5544g", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "7675g", name: "second", avatarUrl: null}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "ffgf", displayName: "Ricardo Gonzales", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 13, groupsJoined: []},
//   {id: "fs", displayName: "Christian Castillo", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 10, groupsJoined: [{id: "4asdf", name: "first", avatarUrl: null}, {id: "44rf", name: "second", avatarUrl: null}, {id: "52345f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fg354g", displayName: "Alexander Castro", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d", score: 9, groupsJoined: [{id: "543ff", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "432", name: "second", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fsasdf2", displayName: "Santiago Aranda", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 8, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fsase77", displayName: "Carlos Gonzales", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 8, groupsJoined: [{id: "5544g", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "7675g", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "ffbbf", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 4, groupsJoined: []},
//   {id: "fsasdf2", displayName: "Santiago Aranda", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 8, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "fsase77", displayName: "Carlos Gonzales", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 8, groupsJoined: [{id: "5544g", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "7675g", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}]},
//   {id: "ffbbf", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 4, groupsJoined: []},
// ];

// var members: any[] = [
//   {id: "fs", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
//   {id: "fg", displayName: "Ana Venegas", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"},
//   {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
//   {id: "fsase", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
//   {id: "fff", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
//   {id: "fsvvv", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
//   {id: "fsqeq", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
//   {id: "frrrrr", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d"},
//   {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
// ];



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
              src="/fablat_2023_logo.png"
              alt="FabLat Logo"
              // className="dark:invert"
              width={140}
              height={140}
              priority
            />
          </a>
          <h1 className="text-5xl"><span className='font-thin'>fab</span><span className='font-semibold'>lat</span></h1>
          <h2 className="text-2xl">Red Latinoamericana de Fab Labs</h2>
        </div>
      </div>

      <div className='flex w-full max-w-8xl mt-14 mb-12 py-7 gap-8'>

        <div className='p-4 grow text-center rounded-2xl backdrop-blur-sm bg-white/20'>
          <div className='flex justify-center items-center'>
              {/* <Image
                  src="/person_icon.png"
                  alt="Person icon"
                  width={15}
                  height={15}
                  priority
              /> */}
            <IconHexagon className='text-emerald-400' size={25} stroke={2} />
    
            <p className='text-2xl text-white font-light ml-3'>523</p>
          </div>

          <div className='flex justify-center items-center'>
            <span className='font-normal'>miembros</span>
          </div>          
        </div>

        <div className='p-4 grow text-center rounded-2xl backdrop-blur-sm bg-white/20'>
          <div className='flex justify-center items-center'>
                {/* <Image
                    src="/person_icon.png"
                    alt="Person icon"
                    width={15}
                    height={15}
                    priority
                /> */}
              <IconCell className='text-emerald-400' size={25} stroke={2} />
      
              <p className='text-2xl text-white font-light ml-3'>19</p>
            </div>

            <div className='flex justify-center items-center'>
              <span className='font-normal'>grupos</span>
            </div>    
        </div>

        <div className='p-4 grow text-center rounded-2xl backdrop-blur-sm bg-white/20'>
          <div className='flex justify-center items-center'>
                {/* <Image
                    src="/person_icon.png"
                    alt="Person icon"
                    width={15}
                    height={15}
                    priority
                /> */}
              <IconHexagonalPrism className='text-emerald-400' size={25} stroke={2} />
      
            <p className='text-2xl text-white font-light ml-3'>10</p>
          </div>

          <div className='flex justify-center items-center'>
            <span className='font-normal'>labs</span>
          </div>
        </div>
      </div>



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

        <div className='w-full flex py-8'>
          <Link className='w-full block p-6 rounded-3xl bg-pink-200/30 text-center text-xl font-medium text-neutral-100' href="https://www.fablabs.io/labs" target='_blank'>
            Ver todos los fab labs en https://www.fablabs.io/labs
          </Link>
        </div>

      </div>

    </main>
  )
}