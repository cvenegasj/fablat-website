import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Tooltip } from '@nextui-org/tooltip';
import Link from 'next/link';

export default function PersonCardLanding({id, avatarUrl, displayName, score, groupsJoined}: {id: string, avatarUrl: string, displayName: string, score: number, groupsJoined: any[]}) {
    return (
        <div className='w-[180px] h-[112px] rounded-lg bg-pink-200/50 p-2 shadow-md transition hover:duration-10 hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-lg'>        
            <div className='flex'>
                <div className='w-[66px] flex-shrink-0 relative'>
                    <Avatar className='ml-auto mr-0' showFallback name={displayName} src={avatarUrl} size="lg" />
                    <span className='absolute top-7 w-7 h-7 text-xs rounded-full bg-purple-700 flex justify-center items-center z-10'>
                        {score}
                    </span>
                </div>

                <div className='flex ml-2 items-center'>
                    <div className='w-full line-clamp-2 leading-5 text-neutral-200 hover:text-neutral-300'>
                        <Link className="font-normal text-md" href={`/person/${id}`}>
                            {displayName}
                        </Link>
                    </div>
                </div>
            </div>

            <AvatarGroup max={4} total={groupsJoined.length - 4} className='mt-2'>
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