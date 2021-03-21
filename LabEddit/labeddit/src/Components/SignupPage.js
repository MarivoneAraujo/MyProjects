import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants";
import Logo from "../assets/logo.jpeg";
import { goToFeed } from "./coordinator";
import { LogoContainerSignup } from "./styled";

const SignupPage = ({ setRightButtonText }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("feed");
    }
  });

  const handleGoToLogin = () => {
    history.push("/");
  };

  const handleUsernameChange = (e) => {
    const newUserName = e.target.value;
    setUsername(newUserName);
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");

    const body = {
      email: email,
      password: password,
      username: username,
    };

    try {
      const response = await axios.post(`${BASE_URL}/signup`, body);
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
      setRightButtonText("Logout");
    } catch (error) {
      alert("Cadastro falhou! Tente novamente.");
      console.log(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <div>
          <LogoContainerSignup src={Logo} />
        </div>
        <form onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nome de usuário"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={handleUsernameChange}
          />
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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Cadastrar
          </Button>
          <Button fullWidth onClick={handleGoToLogin}>
            Já tem conta? Logue-se
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignupPage;
