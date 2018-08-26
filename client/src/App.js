import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LiveFeed from "./pages/LiveFeed";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Nav from "./components/Nav";
import API from "./utils/API";

class App extends Component {
  state = {
    googleuser: {},
  }

  componentDidMount() {
    API.getGoogleUser()
      .then(res =>
        //console.log('API RES',res.data)
        //this.setState({googleuser: res.data})
        //console.log(res.data)
        this.setState({ googleuser: res.data })
      )
      .catch(err => console.log(err));
    //this.setState({_id: req.user[0]._id})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/> */}
            <Route exact path="/" render={(props) => <LiveFeed {...props} googleuser={this.state.googleuser} />} />
            {/* //googleuser={this.state.googleuser} component={LiveFeed} /> */}
            <Route exact path="/livefeed" render={(props) => <LiveFeed {...props} googleuser={this.state.googleuser} />} />
            <Route exact path="/myprofile" render={(props) => <Profile {...props} googleuser={this.state.googleuser} />} />
            <Route exact path="/myprofile/edit" render={(props) => <ProfileEdit {...props} googleuser={this.state.googleuser} />} />

            {/* <Route exact path="/myprofile/edit" component={ProfileEdit} />
            <Route exact path="/myprofile/edit" render={(props) => (<ProfileEdit {...props} data={googleuser= this.state.googleuser})}

            <Route path='/page' component={Page} />
            const extraProps = {color: 'red' }
            <Route path='/page' render={(props) => (
              <Page {...props} data={extraProps} />
            )} /> */}

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
