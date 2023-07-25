import { CssBaseline } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./apiServices/apiServices";
import { IBoundsProps, ILatLngProps } from "./utils/types";

function App() {
  const [places, setPlaces] = useState(null);
  const [coordinates, setCoordinates] = useState<ILatLngProps>({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = useState<IBoundsProps | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }: any) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log("data", data);
        setPlaces(data);
      });
    }
  }, [coordinates, bounds]);
  return (
    <Fragment>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={4}>
            <Map
              coordinates={coordinates}
              setBounds={setBounds}
              setCoordinates={setCoordinates}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </Fragment>
  );
}

export default App;
