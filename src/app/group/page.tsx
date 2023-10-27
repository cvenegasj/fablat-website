
'use client';

import { fetchGroupsWithFilter } from "../services/group.service";

import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { Link } from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";
import { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell } from "@nextui-org/table";
import { IconArrowsSort, IconSearch, IconSortAscendingLetters, IconSortDescending2, IconSortDescendingNumbers } from "@tabler/icons-react";
import { Select, SelectItem, SortDescriptor, Spinner } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { type GroupDtoOld } from "../shared/types.old";


// var groupsToDisplay: GroupDto[] = [
//     {id: '1', name: 'First Group', score: 15, membersCount: 2, imgUrl: '', workshopsCount: 10, eventsCount: 5},
//     {id: '2', name: 'The Best Group', score: 10, membersCount: 8, imgUrl: '', workshopsCount: 0, eventsCount: 6},
//     // {id: '', name: '', score: 15, membersCount: 2, imgUrl: '',},
// ];


export default function GroupsListAll() {
    const [groups, setGroups] = useState<GroupDtoOld[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0); // 0-based
    const [totalPages, setTotalPages] = useState<number>(1);
    const [filterMap, setFilterMap] = useState<Map<string, any>>(new Map<string, any>([['name', '']]));
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "name",
        direction: "ascending",
    });

    const pageSize = 30;
    const {groupsData, isLoadingGroups, isErrorGroups} = fetchGroupsWithFilter(currentPage, pageSize, filterMap);

    useEffect(() => {
      if (groupsData) {
        // console.log("groups fetched: ", groupsData.content);
        // console.log("total pages: ", groupsData.totalPages);
        setGroups(groupsData.content);
        setTotalPages(groupsData.totalPages);
      }
    }, [groupsData]);

    const sortedItems = useMemo(() => {
        return [...groups].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof GroupDtoOld];
            const second = b[sortDescriptor.column as keyof GroupDtoOld];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, groups]);


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


    const renderCell = useCallback((group: GroupDtoOld, columnKey: any) => {    
        switch (columnKey) {
            case "name":
                return (
                    <Link href={`/group/${group.id}`}>
                        <User
                            avatarProps={{size: "lg", src: group.imgUrl}}
                            name={group.name}
                            classNames={{
                                name: "text-md text-neutral-700",
                                description: "text-sm text-neutral-500"
                            }}>
                            {group.name}
                        </User>
                    </Link>
                );
            default:
                return group[columnKey as keyof GroupDtoOld];
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
                        placeholder="Buscar por nombre de grupo"
                        startContent={<IconSearch color="gray" size={25} />}
                        value={filterMap.get('name')}
                        onClear={() => handleClearSearchBox()}
                        onValueChange={handleChangeSearchBox}
                        classNames={{
                            input: ["text-stone-700 text-lg", "placeholder:text-default-700/50 placeholder:text-base"],
                        }}
                    />
                </div>

                {/* <div className="flex-shrink-0 w-52 ml-4 flex items-end">
                    <Select
                        className="w-full"
                        label="Ordenar por"
                        labelPlacement="outside"
                        selectorIcon={<IconArrowsSort />}
                        classNames={{
                            base: "text-stone-500 font-normal",
                            label: "text-stone-500 font-normal",
                            listbox: "text-stone-700 font-normal"
                        }}
                    >
                        <SelectItem key={1} value="1" startContent={
                            <IconSortDescendingNumbers color="gray" size={18} />
                        }>
                            Puntaje de impacto
                        </SelectItem>

                        <SelectItem key={2} value="2" startContent={
                            <IconSortDescendingNumbers color="gray" size={18} />
                        }>
                            Número de miembros
                        </SelectItem>

                        <SelectItem key={3} value="3" startContent={
                            <IconSortAscendingLetters color="gray" size={18} />
                        }>
                            Nombre
                        </SelectItem>

                        <SelectItem key={4} value="4" startContent={
                            <IconSortDescending2 color="gray" size={18} />
                        }>
                            Fecha de creación
                        </SelectItem>
                    </Select>
                </div> */}
            </div>

            <Divider className="my-12" />

            <div className="flex w-full">

                {/* Table Container */}
                <div className="w-full">
                    <Table 
                        aria-label="Table with groups data"
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
                                onChange={(page) => setCurrentPage(page)}
                              />
                            </div>
                          }
                        classNames={{
                            wrapper: "w-full",
                            table: "min-h-[200px]",
                        }}>

                        <TableHeader>
                            <TableColumn key="name" allowsSorting>NOMBRE</TableColumn>
                            <TableColumn key="score" allowsSorting>PUNTAJE DE IMPACTO</TableColumn>
                            <TableColumn key="membersCount" allowsSorting>N. MIEMBROS</TableColumn>
                            <TableColumn key="workshopsCount" allowsSorting>N. TALLERES</TableColumn>
                            <TableColumn key="eventsCount" allowsSorting>N. EVENTOS</TableColumn>
                        </TableHeader>

                        <TableBody items={sortedItems}
                        isLoading={isLoadingGroups} 
                        loadingContent={<Spinner size='lg' />}>
                            {
                            (group) =>
                                <TableRow key={group.id}>
                                    {(columnKey) => <TableCell>{renderCell(group, columnKey)}</TableCell>}
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>

        </main>
    );
}