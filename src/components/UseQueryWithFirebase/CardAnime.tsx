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

import imageAnime from './../../assets/animes.png'
import { AnimeTooltip } from "./AnimeTooltip";
import { Link } from "react-router-dom";

export const CardAnime = ({ Anime }: CardAnimeProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card style={{ maxWidth: "350px" }}>
                <AnimeTooltip Anime={Anime}>
                    <Box component={Link} to={`/Anime/${Anime.mal_id}`}>
                        <CardMedia
                            component="img"
                            image={Anime.images.webp.large_image_url || imageAnime}
                            alt={Anime.title}
                            sx={{ 
                                width: "100%",
                                height: "100%",
                                cursor: 'pointer'
                            }}
                            onClick={() => console.log('Hola')}
                        />
                    </Box>
                </AnimeTooltip>
            </Card>
        </Grid>
    );
};
