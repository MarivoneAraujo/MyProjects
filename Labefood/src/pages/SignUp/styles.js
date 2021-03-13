import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 398px;
  margin-bottom: 12px;
  margin-top: 12px;
  @media (max-width: 736px) {
    width: 129%;
    margin-bottom: 10px;
    margin-top: 15px;
  } ;
`;
export const LogoTitle = styled.img`
  margin-top: 1vh;
  margin-bottom: 30px;
  width: 158px;

  @media (min-width: 500px) and (max-width: 800px) {
    margin-top: 10vh;
    width: 126px;
  }
  @media (max-width: 499px) {
    width: 126px;
  };
`;
