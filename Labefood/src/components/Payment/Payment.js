import React, { useContext, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Frete, SubTotal, Valor, DivButton, Container, H } from "./styles";
import { Button } from "@material-ui/core";
import GlobalStateContext from "../../context/GlobalStateContext";
import timer from "../../assets/timer.svg";

export default function Payment() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [emAndamento, setEmAndamento] = useState(false);

  const OrderConfirm = () => {
    alert("Pedido realizado com sucesso!");
  };

  const showPage = () => {
    if (emAndamento) {
      return (
        <>
          <DivButton>
            <img src={timer} alt="Ícone tempo" />
            <h5>Pedido em andamento</h5>
            <p>TOTAL: R$ {states.totalValue.toFixed(2)}</p>
          </DivButton>
        </>
      );
    }
  };

  return (
    <Container>
      <Frete> Frete: R$ {states.shipping.toFixed(2)}</Frete>
      <SubTotal>
        <div>SUBTOTAL</div>
        <Valor>R$ {states.subValue.toFixed(2)} Total</Valor>
      </SubTotal>
      <H>Forma de pagamento</H>
      <hr />
      <FormControl component="fieldset">
        <RadioGroup>
          <FormControlLabel value="cash" control={<Radio />} label="Dinheiro" />
          <FormControlLabel
            value="creditCard"
            control={<Radio />}
            label="Cartão de crédito"
          />
        </RadioGroup>
        <Button
          style={{ width: "358px" }}
          onClick={() => {
            setEmAndamento(!emAndamento) || OrderConfirm();
          }}
          fullWidth
          variant="contained"
          color="primary"
        >
          Confirmar
        </Button>
      </FormControl>
      {showPage()}
    </Container>
  );
}
