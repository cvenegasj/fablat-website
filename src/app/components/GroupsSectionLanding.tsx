'use client';

import { fetchGroups } from "../services/group.service";

import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import { Link } from '@nextui-org/link';
import { Spinner } from  '@nextui-org/spinner';
import { Pagination, PaginationItemRenderProps, PaginationItemType } from "@nextui-org/pagination";
import { cn } from "@nextui-org/react";

import { useEffect, useState } from "react";
import { GroupDtoOld, UserDtoOld } from "../shared/types.old";


export default function GroupsSectionLanding() {
    const [groups, setGroups] = useState<GroupDtoOld[]>([]);
    const [currentPageGroups, setCurrentPageGroups] = useState(1);

    const groupsPerPage = 24; // TODO
    const totalPagesGroups = 15; // TODO
    let {data, isLoading, isError} = fetchGroups(currentPageGroups, groupsPerPage);

    useEffect(() => {
      if (data) {
        console.log("groups fetched: ", data);
        setGroups(data);
      }
    }, [data]);

    if (isError) return <p>Error al cargar datos.</p>
    if (isLoading) return <Spinner />

    // const handlePageClick = (page: number) => {
    //   {data, isLoading, isError}  = fetchGroups(currentPageGroups, groupsPerPage);
    //   setCurrentPageGroups(page);
    // };

    return (
        <>
        <div className='py-8 w-full flex flex-wrap justify-between'>
            {
                groups?.map(group => <GroupCardLanding key={group.id} group={group} />)
            }
        </div>

        <div className="flex justify-center">
            <Pagination showControls total={totalPagesGroups} initialPage={currentPageGroups} renderItem={renderPaginationItem} color="default" onChange={(page) => setCurrentPageGroups(page)} />
        </div>
        </>
    );
}

const GroupCardLanding = ({group}: {group: GroupDtoOld}) => (
        <div className="w-[225px] h-[212px] rounded-lg bg-pink-200/70 p-4 m-1 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
            <div className="h-[64px] flex items-end justify-center">
                <Link href={`/group/${group.id}`}>
                    <Avatar isBordered radius="lg" showFallback name={group.name} src={group.imgUrl} className="w-16 h-16 text-large" fallback={<Image src="/fablat_2023_logo.png" />} />
                </Link>
            </div>

            <div className="text-center truncate mt-2">
                <Link className="font-normal text-md text-gray-600 hover:text-gray-500" href={`/group/${group.id}`}>
                    {group.name}
                </Link>
            </div>

            <div className="text-center">
                <span className="text-sm text-gray-500">Impacto:  </span>
                <span className="text-sm font-medium text-emerald-500">Muy alto</span>
                <span className="text-sm text-gray-500"> · {group.membersCount} {group.membersCount == 1 ? 'miembro' : 'miembros'}</span>
            </div>
        
            <div className="mt-5">
                <AvatarGroup max={4} total={group.membersCount - 4}>
                    {
                        group.members.map((member: UserDtoOld) => {
                            return (
                                <Tooltip key={member.idFabber} showArrow={true} content={<span className='text-zinc-500'>{member.name}</span>}>
                                    <Avatar showFallback name={member.name} src={member.avatarUrl} />
                                </Tooltip>
                            );
                          })
                    }
                </AvatarGroup>
            </div>
        </div>
)

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