import React, { useEffect, useState, useContext } from "react";
import AddressDelivery from "../../components/AddressDelivery/AdressDelivery";
import Footer from "../../components/Footer/Footer";
import Payment from "../../components/Payment/Payment";
import useProtectedPage from "../../hooks/useProtectedPage";
import { P, ContainerCart } from "./styles";
import GlobalStateContext from "../../context/GlobalStateContext";
import CardFood from "../../components/CardFood/CardFood";

export default function BuyCart() {
  useProtectedPage();
  const [orders, setOrders] = useState();
  const { states, requests, setters } = useContext(GlobalStateContext);

  return (
    <ContainerCart>
      <AddressDelivery />
      {states.cart.map((food) => {
        return (
          <CardFood
            amount={food.amount}
            category={food.category}
            description={food.description}
            id={food.id}
            name={food.name}
            photoUrl={food.photoUrl}
            price={food.price}
          />
        );
      })}

      <Payment />
      <Footer />
    </ContainerCart>
  );
}
