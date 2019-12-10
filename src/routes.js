import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Contact from './pages/Contact';
import ContactAdd from './pages/Contact/Add';
import ContactEdit from './pages/Contact/Edit';
import ErroNotFound from './pages/error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/contact/add" component={ContactAdd} />
        <Route path="/contact/edit/:id" component={ContactEdit} />

        <Route path="/" component={ErroNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
