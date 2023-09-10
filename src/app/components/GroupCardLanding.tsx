import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";


export default function GroupCardLanding({groupId, name, description, members, membersCount, imgUrl}: 
    {groupId: string, name: string, description: string, members: any[], membersCount: number, imgUrl: string}) {
    return (
        <div className="w-[215px] h-[212px] rounded-lg bg-pink-200 bg-opacity-90 p-4 m-1">
            <div className="h-[64px] flex items-end justify-center">
                <Link href={`/group/${groupId}`}>
                    <Avatar isBordered radius="lg" showFallback name={name} src={imgUrl} className="w-16 h-16 text-large" />
                </Link>
            </div>

            <div className="text-center truncate mt-2 text-gray-600">
                <Link className="font-normal text-md hover:text-gray-500" href={`/group/${groupId}`}>
                    {name}
                </Link>
            </div>

            <div className="text-center">
                <span className="text-sm text-gray-500">{membersCount} members</span>
            </div>
        
            <div className="mt-5">
                <AvatarGroup max={4} total={membersCount - 4}>
                    {
                        members.map(({id, displayName, avatarUrl}) => {
                            return (
                                <Tooltip showArrow={true} content={<span className='text-zinc-500'>{displayName}</span>}>
                                    <Avatar showFallback name={displayName} key={id} src={avatarUrl} />
                                </Tooltip>
                            );
                          })
                    }
                </AvatarGroup>
            </div>
        </div>
    );
} 