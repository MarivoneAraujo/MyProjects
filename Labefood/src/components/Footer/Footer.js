import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import {
  goToFeed,
  goToBuyCart,
  goToProfilePage,
} from "../../routes/Coordinator";
import GlobalStateContext from "../../context/GlobalStateContext";
import homePage from "../../assets/homepage.svg";
import homeSelected from "../../assets/homepageGreen.svg";
import cartPage from "../../assets/shopping-cart.svg";
import cartSelected from "../../assets/shopping-cartGreen.svg";
import profilePage from "../../assets/avatar.svg";
import profileSelected from "../../assets/avatarGreen.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    bottom: "0",
    zIndex: "1",
    width: "100vw",
    minWidth: "350px",
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: "auto",
    backgroundColor: "white",
  },
}));

export default function Footer(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <hr />
        <Container
          maxWidth="sm"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {history.location.pathname === "/feed" ? (
            <Button onClick={() => goToFeed(history)}>
              <img src={homeSelected} />
            </Button>
          ) : (
            <Button onClick={() => goToFeed(history)}>
              <img src={homePage} />
            </Button>
          )}

          {history.location.pathname === "/cart" ? (
            <Button onClick={() => goToBuyCart(history)}>
              <img src={cartSelected} />
            </Button>
          ) : (
            <Button onClick={() => goToBuyCart(history)}>
              <img src={cartPage} />
            </Button>
          )}

          {history.location.pathname === "/profile" ? (
            <Button onClick={() => goToProfilePage(history)}>
              <img src={profileSelected} />
            </Button>
          ) : (
            <Button onClick={() => goToProfilePage(history)}>
              <img src={profilePage} />
            </Button>
          )}
        </Container>
      </footer>
    </div>
  );
}
