'use client';

import { fetchWorkshopsWithFilter } from "../services/workshop.service";

import { Link } from '@nextui-org/link';
import { Spinner } from  '@nextui-org/spinner';
import { Pagination, PaginationItemRenderProps, PaginationItemType } from "@nextui-org/pagination";
import { cn } from "@nextui-org/react";

import { useEffect, useState } from "react";
import { WorkshopDtoOld, UserDtoOld } from "../shared/types.old";


export default function WorkshopsSectionLanding() {
    const [workshops, setWorkshops] = useState<WorkshopDtoOld[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);

    const pageSize = 5;
    const {workshopsData, isLoadingWorkshops, isErrorWorkshops} = fetchWorkshopsWithFilter(currentPage, pageSize, false, new Map());

    useEffect(() => {
      if (workshopsData) {
        // console.log("workshops fetched: ", workshopsData.content);
        // console.log("total pages: ", workshopsData.totalPages);
        setWorkshops(workshopsData.content);
        setTotalPages(workshopsData.totalPages);
      }
    }, [workshopsData]);
    

    if (isErrorWorkshops) return <p>Error al cargar datos.</p>
    if (isLoadingWorkshops) return <Spinner />

    return (
        <>
        <div className='py-8 w-full'>
            {
                workshops?.map(workshop => <WorkshopCardLanding key={workshop.idWorkshop} workshop={workshop} />)
            }
        </div>

        <div className="flex justify-center">
            <Pagination showControls total={totalPages} initialPage={currentPage + 1} renderItem={renderPaginationItem} color="default" onChange={(page) => setCurrentPage(page - 1)} />
        </div>
        </>
    );
}

const WorkshopCardLanding = ({workshop}: {workshop: WorkshopDtoOld}) => (
    <div className="flex w-full h-[86px] bg-pink-200/70 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
        <div className="w-[150px] p-1 flex flex-col text-center bg-teal-500">
            <div className="text-xl">
                {workshop.startDateDay}
            </div>
            <div>
                {workshop.startDateMonth}
            </div>
            <div>
                {workshop.startTime}
            </div>
        </div>

        <div className="w-full flex flex-col p-2 ml-1">
            <div className="mb-0.5">
                <span className={`rounded-xl py-0.5 px-1.5 text-xs ${workshop.type === 'WORKSHOP' ? 'bg-lime-600' : workshop.type === 'CONFERENCE' ? 'bg-amber-700' : 'bg-cyan-400'}`}>
                    {workshop.type}
                </span>
            </div>
            <div>
                <Link href={`/event/${workshop.idWorkshop}`} className="text-md">
                    {workshop.name}
                </Link>
            </div>
            <div className="text-sm">
                de {workshop.groupName} · {workshop.isPaid ? workshop.price + ' ' + workshop.currency : 'FREE'}
            </div>
        </div>
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
    );
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