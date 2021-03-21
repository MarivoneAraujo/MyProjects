import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Logo from "../assets/logo.jpeg";
import { goToFeed, goToSignUpPage } from "./coordinator";
import { LogoContainer } from "./styled";

const LoginPage = ({ setRightButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/feed");
    }
  }, []);

  const handleUpdateEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handleUpdatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");

    try {
      const response = await axios.post(`${BASE_URL}/login`, body);
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
      setRightButtonText("Logout");
    } catch (error) {
      alert("Cheque os dados e tente novamente");
      console.log(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <div>
          <LogoContainer src={Logo} />
        </div>

        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleUpdateEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleUpdatePassword}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Entrar
          </Button>
          <Button fullWidth onClick={() => goToSignUpPage(history)}>
            Não tem conta? Cadastre-se
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
