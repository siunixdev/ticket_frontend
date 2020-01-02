import React, { Component } from "react";
import { Divider, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Favorites from "../components/Favorites";
import ProfileDetail from "../components/Profile";
import ProfileEdit from "../components/ProfileEdit";

class Profile extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: "10px" }}>
          <h1 style={{ color: "#E74267" }}>Payments</h1>
          <Grid container spacing={3}></Grid>
        </div>
      </>
    );
  }
}

export default Profile;
