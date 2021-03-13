import styled from "styled-components"

export const Title = styled.img`
margin-top: 1vh;
margin-bottom: 30px;
heigth: 104px;
width: 158px;

  @media (min-width: 500px) and (max-width: 800px) {
    margin-top: 10vh;
    heigth: 150px;
    width: 126px;
   }
   @media (max-width: 499px) {
     heigth: 65px;
     width: 126px;
   } ;
`
export const ContainerInput = styled.div`
width: 396px;
margin-bottom: 10px;
@media (min-width: 500px) and (max-width: 800px) {
    heigth: 150px;
    width: 148.5%;
   }
   @media (max-width: 499px) {
     heigth: 65px;
     width: 128.5%;
   } ;
`