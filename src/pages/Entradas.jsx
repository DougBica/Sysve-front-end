import {AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {CardDiv} from '../Components/styledComponents';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function Entradas(props){
  return (
    <CardDiv>
      <Paper elevation={3} style={{width: '100%'}}>
        <AppBar position="static" style={{height: '70px',
    display: 'grid'}}>
          <Toolbar variant="dense">
            <IconButton  edge="start" color="inherit" aria-label="menu">
              <ArrowBackIosIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" style={{flexGrow:'1'}}>
              Entradas
            </Typography>
            <Button color="inherit">Nova Entrada</Button>
          </Toolbar>
          </AppBar>
      </Paper>
    </CardDiv>
  )
}