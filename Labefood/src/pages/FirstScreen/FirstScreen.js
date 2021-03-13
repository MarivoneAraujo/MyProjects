import React from "react";
import { Background, Logo, Title } from "./styles";
import logoDesktop from "../../assets/logoDesktop.png";
import { useHistory } from "react-router-dom";

export default function FirstScreen() {
  const history = useHistory();
  return (
    <Background
      onClick={() => {
        history.push(`/login`);
      }}
    >
      <Logo>
        <Title src={logoDesktop} />
      </Logo>
    </Background>
  );
}
