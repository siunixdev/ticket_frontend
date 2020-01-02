import React, { Component } from "react";
import "../App.css";

// Other Component
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { sign } from "../_actions/user";
import { connect } from "react-redux";
// import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  onChangeusername = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.userSign1(user);
  };

  render() {
    const { message, token } = this.props.user.data;

    if (message === "Success") {
      localStorage.setItem("token", token);
      window.location.href = "http://localhost:3000/";
    }

    return (
      <>
        <Grid container>
          <Grid item lg md sm xs>
            <div className="loginLeftBackground"></div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div style={{ width: "70%", margin: "auto" }}>
              <div
                style={{
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  textAlign: "center",
                  alignContent: "center"
                }}
              >
                <h2>Welcome Back.</h2>
                <h4>{this.state.message}</h4>
              </div>
              <div
                style={{
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  textAlign: "center",
                  alignContent: "center",
                  marginTop: "50px",
                  marginBottom: "30px"
                }}
              >
                <form noValidate autoComplete="off">
                  <TextField
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeusername}
                    id="standard-basic"
                    label="Your username"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                </form>
                <Button
                  //   type="submit"
                  onClick={this.login}
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Continue
                </Button>
                <div>
                  <p style={{ fontSize: "16px" }}>
                    Don't have an account ?{" "}
                    <Link to="/register">Register now!</Link>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg md sm xs>
            <div className="loginRightBackground"></div>
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userSign
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userSign1: user => {
      dispatch(sign(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
