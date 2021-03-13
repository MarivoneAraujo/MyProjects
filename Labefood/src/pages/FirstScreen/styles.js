import styled from "styled-components";

export const Background = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
`;
export const Logo = styled.div`
  height: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.img`
  margin-top: 35vh;

  @media (max-width: 499px) {
    margin-top: 288px;
    width: 126px;
  } ;
`;
