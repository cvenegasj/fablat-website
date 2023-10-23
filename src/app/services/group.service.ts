import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";
import { GroupDtoOld } from "../shared/types.old";

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