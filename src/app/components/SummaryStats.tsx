'use client';

import { fetchLandingStats } from "../services/stats.service";

import { IconCell, IconHexagon, IconHexagonalPrism } from '@tabler/icons-react';


export const SummaryStats = () => {
    const {statsData, isLoadingStats, isErrorStats} = fetchLandingStats();

    return (
    <div className='flex w-full max-w-8xl mt-14 mb-12 py-7 gap-8'>
        <div className='h-[88px] p-4 grow text-center rounded-2xl backdrop-blur-sm bg-white/20'>
          <div className='flex justify-center items-center'>
              {/* <Image
                  src="/person_icon.png"
                  alt="Person icon"
                  width={15}
                  height={15}
                  priority
              /> */}
            <IconHexagon className='text-emerald-400' size={25} stroke={2} />
    
            <p className='text-2xl text-white font-light ml-3'>{(isLoadingStats || isErrorStats) ?  '' : statsData.usersCount}</p>
          </div>

          <div className='flex justify-center items-center'>
            <span className='font-normal'>miembros</span>
          </div>          
        </div>

        <div className='h-[88px] p-4 grow text-center rounded-2xl backdrop-blur-sm bg-white/20'>
          <div className='flex justify-center items-center'>
                {/* <Image
                    src="/person_icon.png"
                    alt="Person icon"
                    width={15}
                    height={15}
                    priority
                /> */}
              <IconCell className='text-emerald-400' size={25} stroke={2} />
      
              <p className='text-2xl text-white font-light ml-3'>{(isLoadingStats || isErrorStats) ? '' : statsData.groupsCount}</p>
            </div>

            <div className='flex justify-center items-center'>
              <span className='font-normal'>grupos</span>
            </div>    
        </div>

        <div className='h-[88px] p-4 grow text-center rounded-2xl backdrop-blur-sm bg-white/20'>
          <div className='flex justify-center items-center'>
                {/* <Image
                    src="/person_icon.png"
                    alt="Person icon"
                    width={15}
                    height={15}
                    priority
                /> */}
              <IconHexagonalPrism className='text-emerald-400' size={25} stroke={2} />
      
            <p className='text-2xl text-white font-light ml-3'>{(isLoadingStats || isErrorStats) ? '' : statsData.labsCount}</p>
          </div>

          <div className='flex justify-center items-center'>
            <span className='font-normal'>labs</span>
          </div>
        </div>
    </div>
    );
}