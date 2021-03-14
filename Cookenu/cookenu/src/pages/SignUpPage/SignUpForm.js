import React, {useState} from "react";
import { InputsContainer, SignUpButtonContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { signUp } from "../../services/user";
import {CircularProgress} from "@material-ui/core";

const SignUpForm = ({setRightButtonText}) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault();
    signUp(form, clear, history,setRightButtonText,setIsLoading);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Name"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
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
          
          {isLoading? <CircularProgress color ={"inherent"} size={24}/> : <>Cadastre-se</>}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default SignUpForm;
