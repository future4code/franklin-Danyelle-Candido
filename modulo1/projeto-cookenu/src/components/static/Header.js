import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {StyledToolbar} from './styled'
import {goToRecipesList, goToLogin} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom';


const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction= () =>{
    if(token){
      logout()
      setRightButtonText("Login")
      goToLogin(navigate)
    }else{
      goToLogin(navigate)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={()=>goToRecipesList(navigate)} color="inherit" >Cookenu</Button>
          <Button onClick= {rightButtonAction}color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

