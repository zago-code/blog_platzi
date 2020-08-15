import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './menu'
import Usuarios from './usuarios';

const Tareas = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Switch>
        <Route exact path='/' component={Usuarios} />
        <Route exact path='/tareas' component={Tareas} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;