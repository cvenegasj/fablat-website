import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Badge } from '@nextui-org/badge';
import { Divider } from '@nextui-org/divider';
import { Tooltip } from '@nextui-org/tooltip';
import Link from 'next/link';

export default function PersonCardLanding({id, avatarUrl, displayName, score, groupsJoined}: {id: string, avatarUrl: string, displayName: string, score: number, groupsJoined: any[]}) {
    return (
        <div className='flex flex-col w-[180px] h-[131px] rounded-lg bg-pink-200/50 p-2 shadow-md transition hover:duration-10 hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-lg'>        
            <div className='w-full flex'>
                <div className='w-[65px] h-[65px] flex-shrink-0 text-right'>
                    <Badge content={score} size="lg" color="success" placement="bottom-left" shape="rectangle" variant="shadow">
                        <Avatar className='ml-auto mr-0' showFallback name={displayName} src={avatarUrl} size="lg" />
                    </Badge>
                </div>

                <div className='w-full flex ml-2 items-center'>
                    <div className='w-full line-clamp-2 leading-5 text-neutral-200 hover:text-neutral-300'>
                        <Link className="font-normal text-md" href={`/participant/${id}`}>
                            {displayName}
                        </Link>
                    </div>
                </div>
            </div>

            <Divider className='mt-2' />

            <AvatarGroup max={4} total={groupsJoined.length - 4} className='w-full mt-2'>
                {
                    groupsJoined.map(({id, name, avatarUrl}) => {
                        return (
                            <Tooltip key={id} showArrow={true} content={<span className='text-zinc-500'>{name}</span>}>
                                <Avatar showFallback name={name} radius="md" src={avatarUrl} size="sm" />
                            </Tooltip>
                        );
                    })
                }
            </AvatarGroup>
        </div>
    );
}