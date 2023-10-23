import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";
import { UserDtoOld } from "../shared/types.old";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export const fetchUsers = (page: number, size: number) => {
    const {data: usersData, error: isErrorUsers, isLoading: isLoadingUsers} = useSWR(`${apiBaseUrl}/auth/fabbers?page=${page}&size=${size}`, fetcher, {
        keepPreviousData: true,
    });

    return {
        usersData,
        isLoadingUsers,
        isErrorUsers
    };
}

export const fetchUsersCount = () => {
    const {data: usersCount, error: isErrorCount, isLoading: isLoadingCount} = useSWR(`${apiBaseUrl}/auth/fabbers/count`, fetcher, {
        keepPreviousData: true,
    });

    return {
        usersCount,
        isLoadingCount,
        isErrorCount
    };
}
