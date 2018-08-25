import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LiveFeed from "./pages/LiveFeed";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Nav from "./components/Nav";
import API from "./utils/API";

class App extends Component{
  state = {
    googleuser: {},
  }

  componentDidMount() {
    API.getGoogleUser()
      .then(res =>
        //console.log('API RES',res.data)
        //this.setState({googleuser: res.data})
        //console.log(res.data)
        this.setState({googleuser: res.data})
      )
      .catch(err => console.log(err));
    //this.setState({_id: req.user[0]._id})
  }

  render () {
    return (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/> */}
        <Route exact path="/" render={()=><LiveFeed googleuser={this.state.googleusername}/>}/>
    {/* //googleuser={this.state.googleuser} component={LiveFeed} /> */}
        <Route exact path="/livefeed" render={()=><LiveFeed googleuser={this.state.googleuser}/>}/>
        <Route exact path="/myprofile" render={()=><Profile googleuser={this.state.googleuser}/>}/>
        <Route exact path="/myprofile/edit" render={()=><ProfileEdit googleuser={this.state.googleuser}/>} />
      </Switch>
    </div>
  </Router>
 )
}
}

export default App;
