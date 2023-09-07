import Image from "next/image";

export default function GroupCardLanding({name, description, membersCount, imgUrl}: 
    {name: string, description: string, membersCount: number, imgUrl: string}) {
    return (
        <div className="">
            {name}
        </div>
    );
}