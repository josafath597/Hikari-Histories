import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select'

interface Props {
    setType: React.Dispatch<React.SetStateAction<string>>,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    type: string,
    filter: string
}

export const FiltersAnime = ({ type, setType, filter, setFilter }: Props) => (
    <Grid sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2, padding: 1.5, display: 'flex'}}>
        <Grid sx={{ width: '7rem', marginX: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Type"
                        onChange={(event: SelectChangeEvent) => {
                            setType(event.target.value);
                        }}
                    >
                        <MenuItem value={'tv'}>Tv</MenuItem>
                        <MenuItem value={'movie'}>Movie</MenuItem>
                        <MenuItem value={'ova'}>Ova</MenuItem>
                        <MenuItem value={'special'}>Special</MenuItem>
                        <MenuItem value={'ona'}>Ona</MenuItem>
                        <MenuItem value={'music'}>Music</MenuItem>
                    </Select>
            </FormControl>
        </Grid>
        <Grid sx={{ width: '12rem', marginX: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="Filter"
                        onChange={(event: SelectChangeEvent) => {
                            setFilter(event.target.value);
                        }}
                    >
                        <MenuItem value={'airing'}>Airing</MenuItem>
                        <MenuItem value={'upcoming'}>Upcoming</MenuItem>
                        <MenuItem value={'bypopularity'}>By Popularity</MenuItem>
                        <MenuItem value={'favorite'}>Favorite</MenuItem>
                    </Select>
            </FormControl>
        </Grid>
    </Grid>
)
