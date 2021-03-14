import React, { useState } from "react";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Router from "./routes/Router";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
