import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    background: "#444",
  },
  bannerContent: {
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid lightseagreen",
  },
  tagline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h2">Crypto App</Typography>
          <Typography variant="subtitle2">ALL CRYPTOS IN ONE PLACE</Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
