import React, { useEffect } from "react";
import BuyHistory from "../../components/BuyHistory/BuyHistory";
import Footer from "../../components/Footer/Footer";
import ProfileData from "../../components/ProfileData/ProfileData";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ProfileContainer } from "./styles";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router";
import { goToLogin } from "../../routes/Coordinator";

const Topper = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
`;

export default function ProfilePage() {
  useProtectedPage();
  useEffect(() => {}, []);

  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history);
  };

  return (
    <div>
      <ProfileContainer>
        <Topper>
          <div></div>
          <h3 align="center"> Meu perfil </h3>

          <ExitToAppIcon style={{ marginTop: "1.2rem" }} onClick={logout} />
        </Topper>
        <hr />
        <ProfileData />
        <BuyHistory />
      </ProfileContainer>
      <Footer />
    </div>
  );
}
