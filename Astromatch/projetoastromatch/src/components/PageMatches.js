import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GroupIcon from '@material-ui/icons/GroupOutlined';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const MainConteiner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

`
const Column1 = styled.div`
background-color: #FFF3F5;
`

const Column3 = styled.div`
background-color: #FFF3F5;
`

const LogoBack = styled.img`
width: 50%;
margin-top: 10px;
`
const Icon = styled.div`
margin-top: 9px;
margin-left: 20px;
position: relative;
:hover{
  cursor: pointer;
  left: 2px;
  color: #e6618d;
  
}
`
const CentralConteiner = styled.div`
height: 100vh;
display: grid;
grid-template-rows: 1fr 9fr;
border-right: 1px solid lightgray;
border-left: 1px solid lightgray;
`
const IMG = styled.img`
width: 50px;
height: 50px;
padding: 8px;
margin-left: 10px;
margin-top: 10px;
border-radius: 100%;
border: 1px solid gray;
`

const Header =styled.div`
background-color: white;
display: grid;
grid-template-columns: 4fr 1fr;
border-bottom: 1px dotted gray;
`
const CleanButton = styled.div`
margin-top: 200px;
margin-left: 140px;
`

function Matched(props) {

  const [match, setMatch] = useState([])
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  const getAllMatches = () =>{
      axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/matches`)
      .then (response => setMatch(response.data.matches))
      .catch(error => console.log(error))  
    }

    useEffect(() =>{
      getAllMatches()
    }, [])    

          
    const clearAllMatches = () =>{        
      axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/clear`)

    .then((res) => {
      console.log(res)
      getAllMatches()
      handleClose()
             
    })
    .catch((err) =>{
      console.log(err)
      alert ("Aconteceu um probleminha..." + err)
    })
  }




  return (
  
    <MainConteiner>
    <Column1></Column1>
    
    <CentralConteiner>

    <Header>
      <LogoBack src="https://i.imgur.com/VtPsdeO.jpg" />
      
      <Icon><GroupIcon style={{ fontSize:40}} onClick={props.changeToMatches}/></Icon>
    </Header>
    
    <div>

    {match.map((matching) =>{
            return( 
                <div><IMG src={matching.photo}/>
                
                <strong>{matching.name}</strong></div> 
            ) 
        })}

    </div>
    
    
    </CentralConteiner>

    <Column3>
    
    <CleanButton><Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Limpar matches
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Tem certeza que deseja limpar seus matches?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você está prestes a limpar todos os seus matches:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ai, não!
          </Button>
          <Button  onClick={handleClose} onClick = {clearAllMatches} color="primary" autoFocus>
            Eu quero, sim!
          </Button>
        </DialogActions>
      </Dialog></CleanButton>
    
    
    
    </Column3>   

    </MainConteiner>
)

}

export default Matched;
