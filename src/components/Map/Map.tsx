import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import { API_KEY, noImageUrl } from "../../utils/config";
import useStyles from "./styles";
import { LocationOnOutlined, Phone, LocationOn } from "@mui/icons-material";
import { Rating } from "@mui/material";

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const MarkerComponent: React.FC<MarkerProps> = ({ text }) => {
  return (
    <div
      style={{
        color: "white",
        background: "red",
        padding: "5px 10px",
        borderRadius: "50%",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute", // Add absolute positioning
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );
};

interface IMapProps {
  coordinates: any;
  setBounds: any;
  setCoordinates: any;
  places: any;
  setChildClicked: any;
}
const AnyReactComponent = ({ text, lat, lng }: any) => <div>{text}</div>;

const Map = ({
  coordinates,
  setBounds,
  setCoordinates,
  places,
  setChildClicked,
}: IMapProps) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:600px)`);

  const handleChange = (event: any) => {
    console.log("event", event);
    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
    setBounds({
      ne: event.marginBounds.ne,
      sw: event.marginBounds.sw,
    });
  };
  console.log("coordinates", coordinates, isDesktop);
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={coordinates}
        defaultCenter={{ lat: 51.50735, lng: -0.127758 }}
        defaultZoom={5}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={handleChange}
        onChildCick={(arg) => setChildClicked(arg)}
      >
        {places?.map((place, i) => {
          console.log("got", place.name);
          return (
            <div
              className={classes.markerContainer}
              data-lat={Number(place.latitude)}
              data-lng={Number(place.longitude)}
              key={`${place.name} ${Math.random()}`}
            >
              {isDesktop ? (
                <LocationOn color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="subtitle2" gutterBottom>
                    {" "}
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
