
'use client';
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { Link } from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";
import { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell } from "@nextui-org/table";
import { IconArrowsSort, IconSearch, IconSortAscendingLetters, IconSortDescending2, IconSortDescendingNumbers } from "@tabler/icons-react";
import { Select, SelectItem } from "@nextui-org/react";
import { countries } from "../shared/constants";
import React from "react";
import { GroupDto } from "../shared/types";
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const tableHeaders: {key: string, label: string}[] = [
    {key: "name", label: "NOMBRE"},
    {key: "score", label: "PUNTAJE DE IMPACTO"},
    {key: "membersCount", label: "N. MIEMBROS"},
    {key: "workshopsCount", label: "N. TALLERES"},
    {key: "eventsCount", label: "N. EVENTOS"},
];

const countriesList: any[] = Array.from(countries.values());

const groups: GroupDto[] = [
    {id: '1', name: 'First Group', score: 15, membersCount: 2, imgUrl: '', workshopsCount: 10, eventsCount: 5},
    {id: '2', name: 'The Best Group', score: 10, membersCount: 8, imgUrl: '', workshopsCount: 0, eventsCount: 6},
    // {id: '', name: '', score: 15, membersCount: 2, imgUrl: '',},
];


export default function GroupsGeneral() {
    const renderCell = React.useCallback((group: GroupDto, columnKey) => {
        const cellValue = group[columnKey];
    
        switch (columnKey) {
            case "name":
                return (
                    <Link href={`/group/${group.id}`}>
                        <User
                            avatarProps={{size: "lg", src: group.imgUrl}}
                            name={cellValue}
                            classNames={{
                                name: "text-md text-neutral-700",
                                description: "text-sm text-neutral-500"
                            }}>
                            {group.name}
                        </User>
                    </Link>
                );
            default:
                return cellValue;
        }
    }, []);

    // For table pagination
    const [page, setPage] = React.useState(1);

    const {data, isLoading} = useSWR(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
        keepPreviousData: true,
    });

    const rowsPerPage = 20;

    const pages = React.useMemo(() => {
        return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
    }, [data?.count, rowsPerPage]);

    const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle";

    return (
        <main className="flex flex-col min-h-screen xl:px-80 lg:px-36 px-20 py-9">
            <div className="flex w-full">
                <div className="flex-grow">
                    <Input
                        className="w-full"
                        type="text"
                        label="Buscar por nombre de grupo"
                        labelPlacement="outside"
                        isClearable
                        startContent={
                            <IconSearch color="gray" size={25} />
                        }
                        classNames={{
                            label: "text-stone-500 font-normal",
                            input: "text-stone-700 text-lg",
                        }}
                    />
                </div>
                <div className="flex-shrink-0 w-52 ml-4 flex items-end">
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
                </div>
            </div>


            {/* Filtros */}
            <div className="flex w-full mt-12">
                <div className="flex-grow">
                    <Select
                        className="w-full"
                        items={countriesList}
                        label="Filtrar por país"
                        labelPlacement="outside"
                        variant="bordered"
                        isMultiline={true}
                        selectionMode="multiple"
                        classNames={{
                            base: "text-stone-500 font-normal",
                            label: "text-stone-500 font-normal",
                            listbox: "text-stone-700 font-normal"
                        }}
                        renderValue={(items) => {
                            return (
                              <div className="flex flex-wrap gap-1">
                                {
                                items.map((item) => (
                                  <Chip key={item.key}>{item.data.name}</Chip>
                                ))
                                }
                              </div>
                            );
                        }}
                    >
                        {(country) => {
                            return (
                                <SelectItem key={country.id} startContent={<Avatar alt={country.name} className="w-6 h-6" src={country.imgUrl} />}>
                                    {country.name}
                                </SelectItem>
                            );
                        }}
                    </Select>
                </div>
            </div>

            <Divider className="my-12" />

            <div className="flex w-full">

                {/* Table Container */}
                <div className="w-full">
                    <Table 
                        aria-label="Table with users data" 
                        bottomContent={
                            <div className="flex w-full justify-center">
                              <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                              />
                            </div>
                          }
                        classNames={{
                            wrapper: "w-full"
                        }}>

                        <TableHeader columns={tableHeaders}>
                            {(header) => <TableColumn key={header.key}>{header.label}</TableColumn>}
                        </TableHeader>

                        <TableBody items={groups}>
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