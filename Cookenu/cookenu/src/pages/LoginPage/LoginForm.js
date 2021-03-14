import React, { useState } from "react";
import {
  InputsContainer,
} from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { Button, CircularProgress } from "@material-ui/core";
import {login} from "../../services/user"
import { useHistory } from "react-router";


const LoginForm = ({setRightButtonText}) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault();
  login(form, clear, history, setRightButtonText, setIsLoading)
  };

  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            {isLoading? <CircularProgress color ={"inherent"} size={24}/> : <>Fazer Login</>}
          </Button>
        </form>
      </InputsContainer>
      );
};

export default LoginForm;
