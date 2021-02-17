import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GroupIcon from '@material-ui/icons/GroupAdd';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Logo = styled.img`
width: 80%;
margin-left: 70px;
`
const Icon = styled.div`
margin-top: 9px;
margin-left: 20px;
position: relative;
:hover{
  cursor: pointer;
  left: 1px;
  color: #e6618d;  
}
`
const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Column1 = styled.div`
background-color: #FFF3F5;
`

const Column3 = styled.div`
background-color: #FFF3F5;
`
const Header =styled.div`
border-bottom: 1px solid lightgray;
display: grid;
grid-template-columns: 4fr 1fr;
`
const CenterGrid = styled.div`
border: 1px solid lightgray;
`
const Center = styled.div`
height: 437px;
`
const IMG = styled.img`
/* padding: 3px; */
width: 345px;
height: 380px;
margin-left: 43px;
margin-top: 30px;
box-shadow: 0px 5px 15px black;
`
const Bio = styled.div`
position: relative;
bottom: 12px;
color: black;
text-align: center;
`
const NameAge = styled.h3`
color: black;
margin-top: 4px;
text-align: center;
`

const Descript = styled.div`
background-color: white;
color: black;
position: relative;
top: -100px;
left: 50px;
border-radius: 10px;
opacity: 0.7;
width: 320px;
box-shadow: 0px 0.5px 15px gray;
`

const Footer =styled.div`
display:grid;
grid-template-columns: 1fr 1fr;


`
const IconDont = styled.div`
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
const IconWant = styled.div`
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

function MainPage(props) {

  const [user, setUser] = useState({})
  

  const getCruch = () =>{

    axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/person`)
    .then (response => setUser(response.data.profile))
    .catch(error => console.log(error))  
  }
  useEffect(() =>{
    getCruch()
  }, {})

 
  const doMatch =(id) =>{

    const body ={
        "id": `${id}`,
        "choice": true
      }

      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/choose-person
      `, body)

      .then((res) => {
        console.log(res)
        getCruch()

      })
      .catch((err) =>{
        console.log(err)
        alert ("Aconteceu um probleminha..." + err)
      })
    }

    const dontMatch =(id) =>{

      const body ={
          "id": `${id}`,
          "choice": false
        }
  
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/choose-person
        `, body)
  
        .then((res) => {
          console.log(res)
          getCruch()
  
        })
        .catch((err) =>{
          console.log(err)
          alert ("Aconteceu um probleminha..." + err)
        })
      }  

  return (
  <MainGrid>
    <Column1>
    </Column1>

    <CenterGrid>
      
      <Header>

      <Logo src="https://i.imgur.com/VtPsdeO.jpg" />
      
      <Icon><GroupIcon style={{ fontSize:40}} onClick={props. stayMain}/></Icon>
      
      </Header>
      
      <Center>
      

      <IMG src={user.photo}/>
      
      

          <Descript>
            
            <NameAge>{user.name}, {user.age}</NameAge> 
            
            <Bio>{user.bio}</Bio>

          </Descript>

      </Center>


      <Footer>

      <IconDont><CloseIcon style={{ fontSize:80}}
      onClick = {( ()  => dontMatch(user.id) )}
      /></IconDont>

      <IconWant><FavoriteIcon style={{ fontSize:65}}
      onClick = {( ()  => doMatch(user.id) )}
      /></IconWant>
      
      </Footer>

    </CenterGrid>
    
    <Column3>
    </Column3>  

  </MainGrid>

  );
}

export default MainPage;
