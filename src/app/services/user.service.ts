import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";


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

export const fetchUsersWithFilter = (page: number, size: number, filter: Map<string, any>) => {
    // console.log("fetchUsersWithFilter() with params: %d, %d", page, size);
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
    
    const {data: usersData, error: isErrorUsers, isLoading: isLoadingUsers} = useSWR(`${apiBaseUrl}/auth/fabbers/filter?page=${page}&size=${size}${filterParams}`, fetcher);

    return {
        usersData,
        isLoadingUsers,
        isErrorUsers
    };
}

export const fetchUserById = (id: string) => {
    const {data: userData, error: isErrorUser, isLoading: isLoadingUser} = useSWR(`${apiBaseUrl}/auth/fabbers/${id}`, fetcher);

    return {
        userData,
        isLoadingUser,
        isErrorUser
    };
}
