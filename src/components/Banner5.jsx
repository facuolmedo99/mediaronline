import React, { Fragment } from "react";

import { makeStyles, Box, Typography } from "@material-ui/core";
// import Image from "../static/picture12.jpg";

// import { Link } from "react-scroll";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    // backgroundImage: `url(${Image})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundColor: "#393835",
    //#393835
    textAlign: "center",
  },
  titulo: {
    fontSize: "3rem",
    fontFamily: "arial",
    textAlign: "center",
    color: "#DEDEDE",
  },
});

const Banner = (props) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box className={classes.banner} pb={4} pt={11} px={1} boxShadow={5}>
        <Typography variant="h2" color="secondary">
          {props.titulo}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Banner;
