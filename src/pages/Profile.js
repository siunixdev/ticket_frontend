import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Favorites from "../components/Favorites";
import ProfileDetail from "../components/Profile";
import ProfileEdit from "../components/ProfileEdit";

class Profile extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/profile/edit" component={ProfileEdit} />
          <Route path="/Profile" component={ProfileDetail} />
        </Switch>
        <div style={{ marginBottom: "20px" }}>
          <Divider
            light
            style={{ marginTop: "0px", marginBottom: "10px" }}
          ></Divider>
        </div>

        <Favorites />
      </Router>
    );
  }
}

export default Profile;
