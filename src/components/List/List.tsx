import { useEffect, createRef, Fragment } from "react";
import {
  CircularProgress,
  // Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";
import Grid from "@mui/material/Grid";

const List = ({ places, childClicked, loading }: any) => {
  const classes = useStyles();

  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState(0);
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      //@ts-ignore
      .fill()
      .map((o, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resturants, Hotels and attracctions around you
      </Typography>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <Fragment>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>

            <Select value={type} onChange={(e: any) => setType(e.target.value)}>
              <MenuItem value={"resturants"}>Resturants</MenuItem>
              <MenuItem value={"hotels"}>Hotels</MenuItem>
              <MenuItem value={"attractions"}>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e: any) => setRating(e.target.value)}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places.map((place, index) => (
              //@ts-ignore
              <Grid key={index} refs={elRefs[index]} item xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                  refProps={elRefs[index]}
                />
              </Grid>
            ))}
          </Grid>
        </Fragment>
      )}
    </div>
  );
};

export default List;
