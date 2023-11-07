'use client';

import { fetchWorkshopById } from "@/app/services/workshop.service";
import { type WorkshopTutorDtoOld } from "@/app/shared/types.old";

import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Spinner } from "@nextui-org/spinner";
import { IconClockHour2, IconCurrencyDollar, IconMapPin, IconMapPinFilled } from "@tabler/icons-react";


export default function EventViewOne({params}: any) {
    const {id} = params;

    const {workshopData, isLoadingWorkshop, isErrorWorkshop} = fetchWorkshopById(id);

    if (isErrorWorkshop) return <p>Error al cargar datos.</p>
    if (isLoadingWorkshop) return <div className="w-full mt-12 text-center"><Spinner size="lg" /></div>

    return (
        <main className="flex flex-col min-h-screen xl:px-80 lg:px-36 px-20 py-9">

            <div className="w-full max-w-8xl mt-8">
                <span className={`rounded-xl py-1 px-2 text-sm ${workshopData.type === 'WORKSHOP' ? 'bg-lime-500' : workshopData.type === 'CONFERENCE' ? 'bg-amber-600' : 'bg-cyan-500'}`}>
                    {workshopData.type}
                </span>

                <div className='mt-2 w-full'>
                    <div className="text-2xl text-neutral-700 font-semibold">
                        {workshopData.name}
                    </div>
                    <div className="text-md text-neutral-500">
                        from {workshopData.groupName}
                    </div>

                    <div className="text-md text-neutral-500 mt-5">
                        {decodeURIComponent(workshopData.description)}
                    </div>
                </div>
            </div>

            <div className="flex w-full max-w-8xl mt-8">
                <IconClockHour2 className='text-emerald-500' size={22} stroke={2} />
                <span className="text-md text-neutral-500 ml-2">Fecha y hora de inicio:</span>
                <span className="text-md ml-3">{workshopData.startDateFormatted}</span>
            </div>

            <div className="flex w-full max-w-8xl mt-3">
                <IconClockHour2 className='text-emerald-500' size={22} stroke={2} />
                <span className="text-md text-neutral-500 ml-2">Fecha y hora de fin:</span>
                <span className="text-md ml-3">{workshopData.endDateFormatted}</span>
            </div>

            <div className="flex w-full max-w-8xl mt-3">
                <IconMapPin className='text-emerald-500' size={22} stroke={2} />
                <span className="text-md text-neutral-500 ml-2">Lugar:</span>
                <span className="text-md ml-3">{workshopData.locationAddress}, {workshopData.locationCity}, {workshopData.locationCountry}</span>

                <a className="ml-4 text-[15px] text-pink-600" href={`http://www.google.com/maps/place/${workshopData.locationLatitude},${workshopData.locationLongitude}`} target="_blank" rel="nofollow">
                    Ver mapa
                </a>
            </div>

            <div className="flex w-full max-w-8xl mt-3">
                <IconCurrencyDollar className='text-emerald-500' size={22} stroke={2} />
                <span className="text-md text-neutral-500 ml-2">Precio:</span>
                <span className="text-md ml-3">{workshopData.isPaid ? workshopData.price + ' ' + workshopData.currency : 'Gratis'}</span>
            </div>

            {
                workshopData.facebookUrl ?  
                <div className="w-full max-w-8xl mt-3">
                    <span className="text-md text-neutral-500">URL Facebook:</span>
                    <span className="text-md ml-3">{workshopData.facebookUrl}</span>
                </div> : ''

            }

            {
                workshopData.ticketsUrl ?  
                <div className="w-full max-w-8xl mt-3">
                    <span className="text-md text-neutral-500">URL para tickets:</span>
                    <span className="text-md ml-3">{workshopData.ticketsUrl}</span>
                </div> : ''

            }

            <div className="w-full max-w-8xl mt-3">
                <a className="text-pink-600 text-[15px]" href={`http://www.google.com/calendar/event?action=TEMPLATE&text=${workshopData.name}&dates=${workshopData.startDateTimeCalendar}/${workshopData.endDateTimeCalendar}&details=${workshopData.description}&location=${workshopData.locationAddress},${workshopData.locationCity},${workshopData.locationCountry}`} target="blank" rel="nofollow">
                    Agregar a Google Calendar
                </a>
            </div>


            <div className="w-full max-w-8xl mt-14">
                <div className="text-md">
                    <span className="text-neutral-500">Tutores</span>
                    <span className="text-neutral-400 ml-2">({workshopData.tutors.length})</span>
                </div>

                <div className='mt-3 w-full flex flex-wrap gap-2'>
                    {
                        workshopData.tutors.map((tutor: WorkshopTutorDtoOld) => (
                            <div key={tutor.idWorkshopTutor} className="w-[150px] h-[126px] rounded-xl bg-neutral-200/70 p-2 m-1 shadow-md hover:transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg">
                                <div className="h-[64px] flex justify-center">
                                    <Link href={`/participant/${tutor.fabberId}`}>
                                        <Avatar showFallback name={tutor.name} src={tutor.fabberAvatarUrl} size="lg" />
                                    </Link>
                                </div>

                                <div className="text-center">
                                    <Link className="font-normal text-md text-gray-500 hover:text-gray-600" href={`/participant/${tutor.fabberId}`}>
                                        <p className="line-clamp-2">{tutor.name}</p>
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