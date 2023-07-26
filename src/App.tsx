import { CssBaseline } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./apiServices/apiServices";
import { IBoundsProps, ILatLngProps } from "./utils/types";

function App() {
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState<ILatLngProps | null>(null);
  const [bounds, setBounds] = useState<IBoundsProps | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        setCoordinates({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    if (bounds) {
      getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
        console.log("data", data);
        setPlaces(data);
        setLoading(false);
      });
    }
  }, [coordinates, bounds]);
  console.log("place", places);
  return (
    <Fragment>
      <CssBaseline>
        <Header setCoordinates={setCoordinates} />
        <Grid container spacing={3} style={{ width: "100%" }}>
          {places && (
            <Grid item xs={12} md={4}>
              <List
                loading={loading}
                places={places}
                childClicked={childClicked}
              />
            </Grid>
          )}

          <Grid item xs={12} md={8}>
            {coordinates && (
              <Map
                coordinates={coordinates}
                setBounds={setBounds}
                setCoordinates={setCoordinates}
                places={places}
                setChildClicked={setChildClicked}
              />
            )}
          </Grid>
        </Grid>
      </CssBaseline>
    </Fragment>
  );
}

export default App;
