import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GlobalStateContext from "../../context/GlobalStateContext";
import Loading from "../../assets/loading.gif";
import {
  OrderCard,
  MainCardContent,
  OrderTitle,
  OrderImage,
  OrderPrice,
  OrderButton,
} from "./styles";
import CardSelector from "../CardSelector/CardSelector";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "center",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [selectcart, setSelectcart] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const showPage = () => {
    return selectcart ? (
      <CardSelector
        selectedItem={selectedItem}
        setSelectcart={setSelectcart}
      ></CardSelector>
    ) : null;
  };
  console.log(selectedItem);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {showPage()}
      {states.isLoading ? (
        <img style={{ margin: "0 47%" }} src={Loading} />
      ) : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ borderRadius: "8px 8px 0 0" }}
              className={classes.media}
              image={states.restauranteDetails.logoUrl}
            ></CardMedia>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.restauranteDetails.description}
              </Typography>
              <OrderTitle gutterBottom variant="h5" component="h2">
                {states.restauranteDetails.name}
              </OrderTitle>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.restauranteDetails.category}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.deliveryTime} minutos{" "}
                <span> Frete: R$ {states.shipping},00</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.restauranteDetails.address}
              </Typography>
              <p>Principais</p>
              <hr />
            </CardContent>
          </CardActionArea>

          {states.restauranteDetails.products.map((item) => {
            return (
              <OrderCard key={item.id}>
                <OrderImage src={item.photoUrl} />

                <MainCardContent>
                  <OrderTitle
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {item.name}
                  </OrderTitle>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                  <OrderPrice>
                    <p>R$ {item.price.toFixed(2)}</p>
                    <CardActions>
                      <OrderButton
                        onClick={() => {
                          setSelectcart(true) || setSelectedItem(item);
                        }}
                        style={{
                          paddingBottom: "1.4rem",
                          marginBottom: "-17px",
                        }}
                      >
                        Adicionar
                      </OrderButton>
                    </CardActions>
                  </OrderPrice>
                </MainCardContent>
              </OrderCard>
            );
          })}
        </Card>
      )}
    </div>
  );
}
