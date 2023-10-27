import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";


const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export const fetchGroups = (page: number, size: number) => {
    const {data: groupsData, error: isErrorGroups, isLoading: isLoadingGroups} = useSWR(`${apiBaseUrl}/auth/groups?page=${page}&size=${size}`, fetcher, {
        keepPreviousData: true,
    });
    
    return {
        groupsData,
        isLoadingGroups,
        isErrorGroups
    };
}

export const fetchGroupsCount = () => {
    const {data: groupsCount, error: isErrorCount, isLoading: isLoadingCount} = useSWR(`${apiBaseUrl}/auth/groups/count`, fetcher, {
        keepPreviousData: true,
    });

    return {
        groupsCount,
        isLoadingCount,
        isErrorCount
    };
}

export const fetchGroupsWithFilter = (page: number, size: number, filter: Map<string, any>) => {
    // console.log("fetchGroupsWithFilter() with params: %d, %d", page, size);
    // console.log(filter);
    
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
    
    const {data: groupsData, error: isErrorGroups, isLoading: isLoadingGroups} = useSWR(`${apiBaseUrl}/auth/groups/filter?page=${page}&size=${size}${filterParams}`, fetcher);

    return {
        groupsData,
        isLoadingGroups,
        isErrorGroups
    };
}