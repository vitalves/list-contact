import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contact" component={Contact} />

        <Route path="/" component={() => <h1>Erro 404 ;( </h1>} />
      </Switch>
    </BrowserRouter>
  );
}
