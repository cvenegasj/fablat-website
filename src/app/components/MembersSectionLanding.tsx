'use client';

import { fetchUsersWithFilter } from '../services/user.service';

import { Avatar, AvatarGroup } from '@nextui-org/avatar';
// import { Badge } from '@nextui-org/badge';
import { Divider } from '@nextui-org/divider';
import { Pagination, PaginationItemRenderProps, PaginationItemType } from '@nextui-org/pagination';
import { Tooltip } from '@nextui-org/tooltip';
import { Spinner } from '@nextui-org/spinner';
import { Link } from '@nextui-org/link';
import { Image } from '@nextui-org/image';
import { cn } from '@nextui-org/react';

import { useEffect, useState } from 'react';
import { type UserDtoOld } from '../shared/types.old';


export default function MembersSectionLanding() {
    const [users, setUsers] = useState<UserDtoOld[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);

    const pageSize = 18;
    const {usersData, isLoadingUsers, isErrorUsers} = fetchUsersWithFilter(currentPage, pageSize, new Map());

    useEffect(() => {
      if (usersData) {
        // console.log("users fetched: ", usersData.content);
        // console.log("total pages: ", usersData.totalPages);
        setUsers(usersData.content);
        setTotalPages(usersData.totalPages);
      }
    }, [usersData]);
    

    if (isErrorUsers) return <p>Error al cargar datos.</p>
    if (isLoadingUsers) return <Spinner />

    return (
        <>
        <div className='py-8 w-full flex flex-wrap justify-between gap-2'>
            {
                users?.map(user => <UserCardLanding key={user.idFabber} user={user} />)
            }
        </div>

        <div className="flex justify-center">
            <Pagination showControls total={totalPages} initialPage={currentPage + 1} renderItem={renderPaginationItem} color="default" onChange={(page) => setCurrentPage(page)} />
        </div>
        </>
    );
}

const UserCardLanding = ({user}: {user: UserDtoOld}) => (
    <div className='flex flex-col w-[180px] h-[131px] rounded-lg bg-pink-200/50 p-2 shadow-md transition hover:duration-10 hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-lg'>        
        <div className='w-full flex'>
            <div className='w-[65px] h-[65px] flex-shrink-0 text-right'>
                {/* <Badge content={score} size="lg" color="success" placement="bottom-left" shape="rectangle" variant="shadow">
                    <Avatar className='ml-auto mr-0' showFallback name={user.name} src={user.avatarUrl} size="lg" />
                </Badge> */}
                <Avatar className='ml-auto mr-0' showFallback name={user.name} src={user.avatarUrl} size="lg" />
            </div>

            <div className='w-full flex ml-2 items-center'>
                <div className='w-full line-clamp-2'>
                    <Link className="font-normal text-md leading-5 text-neutral-200 hover:text-neutral-300" href={`/participant/${user.idFabber}`}>
                        {user.name}
                    </Link>
                </div>
            </div>
        </div>

        <Divider className='mt-2' />

        <AvatarGroup max={4} total={user.groupsJoined.length - 4} className='w-full mt-2'>
            {
                user.groupsJoined.map(({id, name, imgUrl}) => {
                    return (
                        <Tooltip key={id} showArrow={true} content={<span className='text-zinc-500'>{name}</span>}>
                            <Avatar showFallback name={name} radius="sm" size="sm" src={imgUrl!} fallback={<Image src="/fablat_logo.svg" />} />
                        </Tooltip>
                    );
                })
            }
        </AvatarGroup>
    </div>
);

const renderPaginationItem = (props: PaginationItemRenderProps) => {
  if (props.value === PaginationItemType.NEXT) {
    return (
      <button key={props.value} className={cn(props.className, "bg-transparent min-w-8 w-8 h-8 text-gray-300")} onClick={props.onNext}>
        <ChevronIcon className="rotate-180" />
      </button>
    );
  }
  
  if (props.value === PaginationItemType.PREV) {
    return (
      <button key={props.value} className={cn(props.className, "bg-transparent min-w-8 w-8 h-8 text-gray-300")} onClick={props.onPrevious}>
        <ChevronIcon />
      </button>
    );
  }

  if (props.value === PaginationItemType.DOTS) {
    return <button key={props.value} className={cn(props.className, "bg-transparent text-gray-300")}>...</button>;
  }

  // cursor
  return (
    <button
      key={props.value}
      ref={props.ref}
      className={cn(props.className, "bg-transparent text-gray-300")}
      onClick={() => props.setPage(props.value as number)}
    >
      {props.value}
    </button>
  )
};

const ChevronIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M15.5 19l-7-7 7-7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);