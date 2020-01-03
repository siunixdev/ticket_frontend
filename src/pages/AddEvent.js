/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import "../App.css";

// Other Component
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import { MenuItem } from "@material-ui/core";
import { addEvent } from "../_actions/events";
// import axios from "axios";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      categoryId: 0,
      image: "",
      startTime: "",
      endTime: "",
      price: "",
      address: "",
      description: "",
      urlMaps:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.940602642446!2d106.7951507152948!3d-6.271541595460681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a0d52ae3cd%3A0xe6f01c088b82e9a1!2sGlints%20Indonesia!5e0!3m2!1sid!2sid!4v1577973813927!5m2!1sid!2sid"
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  onChangeCategoryId = event => {
    this.setState({ categoryId: event.target.value });
  };

  onChangeStartTime = event => {
    this.setState({ startTime: event.target.value });
  };

  onChangeEndTime = event => {
    this.setState({ endTime: event.target.value });
  };

  onChangePrice = event => {
    this.setState({ price: event.target.value });
  };

  onChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  onChangeAddress = event => {
    this.setState({ address: event.target.value });
  };

  onChangeUrlMaps = event => {
    this.setState({ urlMaps: event.target.value });
  };

  onChangeImage = event => {
    this.setState({ image: event.target.value });
  };

  addEvent = () => {
    const event = {
      title: this.state.title,
      category_id: this.state.categoryId,
      start_time: this.state.startTime,
      end_time: this.state.endTime,
      price: this.state.price,
      description: this.state.description,
      address: this.state.address,
      url_maps: this.state.urlMaps,
      image: this.state.image
    };
    this.props.addEvent1(event);
  };

  render() {
    const { message } = this.props.addEvent.dataAddEvent;
    const { data } = this.props.categories;

    if (message === "Success") {
      window.location.href = "http://localhost:3000/";
    }

    return (
      <>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div>
              <div
                style={{
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  alignContent: "center"
                }}
              >
                <h1 style={{ color: "#CA4040" }}>Add Event.</h1>
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
                    name="title"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    id="standard-basic"
                    label="Title"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    id="categoryId"
                    select
                    label="Select"
                    value={this.state.categoryId}
                    onChange={this.onChangeCategoryId}
                    helperText="Select Category"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  >
                    {data.map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name="image"
                    value={this.state.image}
                    onChange={this.onChangeImage}
                    id="standard-basic"
                    label="Image"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="startTime"
                    value={this.state.startTime}
                    onChange={this.onChangeStartTime}
                    id="standard-basic"
                    label="Start Time"
                    type="datetime-local"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <TextField
                    name="endTime"
                    value={this.state.endTime}
                    onChange={this.onChangeEndTime}
                    id="standard-basic"
                    label="End Time"
                    type="datetime-local"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <TextField
                    name="price"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    id="standard-basic"
                    label="Price"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    id="standard-basic"
                    label="Address"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="urlMap"
                    value={this.state.urlMaps}
                    onChange={this.onChangeUrlMaps}
                    id="standard-basic"
                    label="Map url"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="description"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    id="standard-basic"
                    label="Description"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                </form>
                <Button
                  //   type="submit"
                  onClick={this.addEvent}
                  variant="outlined"
                  size="large"
                  color="primary"
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <h3>Location</h3>
            <iframe
              src={this.state.urlMaps}
              width="100%"
              height="400"
              frameBorder="0"
              style={{ marginRight: 40 }}
            ></iframe>
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    addEvent: state.addEvent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    },

    addEvent1: event => {
      dispatch(addEvent(event));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
