import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// PAGES
import Register from "./pages/register";
import Login from "./pages/Login";
import Events from "./pages/Events";
import EventsDetail from "./pages/EventDetail";
import categoryDetail from "./pages/CategoryDetail";

// Other Component
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// component
import Header from "./components/Header";
import CategoryDetail from "./pages/CategoryDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Header */}
          <Header />
          <Grid container>
            <Grid item lg md sm xs></Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Card
                style={{
                  marginTop: "50px",
                  width: "70%",
                  marginRight: "auto",
                  marginLeft: "auto"
                }}
              >
                <CardContent>
                  {/* Content */}
                  <div>
                    <Switch>
                      <Route path="/register" component={Register} />
                      <Route path="/login" component={Login} />
                      <Route path="/event/:id" component={EventsDetail} />
                      <Route
                        path="/category/:id/events"
                        component={CategoryDetail}
                      />
                      <Route path="/" component={Events} />
                    </Switch>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg md sm xs></Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
