import { useQuery } from "@tanstack/react-query"
import axiosServices from "../Api/Axios";
import { AnimeInfo } from "../interfaces/AnimeInfo";

interface Props {
    id: string;
};

const fetchAnime = async ({ id } : Props) => {
    const { data } = await axiosServices.get<AnimeInfo>(`/anime/${id}/full`);
    return data.data
};



export const useGetAnimeInfo = ({ id } : Props) => {
    const animeQueryInfo = useQuery(['anime', id], ({ queryKey }) => {
        const [, id] = queryKey;
        return fetchAnime({ id })
    }, {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    });
    return { animeQueryInfo };
};
