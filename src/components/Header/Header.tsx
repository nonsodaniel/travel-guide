import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { Search } from "@mui/icons-material";
import useStyles from "./styles";
import Box from "@mui/material/Box";
import { useState } from "react";

const Header = ({ setCoordinates }: any) => {
  const classes = useStyles();
  const [autocomplete, setAutoComplete] = useState(null);
  const onLoad = (data) => setAutoComplete(data);
  const onPlaceChange = () => {
    //@ts-ignore

    const location = autocomplete?.getPlace().geometry.location;
    const lat = location.lat();
    const lng = location.lng();
    if (lat && lng) setCoordinates({ lat, lng });
  };

  return (
    <AppBar position={"static"}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h5">
          Travel Guide
        </Typography>
        <Box display="flex">
          <Typography variant="h6">Explore the globe</Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
