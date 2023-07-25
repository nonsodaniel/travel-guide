import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
// import { Autocomplete } from "@react-google-maps/api";
import { Search } from "@mui/icons-material";
import useStyles from "./styles";
import Box from "@mui/material/Box";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position={"static"}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h5">
          Travel Guide
        </Typography>
        <Box display="flex">
          <Typography variant="h6">Explore the globe</Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
