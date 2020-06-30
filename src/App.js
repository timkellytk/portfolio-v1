import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import EvolutionaryTutorsProject from './components/Portfolio/EvolutionaryTutors/EvolutionaryTutorsProject/EvolutionaryTutorsProject';
import TheRamblerCoProject from './components/Portfolio/TheRamblerCo/TheRamblerCoProject/TheRamblerCoProject';
import Contact from './components/Contact/Contact';
import NotFoundPage from './components/Utility/NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route
              path="/portfolio/evolutionary-tutors"
              exact
              component={EvolutionaryTutorsProject}
            />
            <Route
              path="/portfolio/the-rambler-co"
              exact
              component={TheRamblerCoProject}
            />
            <Route path="/contact" exact component={Contact} />
            <Route path="/404" exact component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
