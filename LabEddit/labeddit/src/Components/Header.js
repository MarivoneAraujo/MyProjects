import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { goToFeed, goToLogin } from "./coordinator";
import { StyledToolBar } from "./styled";

export default function Header({ rightButtonText, setRightButtonText }) {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <div>
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToFeed(history)} color="inherit">
            LABEDDIT
          </Button>

          <Button onClick={rightButtonAction} color="inherit">
            {rightButtonText}
          </Button>
        </StyledToolBar>
      </AppBar>
    </div>
  );
}
