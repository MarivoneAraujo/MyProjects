import React from "react";
import {
  ScreenContainer,
  LogoImage,
  SignUpButtonContainer,
} from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({setRightButtonText}) => {
  useUnprotectedPage()

  const history = useHistory()
  
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm setRightButtonText={setRightButtonText}/>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          variant={"text"}
        >
          Não possui conta? Cadastre-se!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
