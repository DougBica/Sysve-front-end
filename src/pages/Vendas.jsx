import {AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {CardDiv} from '../Components/styledComponents';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}
const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];
const TAX_RATE = 0.07;
const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export default function Vendas(props) {


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
            Venda 
          </Typography>
        </Toolbar>
      </AppBar>
      <div styles={{margin: '15px'}}>
        <TableContainer component={Paper}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Imagem</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell align="right">Quantidade</TableCell>
                <TableCell align="right">Preço Unitário</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={5} />
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  </CardDiv>
  )
}