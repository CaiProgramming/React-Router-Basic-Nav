import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Navigation" component={Navigation} />
    </div>
  </Router>
);

export default App;
