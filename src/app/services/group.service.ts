import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";
import { GroupDtoOld } from "../shared/types.old";

const fetcher = (...args: any) => fetch(args).then((res) => res.json() as Promise<GroupDtoOld[]>);

export const fetchGroups = (page: number, size: number) => {
    const {data, error, isLoading} = useSWR(`${apiBaseUrl}/auth/groups?page=${page}&size=${size}`, fetcher, {
        keepPreviousData: true,
    });
    
    return [
        data,
        isLoading,
        error
    ];
}

export const fetchGroupsCount = () => {
    const {data, error, isLoading} = useSWR(`${apiBaseUrl}/auth/groups/count`, fetcher, {
        keepPreviousData: true,
    });

    return [
        data,
        isLoading,
        error
    ];
}