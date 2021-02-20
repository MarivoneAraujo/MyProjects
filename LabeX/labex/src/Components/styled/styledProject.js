import styled from 'styled-components'


// Header
export const HeaderLayout = styled.div`
display: grid;
grid-template-rows: 1fr 0.3fr;
`
export const Logo = styled.img`
width: 25%;
margin-left: 75%;
object-fit: cover;
:hover{
  cursor: pointer;
 }
@media (max-width: 499px) {
  width: 80px;
}
`
export const Menu = styled.div`
display: grid;
grid-template-columns: 0.3fr 0.5fr 0.7fr 1fr 1fr 1fr 0.5fr 0.5fr;
@media (min-width:500px) and (max-width: 800px) {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
};
@media (max-width: 499px) {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
`
export const MenuButton = styled.button`
font-family: monospace;
background-color: white;
font-size: 20px;
border: none;
:hover{
  cursor: pointer;
  left: 9px;   
  color: blue;
  transform: scale(1.2);
}
`

// About
export const Central = styled.div` 
width: 100%;
height: 700px;;
background-image: url('http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/06/europe_s_rockets/19421217-6-eng-GB/Europe_s_rockets.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;
display: grid;
grid-template-rows: 1fr 1fr;

@media (min-width:500px) and (max-width: 800px) {
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100%  
}
@media (max-width: 499px) {
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100% 
}
`
export  const Quote = styled.div`
margin-left: 20px;

@media (min-width:500px) and (max-width: 800px) {
margin-left: 1px;
}
@media (max-width: 499px) {
margin-left: 1px;
}
`
export  const Line = styled.div`
font-family: monospace;
font-size: 20px;
margin-left: 240px;
padding: 20px;
text-shadow: 1px 1px 5px blue;

@media (min-width:500px) and (max-width: 800px) {
margin-left: 10px;
}
@media (max-width: 499px) {
margin-left: 10px;
}
`
export const Author = styled.div`
font-family: monospace;
font-size: 17px;
margin-left: 630px;
text-shadow: 1px 1px 5px blue;

@media (min-width:500px) and (max-width: 800px) {
margin-left: 5px;
}
@media (max-width: 499px) {
margin-left: 250px;
}
`
export  const GridAbout = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 2fr;
margin-top: -90px;
margin-left: 30%;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const H1 = styled.h1`
font-family: monospace;
`
export const Line2 = styled.div`
font-family: monospace;
font-size: 22px;
margin-left: 850px;

@media (min-width:500px) and (max-width: 800px) {
margin-left: 20px;
}
@media (max-width: 499px) {
margin-left: 20px;
}
`
export const Author2 = styled.div`
font-family: monospace;
font-size: 20px;
margin-left: 1030px;
padding: 15px;

@media (min-width:500px) and (max-width: 800px) {
margin-left: 20px;
}
@media (max-width: 499px) {
margin-left: 15px;
}
`
export const Author2Detail = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 10px;
margin-left:-60px;

@media (min-width:500px) and (max-width: 800px) {
margin-left: 10px;
}
@media (max-width: 499px) {
margin-left: 10px;
}
`

// Adm Details
export const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
`

export const BackButton = styled.button`
font-size: 25px;
margin: 50px;
margin-top: 200px;
width: 150px;
height: 100px;
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
}

@media (min-width:500px) and (max-width: 800px) {
  font-size: 15px;
  width: 100px;
  margin: 60px;
  margin-top: 150px;
}
@media (max-width: 499px) {
  font-size: 15px;
  width: 100px;
  margin: 10px;
  margin-top: 150px;
}
`
export const CentralDetail = styled.div`
border: 1px solid black;
padding: 10px;
margin-top: 50px;
margin-right: 50px;
`

// Application Form Page
export const ApplicationForm = styled.div` 
font-family: monospace;
font-size: 20px;
padding-top: 10px;
width: 100%;
height: 900px;
background-image: url('https://www.nationalgeographic.com/interactive-assets/nggraphics/ngm-1907-moon-landing-rockets/build-2019-06-13_12-02-54/ngm-assets/img/ngm-1907-moon-landing-rockets_ai2html-desktop-medium.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;

@media (min-width:500px) and (max-width: 800px) {
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100%    
}
@media (max-width: 499px) {  
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100% 
}
`
export const InputsForm = styled.div`
padding-top: 5px;
padding-left: 55px;
background-color: white;
color: black;
position: relative;
left: 30px;
border-radius: 10px;
opacity: 0.9;
width: 350px;
box-shadow: 0px 0.5px 15px gray;
`
export const SelectTrip = styled.select`
width: 310px;
`
export const ButtonSend = styled.button`
margin-left: 90px;
margin-bottom: 10px;
:hover{
  cursor: pointer;
}   
`

