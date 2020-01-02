import React, { Component } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { updateProfile } from "../_actions/user";

class ProfilEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      phoneNumber: "",
      email: ""
    };
  }

  onChangeFullname = event => {
    this.setState({ fullname: event.target.value });
  };

  onChangePhoneNumber = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onChangeImage = event => {
    this.setState({ image: event.target.value });
  };

  updateProfile = () => {
    const user = {
      name: this.state.fullname,
      no_telp: this.state.phoneNumber,
      email: this.state.email,
      image: this.state.image
    };
    this.props.updateProfile(user);
  };

  componentDidMount() {
    const { data } = this.props.user;
    this.setState({ fullname: data.name });
    this.setState({ phoneNumber: data.no_telp });
    this.setState({ email: data.email });
    this.setState({ image: data.image });
  }

  render() {
    const { isLoading, error } = this.props.user;

    const { message } = this.props.profileUpdate.dataProfileUpdate;
    if (message === "Success") {
      window.location.href = "http://localhost:3000/profile";
    }

    if (error) {
      return (
        <div>
          <h1>Something error!</h1>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div>
          <h1>Now loading...!</h1>
        </div>
      );
    }

    return (
      <>
        <div style={{ position: "relative", display: "flex" }}>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 0 }}
            >
              <h1 style={{ color: "#E74267", marginRight: 40 }}>
                Edit Profile
              </h1>
              <Link
                to="/profile"
                style={{ textDecoration: "none", marginRight: 10 }}
              >
                <Button size="small">Cancel</Button>
              </Link>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={this.updateProfile}
              >
                Save
              </Button>
            </div>
            <Grid item lg={7} md={6} sm={12} xs={12}>
              <div>
                <div
                  style={{
                    textAlign: "center",
                    alignContent: "center",
                    marginTop: "50px",
                    marginBottom: "30px"
                  }}
                >
                  <form noValidate autoComplete="off">
                    <TextField
                      name="Fullname"
                      value={this.state.fullname}
                      onChange={this.onChangeFullname}
                      id="standard-basic"
                      label="Your Fullname"
                      fullWidth
                      style={{ marginBottom: 20 }}
                    />
                    <TextField
                      name="Phone Number"
                      value={this.state.phoneNumber}
                      onChange={this.onChangePhoneNumber}
                      id="standard-basic"
                      label="Your Phone Number"
                      fullWidth
                      style={{ marginBottom: 20 }}
                    />
                    <TextField
                      name="Email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      id="standard-basic"
                      label="Your Email"
                      fullWidth
                      style={{ marginBottom: 20 }}
                    />
                    <TextField
                      name="Image"
                      value={this.state.image}
                      onChange={this.onChangeImage}
                      id="standard-basic"
                      label="Your Profile Image"
                      fullWidth
                      style={{ marginBottom: 20 }}
                    />
                  </form>
                </div>
              </div>
            </Grid>
          </div>
          <div>
            <div
              className="User-picture"
              style={{
                position: "absolute",
                right: 20,
                top: 100,
                backgroundImage: `url(${
                  this.state.image
                    ? this.state.image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhfBpDwhKIa8VKx1vGz0OfDOR_02JfO6HWgBXvLzzBnub87QNW"
                })`
              }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userDetail,
    profileUpdate: state.userProfileUpdate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: user => {
      dispatch(updateProfile(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilEdit);
