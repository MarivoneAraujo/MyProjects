import axios from "axios";
import { goToAddressEdit } from "../routes/Coordinator";
import { BASE_URL, appName } from "../constants/baseUrl";

export const updateProfile = (form, history) => {
  const body = {
    name: form.name,
    email: form.email,
    cpf: form.cpf,
  };
  console.log(form, body);
  axios
    .put(`${BASE_URL}/${appName}/profile`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
      goToAddressEdit(history);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getActiveOrder = (setOrders) => {
  axios
    .get(`${BASE_URL}/futureEatsA/active-order`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
      setOrders(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
