import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    background: "#DEDEDE",
  },
});

const Banner6 = () => {
  const classes = useStyle();
  return (
    <div>
      <Box py={2} pl={4} className={classes.root}>
        <Typography variant="subtitle2" color="primary">
          Copyright@2020 Todos los derechos Reservados
        </Typography>
      </Box>
    </div>
  );
};

export default Banner6;
