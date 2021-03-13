import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ContainerInput, LogoTitle } from "../SignUp/styles";
import { FormControl } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import {
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@material-ui/core";
import clsx from "clsx";
import Logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import { updateProfile } from "../../Services/use";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Future Eats
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpForm(props) {
  const [formSing, onChange, clearFields, setFormSing] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const { states, requests, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    importData();
  }, [token]);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const [valuesConfirme, setValuesConfirme] = React.useState({
    confirm: "",
    showConfirm: false,
  });

  const [test, settest] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(!showText);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleConfirmation = (prop) => (event) => {
    setValuesConfirme({ ...valuesConfirme, [prop]: event.target.value });
  };

  const handleClick = (event) => {
    setValuesConfirme({ confirm: "" });
    event.preventDefault();
    if (!token) {
      requests.signUp(formSing, history);
      setValuesConfirme({ confirm: "" });
    } else {
      updateProfile(formSing, history);
    }
  };

  const importData = () => {
    if (token) {
      requests.getProfile();
      setFormSing({
        name: states.profile.name,
        email: states.profile.email,
        cpf: states.profile.cpf,
      });
    }
  };

  const passwordCheck = () => {
    if (valuesConfirme.confirm == formSing.password) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        {!token && (
          <div>
            <LogoTitle src={Logo} />
          </div>
        )}
        <Typography component="h1" variant="h5" style={{ fontSize: "1rem" }}>
          {!token && "Cadastrar"}
        </Typography>
        <form onSubmit={handleClick} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            placeholder="Nome e sobrenome"
            name="name"
            value={formSing.name}
            onChange={onChange}
            pattern={"^.{3,}"}
            title={"Mínimo 3 caracteres"}
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            placeholder="email@email.com"
            name="email"
            value={formSing.email}
            onChange={onChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="CPF"
            label="CPF"
            placeholder="000.000.000-00"
            name="cpf"
            value={formSing.cpf}
            onChange={onChange}
            autoComplete="CPF"
            autoFocus
          />
          {!token && (
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <ContainerInput>
                <OutlinedInput
                  label="Senha"
                  required
                  fullWidth
                  name="password"
                  style={{ maxWidth: "1000px" }}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  value={formSing.password}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </ContainerInput>
            </FormControl>
          )}
          {!token && (
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirmar
              </InputLabel>
              <ContainerInput>
                <OutlinedInput
                  error={passwordCheck()}
                  id="confirm"
                  id="outlined-error-helper-text"
                  helperText="Deve ser a mesma que a anterior"
                  label="Confirmar*"
                  required
                  fullWidth
                  name="confirm"
                  type={showText ? "text" : "password"}
                  value={valuesConfirme.confirm}
                  value={formSing.confirm}
                  onChange={onChange}
                  onChange={handleConfirmation("confirm")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowText}
                        edge="end"
                      >
                        {showText ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </ContainerInput>
            </FormControl>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {!token ? "Criar" : "Salvar alterações"}
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
