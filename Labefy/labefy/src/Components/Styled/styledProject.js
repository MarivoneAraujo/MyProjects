import styled from 'styled-components'

// App
export const AppContainer = styled.div`
width: 98.7vw;
height: 100vw;
background-color: orange;
display: flex;
flex-direction: column;
font-family: 'Poppins', sans-serif;

@media (min-width:500px) and (max-width: 800px) {
height: 200vw;
width: 100vw;
};

@media (max-width: 499px) {
height: 200vw;
width: 100vw
};
`
// Header
export const HeaderContainer = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom-style: solid;
margin: 10px;

`
export const Titulo = styled.h1`
font-size: 100px;
text-shadow: 2px 2px 2px white;

@media (max-width: 499px) {
  font-size: 60px;

};
`
export const ButtonsContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-between;

@media (max-width: 499px) {
  width: 150px;
  height: 77px;
};
`

export const ButtonHeader = styled.button`
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

@media (max-width: 499px) {
  margin: 10px;
};
`

// PlaylistCard
export const PlaylistCardContainer = styled.div`  
display: flex;
align-items: center;
margin-bottom: -30px;  
`
export const OpenButton = styled.img`
width: 35px;
height: 35px;
margin-bottom: 9px;
:hover{
  cursor: pointer; 
}
`
export const NameContainer = styled.p`
margin-left: 20px;
margin-right: 20px;
font-size: 30px;
padding: 3px 10px;
background-color: #43008D;
color: white;
box-shadow: 2px 2px 1px black;
text-shadow: 2px 2px 1px black;
`
export const DeleteButton = styled.img`
width: 25px;
height: 25px;
:hover{
  cursor: pointer; 
}
`

// PlaylistCreationPage
export const PlaylistCreationFormContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
margin: 90px;
font-size: 40px;
`
export const Input = styled.input`
width: 350px;
margin: 30px;
`
export const PlaylistCreationForm = styled.form`
height: 100px;
display: flex;
flex-direction: column;
align-items: center;

`
export const Label = styled.label`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 70px;
color: white;
text-shadow: 2px 2px 2px black;

@media (max-width: 499px) {
  margin-left: 100px;
};
`

export const Button = styled.button`
background-color: #43008D;
text-shadow: 2px 2px 2px black;
box-shadow: 1px 1px 1px black;
color: white;
padding: 4px 6px;
border: none;
:hover{
  cursor: pointer;
  color: yellow;
  transform: scale(1.2);
}
`

// PlaylistDetail
export const TrackCreationForm = styled.form`
text-align: center;
background-color: black;
color: white;
text-shadow: 1px 1px 1px black;
height: 200px;
margin-top: 30px;
border: 1px solid black;
margin-left: 200px;
width: 900px;
padding: 10px;
box-shadow: 1px 1px 6px black; 


@media (min-width:500px) and (max-width: 800px) {
width: 70vw;
margin-left: 130px;};

@media (max-width: 499px) {
height: 200vw;
width: 50vw;
margin-left: 80px;};
`
export const H1 = styled.h1`
color: white;
text-shadow: 1px 1px 1px black;
text-align: center;
`
export const ButtonDetailPage = styled.button`
background-color: #43008D;
text-shadow: 2px 2px 2px black;
box-shadow: 1px 1px 1px black;
color: white;
padding: 6px 8px;
border: none;
margin: 10px;
:hover{
  cursor: pointer;
  transform: scale(1.2);
}
`
export const ButtonReturn = styled.img`
margin-top: 110px;
margin-left: 80%;
width: 30px;
height: 30px;
:hover{
  cursor: pointer; 
}
`


// Playlists
export const PlaylistsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

// TrackCard
export const TrackCardContainer = styled.div`
margin: 10px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: center;
div{
  display: flex;
  align-items: center;
}
`
export const TrackContainer = styled.h4`
margin: 10px;
margin-left: 20px;
margin-right: 20px;
font-size: 20px;
padding: 3px 10px;
background-color: #43008D;
color: white;
box-shadow: 2px 2px 1px black;
text-shadow: 2px 2px 1px black;

@media (max-width: 499px) {
font-size: 15px;
margin: 1px;
}
`
export const ArtistContainer = styled.p`
margin-right: 10px;
margin-left: 20px;
margin-right: 20px;
font-size: 16px;
padding: 3px 10px;
background-color: black;
color: white;
box-shadow: 2px 2px 1px black;
text-shadow: 2px 2px 1px black;

@media (max-width: 499px) {
font-size: 15px;}
`
export const DeleteButtonCard = styled.img`
width: 20px;
height: 20px;
`
export const Audio = styled.audio`
width: 500px;
height: 30px;

@media (max-width: 499px) {
width: 300px;
`


