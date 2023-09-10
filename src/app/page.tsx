import Image from 'next/image';
import AvatarPersonLanding from './components/AvatarPersonLanding';
import GroupCardLanding from './components/GroupCardLanding';
import PaginationLanding from './components/PaginationLanding';
import { Avatar } from '@nextui-org/avatar';
import { Tooltip } from '@nextui-org/tooltip';

const people: {id: string, displayName: string, avatarUrl: string}[] = [
  {id: "fs", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fg", displayName: "Ana Venegas", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"},
  {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
  {id: "fsase", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
  {id: "fff", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsvvv", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsqeq", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "frrrrr", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d"},
  {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
  {id: "fsase", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
  {id: "fff", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsvvv", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "frrrrr", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d"},
  {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
  {id: "fsase", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
  {id: "fff", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsvvv", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "frrrrr", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d"},
  {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
  {id: "fsase", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
  {id: "fff", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsvvv", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "frrrrr", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d"},
  {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
  {id: "fsase", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
  {id: "fff", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsvvv", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
];

const members: any[] = [
  {id: "fs", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fg", displayName: "Ana Venegas", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"},
  {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
  {id: "fsase", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
  {id: "fff", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsvvv", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "fsqeq", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {id: "frrrrr", displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d"},
  {id: "fsasdf", displayName: "Santiaguito Aranda xd", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
];


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
        <h3 className='text-3xl font-light flex items-center'>
          <a className='w-[80px] h-[80px] gradient-section-landing flex justify-center items-center mr-4'>
            <Image
              className='inline-block'
              src="/groups_icon.png"
              alt="Groups icon"
              width={25}
              height={25}
              priority
            />
          </a>
          
          Personas
        </h3>

        <div className='py-8 w-full flex flex-wrap justify-between gap-5'>
          {
            people.map(({id, displayName, avatarUrl}) => {
              return (
                <Tooltip showArrow={true} content={<span className='text-zinc-500'>{displayName}</span>}>
                  <Avatar showFallback name={displayName} key={id} src={avatarUrl} size="lg" />
                </Tooltip>
              );
            })
          }
        </div>

        <div className="flex justify-center">
          <PaginationLanding total={10} initialPage={1} />
        </div>
      </div>




      {/* Section: Grupos */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='text-3xl font-light flex items-center'>
          <a className='w-[80px] h-[80px] gradient-section-landing flex justify-center items-center mr-4'>
            <Image
              className='inline-block'
              src="/groups_icon.png"
              alt="Groups icon"
              width={25}
              height={25}
              priority
            />
          </a>
          
          Grupos
        </h3>

        <div className='py-8 w-full flex flex-wrap justify-between'>
          <GroupCardLanding key={1} groupId='1' name='Very long long long looooooooong name' description='Group description goes here' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={2} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={3} groupId='3' name='TEST' description=':P' members={members} membersCount={members.length} imgUrl='' />
          <GroupCardLanding key={4} groupId='4' name='BEST ONE' description='' members={members} membersCount={members.length} imgUrl='' />
          <GroupCardLanding key={5} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={6} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={7} groupId='2' name='SUPER GROUPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={8} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={9} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={10} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={11} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
          <GroupCardLanding key={12} groupId='2' name='SUPER GROUPPPPPPPPPPPPPPPPPPPPPPPPPPP' description='another cool description' members={members} membersCount={members.length} imgUrl='https://i.pravatar.cc/200' />
        </div>

        <div className="flex justify-center">
          <PaginationLanding total={10} initialPage={1} />
        </div>

      </div>




      {/* Section: Labs */}
      <div className='flex flex-col w-full max-w-8xl my-12'>
        <h3 className='text-3xl font-light flex items-center'>
          <a className='w-[80px] h-[80px] gradient-section-landing flex justify-center items-center mr-4'>
            <Image
              className='inline-block'
              src="/groups_icon.png"
              alt="Groups icon"
              width={25}
              height={25}
              priority
            />
          </a>
          
          Labs
        </h3>

        <div className='py-8 w-full flex flex-wrap justify-between'>
          
        </div>

      </div>

    </main>
  )
}
