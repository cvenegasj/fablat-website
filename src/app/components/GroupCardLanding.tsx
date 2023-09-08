import Image from "next/image";
import Link from "next/link";

export default function GroupCardLanding({groupId, name, description, membersCount, imgUrl}: 
    {groupId: string, name: string, description: string, membersCount: number, imgUrl: string}) {
    return (
        <div className="w-[215px] h-[143px] rounded-lg bg-pink-200 bg-opacity-90 p-4 m-1">
            <div className="h-[55px] flex items-end justify-center">
                <Image
                    className="rounded-full"
                    src="/groups_icon.png"
                    alt="Group image"
                    width={55}
                    height={55}
                />
            </div>
            <div className="text-center truncate mt-1">
                <Link className="font-normal text-lg text-gray-600 hover:text-gray-500" href={`/group/${groupId}`}>
                    {name}
                </Link>
            </div>

            <div className="text-center">
                <span className="text-sm text-gray-500">{membersCount} members</span>
            </div>
        </div>
    );
} 