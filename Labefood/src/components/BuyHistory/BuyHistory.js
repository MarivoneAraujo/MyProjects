import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardStyled } from "./styles";

export default function BuyHistory() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  useProtectedPage();

  return (
    <div>
      <h4>Histórico de pedidos</h4>
      <hr />
      {states.orderHistory.map((order) => {
        return (
          <CardStyled>
            <Typography color="primary" gutterBottom>
              {order.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {order.orderDate}
            </Typography>
            <Typography variant="h5" gutterBottom>
              R$ {order.total.toFixed(2).replace(".", ",")}
            </Typography>
          </CardStyled>
        );
      })}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Nenhum pedido realizado ainda.
      </div>
    </div>
  );
}
