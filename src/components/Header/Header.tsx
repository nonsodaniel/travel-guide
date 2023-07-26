import { AppBar, Toolbar, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { Search } from "@mui/icons-material";
import useStyles from "./styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import InputBase from "@mui/material/InputBase";

const Header = ({ setCoordinates }: any) => {
  const classes = useStyles();
  const [autocomplete, setAutoComplete] = useState(null);
  const onLoad = (data) => setAutoComplete(data);
  const onPlaceChange = () => {
    //@ts-ignore

    const location = autocomplete?.getPlace().geometry.location;
    const lat = location?.lat();
    const lng = location?.lng();
    if (lat && lng) setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Buddy
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                sx={{
                  ...InputCSS,
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const InputCSS = {
  padding: "0px",
};

export default Header;
