import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import Projetos from './pages/Projetos';


// import Modal from './pages/Modal';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portfolio" component = {Portfolio} />
        <Route path="/projetos" component = {Projetos} />
      </Switch>
    </BrowserRouter>
  )
}