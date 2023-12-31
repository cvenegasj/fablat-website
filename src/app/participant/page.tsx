'use client';

import { fetchUsersWithFilter } from "../services/user.service";

import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";
import { Spinner } from '@nextui-org/spinner';
import { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell } from "@nextui-org/table";
import { IconArrowsSort, IconSearch, IconSortAscendingLetters, IconSortDescending2, IconSortDescendingNumbers } from "@tabler/icons-react";
import { Select, SelectItem } from "@nextui-org/select";
import { SortDescriptor } from "@nextui-org/react";
import { Key, useCallback, useEffect, useMemo, useState } from "react";

import { type UserDtoOld } from "../shared/types.old";
import { type Country } from "../shared/countries.types";
import { countries } from "../shared/constants";


const countriesMap: Map<string, Country> = new Map(countries.map(e => [e.cca3, e]));


export default function ParticipantsListAll() {
    const [users, setUsers] = useState<UserDtoOld[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0); // 0-based
    const [totalPages, setTotalPages] = useState<number>(1);
    const [filterMap, setFilterMap] = useState<Map<string, any>>(new Map<string, any>([['name', ''], ['countries', new Set()]]));
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "name",
        direction: "ascending",
    });

    const pageSize = 30;
    const {usersData, isLoadingUsers, isErrorUsers} = fetchUsersWithFilter(currentPage, pageSize, filterMap);

    useEffect(() => {
      if (usersData) {
        // console.log("users fetched: ", usersData.content);
        // console.log("total pages: ", usersData.totalPages);
        setUsers(usersData.content);
        setTotalPages(usersData.totalPages);
      }
    }, [usersData]);

    const sortedItems = useMemo(() => {
        return [...users].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof UserDtoOld];
            const second = b[sortDescriptor.column as keyof UserDtoOld];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, users]);


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

    const handleCountrySelectionChange = useCallback((selectedKeys: 'all' | Set<Key>) => {
        if (selectedKeys !== 'all' && selectedKeys?.size > 0) {
            setFilterMap(filterMap => {
                filterMap.set('countries', selectedKeys);
                return new Map(filterMap);
            });
            setCurrentPage(0);
        } else {
            setFilterMap(filterMap => {
                filterMap.set('countries', new Set());
                return new Map(filterMap);
            });
        }
    }, []);


    const renderCell = useCallback((user: UserDtoOld, columnKey: any) => {
        switch (columnKey) {
            case "name":
                return (
                    <Link href={`/participant/${user.idFabber}`}>
                        <User
                            avatarProps={{size: "lg", src: user.avatarUrl}}
                            description={user.email}
                            name={user.name}
                            classNames={{
                                name: "text-md text-neutral-700",
                                description: "text-sm text-neutral-500"
                            }}
                        >
                            {user.email}
                        </User>
                    </Link>
                );
            case "country":
                const country = user.country && countriesMap.has(user.country) ? countriesMap.get(user.country) : undefined;
                if (country) {
                    return (
                        <Tooltip showArrow={true} content={<span className='text-zinc-500'>{country.name.common}</span>}>
                            <Avatar alt={country.name.common} size="sm" src={country.flags.svg} showFallback name={country.name.common} />
                        </Tooltip>
                    );
                } else {
                    return ('');
                }
            case "groupsJoined":
                return (
                    <AvatarGroup isGrid max={7}>
                        {
                        user.groupsJoined.map(group => {
                            return (
                                <Tooltip key={group.id} showArrow={true} content={<span className='text-zinc-500'>{group.name}</span>}>
                                    <Link href={`/group/${group.id}`}>
                                        <Avatar src={group.imgUrl!} radius="md" showFallback fallback={<Image src="/fablat_logo.svg" />} />
                                    </Link>
                                </Tooltip>
                            );
                        })
                        }
                    </AvatarGroup>
                );  
            default:
                return user[columnKey as keyof UserDtoOld];
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
                        placeholder="Buscar por nombre de participante"
                        startContent={<IconSearch color="gray" size={25} />}
                        value={filterMap.get('name')}
                        onClear={() => handleClearSearchBox()}
                        onValueChange={handleChangeSearchBox}
                        classNames={{
                            input: ["text-stone-700 text-lg", "placeholder:text-default-700/50 placeholder:text-base"],
                        }}
                    />
                </div>

                <div className="w-72 mx-2">
                    <Select
                        className="w-full"
                        items={countries}
                        label="Filtrar por país"
                        labelPlacement="outside"
                        variant="bordered"
                        isMultiline={true}
                        selectionMode="multiple"
                        selectedKeys={filterMap.get('countries')}
                        onSelectionChange={handleCountrySelectionChange}
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
                                  <Chip key={item.key}>{item.data!.name.common}</Chip>
                                ))
                                }
                              </div>
                            );
                        }}
                    >
                        {(country) => {
                            return (
                                <SelectItem key={country.cca3} startContent={<Avatar alt={country.name.common} className="w-6 h-6" src={country.flags.svg} />}>
                                    {country.name.common}
                                </SelectItem>
                            );
                        }}
                    </Select>
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
                            <IconSortAscendingLetters color="gray" size={18} />
                        }>
                            Nombre de usuario
                        </SelectItem>

                        <SelectItem key={2} value="2" startContent={
                            <IconSortDescendingNumbers color="gray" size={18} />
                        }>
                            Score de impacto
                        </SelectItem>

                        <SelectItem key={3} value="3" startContent={
                            <IconSortDescending2 color="gray" size={18} />
                        }>
                            Fecha de registro
                        </SelectItem>
                    </Select>
                </div> */}
            </div>

            <Divider className="my-12" />

            <div className="flex w-full">

                {/* Table Container */}
                <div className="w-full">
                    <Table
                        aria-label="Table with users data"
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
                            <TableColumn key="generalScore" allowsSorting>PUNTAJE DE IMPACTO</TableColumn>
                            <TableColumn key="country">PAÍS</TableColumn>
                            <TableColumn key="groupsJoined" className="min-w-[250px]">GRUPOS</TableColumn>
                            <TableColumn key="workshopsCount" allowsSorting>TALLERES</TableColumn>
                            <TableColumn key="eventsCount" allowsSorting>OTROS EVENTOS</TableColumn>
                        </TableHeader>

                        <TableBody items={sortedItems} 
                            isLoading={isLoadingUsers} 
                            loadingContent={<Spinner size='lg' />}>
                            {
                            (user) =>
                                <TableRow key={user.idFabber}>
                                    {(columnKey) => <TableCell>{renderCell(user, columnKey)}</TableCell>}
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
            
        </main>
    );
}