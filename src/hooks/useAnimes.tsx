import { useInfiniteQuery } from "@tanstack/react-query";
import axiosServices from "../Api/Axios";
import { Anime } from "../interfaces/Anime";
import { useRef, useEffect } from "react"

interface Props {
    page?: number;
    type?: string;
    filter?: string;
    rating?: string;
}

interface QueryProps {
    pageParam?: number;
    queryKey?: (string | Props)[];
}

const fetchMoreAnime = async ({ pageParam = 1, queryKey }: QueryProps) => {
    try {
        if (!Array.isArray(queryKey)) throw new Error('queryKey must be an array');
        const [,,args] = queryKey
        const { filter, type } = args as Props;
        const params = new URLSearchParams();
        if ( filter ) params.append('filter', filter );
        if ( type ) params.append('type', type );
        params.append('rating', 'g' )
        params.append('sfw', 'false');
        params.append('limit', '24');
        params.append('page', pageParam.toString() );
        const { data } = await axiosServices.get<Anime>(`/top/anime`, { params });
        return data
    } catch (error) {
        console.error("Error en fetchMoreAnime:", error);
        throw error;
    }
};

export const useAnimes = ({ type = 'tv', filter = 'bypopularity' } :  Props) => {

    const queryAnimes = useInfiniteQuery(["animeData", 'infinite', { type, filter }], (data) => fetchMoreAnime( data ),
    {
        getNextPageParam: (lastPage, pages) => {
            if ( lastPage.data.length === 0) return;
            return pages.length + 1;
        },
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        retry: 20,
        retryDelay: attemptIndex => Math.min(attemptIndex * 10000, 30000)
    }
    );

    const isLoadingMoreRef = useRef(false);

    useEffect(() => {
        const loadMore = async () => {
            const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;

            if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
                if (queryAnimes.hasNextPage && !isLoadingMoreRef.current) {
                    isLoadingMoreRef.current = true;
                    try {
                        await queryAnimes.fetchNextPage();
                    } catch (error) {
                        console.error("Failed to fetch next page:", error);
                    } finally {
                        isLoadingMoreRef.current = false;
                    }
                }
            }
        };

        window.addEventListener('scroll', loadMore);

        return () => window.removeEventListener('scroll', loadMore);
    }, [queryAnimes]);

    return { queryAnimes };
};
