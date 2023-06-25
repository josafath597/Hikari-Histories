import {
    CardMedia,
    Grid,
    Typography,
    Tooltip,
    TooltipProps,
    tooltipClasses,
    Chip,
  } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles"
import { Datum } from "../../interfaces/Anime";
import { ReactElement } from 'react';


const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      width: 320,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

interface Props {
    Anime: Datum,
    children: ReactElement
}

const stylesText = { 
    fontWeight: 400, 
    fontSize: '0.830rem',  // equivalente a 14px
    letterSpacing: '0.02em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,  // limita el texto a 3 líneas
    WebkitBoxOrient: 'vertical'
}

export const AnimeTooltip = ({ children, Anime} : Props) => {
    const theme = useTheme();
  return (
    <HtmlTooltip title={
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h6">
                    {Anime.title}
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: theme.palette.background.default
            }}>
                <Typography style={{ 
                        color: theme.palette.primary.main, 
                        fontWeight: 500, 
                        letterSpacing: '0.05em',
                        marginLeft: 5,
                        fontSize: '1.3rem'
                }}>
                    Episodes {Anime.episodes}
                </Typography>
                <Chip 
                    label={
                        <Typography style={{ 
                            color: theme.palette.background.default, 
                            fontWeight: 500, 
                            letterSpacing: '0.05em'
                        }}>
                            {Anime.type}
                        </Typography>
                    }
                    size="medium"
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        marginTop: 5,
                        marginBottom: 5,
                        marginRight: 5,
                    }}
                />
            </Grid>
            <Grid sx={{ marginTop: 1, marginBottom: 2 }}>
                <Typography style={{ 
                        fontWeight: 400, 
                        fontSize: '0.830rem',  // equivalente a 14px
                        letterSpacing: '0.02em',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,  // limita el texto a 3 líneas
                        WebkitBoxOrient: 'vertical'
                    }}>
                    {Anime.synopsis}
                </Typography>
            </Grid>
            <Grid>
                <Typography sx={stylesText}>
                    Others names: {Anime.title_synonyms.map(names => names).join(", ")}
                </Typography>
                <Typography sx={stylesText}>
                    Scores: {Anime.score}
                </Typography>
                <Typography sx={stylesText}>
                    Date aired: {Anime.aired.string}
                </Typography>
                <Typography sx={stylesText}>
                    Status: {Anime.status}
                </Typography>
                <Typography sx={stylesText}>
                    Genre: {Anime.genres.map(genres => genres.name).join(", ")}
                </Typography>
            </Grid>
        </Grid>
        }
    >
        {children}
    </HtmlTooltip>
  )
}
