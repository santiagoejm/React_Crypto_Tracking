import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CryptoState } from "../../context/ContextCrypto";
import { TrendingCoins } from "../../config/api";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();

  const { currency } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  console.log(trending);

  return <div className={classes.carousel}>Carousel</div>;
};

export default Carousel;
