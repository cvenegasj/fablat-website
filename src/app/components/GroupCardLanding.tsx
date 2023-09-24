import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";


export default function GroupCardLanding({groupId, name, description, score, members, membersCount, imgUrl}: 
    {groupId: string, name: string, description: string, score: number, members: any[], membersCount: number, imgUrl: string}) {
    return (
        <div className="w-[225px] h-[212px] rounded-lg bg-pink-200/90 p-4 m-1 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
            <div className="h-[64px] flex items-end justify-center">
                <Link href={`/group/${groupId}`}>
                    <Avatar isBordered radius="lg" showFallback name={name} src={imgUrl} className="w-16 h-16 text-large" fallback={<Image src="/fablat_2023_logo.png" />} />
                </Link>
            </div>

            <div className="text-center truncate mt-2 text-gray-600">
                <Link className="font-normal text-md hover:text-gray-500" href={`/group/${groupId}`}>
                    {name}
                </Link>
            </div>

            <div className="text-center">
                <span className="text-sm text-gray-500">Impacto:  </span>
                <span className="text-sm font-medium text-emerald-500">Muy alto</span>
                <span className="text-sm text-gray-500"> · {membersCount} {membersCount == 1 ? 'miembro' : 'miembros'}</span>
            </div>
        
            <div className="mt-5">
                <AvatarGroup max={4} total={membersCount - 4}>
                    {
                        members.map(({id, displayName, avatarUrl}) => {
                            return (
                                <Tooltip key={id} showArrow={true} content={<span className='text-zinc-500'>{displayName}</span>}>
                                    <Avatar showFallback name={displayName} src={avatarUrl} />
                                </Tooltip>
                            );
                          })
                    }
                </AvatarGroup>
            </div>
        </div>
    );
} 