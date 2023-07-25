import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState(0);
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resturants, Hotels and attracctions around you
      </Typography>
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
        <Select value={rating} onChange={(e: any) => setRating(e.target.value)}>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
