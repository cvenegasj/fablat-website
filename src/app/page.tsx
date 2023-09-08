import Image from 'next/image'
import AvatarLanding from './components/AvatarLanding'
import GroupCardLanding from './components/GroupCardLanding'
import { Pagination } from "@nextui-org/pagination";

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
          <a href="https://app.fab.lat" className="rounded-full border border-primary-100 px-6 pb-[6px] pt-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200">
            Accede
          </a>
        </div>
      </div>

      <div className='flex w-full max-w-8xl mt-14 mb-12 py-7'>
        <div className='grow text-center'>
          <span className='block text-4xl font-normal'>523</span>
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
          <span className='block text-4xl font-normal'>84</span>
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
          <span className='block text-4xl font-normal'>104</span>
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
        <h3 className='text-3xl font-light'>
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

        <div className="flex justify-center">
          <Pagination variant="light" showControls total={10} initialPage={1} classNames={{
            base: "text-white",
            prev: "text-white",
            next: "text-white",
            wrapper: "",
            item: "text-white hover:text-gray",
            cursor: "active:bg-violet-600",
            }} />
        </div>
      </div>


      {/* Section: Grupos */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='text-3xl font-light'>
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
          <GroupCardLanding groupId='1' name='Very long long long looooooooong name' description='Group description goes here' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='3' name='TEST' description=':P' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='4' name='BEST ONE' description='' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
        </div>

        <div className="flex justify-center">
          <Pagination variant="light" showControls total={10} initialPage={1} classNames={{
            base: "text-white",
            prev: "text-white",
            next: "text-white",
            wrapper: "",
            item: "text-white hover:text-gray",
            cursor: "active:bg-violet-600",
            }} />
        </div>

      </div>


      {/* Section: Labs */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='text-3xl font-light'>
          <Image
              className='inline-block mr-4'
              src="/labs_icon.png"
              alt="Labs icon"
              width={35}
              height={35}
              priority
            />
            Labs
        </h3>

        <div className='py-8 w-full flex flex-wrap justify-between'>
          <GroupCardLanding groupId='1' name='Very long long long looooooooong name' description='Group description goes here' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='3' name='TEST' description=':P' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='4' name='BEST ONE' description='' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
          <GroupCardLanding groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' membersCount={4} imgUrl='' />
        </div>

      </div>

    </main>
  )
}
