import styled from 'styled-components';

// Main
export const Logo = styled.img`
width: 80%;
margin-left: 70px;
`
export const Icon = styled.div`
margin-top: 9px;
margin-left: 20px;
position: relative;
:hover{
  cursor: pointer;
  left: 1px;
  color: #e6618d;  
}
`
export const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
@media (max-width: 499px) {
background-color: white;
}
`
export const Column1 = styled.div`
background-color: #FFF3F5;
@media (max-width: 499px) {
background-color: white;
}
`

export const Column3 = styled.div`
background-color: #FFF3F5;
@media (max-width: 499px) {
background-color: white;
}
`
export const Header =styled.div`
border-bottom: 1px solid lightgray;
display: grid;
grid-template-columns: 4fr 1fr;
`
export const CenterGrid = styled.div`
border: 1px solid lightgray;
height: 99.7vh;

@media (max-width: 499px) {
margin-top: 100px;  
};

`
export const Center = styled.div`
height: 437px;
`
export const IMGMain = styled.img`
width: 345px;
height: 380px;
margin-left: 43px;
margin-top: 30px;
box-shadow: 0px 5px 15px black;
@media (max-width: 499px) {
margin-left: 10px;  
`

export const Bio = styled.div`
position: relative;
bottom: 12px;
color: black;
text-align: center;
`
export const NameAge = styled.h3`
color: black;
margin-top: 4px;
text-align: center;
`

export const Descript = styled.div`
background-color: white;
color: black;
position: relative;
top: -100px;
left: 50px;
border-radius: 10px;
opacity: 0.7;
width: 320px;
box-shadow: 0px 0.5px 15px gray;

@media (max-width: 499px) {
left: 20px;

`
export const Footer =styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
`
export const IconDont = styled.div`
margin-top: -10px;
text-align: center;
position: relative;
:hover{
  cursor: pointer;
  left: 9px;   
  color: #85003C;
  transform: scale(1.2);
}
`
export const IconWant = styled.div`
margin-top: -2px;
text-align: center;
position: relative;
:hover{
  cursor: pointer;
  left: 9px;
  color: #FF429E;
  transform: scale(1.3);
}
`

// PageMatches
export const MainConteiner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
export const Column1PageMatches = styled.div`
background-color: #FFF3F5;
`
export const Column3PageMatches = styled.div`
background-color: #FFF3F5;
`
export const LogoBack = styled.img`
width: 50%;
margin-top: 10px;
`
export const IconMatches = styled.div`
margin-top: 9px;
margin-left: 20px;
position: relative;
:hover{
  cursor: pointer;
  left: 2px;
  color: #e6618d;
}
`
export const CentralConteiner = styled.div`
height: 100vh;
display: grid;
grid-template-rows: 1fr 9fr;
border-right: 1px solid lightgray;
border-left: 1px solid lightgray;
`
export const IMG = styled.img`
width: 50px;
height: 50px;
padding: 8px;
margin-left: 10px;
margin-top: 10px;
border-radius: 100%;
border: 1px solid gray;
`
export const Top =styled.div`
background-color: white;
display: grid;
grid-template-columns: 4fr 1fr;
border-bottom: 1px dotted gray;
`
export const CleanButton = styled.div`
margin-top: 200px;
margin-left: 140px;
`