// Create Trip Page
export const BigGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
`
export const BackToAdm = styled.button`
font-size: 25px;
margin: 50px;
margin-top: 200px;
width: 150px;
height: 100px;
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
}
@media (min-width:500px) and (max-width: 800px) {
  margin-top: 150px;
}
@media (max-width: 499px) {
  font-size: 15px;
  width: 100px;
  margin: 10px;
  margin-top: 150px;
}
`
export const CreateTripForm = styled.div`
font-family: monospace;
`
export const CreateTripButton = styled.button`
font-family: monospace;
font-family: monospace;
background-color: white;
margin-bottom: 10px;
margin-left: 27px;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}
`

// Home Page

export const Main = styled.div`
height: 2000px;
`
export const MainIMG = styled.img`
width: 100%;
`
export const SearchTrip = styled.input`
font-family: monospace;
background-image: url('https://i.imgur.com/m5OPwOk.png');
background-position: 99%;
background-repeat: no-repeat;
background-size:3.5%;
width: 800px;
height: 25px;
margin-left: 18%;
margin-top: 30px;
margin-bottom: 30px;
border-top: none;
border-left: none;
border-right: none;
:hover{
  cursor: pointer;
}
@media (min-width:500px) and (max-width: 800px) {
  width: 400px;
  margin-left: 50px;
};
@media (max-width: 499px) {
  width: 100px;
}
`
export const Contador = styled.div`
margin-left: 320px;
font-size: 20px;
font-family: monospace;
@media (min-width:500px) and (max-width: 800px) {
  margin-left: 10px;
};
@media (max-width: 499px) {
  margin-left: 10px;
  text-align: center;
}`

export const GridTrips = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
@media (min-width:500px) and (max-width: 800px) {
display: grid;
grid-template-columns: 1fr ;
margin-left: -60px;
};
@media (max-width: 499px) {
display: grid;
grid-template-columns: 1fr ;
};
`
export const CardGrid = styled.div`
font-family: monospace;
width: 300px;
height: 200px;
margin: 25px;
padding: 5px; 
padding-left: 50px;
background-color: white;
color: black;
top: 10px;
left: 30px;
border-radius: 10px;
opacity: 0.7;
box-shadow: 0px 0.5px 15px gray;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.1);
} 
@media (min-width:500px) and (max-width: 800px) {
  margin-left: 150px;
};
@media (max-width: 499px) {
  margin-right: 10px;
}
`
export const ButtonDetails = styled.button`
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}`


// Login Page
export const CentralLoginPage = styled.div` 
width: 100%;
height: 700px;
background-image: url('https://arquitetoexpert.com/wp-content/uploads/2019/01/rocket.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;
@media (min-width:500px) and (max-width: 800px) {
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100%  
}
@media (max-width: 499px) {
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100% 
}
`
export const Form = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding-left: 350px;
padding-top: 150px;
font-family: monospace;
font-size: 20px;
`
export const BoxLogin = styled.div`
font-family: monospace;
width: 250px;
height: 350px;
margin: 25px;
padding: 5px; 
padding-left: 50px;
background-color: white;
color: black;
top: 10px;
left: 30px;
border-radius: 10px;
opacity: 0.7;
box-shadow: 0px 0.5px 15px gray;
:hover{
  cursor: pointer;
  color: blue;
} 
@media (min-width:500px) and (max-width: 800px) {
  margin-left: -400px;
  margin-top: -40px;
}
@media (max-width: 499px) {
  margin-left: -330px;
  margin-top: -50px;
}

`
export const ButtonDits = styled.button`
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}
`

// Trip Details Page

export const MainGridTripDetailsPage = styled.div`
display: grid;
grid-template-columns: 1fr 1.4fr 1fr;
`
export const ButtonCreate = styled.button`
font-size: 25px;
margin: 50px;
margin-top: 200px;
width: 150px;
height: 100px;
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
}
`
export const CardGridTripDetailsPage = styled.div`
font-family: monospace;
width: 300px;
height: 150px;
margin: 50px;
padding: 30px;
background-color: white;
color: black;
top: 10px;
left: 30px;
border-radius: 10px;
opacity: 0.7;
box-shadow: 0px 0.5px 15px gray;
:hover{
  cursor: pointer;
  color: blue;
 }
`
export const Titulo = styled.div`
font-family: monospace;
font-size: 25px;
width: 300px;
margin: 30px;
padding-left: 75px;
`
export const Trips = styled.div`
font-size: 20px;
color: white;
`

// Trips List Page
export const CentralTripsListPage = styled.div`
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100%;
color: white;
padding: 10px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
@media (min-width:500px) and (max-width: 800px) {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  padding: 5px;
  };
@media (max-width: 499px) {
  display: grid;
  grid-template-columns: 1fr ;
  padding: 5px;
}
`
export const CardGridTripsListPage = styled.div`
font-size: 15px;
font-family: monospace;
width: 315px;
height: 350px;
margin-top: 50px; 
padding: 30px;
background-color: white;
color: black;
border-radius: 10px;
opacity: 0.7;
box-shadow: 0px 0.5px 15px gray;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.1);
} 
`
export const ButtonDitsTripsListPage = styled.button`
font-family: monospace;
background-color: white;
margin-top: 20px;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}
`
