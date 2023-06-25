import { useParams } from "react-router-dom"
import { useGetAnimeInfo } from "../../hooks"
import Loader from "../../ui-component/Loader";
import { Grid } from "@mui/material";

const index = () => {
  const { id = '16498' } = useParams();
  const { animeQueryInfo } = useGetAnimeInfo({ id });
  console.log(animeQueryInfo.data)
  return (
    animeQueryInfo.isFetching ? 
    <Loader /> :
    <Grid container>
      <Grid item>
      
      </Grid>
    </Grid>
  )
}

export default index