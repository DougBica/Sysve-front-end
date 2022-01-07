import { useEffect, useState } from 'react';
import Axios from 'axios'

import { AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Card, 
  Button, 
  CardMedia, 
  Paper, 
  TextField, 
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core';

import {CardDiv, CardInterno} from '../../Components/styledComponents';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import produtoSemImagem from '../../image/produto-sem-imagem.png';
import axios from 'axios';

export default function Produto(props) {
  const [listaUnidade, setListaUnidade] = useState([]);
  const [imagemUrl, setImagemUrl] = useState(produtoSemImagem);
  const [produto, setProduto] = useState({
    nome: null,
    unidade: '',
    quantidadeEmbalagem: null,
    codigoBarras: null,
    imagem: null,
  })

  useEffect (() => {
    carregaListaUnidade();
  },[])

  const carregaListaUnidade = async () => {
    axios.get("http://localhost:8080/api/public/listar-unidades").then(response => {
      setListaUnidade(response.data)
    }).catch(() => console.log("Erro"));
  }
  
  const mudaImagem = (e) => {
    let reader  = new FileReader();
    reader.onload = function(e)  {
      setImagemUrl(e.target.result);
    }
    if (e.target.files[0])
      reader.readAsDataURL(e.target.files[0]);
    else 
      setImagemUrl(produtoSemImagem);
  }

  const changeUnidade = (event) => {
    setProduto({...produto, unidade:event.target.value});
  }

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
            Adicionar Produto
          </Typography>
        </Toolbar>
      </AppBar>
      <CardInterno style={{marginBottom: '0px'}}>
        <Grid container spacing={2}>  
          <Grid item xs={2} style={{ maxHeight: '200px'}}> 
              <Card>
                <Typography variant="h6" 
                  style={{display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                >
                    Foto
                </Typography>
                <CardMedia
                  component="img"
                  image={imagemUrl ? imagemUrl : undefined}
                  style={{ height: "200px", margin: "auto", objectFit: 'contain'}}
                >
                </CardMedia>
              </Card>       
          </Grid>  
          <Grid container item spacing={2} xs={9} style={{marginLeft:'3%'}}> 
            <Grid item xs={6}>
              <TextField               
                label="Nome Produto" 
                variant="outlined" 
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" style={{minWidth:'100%'}}>
                <InputLabel>Unidade</InputLabel>
                <Select
                  value={produto.unidade}
                  onChange={changeUnidade}
                  label="Unidade"
                >
                  {listaUnidade.length > 0 ? listaUnidade.map(un => {
                    return <MenuItem value={un} style={{minWidth:'100%'}}>{un.descricao}</MenuItem>
                  }) : ""}
                </Select>
              </FormControl>

            </Grid>  
            <Grid item xs={3}>
              <TextField  label="Quantidade Embalagem" variant="outlined" type="number"/>
            </Grid>   
            <Grid item xs={8}>
              <TextField label="Código de Barras" variant="outlined" type="number" fullWidth/>
            </Grid>   
            <Grid item xs={6}>
              <TextField 
                label="Imagem Produto"    
                InputLabelProps={{shrink: true,}} 
                variant="outlined" 
                onChange={mudaImagem}
                type="file" 
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginLeft:'70%'}}>
          <Grid item xs={1}> 
            <Button 
              style={{color: '#fff' , backgroundColor:'#26A557', minWidth:'120px', fontWeight:''}}             
            >
              Salvar
            </Button>
          </Grid>
        </Grid> 
      </CardInterno>
    </Paper>
  </CardDiv>
  )
}