'use client';

import { fetchUserById } from "@/app/services/user.service";

import { Avatar } from "@nextui-org/avatar";
import { Spinner } from "@nextui-org/spinner";
import { Country } from "@/app/shared/countries.types";
import { countries } from "@/app/shared/constants";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { GroupDtoOld } from "@/app/shared/types.old";


const countriesMap: Map<string, Country> = new Map(countries.map(e => [e.cca3, e]));

export default function ParticipantViewOne({params}: any) {
    const {id} = params;

    const {userData, isLoadingUser, isErrorUser} = fetchUserById(id);

    // const userData: UserDtoOld = {
    //     "idFabber": 7,
    //     "email": "mezagg@gmail.com",
    //     "name": "Gerardo Meza González",
    //     "firstName": "Gerardo",
    //     "lastName": "Meza González",
    //     "isFabAcademyGrad": false,
    //     "fabAcademyGradYear": null,
    //     "cellPhoneNumber": null,
    //     "isNomade": true,
    //     "mainQuote": null,
    //     "city": null,
    //     "country": "PER",
    //     "weekGoal": null,
    //     "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIlbnk_e9fyjP7q2zv5jecswCc1nXfA7gs5pSTtsXtOLck=s96-c",
    //     "labId": null,
    //     "labName": null,
    //     "generalScore": 0,
    //     "coordinatorScore": 0,
    //     "collaboratorScore": 0,
    //     "replicatorScore": 0,
    //     "authorities": [
    //         "ROLE_ADMIN_GENERAL"
    //     ],
    //     "groupsJoined": [{
    //         "id": 5,
    //         "name": "Test G",
    //         "imgUrl": null,
    //         "membersCount": 3
    //     }, {
    //         "id": 6,
    //         "name": "Test G",
    //         "imgUrl": null,
    //         "membersCount": 2
    //     },{
    //         "id": 7,
    //         "name": "Test G",
    //         "imgUrl": null,
    //         "membersCount": 1
    //     }]
    // };

    const country = userData.country && countriesMap.has(userData.country) ? countriesMap.get(userData.country) : undefined;


    if (isErrorUser) return <p>Error al cargar datos.</p>
    if (isLoadingUser) return <Spinner />

    return (
        <main className="flex flex-col min-h-screen xl:px-80 lg:px-36 px-20 py-9">

            <div className="w-full max-w-8xl mt-8">
                {/* <Badge content={55} size="lg" color="success" placement="bottom-right" shape="rectangle" variant="shadow" disableOutline> */}
                    <Avatar className='w-20 h-20' showFallback name={userData.name} src={userData.avatarUrl} isBordered radius="sm" />
                {/* </Badge> */}

                <div className='mt-4 w-full'>
                    <div className="text-lg text-neutral-700">
                        {userData.name}
                    </div>
                    <div className="text-md text-neutral-500">
                        {userData.email}
                    </div>
                </div>
            </div>

            {/* <div className="w-full max-w-8xl mt-8">
                <span className="text-md text-neutral-500">Puntaje de impacto</span>
                <span className="text-md ml-3">{userData.generalScore}</span>
            </div> */}

            {
                country ?
                <div className="w-full flex max-w-8xl mt-9">
                    <div className="text-md text-neutral-500">País</div>
                    <div className="flex ml-5">
                        <Avatar alt={country.name.common} size="sm" src={country.flags.svg} showFallback name={country.name.common} />
                        <div className="ml-2 flex items-center">
                            {country.name.common}
                        </div>
                    </div>
                </div> : ''
            }

            
            <div className="w-full max-w-8xl mt-20">
                <div className="text-md text-neutral-500">
                    Groups joined
                </div>

                <div className='mt-3 w-full flex flex-wrap gap-2'>
                    {
                        userData.groupsJoined.map((group: GroupDtoOld) => (
                            <div className="w-[170px] h-[180px] rounded-xl bg-neutral-200/70 p-4 m-1 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
                                <div className="h-[64px] flex justify-center">
                                    <Link href={`/group/${group.id}`}>
                                        <Avatar radius="lg" showFallback name={group.name} src={group.imgUrl!} className="w-16 h-16" fallback={<Image src="/fablat_2023_logo.png" />} />
                                    </Link>
                                </div>

                                <div className="text-center truncate mt-2">
                                    <Link className="font-normal text-md text-gray-500 hover:text-gray-600" href={`/group/${group.id}`}>
                                        {group.name}
                                    </Link>
                                </div>

                                <div className="text-center">
                                    <span className="text-sm text-gray-400">Impacto:  </span>
                                    <span className="text-sm font-medium text-emerald-500">Muy alto</span>
                                </div>

                                <div className="text-center">
                                    <span className="text-sm text-gray-400">{group.membersCount} {group.membersCount == 1 ? 'miembro' : 'miembros'}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </main>
    );
}