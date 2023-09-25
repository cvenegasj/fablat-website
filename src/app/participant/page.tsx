'use client';
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";
import { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell } from "@nextui-org/table";
import { IconArrowsSort, IconSearch, IconSortAscendingLetters, IconSortDescending2, IconSortDescendingNumbers } from "@tabler/icons-react";
import { Select, SelectItem } from "@nextui-org/react";
import { countries } from "../shared/constants";
import React from "react";
import { UserDto } from "../shared/types";
import useSWR from "swr";


const fetcher = (...args: string[]) => fetch(args[0]).then((res) => res.json());

const tableHeaders: {key: string, label: string}[] = [
    {key: "displayName", label: "NOMBRE"},
    {key: "score", label: "PUNTAJE DE IMPACTO"},
    {key: "country", label: "PAÍS"},
    {key: "groupsJoined", label: "GRUPOS"},
    {key: "workshopsCount", label: "N. TALLERES"},
    {key: "eventsCount", label: "N. EVENTOS"},
    // {key: "", label: ""},
    // {key: "", label: ""},
];

const countriesList: any[] = Array.from(countries.values());

const users: UserDto[] = [
    {id: "fs", email: "email@gmail.com", country: "pe",  displayName: "Grace Schwan", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 50, groupsJoined: [{id: "4asdf", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "44rf", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "52345f", name: "third", avatarUrl: null}], workshopsCount: 5, eventsCount: 4},
    {id: "fg", email: "email@gmail.com", country: "ar",  displayName: "Benito Juárez", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d", score: 43, groupsJoined: [{id: "543ff", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "432", name: "second", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 2},
    {id: "fsasdf", email: "email@gmail.com", country: "pe",  displayName: "Carlos Venegas", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 40, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 1, eventsCount: 0},
    {id: "fsasef", email: "email@gmail.com", country: "pe",  displayName: "Miguel Cervantes", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 26, groupsJoined: [{id: "5544g", name: "first", avatarUrl: null}, {id: "7675g", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 1, eventsCount: 0},
    {id: "ffff5", email: "email@gmail.com", country: "pe",  displayName: "Albert Einstein", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 22, groupsJoined: [], workshopsCount: 3, eventsCount: 0},
    {id: "fs0", email: "email@gmail.com", country: "pe",  displayName: "Charles Darwin", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 22, groupsJoined: [{id: "4asdf", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "44rf", name: "second", avatarUrl: null}, {id: "52345f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fg6", email: "email@gmail.com", country: "br",  displayName: "Otro Nombre", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d", score: 15, groupsJoined: [{id: "543ff", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "432", name: "second", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fsasdf465", email: "email@gmail.com", country: "br",  displayName: "Foo Bar", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 14, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fsase4555", email: "email@gmail.com", country: "pe",  displayName: "Milagros Saavedra", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 14, groupsJoined: [{id: "5544g", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "7675g", name: "second", avatarUrl: null}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "ffgf", email: "email@gmail.com", country: "pe",  displayName: "Ricardo Gonzales", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 13, groupsJoined: [], workshopsCount: 3, eventsCount: 4},
    {id: "fs89", email: "email@gmail.com", country: "br",  displayName: "Christian Castillo", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 10, groupsJoined: [{id: "4asdf", name: "first", avatarUrl: null}, {id: "44rf", name: "second", avatarUrl: null}, {id: "52345f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fg354g", email: "email@gmail.com", country: "ar",  displayName: "Alexander Castro", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d", score: 9, groupsJoined: [{id: "543ff", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "432", name: "second", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fsasdf2", email: "email@gmail.com",  country: "pe", displayName: "Santiago Aranda", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 8, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fsase77", email: "email@gmail.com", country: "pe",  displayName: "Carlos Gonzales", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 8, groupsJoined: [{id: "5544g", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "7675g", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fs89", email: "email@gmail.com", country: "br",  displayName: "Christian Castillo", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 10, groupsJoined: [{id: "4asdf", name: "first", avatarUrl: null}, {id: "44rf", name: "second", avatarUrl: null}, {id: "52345f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fg354g", email: "email@gmail.com", country: "ar",  displayName: "Alexander Castro", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d", score: 9, groupsJoined: [{id: "543ff", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "432", name: "second", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fsasdf2", email: "email@gmail.com",  country: "pe", displayName: "Santiago Aranda", avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d", score: 8, groupsJoined: [{id: "fsdf44", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "fsase77", email: "email@gmail.com", country: "pe",  displayName: "Carlos Gonzales", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d", score: 8, groupsJoined: [{id: "5544g", name: "first", avatarUrl: "https://i.pravatar.cc/200"}, {id: "7675g", name: "second", avatarUrl: "https://i.pravatar.cc/200"}, {id: "98898f", name: "third", avatarUrl: "https://i.pravatar.cc/200"}], workshopsCount: 3, eventsCount: 4},
    {id: "ffbbf", email: "email@gmail.com", country: "br",  displayName: "Carlos Venegas Jara", avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d", score: 4, groupsJoined: [], workshopsCount: 3, eventsCount: 4},
];


export default function ParticipantsGeneral() {
    const renderCell = React.useCallback((user: UserDto, columnKey) => {
        const cellValue = user[columnKey];
    
        switch (columnKey) {
            case "displayName":
                return (
                    <Link href={`/participant/${user.id}`}>
                        <User
                            avatarProps={{size: "lg", src: user.avatarUrl}}
                            description={user.email}
                            name={cellValue}
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
                const countryName = countries.get(user.country).name;
                return (
                    <Tooltip showArrow={true} content={<span className='text-zinc-500'>{countryName}</span>}>
                        <Avatar alt={countryName} size="sm" src={countries.get(user.country).imgUrl} showFallback name={countryName} />
                    </Tooltip>
                );
            case "groupsJoined":
                return (
                    <AvatarGroup isBordered isGrid max={7}>
                        {
                        user.groupsJoined.map(group => {
                            return (
                                <Tooltip key={group.id} showArrow={true} content={<span className='text-zinc-500'>{group.name}</span>}>
                                    <Link href={`/group/${group.id}`}>
                                        <Avatar src={group.avatarUrl} radius="lg" showFallback fallback={<Image src="/fablat_2023_logo.png" />} />
                                    </Link>
                                </Tooltip>
                            );
                        })
                        }
                    </AvatarGroup>
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
                        label="Buscar por nombre de participante"
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
                </div>
            </div>

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

                        <TableBody items={users}>
                            {
                            (user) =>
                                <TableRow key={user.id}>
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