import { useEffect, useState, useRef } from 'react';
import { Typography, Box, Grid } from "@mui/material";
import Loader from "../../ui-component/Loader";
import { useAnimes } from '../../hooks';
import { CardAnime } from '../../components/Anime';
import { FiltersAnime } from '../../components/Anime/FiltersAnime';

const AnimeList = () => {
    const [type, setType] = useState<string>('tv');
    const [filter, setFilter] = useState<string>('bypopularity');
    const { queryAnimes } = useAnimes({ type, filter });

    return queryAnimes.isLoading ? (
        <Loader />
    ) : queryAnimes.isError ? (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 3,
            }}
        >
            <Typography variant="h1" color="red">
                    Error
            </Typography>
            <Typography variant="h1" color="red">
                {queryAnimes.error ? queryAnimes.error.toString() : "Unknown error"}
            </Typography>
        </Box>
    ) : (
        <Grid>
        <Grid sx={{ marginY: 2, paddingX: '5rem'}}>
            <FiltersAnime 
                type={type}
                setType={setType}
                filter={filter}
                setFilter={setFilter}
            />
            {
                queryAnimes.data.pages.map((page) => (
                    <Grid container spacing={2} key={page.pagination.current_page} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0.1rem'}}>
                        {
                            page.data.map((Anime) => (
                                <CardAnime Anime={Anime} key={Anime.mal_id} />
                            ))
                        }
                    </Grid>
                ))
            }
        </Grid>
        </Grid>
    );
};

export default AnimeList;
