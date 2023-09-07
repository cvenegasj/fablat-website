import Image from 'next/image'
import AvatarLanding from './components/AvatarLanding'
import GroupCardLanding from './components/GroupCardLanding'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center xl:px-80 lg:px-36 px-20 py-9">
      
      <div id="landing-top" className="flex w-full max-w-8xl">
        <div className="grow">
          <a
            className="pointer-events-auto inline-block w-140 h-140 pb-0.5"
            href="https://fab.lat"
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

        <div className="shrink-0">
          <a href="https://app.fab.lat" className="rounded-full border border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            Accede
          </a>
        </div>
      </div>

      <div className='flex w-full max-w-8xl mt-14 mb-12 py-7'>
        <div className='grow text-center'>
          <span className='block text-3xl font-normal'>523</span>
          <div className='mt-5 mb-2 h-[45px] flex items-end justify-center'>
            <Image
                src="/person_icon.png"
                alt="Person icon"
                width={20}
                height={20}
                priority
              />
          </div>
          <span className='block'>Personas</span>
        </div>

        <div className='grow text-center'>
          <span className='block text-3xl font-normal'>84</span>
          <div className='mt-5 mb-2 h-[45px] flex items-end justify-center'>
            <Image
                src="/groups_icon.png"
                alt="Groups icon"
                width={30}
                height={30}
                priority
              />
          </div>
          <span className='block'>Grupos</span>
        </div>

        <div className='grow text-center'>
          <span className='block text-3xl font-normal'>104</span>
          <div className='mt-5 mb-2 h-[45px] flex items-end justify-center'>
            <Image
                src="/labs_icon.png"
                alt="Labs icon"
                width={45}
                height={45}
                priority
              />
          </div>
          <span className='block'>Labs</span>
        </div>
      </div>

      {/* Section: Personas */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='text-2xl font-normal'>
          <Image
              className='inline-block mr-4'
              src="/person_icon.png"
              alt="Person icon"
              width={20}
              height={20}
              priority
            />
            Personas
        </h3>

        <div className='py-8 w-full flex flex-wrap justify-between'>        
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
          <AvatarLanding imgUrl='https://i.pravatar.cc/60' fullName='LMAO' />
        </div>

        <div>
          Page Selector
        </div>
      </div>


      {/* Section: Grupos */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='text-2xl font-normal'>
          <Image
              className='inline-block mr-4'
              src="/groups_icon.png"
              alt="Groups icon"
              width={25}
              height={25}
              priority
            />
            Grupos
        </h3>

        <div className='py-8 w-full flex flex-wrap justify-between'>
          <GroupCardLanding name='LOL' description='' membersCount={4} imgUrl='' />
          <GroupCardLanding name='LMAO' description='' membersCount={4} imgUrl='' />
          <GroupCardLanding name='TEST' description='' membersCount={4} imgUrl='' />
          <GroupCardLanding name='BEST ONE' description='' membersCount={4} imgUrl='' />
        </div>

      </div>





      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      {/* <div id="lading-summary-stats">
        Stats
      </div> */}

      {/* <div className="mt-60 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
