import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GroupIcon from '@material-ui/icons/GroupAdd';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Logo, Icon, MainGrid, Column1, Column3, Header,  Center, CenterGrid, IMGMain, Bio, NameAge,  Descript, Footer, IconDont, IconWant} from "../components/styled/styledProject.js";


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
        <IMGMain src={user.photo}/>   
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
