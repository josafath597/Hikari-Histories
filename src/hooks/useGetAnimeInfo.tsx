import { useQuery } from "@tanstack/react-query"
import axiosServices from "../Api/Axios";
import { AnimeInfo } from "../interfaces/AnimeInfo";
import { useState, useEffect } from 'react';


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

    const [embedUrl, setEmbedUrl] = useState<string>("");

    useEffect(() => {
        if (animeQueryInfo.data?.trailer.embed_url) {
            let url = new URL(animeQueryInfo.data?.trailer.embed_url);
            url.searchParams.set("autoplay", "0");
            setEmbedUrl(url.toString());
        }
    }, [animeQueryInfo.data?.trailer.embed_url]);

    return { animeQueryInfo, embedUrl };
};
