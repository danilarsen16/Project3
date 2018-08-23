import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LiveFeed from "./pages/LiveFeed";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={LiveFeed} />
        <Route exact path="/livefeed" component={LiveFeed} />
        <Route exact path="/myprofile" component={Profile} />
      
      </Switch>
    </div>
  </Router>
);

export default App;
