import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";
import { UserDtoOld } from "../shared/types.old";

const fetcher = (...args: any) => fetch(args).then((res) => res.json() as Promise<UserDtoOld[]>);

export const fetchUsers = (page: number, items: number) => {
    const {data, error, isLoading} = useSWR(`${apiBaseUrl}/auth/fabbers/`, fetcher, {
        keepPreviousData: true,
    });

    return {
        data,
        isLoading,
        isError: error
    }
}
