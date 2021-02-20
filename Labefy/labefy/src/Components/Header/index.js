
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom-style: solid;
margin: 10px;
`

const Titulo = styled.h1`

font-size: 100px;
text-shadow: 2px 2px 2px white;

`

const ButtonsContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-between;
`

const Button = styled.button`
background-color: #43008D;
text-shadow: 2px 2px 2px black;
box-shadow: 1px 1px 1px black;
color: white;
padding: 6px 8px;
border: none;
:hover{
  cursor: pointer;
  transform: scale(1.2);
}
`


const Header = (props) =>{
  return(
    <HeaderContainer>

      <Titulo>Labefy</Titulo>

      <ButtonsContainer>
        <Button 
        onClick = {() => props.changePage("playListCreationPage")}
        >Criar nova Playlist</Button>
        
        <Button
        onClick = {() => props.changePage("playlistManagerPage")}
        >Ver playlists</Button>

      </ButtonsContainer>

    </HeaderContainer>
  )
}

export default Header





// import React from "react";
// import styled from "styled-components";

// const Titulo = styled.div`
// color: white;
// font-size: 70px;
// margin-left: 30px;
// text-shadow: 4px 5px 5px black; 
// `

// const Topper = styled.div`
// /* border: 3px solid green; */
// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
// width: 100%;
// height: 100px;
// background-color: purple;
// align-items: center;

// `

// const Button = styled.button`
// width: 100px;
// height: 40px;
// box-shadow: 2px 2px 4px black;
// border-radius: 30px;

// :hover{
//     cursor: pointer;
//     transform: scale(1.1);
//     transition: all .4s ease-in-out;
// }
// `

// const Header = () => {
    
//     return (
      
//       <Topper>

//         <Titulo>Labefy</Titulo>
//         <div></div>
//         <div></div>
//         <div></div>
//         <Button>Cadastrar Playlist</Button>
//         <Button>Visualizar playlist</Button>
//         <Button>Adicionar músicas</Button>
//         <Button>Buscar músicas</Button>

//       </Topper>
//     );
//   }
  
//   export default Header;
  