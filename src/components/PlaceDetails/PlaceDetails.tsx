import {
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { LocationOn, Phone, Place } from "@mui/icons-material";
import { Rating } from "@mui/material";
import useStyles from "./styles";

interface IPlaceDetailsProps {
  place: any;
}

const PlaceDetails = ({ place }: IPlaceDetailsProps) => {
  const classes = useStyles();
  console.log("place", place);
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : `https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg`
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
