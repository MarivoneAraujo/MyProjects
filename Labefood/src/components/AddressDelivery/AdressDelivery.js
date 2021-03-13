import React, { useContext, useEffect } from "react";
import { DataContainer, H4 } from "./styles";
import GlobalStateContext from "../../context/GlobalStateContext";

export default function AddressDelivery() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  useEffect(() => {
    requests.getProfile();
  }, [requests]);
  return (
    <DataContainer>
      <div>
        <H4>Endereço de Entrega</H4>
        <p>{states.profile.address} </p>
      </div>
    </DataContainer>
  );
}
