import { useParams } from "react-router-dom"
import { useGetAnimeInfo } from "../../hooks"
import Loader from "../../ui-component/Loader";
import { Container, Grid, Box, Typography, ListItem, ListItemIcon, ListItemText, List, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { FC, ReactNode } from "react";

const AnimeViewPage = () => {
    const { id = '16498' } = useParams();
    const { animeQueryInfo, embedUrl } = useGetAnimeInfo({ id });

    return (
        animeQueryInfo.isFetching ? 
        <Loader /> :
        <Container>
            <Grid container>
                <Grid item sx={{ marginY: 2, width: '100%' }}>
                    <Grid container sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: 2, borderRadius: 2 }}>
                        <Grid item xs={12} md={3}>
                            <img 
                                src={animeQueryInfo.data?.images.webp.large_image_url}
                                style={{ width: '100%', height: '100' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h3" sx={{ paddingX: 3, marginBottom: 1 }}>
                                {`${animeQueryInfo.data?.title} (${animeQueryInfo.data?.title_japanese})`}
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} md={6} sx={{ paddingX: 3 }}>
                                    <List>
                                        <ListLayout>
                                            Type: {animeQueryInfo.data?.type}
                                        </ListLayout>
                                        <ListLayout>
                                            Genre: {animeQueryInfo.data?.genres.map(genres => genres.name).join(", ")}
                                        </ListLayout>
                                        <ListLayout>
                                            Studios: {animeQueryInfo.data?.studios.map(genres => genres.name).join(", ")}
                                        </ListLayout>
                                        <ListLayout>
                                            Demographics: {animeQueryInfo.data?.demographics.map(demographic => demographic.name).join(", ")}
                                        </ListLayout>
                                        <ListLayout>
                                            Episodes: {animeQueryInfo.data?.episodes}
                                        </ListLayout>
                                        <ListLayout>
                                            Duration per episode: {animeQueryInfo.data?.duration}
                                        </ListLayout>
                                        <ListLayout>
                                            Date aired: {animeQueryInfo.data?.aired.string}
                                        </ListLayout>
                                        <ListLayout>
                                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Typography marginRight={2}>
                                                    Status: 
                                                </Typography>
                                                <Chip label={animeQueryInfo.data?.status} color="error" />
                                            </Box>
                                        </ListLayout>
                                    </List>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ paddingX: 3 }}>
                                    <List>
                                        <ListLayout>
                                            Other Titles: {animeQueryInfo.data?.titles.map(title => title.title).join(", ")}
                                        </ListLayout>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="h4" textAlign='justify'>
                                    Synopsis
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography textAlign='justify'>
                                    {animeQueryInfo.data?.synopsis}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginY: 2}}>
                            <iframe 
                                width="560" 
                                height="315" 
                                src={embedUrl}  
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                title="Anime Trailer">
                            </iframe>
                        </Grid>
                        </Grid>
                    </Grid>            
                </Grid>
            </Grid>
        </Container>
    )
}

export default AnimeViewPage

interface ListLayoutProps {
    children: ReactNode;
}

const ListLayout: FC<ListLayoutProps> = ({children}) => (
    <ListItem>
        <ListItemIcon>
            <StarIcon />
        </ListItemIcon>
        <ListItemText>
            {children}
        </ListItemText>
    </ListItem>
);