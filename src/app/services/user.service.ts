import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";
import { UserDtoOld } from "../shared/types.old";

const fetcher = (...args: any) => fetch(args).then((res) => res.json() as Promise<UserDtoOld[]>);

export const fetchUsers = (page: number, size: number) => {
    const {data, error, isLoading} = useSWR(`${apiBaseUrl}/auth/fabbers?page=${page}&size=${size}`, fetcher, {
        keepPreviousData: true,
    });

    return [
        data,
        isLoading,
        error
    ];
}

export const fetchUsersCount = () => {
    const {data, error, isLoading} = useSWR(`${apiBaseUrl}/auth/fabbers/count`, fetcher, {
        keepPreviousData: true,
    });

    return [
        data,
        isLoading,
        error
    ];
}
