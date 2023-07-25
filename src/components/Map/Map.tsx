import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
interface IMapProps {
  coordinates: any;
  setBounds: any;
  setCoordinates: any;
}

const Map = ({ coordinates, setBounds, setCoordinates }: IMapProps) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(`(min-width:600px)`);

  const handleChange = (event: any) => {
    console.log("event", event);
    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
    setBounds({
      ne: event.marginBounds.ne,
      sw: event.marginBounds.sw,
    });
  };
  console.log("coordinates", coordinates);
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaaeEXOe2U9WUBNCzL5PqfrcE4-eoVS1" }}
        center={coordinates}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={handleChange}
        onChildCick={() => null}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
