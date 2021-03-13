import React from "react";
import Footer from "../../components/Footer/Footer";
import { Erro } from "./styles";
import Error404 from "../../assets/error.png";

export default function Error() {
  return (
    <div>
      <Erro src={Error404} />
      <Footer />
    </div>
  );
}
