import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const OrderCard = styled.div`
  display: flex;
  width: 328px;
  height: 17vh;
  margin: 8px;
  border-radius: 8px;
  align-items: center;
  border: 1px solid #b8b8b8;
  color: #5cb646;
`;

export const OrderTitle = styled(Typography)`
  margin-top: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

export const MainCardContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 70%;
  -webkit-box-pack: justify;
  justify-content: space-between;

  p:first-child {
    width: 118px;
    height: 19px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }

  p {
    width: 200px;
    height: 30px;
    margin-top: 5px;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
  }
`;

export const OrderImage = styled.img`
  width: 96px;
  height: 112px;
  margin: 0 16px 0 0;
  border-radius: 7px 0 0 7px;
  border: none;
  object-fit: contain;
`;

export const OrderPrice = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;

  button {
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid #e02020;
    color: #e02020;
    min-width: 100px;
    height: 5.7vh;
    cursor: pointer;
    margin-top: 12px;
    background-color: transparent;
  }
`;
