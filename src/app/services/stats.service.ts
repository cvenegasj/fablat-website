import { apiBaseUrl } from "../shared/constants";
import useSWR from "swr";


const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export const fetchLandingStats = () => {
    const {data: statsData, error: isLoadingStats, isLoading: isErrorStats} = useSWR(`${apiBaseUrl}/auth/stats/general`, fetcher);

    return {
        statsData,
        isLoadingStats,
        isErrorStats
    };
}