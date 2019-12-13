import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';

// import { Router } from 'react-router-dom';
import history from './services/history';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import ContactAdd from './pages/Contact/Add';
import ContactEdit from './pages/Contact/Edit';
import ContactView from './pages/Contact/View';
import ErroNotFound from './pages/error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/contact/add" component={ContactAdd} />
          <Route path="/contact/edit/:id" component={ContactEdit} />
          <Route path="/contact/view/:id" component={ContactView} />

          <Route path="/" component={ErroNotFound} />
        </Switch>
        <Footer />
      </Router>
    </BrowserRouter>
  );
}
