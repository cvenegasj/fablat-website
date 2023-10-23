import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";
import { GroupDtoOld } from "../shared/types.old";

const fetcher = (...args: any) => fetch(args).then((res) => res.json() as Promise<GroupDtoOld[]>);

export const fetchGroups = (page: number, items: number) => {
    const {data, error, isLoading} = useSWR(`${apiBaseUrl}/auth/groups/`, fetcher, {
        keepPreviousData: true,
    });
    
    return {
        data,
        isLoading,
        isError: error
    }
}