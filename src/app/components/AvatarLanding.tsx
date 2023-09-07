import Image from "next/image";

export default function AvatarLanding({imgUrl, fullName}: {imgUrl: string, fullName: string}) {
    return (
        <div className="flex items-center justify-center w-[90px] h-[70px]">
            <Image
              className="rounded-full"
              src={imgUrl}
              alt={fullName}
              width={60}
              height={60}
            />
        </div>   
    );
}