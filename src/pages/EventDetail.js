/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  Divider
} from "@material-ui/core";
import {
  CalendarToday,
  AccessTime,
  Person,
  Phone,
  Email,
  Room,
  Twitter,
  Facebook,
  Share
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { getEventDetail } from "../_actions/eventDetail";
import { setNewOrder } from "../_actions/payment";
import { connect } from "react-redux";
import {
  convertToRupiah,
  convertToDateWithoutDay,
  convertToTime
} from "../helper/helper";

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.props.getEventDetail1(this.props.event_id);
  }

  onHandlerAdd = event => {
    this.setState({ counter: (this.state.counter += 1) });
  };

  onHandlerMin = event => {
    this.setState({
      counter: this.state.counter !== 0 ? (this.state.counter -= 1) : 0
    });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSetNewOrder = () => {
    const orderData = {
      event_id: this.props.event_id,
      quantity: this.state.counter
    };
    this.props.userSetNewOrder(orderData);
  };

  render() {
    const { payment, isLoading, error } = this.props.newOrderData;
    const { event } = this.props.eventDetail;

    let categoryName = event.category ? event.category.name : "";
    let price = event.price ? event.price : 0;
    let title = event.title ? event.title : "";
    let description = event.description ? event.description : "";
    let start_time = event.start_time ? event.start_time : "";
    let end_time = event.end_time ? event.end_time : "";
    let address = event.address ? event.address : "";
    let urlMap = event.url_maps ? event.url_maps : "";
    let userName = event.user ? event.user.name : "";
    let userEmail = event.user ? event.user.email : "-";
    let userPhone = event.user ? event.user.no_telp : "-";
    let userImage = event.user ? event.user.image : "";

    let finalPrice = convertToRupiah(price);
    let startDate = convertToDateWithoutDay(start_time);
    let endDate = convertToDateWithoutDay(end_time);
    let startTime = convertToTime(start_time);
    let endTime = convertToTime(end_time);

    if (payment.message === "success") {
      window.location.href = "http://localhost:3000/payments";
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
        <Card elevation={3}>
          <CardMedia
            style={{ height: "600px" }}
            image={event.image}
            title={event.title}
          ></CardMedia>
          <CardContent>
            <Grid container style={{ marginBottom: 20 }}>
              <Grid item lg={8} md={6} sm={12}>
                <div style={{ display: "flex", position: "relative" }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      marginTop: 10,
                      fontWeight: "bold",
                      fontSize: 40
                    }}
                  >
                    {title}
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div style={{ display: "flex", position: "relative" }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      marginTop: 10,
                      fontWeight: "bold",
                      fontSize: 40,
                      color: "#CA4040",
                      right: 20,
                      position: "absolute"
                    }}
                  >
                    {finalPrice}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid container style={{ marginBottom: 20 }}>
              <Grid item lg={6} md={6} sm={12}>
                <div style={{ display: "flex", position: "relative" }}>
                  <Typography
                    component="h5"
                    style={{
                      marginTop: 0,
                      fontWeight: "bold",
                      color: "#CA4040",
                      fontSize: 30
                    }}
                  >
                    {categoryName}
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12}>
                <div style={{ display: "flex", position: "relative" }}>
                  <div
                    style={{
                      marginTop: 10,
                      right: 20,
                      position: "absolute",
                      display: "flex"
                    }}
                  >
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={this.onHandlerMin}
                    >
                      -
                    </Button>
                    <TextField
                      name="counter"
                      value={this.state.counter}
                      id="standard-basic"
                      variant="outlined"
                      size="small"
                      style={{
                        width: 100,
                        textAlign: "center",
                        margin: "0px 5px"
                      }}
                    />
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={this.onHandlerAdd}
                    >
                      +
                    </Button>
                    <Button
                      onClick={this.handleSetNewOrder}
                      color="secondary"
                      variant="contained"
                      style={{ marginLeft: 20 }}
                    >
                      BUY
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Divider style={{ marginBottom: 20 }} />
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={12}>
                <h1 style={{ color: "#5E5E5E" }}>Hosted By</h1>
                <div style={{ display: "flex" }}>
                  <div
                    className="User-picture"
                    style={{
                      backgroundImage: `url(${
                        userImage
                          ? userImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhfBpDwhKIa8VKx1vGz0OfDOR_02JfO6HWgBXvLzzBnub87QNW"
                      })`
                    }}
                  ></div>
                  <div style={{ marginLeft: 20 }}>
                    <h3>{userName}</h3>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <h1 style={{ color: "#5E5E5E" }}>Date and Time</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CalendarToday style={{ marginRight: 10 }} />
                  <p>{`${startDate} - ${endDate}`}</p>
                </div>
                {startDate === endDate && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AccessTime style={{ marginRight: 10 }} />
                    <p>{`${startTime} - ${endTime}`}</p>
                  </div>
                )}
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <h1 style={{ color: "#5E5E5E" }}>Contact Person</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Person style={{ marginRight: 10 }} />
                  <p>{userName}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Phone style={{ marginRight: 10 }} />
                  <p>{userPhone}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Email style={{ marginRight: 10 }} />
                  <p>{userEmail}</p>
                </div>
              </Grid>
            </Grid>
            <Divider style={{ marginBottom: 20, marginTop: 20 }} />
            <Grid container spacing={5} style={{ textAlign: "justify" }}>
              <Grid item lg={6} md={6} sm={12}>
                <h1 style={{ color: "#5E5E5E" }}>Event Decription</h1>
                <p>{description}</p>
              </Grid>
              <Grid item lg={6} md={6} sm={12}>
                <h1 style={{ color: "#5E5E5E", marginBottom: 0 }}>Location</h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 20
                  }}
                >
                  <Room style={{ marginRight: 10 }} />
                  <p>{address}</p>
                </div>
                {urlMap && (
                  <iframe
                    src={urlMap}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ marginRight: 40 }}
                  ></iframe>
                )}
                <Divider />
                <h1 style={{ color: "#5E5E5E", marginBottom: 20 }}>Share</h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 20
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#2BB7F4",
                      color: "#FFF",
                      marginRight: 10
                    }}
                  >
                    <Twitter style={{ marginRight: 10 }} />
                    Twitter
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#0D5998",
                      color: "#FFF",
                      marginRight: 10
                    }}
                  >
                    <Facebook style={{ marginRight: 10 }} />
                    Facebook
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#464646",
                      color: "#FFF",
                      marginRight: 10
                    }}
                  >
                    <Share style={{ marginRight: 10 }} />
                    Share Link
                  </Button>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  return {
    event_id: otherProps.match.params.id,
    eventDetail: state.eventDetail,
    newOrderData: state.newOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventDetail1: event_id => {
      dispatch(getEventDetail(event_id));
    },

    userSetNewOrder: orderData => {
      dispatch(setNewOrder(orderData));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
);
