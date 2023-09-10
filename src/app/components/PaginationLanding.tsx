'use client';

import { Pagination, PaginationItemRenderProps, PaginationItemType } from "@nextui-org/pagination";
import { cn } from '@nextui-org/react';

export default function PaginationLanding({total, initialPage}: {total: number, initialPage: number}) {
    const renderPaginationItem = (props: PaginationItemRenderProps) => {
        if (props.value === PaginationItemType.NEXT) {
            return (
              <button className={cn(props.className, "bg-transparent min-w-8 w-8 h-8 text-gray-300")} onClick={props.onNext}>
                <ChevronIcon className="rotate-180" />
              </button>
            );
          }
      
          if (props.value === PaginationItemType.PREV) {
            return (
              <button className={cn(props.className, "bg-transparent min-w-8 w-8 h-8 text-gray-300")} onClick={props.onPrevious}>
                <ChevronIcon />
              </button>
            );
          }
      
          if (props.value === PaginationItemType.DOTS) {
            return <button className={cn(props.className, "bg-transparent text-gray-300")}>...</button>;
          }
    
          // cursor
        return (
          <button
            ref={props.ref}
            className={cn(props.className, "bg-transparent text-gray-300")}
            onClick={() => props.setPage(props.value as number)}
          >
            {props.value}
          </button>
        )
      };

    return (
        <Pagination showControls total={total} initialPage={initialPage} renderItem={renderPaginationItem} color="default" />
    );
}

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