import {
  Card,
  CardMedia,
  Grid,
  Box
} from "@mui/material";
import { Datum } from "../../interfaces/Anime";

interface CardAnimeProps {
  Anime: Datum;
}

import { AnimeTooltip } from "./AnimeTooltip";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const CardAnime = ({ Anime }: CardAnimeProps) => {
    const queryClient = useQueryClient();
    const preSetData = () => {
        queryClient.setQueryData(
            ['anime', Anime.mal_id.toString()],
            Anime
        )
    };
    return (
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card style={{ maxWidth: "350px" }}>
                <AnimeTooltip Anime={Anime}>
                    <Box component={Link} to={`/Anime/${Anime.mal_id}`}>
                        <CardMedia
                            onMouseEnter={preSetData}
                            component="img"
                            image={Anime.images.webp.large_image_url}
                            alt={Anime.title}
                            sx={{ 
                                width: "100%",
                                height: "100%",
                                cursor: 'pointer'
                            }}
                        />
                    </Box>
                </AnimeTooltip>
            </Card>
        </Grid>
    );
};
