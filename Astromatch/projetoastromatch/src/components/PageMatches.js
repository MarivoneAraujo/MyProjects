import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GroupIcon from '@material-ui/icons/GroupOutlined';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MainConteiner, Top, Column1PageMatches,  Column3PageMatches,  LogoBack, IconMatches, CentralConteiner, IMG, CleanButton} from "../components/styled/styledProject";

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
    <Column1PageMatches></Column1PageMatches>
    
    <CentralConteiner>

    <Top>
      <LogoBack src="https://i.imgur.com/VtPsdeO.jpg" />
      
      <IconMatches><GroupIcon style={{ fontSize:40}} onClick={props.changeToMatches}/></IconMatches>

    </Top>
    
    <div>

    {match.map((matching) =>{
            return( 
                <div><IMG src={matching.photo}/>
                
                <strong>{matching.name}</strong></div> 
            ) 
        })}

    </div>
    
    
    </CentralConteiner>

    <Column3PageMatches>
    
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
    
    
    
    </Column3PageMatches>   

    </MainConteiner>
)

}

export default Matched;
