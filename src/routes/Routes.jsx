import { Route, Switch } from 'react-router-dom';
import Vendas from '../pages/Vendas';
import Entradas from '../pages/Entradas';
import Produto from '../pages/produto/Produto';


export default function Rotas(){
  return (
      <Switch>
        <Route path="/vendas" component={Vendas}/>
        <Route path="/entradas" component={Entradas}/>
        <Route path="/produto" component={Produto}/>
      </Switch>
  )
}