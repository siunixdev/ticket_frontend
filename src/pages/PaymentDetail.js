import React, { Component } from "react";
import { Divider, Grid, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { getPendingOrder, getPendingOrderDetail } from "../_actions/payment";
import {
  convertToDate,
  convertToTime,
  convertToRupiah
} from "../helper/helper";

let QRCode = require("qrcode.react");

class PaymentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalTotalPrice: 0,
      attachment: ""
    };
    this.setState({ finalTotalPrice: 0 });
  }

  componentDidMount() {
    this.props.getPendingOrderDetail(this.props.order_id);
  }

  onChangeAttachment = event => {
    this.setState({ attachment: event.target.value });
  };

  render() {
    const { payment, isLoading, error } = this.props.pendingOrderDetail;

    let userName = payment.user ? payment.user.name : "";
    let userId = payment.user ? payment.user.id : 0;
    let eventPrice = payment.event ? payment.event.price : 0;
    let eventTitle = payment.event ? payment.event.title : "";
    let eventTime = payment.event ? payment.event.start_time : new Date();
    let eventAddress = payment.event ? payment.event.address : "";
    let orderStatus = payment.status ? payment.status : "";
    let orderQuantity = payment.quantity ? payment.quantity : 0;
    let orderTotalPrice = payment.total_price ? payment.total_price : 0;

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
        <div style={{ paddingTop: "10px" }}>
          <div style={{ display: "flex" }}>
            <Grid item lg={6}>
              <h1 style={{ color: "#E74267" }}>Payment Detail</h1>
            </Grid>
            <Grid item lg={6} style={{ textAlign: "right" }}>
              <Link to={"/payments"} style={{ textDecoration: "none" }}>
                <Button>Back to payment List</Button>
              </Link>
            </Grid>
          </div>
          <Divider style={{ marginBottom: 20 }} />
          <Grid container>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: 20 }}
            >
              <div
                style={{
                  backgroundColor: "#CA4040",
                  padding: 10,
                  width: "100%"
                }}
              >
                <div
                  style={{
                    margin: 10,
                    height: 210,
                    backgroundColor: "#FFF"
                  }}
                >
                  <div
                    style={{
                      height: 40,
                      backgroundColor: "#BEBEBE",
                      padding: 10,
                      display: "flex",
                      position: "relative"
                    }}
                  >
                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: 0 }}>
                        {userName}
                      </h3>
                      <p style={{ marginTop: 0 }}>
                        <small>User id : {userId}</small>
                      </p>
                    </div>
                    <div style={{ position: "absolute", top: 4, right: 10 }}>
                      <small>Face value : {convertToRupiah(eventPrice)}</small>
                    </div>
                  </div>
                  <div
                    style={{
                      height: 40,
                      padding: 10,
                      display: "flex",
                      position: "relative"
                    }}
                  >
                    <Grid item lg={10} md={9} sm={12} xs={12}>
                      <h1 style={{ marginTop: 0, marginBottom: 0 }}>
                        {eventTitle}
                      </h1>
                      <p style={{ marginTop: 10, marginBottom: 5 }}>
                        {`${convertToDate(eventTime)}, Time ${convertToTime(
                          eventTime
                        )}`}
                      </p>
                      <p style={{ marginTop: 0, marginBottom: 0 }}>
                        {eventAddress}
                      </p>
                    </Grid>
                    <Grid
                      item
                      lg={2}
                      md={3}
                      sm={12}
                      xs={12}
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        marginBottom: 20
                      }}
                    >
                      <QRCode value={"title"} />
                    </Grid>
                  </div>
                </div>
              </div>
              <h3>Status : {orderStatus}</h3>
            </Grid>
          </Grid>
          <h2 style={{ marginBottom: 10 }}>Shopping Summary</h2>
          <div style={{ display: "flex", position: "relative" }}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              Total Price ({orderQuantity} item)
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{ textAlign: "right" }}
            >
              {convertToRupiah(orderTotalPrice)}
            </Grid>
          </div>
          <Divider style={{ marginTop: 20, marginBottom: 40 }} />
          <h2 style={{ marginBottom: 10 }}>Prove of payment</h2>
          {this.state.attachment && (
            <div
              style={{
                marginTop: 20,
                height: 400,
                width: 500,
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${this.state.attachment})`
              }}
            ></div>
          )}
          <div style={{ display: "flex", position: "relative", marginTop: 40 }}>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <form noValidate autoComplete="off">
                  <TextField
                    name="Attachment"
                    value={this.state.attachment}
                    onChange={this.onChangeAttachment}
                    id="standard-basic"
                    label="Your Attachment"
                    fullWidth
                    style={{ marginBottom: 20 }}
                  />
                </form>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                style={{ textAlign: "right" }}
              >
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#CA4040",
                    color: "#FFF",
                    fontWeight: "bold"
                  }}
                >
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  return {
    order_id: otherProps.match.params.id,
    pendingOrder: state.pendingOrder,
    pendingOrderDetail: state.pendingOrderDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPendingOrderDetail: order_id => {
      dispatch(getPendingOrderDetail(order_id));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentDetail)
);
