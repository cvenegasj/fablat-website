'use client';

import { fetchGroupById } from "@/app/services/group.service";
import { type UserDtoOld } from "@/app/shared/types.old";

import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";


export default function GroupViewOne({params}: any) {
    const {id} = params;

    const {groupData, isLoadingGroup, isErrorGroup} = fetchGroupById(id);

    if (isErrorGroup) return <p>Error al cargar datos.</p>
    if (isLoadingGroup) return <div className="w-full mt-12 text-center"><Spinner size="lg" /></div>

    return (
        <main className="flex flex-col min-h-screen xl:px-80 lg:px-36 px-20 py-9">

            <div className="w-full max-w-8xl mt-8">
                {/* <Badge content={55} size="lg" color="success" placement="bottom-right" shape="rectangle" variant="shadow" disableOutline> */}
                <Avatar className='w-24 h-24' showFallback name={groupData.name} src={groupData.imgUrl!} radius="lg" fallback={<Image src="/fablat_logo.svg" />} />
                {/* </Badge> */}

                <div className='mt-4 w-full'>
                    <div className="text-lg text-neutral-700">
                        {groupData.name}
                    </div>
                    <div className="text-md text-neutral-500">
                        {decodeURIComponent(groupData.description)}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-8xl mt-8">
                <span className="text-md text-neutral-500">Puntaje:</span>
                <span className="text-md ml-3">{groupData.score}</span>
            </div>

            <div className="w-full max-w-8xl mt-20">
                <div className="text-md">
                    <span className="text-neutral-500">Miembros</span>
                    <span className="text-neutral-400 ml-2">({groupData.membersCount})</span>
                </div>

                <div className='mt-3 w-full flex flex-wrap gap-2'>
                    {
                        groupData.members.map((user: UserDtoOld) => (
                            <div key={user.idFabber} className="w-[150px] h-[126px] rounded-xl bg-neutral-200/70 p-2 m-1 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
                                <div className="h-[64px] flex justify-center">
                                    <Link href={`/participant/${user.idFabber}`}>
                                        <Avatar showFallback name={user.name} src={user.avatarUrl} size="lg" />
                                    </Link>
                                </div>

                                <div className="text-center">
                                    <Link className="font-normal text-md text-gray-500 hover:text-gray-600" href={`/participant/${user.idFabber}`}>
                                        <p className="line-clamp-2">{user.name}</p>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </main>
    );
}