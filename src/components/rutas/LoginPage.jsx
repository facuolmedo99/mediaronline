import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyle = makeStyles({
  root: {
    marginTop: 30,
  },
});

const Login = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h2" color="initial" className={classes.root}>
        Formulario Login
      </Typography>
    </div>
  );
};

export default Login;
