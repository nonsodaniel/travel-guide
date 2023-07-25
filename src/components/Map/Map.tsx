import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(`(min-width:600px)`);
  const coordinate = { lat: 0, lan: 0 };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 14,
  };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaaeEXOe2U9WUBNCzL5PqfrcE4-eoVS1" }}
        center={defaultProps.center}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => null}
        onChildCick={() => null}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
