import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LiveFeed from "./pages/LiveFeed";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Nav from "./components/Nav";

class App extends Component{
  state = {
    googleuser: {}
  }

  componentDidMount() {
    //this.setState({_id: req.user[0]._id})
  }

  render () {
    return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={LiveFeed} />
        <Route exact path="/livefeed" component={LiveFeed} />
        <Route exact path="/myprofile" component={Profile} />
        <Route exact path="/myprofile/edit" component={ProfileEdit} />
      </Switch>
    </div>
  </Router>
 )
}
}

export default App;
