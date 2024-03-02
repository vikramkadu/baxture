import axios, { AxiosResponse, AxiosError } from "axios";
import { Config } from "../config/config";

const axiosApi = axios.create({
    baseURL: Config.apiBaseUrl,
});

interface ApiError {
    status?: number;
    data?: object;
    message?: string;
}

async function handleApiError(error: AxiosError<ApiError>): Promise<never> {
    if (error.response) {
        console.error("Response data:", error.response.data);
    } else if (error.request) {
        console.error("Request was made but no response was received");
    } else {
        console.error("Error setting up the request:", error.message);
    }
    throw error;
}

export async function get<T = any>(url: string, config = {}): Promise<T> {
    try {
        const response: AxiosResponse<T> = await axiosApi.get(url, { ...config });
        return response.data;
    } catch (error) {
        return handleApiError(error as AxiosError<ApiError>);
    }
}