'use client';

import { fetchGroups, fetchGroupsCount, fetchGroupsWithFilter } from "../services/group.service";

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
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);

    const pageSize = 18;
    const {groupsData, isLoadingGroups, isErrorGroups} = fetchGroupsWithFilter(currentPage, pageSize, new Map());

    useEffect(() => {
      if (groupsData) {
        // console.log("groups fetched: ", groupsData.content);
        // console.log("total pages: ", groupsData.totalPages);
        setGroups(groupsData.content);
        setTotalPages(groupsData.totalPages);
      }
    }, [groupsData]);
    

    if (isErrorGroups) return <p>Error al cargar datos.</p>
    if (isLoadingGroups) return <Spinner />

    return (
        <>
        <div className='py-8 w-full flex flex-wrap justify-between'>
            {
                groups?.map(group => <GroupCardLanding key={group.id} group={group} />)
            }
        </div>

        <div className="flex justify-center">
            <Pagination showControls total={totalPages} initialPage={currentPage + 1} renderItem={renderPaginationItem} color="default" onChange={(page) => setCurrentPage(page)} />
        </div>
        </>
    );
}

const GroupCardLanding = ({group}: {group: GroupDtoOld}) => (
        <div className="w-[236px] h-[208px] rounded-lg bg-pink-200/70 p-3 m-1 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
            <div className="mt-1 flex justify-center">
                <Link href={`/group/${group.id}`}>
                    <Avatar radius="lg" showFallback name={group.name} src={group.imgUrl!} className="w-16 h-16 text-large" fallback={<Image src="/fablat_2023_logo.png" />} />
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
        
            <div className="mt-4">
                <AvatarGroup max={4} total={group.membersCount! - 4}>
                    {
                        group.members!.map((member: UserDtoOld) => {
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