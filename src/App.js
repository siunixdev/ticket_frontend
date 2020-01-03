import React, { Component } from "react";
import "./App.css";

// PAGES
import Register from "./pages/register";
import Login from "./pages/Login";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";
import EventsDetail from "./pages/EventDetail";
import Profile from "./pages/Profile";
import Payments from "./pages/Payments";
import PaymentDetail from "./pages/PaymentDetail";
import Tickets from "./pages/Tickets";

// Other Component
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// component
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryDetail from "./pages/CategoryDetail";
import { Paper } from "@material-ui/core";

import { getUserProfil } from "./_actions/user";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.userDetail1();
    console.log(this.props.userDetail1.data);
  }

  render() {
    return (
      <Router>
        <div style={{ minHeight: "100%", position: "relative" }}>
          {/* Header */}
          <Header />
          <Grid container style={{ paddingBottom: "60px" }}>
            <Grid item lg md sm xs></Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Paper
                elevation={0}
                style={{
                  marginTop: "50px",
                  width: "70%",
                  marginRight: "auto",
                  marginLeft: "auto"
                }}
              >
                {/* Content */}
                <div>
                  <Switch>
                    <Route
                      path="/category/:id/events"
                      component={CategoryDetail}
                    />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/payments" component={Payments} />
                    <Route path="/tickets" component={Tickets} />
                    <Route path="/payment/:id" component={PaymentDetail} />
                    <Route path="/event/add" component={AddEvent} />
                    <Route path="/event/:id" component={EventsDetail} />
                    <Route path="/" component={Events} />
                  </Switch>
                </div>
              </Paper>
            </Grid>
            <Grid item lg md sm xs></Grid>
          </Grid>
          <Footer style={{ marginTop: "auto" }} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userDetail1: () => {
      dispatch(getUserProfil());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
