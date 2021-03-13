import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const Frete = styled.p`
  text-align: right;
`;

export const H = styled.h5`
  padding-bottom: 0;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Valor = styled.div`
  color: ${primaryColor};
`;

export const Container = styled.div`
  padding: 2vw;
  height: 80vh;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  z-index: 100;
  background-color: ${primaryColor};

  h5 {
    font-family: "Roboto", sans-serif;
    text-align: center;
    width: 256px;
    height: 18px;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #fff;
  }

  p {
    font-family: "Roboto", sans-serif;
    margin-left: 0.4rem;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    color: #000;
  }

  img {
    width: 32px;
  }
`;
