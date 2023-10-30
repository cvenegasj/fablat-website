'use client';

import { fetchGroupById } from "@/app/services/group.service";
import { UserDtoOld } from "@/app/shared/types.old";

import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
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
                <Avatar className='w-20 h-20' showFallback name={groupData.name} src={groupData.imgUrl!} radius="sm" />
                {/* </Badge> */}

                <div className='mt-4 w-full'>
                    <div className="text-lg text-neutral-700">
                        {groupData.name}
                    </div>
                    <div className="text-md text-neutral-500">
                        {groupData.description}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-8xl mt-20">
                <div className="text-md text-neutral-500">
                    Miembros
                </div>

                <div className='mt-3 w-full flex flex-wrap gap-2'>
                    {
                        groupData.members.map((user: UserDtoOld) => (
                            <div key={user.idFabber} className="w-[150px] h-[120px] rounded-xl bg-neutral-200/70 p-4 m-1 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
                                <div className="h-[64px] flex justify-center">
                                    <Link href={`/participant/${user.idFabber}`}>
                                        <Avatar showFallback name={user.name} src={user.avatarUrl} className="w-15 h-15" />
                                    </Link>
                                </div>

                                <div className="text-center truncate mt-2">
                                    <Link className="font-normal text-md text-gray-500 hover:text-gray-600" href={`/participant/${user.idFabber}`}>
                                        {user.name}
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