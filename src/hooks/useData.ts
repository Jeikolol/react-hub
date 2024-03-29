import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";

import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number
    results: T[]
}

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
    const controller = new AbortController();

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        setTimeout(() => {
            if (!data) {
                return () => controller.abort();
            }

        }, 300);
    }, deps ? [...deps] : []);


    return { data, error, isLoading };
}

export default useData