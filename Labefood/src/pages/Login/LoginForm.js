import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Title, ContainerInput } from "./styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput
} from "@material-ui/core";
import clsx from "clsx";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToFeed, goToSignUp } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import Logo from '../../assets/logo.png'


function Copyright() {
  useProtectedPage();
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
    marginTop: theme.spacing(8),
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

export default function LoginForm() {
  const history = useHistory()
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const handleClick = (event) => {
    event.preventDefault();
    requests.login(form)
     clear();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Title src={Logo} />
        <Typography component="h1" variant="h5" style={{fontSize:"1rem"}}>
          Entrar
        </Typography>
        <form onSubmit={handleClick} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email@email.com"
            name="email"
            value={form.email}
            onChange={onChange}
            autoComplete="email"
            autoFocus
          />

          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel >Senha</InputLabel>
            <ContainerInput>
              <OutlinedInput
                id="outlined-adornment-password"
                label= "Senha"
                required
                fullWidth
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                value={form.password}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </ContainerInput>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color={"primary"}
            text={"neutralColor"}
            className={classes.submit}
          >
            Entrar
          </Button>
        </form>
        <Button onClick={() => goToSignUp(history)} type="submit" fullWidth color={"neutralColor"}>
          Não possui cadastro? Clique aqui.
          </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
