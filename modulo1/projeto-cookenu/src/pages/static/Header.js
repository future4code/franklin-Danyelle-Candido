import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {StyledToolbar} from './styled'
import {goToRecipesList, goToLogin} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom';


function Header() {
  
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={()=>goToRecipesList(navigate)} color="inherit" >Cookenu</Button>
          <Button onClick= {()=>goToLogin(navigate)}color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

