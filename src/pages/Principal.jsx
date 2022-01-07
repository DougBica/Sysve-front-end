import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import Menu from '../Components/Menu';
import Rotas from '../routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function Principal(){
  const [open, setOpen] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton onClick={() => setOpen(!open)} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
          <Menu open={open}/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Menu
          </Typography>
        </Toolbar>
        </AppBar>
        <Rotas/>  
      </BrowserRouter>
    </div>
  )
};

export default Principal;