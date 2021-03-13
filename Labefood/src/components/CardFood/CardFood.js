import { Card } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import GlobalStateContext from "../../context/GlobalStateContext";
import {
  OrderCard,
  MainCardContent,
  OrderTitle,
  OrderImage,
  OrderPrice,
} from "./styles";

export default function CardFood(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [priceToPay, setPriceToPay] = useState(0);

  useEffect(() => {
    let itemSubValue = 0;
    states.cart.forEach((item) => {
      itemSubValue += item.price * item.amount;
  });
  setters.setSubValue(itemSubValue)
  }, [states]);

  useEffect(() => {
    let currentTotal = 0;
    states.cart.forEach((item) => {
      currentTotal += item.price * item.amount;
    });
    setters.setTotalValue(currentTotal + states.shipping);
  }, [states]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card key={props.id}>
        <OrderCard key={props.id}>
          <OrderImage src={props.photoUrl} />

          <MainCardContent>
            <OrderTitle gutterBottom variant="h5" component="h2" style={{fontSize: "1rem"}}>
              {props.amount}x <span></span>
              {props.name}
            </OrderTitle>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>

            <OrderPrice>
              <p>R$ {(props.price * props.amount).toFixed(2)}</p>
              <button
                onClick={() => {
                  requests.removeItemFromCart(props);
                }}
              >
                remover
              </button>
            </OrderPrice>
          </MainCardContent>
        </OrderCard>
      </Card>
    </div>
  );
}
