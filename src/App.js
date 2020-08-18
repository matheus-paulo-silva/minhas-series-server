import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import Header from './Header';
import Generos from './Generos';
import Series from './Series';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import NovaSerie from './NovaSerie';
import InfoSerie from './InfoSerie';

const Home = () => {
  return(
    <h1>Home</h1>
  )
}

function App() {

  return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
          <Route  path='/' exact component={Home} />
          <Route  path='/generos' exact component={Generos} />
          <Route  path='/generos/novo' exact component={NovoGenero} />
          <Route  path='/generos/:id' exact component={EditarGenero} />
          <Route  path='/series' exact component={Series} />
          <Route  path='/series/novo' exact component={NovaSerie} />
          <Route  path='/series/:id' exact component={InfoSerie} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;






