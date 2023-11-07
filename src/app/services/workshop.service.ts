import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";


const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export const fetchWorkshopsWithFilter = (page: number, size: number, past: boolean, filter: Map<string, any>) => {
    let filterParams = '';
    if (filter.size > 0) {
        filter.forEach((value: any, key: string) => {
            if (value instanceof Set) {
                if (value.size > 0) {
                    const parsedSet = Array.from(value).join(',');
                    filterParams += `&${key}=${parsedSet}`;
                }
            } else if (value) {
                filterParams += `&${key}=${value}`;
            }
        });
    }
    // console.log("filterParams: %s", filterParams);
    
    const {data: workshopsData, error: isErrorWorkshops, isLoading: isLoadingWorkshops} = useSWR(`${apiBaseUrl}/auth/workshops/filter?page=${page}&size=${size}&past=${past}${filterParams}`, fetcher);

    return {
        workshopsData,
        isLoadingWorkshops,
        isErrorWorkshops
    };
}

export const fetchWorkshopById = (id: string) => {
    const {data: workshopData, error: isErrorWorkshop, isLoading: isLoadingWorkshop} = useSWR(`${apiBaseUrl}/auth/workshops/${id}`, fetcher);

    return {
        workshopData,
        isLoadingWorkshop,
        isErrorWorkshop
    };
}