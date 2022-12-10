import { getCities as apiGetCities } from "../services/cities";
import {useQuery} from "@tanstack/react-query";

export default function useCities(city) {
    const queryKey = ['locations']

    const {
        data: cities,
        error,
        isLoading
    } = useQuery(queryKey, async () => {
        const response = await apiGetCities(city)
        return response.data;
    })

    return {
        locationsData: cities ? cities : [],
        error,
        isLoading
    }
}
