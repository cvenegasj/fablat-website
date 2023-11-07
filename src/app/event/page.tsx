'use client';

import { fetchWorkshopsWithFilter } from "../services/workshop.service";

import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";
import { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell } from "@nextui-org/table";
import { Spinner } from "@nextui-org/spinner";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";
import { IconBrandGoogleMaps, IconSearch } from "@tabler/icons-react";
import { SortDescriptor } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { type WorkshopDtoOld } from "../shared/types.old";


export default function WorkshopsListAll() {
    const [workshops, setWorkshops] = useState<WorkshopDtoOld[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0); // 0-based
    const [totalPages, setTotalPages] = useState<number>(1);
    const [filterMap, setFilterMap] = useState<Map<string, any>>(new Map<string, any>([['name', '']]));
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "name",
        direction: "ascending",
    });

    const pageSize = 10;
    const {workshopsData, isLoadingWorkshops, isErrorWorkshops} = fetchWorkshopsWithFilter(currentPage, pageSize, false, filterMap);

    useEffect(() => {
      if (workshopsData) {
        // console.log("events fetched: ", workshopsData.content);
        // console.log("total pages: ", workshopsData.totalPages);
        setWorkshops(workshopsData.content);
        setTotalPages(workshopsData.totalPages);
      }
    }, [workshopsData]);

    const sortedItems = useMemo(() => {
        return [...workshops].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof WorkshopDtoOld];
            const second = b[sortDescriptor.column as keyof WorkshopDtoOld];
            const cmp = first! < second! ? -1 : first! > second! ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, workshops]);


    const handleChangeSearchBox = useCallback((value: string) => {
        if (value) {
            setFilterMap(filterMap => {
                filterMap.set('name', value);
                return new Map(filterMap);
            });
            setCurrentPage(0);
        } else {
            setFilterMap(filterMap => {
                filterMap.set('name', '');
                return new Map(filterMap);
            });
        }
    }, []);
    
    const handleClearSearchBox = useCallback(() => {
        setFilterMap(filterMap => {
            filterMap.set('name', '');
            return new Map(filterMap);
        });
        setCurrentPage(0);
    }, []);


    const renderCell = useCallback((workshop: WorkshopDtoOld, columnKey: any): any => {
        switch (columnKey) {
            case "name":
                return (
                    <div className="flex w-full">
                        <div className="w-[100px] p-1 flex flex-col text-center bg-teal-400">
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

                        <div className="w-full flex flex-col p-1 ml-1">
                            <div className="mb-0.5">
                                <span className={`rounded-xl py-0.5 px-1.5 text-xs ${workshop.type === 'WORKSHOP' ? 'bg-lime-500' : workshop.type === 'CONFERENCE' ? 'bg-amber-600' : 'bg-cyan-500'}`}>
                                    {workshop.type}
                                </span>
                            </div>
                            <div>
                                <Link href={`/event/${workshop.idWorkshop}`} className="text-[17px] font-medium">
                                    {workshop.name}
                                </Link>
                            </div>
                            <div className="text-sm">
                                de {workshop.groupName} · {workshop.isPaid ? workshop.price + ' ' + workshop.currency : 'FREE'}
                            </div>
                        </div>
                    </div>
                );
            case "location":
                return (
                    <div className="flex items-center">
                        <span>{workshop.locationAddress + ', ' + workshop.locationCity + ', ' + workshop.locationCountry}</span>
                        <a className="ml-1" href={`http://www.google.com/maps/place/${workshop.locationLatitude},${workshop.locationLongitude}`} target="_blank" rel="nofollow">
                            <IconBrandGoogleMaps className='text-emerald-500' size={23} stroke={1.2} />
                        </a>
                    </div>
                );
            case "tutors":
                return (
                    <AvatarGroup isGrid max={7}>
                        {
                        workshop.tutors.map(tutor => {
                            return (
                                <Tooltip key={tutor.idWorkshopTutor} showArrow={true} content={<span className='text-zinc-500'>{tutor.name}</span>}>
                                    <Link href={`/participant/${tutor.fabberId}`}>
                                        <Avatar src={tutor.fabberAvatarUrl} radius="full" showFallback name={tutor.name} />
                                    </Link>
                                </Tooltip>
                            );
                        })
                        }
                    </AvatarGroup>
                );
            default:
                return workshop[columnKey as keyof WorkshopDtoOld];
        }
    }, []);

    return (
        <main className="flex flex-col min-h-screen xl:px-80 lg:px-36 px-20 py-9">
            <div className="flex w-full">
                <div className="flex-grow">
                    <Input
                        isClearable
                        className="w-full"
                        type="text"
                        placeholder="Buscar por nombre de evento"
                        startContent={<IconSearch color="gray" size={25} />}
                        value={filterMap.get('name')}
                        onClear={() => handleClearSearchBox()}
                        onValueChange={handleChangeSearchBox}
                        classNames={{
                            input: ["text-stone-700 text-lg", "placeholder:text-default-700/50 placeholder:text-base"],
                        }}
                    />
                </div>
            </div>

            <Divider className="my-12" />

            <div className="flex w-full">

                {/* Table Container */}
                <div className="w-full">
                    <Table 
                        aria-label="Table with workshops data"
                        isHeaderSticky
                        sortDescriptor={sortDescriptor}
                        onSortChange={(sortDescriptor) => setSortDescriptor(sortDescriptor)}
                        bottomContent={
                            <div className="flex w-full justify-center">
                              <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
                                page={currentPage + 1}
                                total={totalPages}
                                onChange={(page) => setCurrentPage(page - 1)}
                              />
                            </div>
                          }
                        classNames={{
                            wrapper: "w-full",
                            table: "min-h-[200px]",
                        }}>

                        <TableHeader>
                            <TableColumn key="name" allowsSorting>NOMBRE</TableColumn>
                            <TableColumn key="tutors" allowsSorting>TUTORES</TableColumn>
                            <TableColumn key="location" allowsSorting>LUGAR</TableColumn>
                        </TableHeader>

                        <TableBody items={sortedItems}
                            isLoading={isLoadingWorkshops} 
                            loadingContent={<Spinner size='lg' />}>
                            {
                            (workshop) =>
                                <TableRow key={workshop.idWorkshop}>
                                    {(columnKey) => <TableCell>{renderCell(workshop, columnKey)}</TableCell>}
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>

        </main>
    );
}