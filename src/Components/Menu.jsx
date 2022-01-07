import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { BrowserRouter, Link } from 'react-router-dom';
import Rotas from '../routes/Routes'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Menu(props) {
  const itensMenu = [
    {
      titulo: "Vender",
      url: "/vendas",
      icone: <AttachMoneyIcon/>
    },
    {
      titulo: "Entradas",
      url: "/entradas",
      icone: <AddShoppingCartIcon/>
    },
    {
      titulo: "Adicionar Produto",
      url: "/produto",
      icone: <AddIcon/>
    }
  ];
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
      
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Sysve
        </Typography>
      </Toolbar>
    </AppBar>
    
      <List>
        {itensMenu.map((item) => (
          <div>         
            <ListItem component={Link} to={item.url} key={item}>
              <ListItemIcon>{item.icone}</ListItemIcon>
              <ListItemText primary={item.titulo} />
            </ListItem>
            <Divider/>
          </div>
        ))}
      </List>   
   
    </div>
  );

  return (
    <div>     
        <React.Fragment key={'left'}>
          <Drawer anchor={'left'} open={props.open} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>    
    </div>
  );
}
