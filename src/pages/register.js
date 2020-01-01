import React, { Component } from "react";

// Other Component
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  // "name"  : "Abdllah F",
  // "username"  : "siunix",
  // "email"     : "siunixdev@gmail.com",
  // "password"  : "siunix"

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };
  }

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };
  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  register = () => {
    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/signup/",
      data: {
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        createdAt: new Date("d F Y"),
        updatedAt: new Date("d F Y")
      }
    })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "http://localhost:3000/";
      })
      .catch(err => {
        window.location.href = "http://localhost:3000/register";
      });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item lg md sm xs>
            <div className="registerLeftBackground"></div>
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
                <div>
                  <h1>Register</h1>
                </div>
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
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    id="standard-basic"
                    label="Your name"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    id="standard-basic"
                    label="Your username"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    id="standard-basic"
                    label="Your Email"
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
                  onClick={this.register}
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Register Now
                </Button>
                <div>
                  <p style={{ fontSize: "16px" }}>
                    Already have an account ? <Link to="/login">Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg md sm xs>
            <div className="registerRightBackground"></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Register;
