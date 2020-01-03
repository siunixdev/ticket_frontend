import React, { Component } from "react";
import { Divider, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPendingOrder } from "../_actions/payment";
import {
  convertToDate,
  convertToTime,
  convertToRupiah
} from "../helper/helper";

let QRCode = require("qrcode.react");

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalTotalPrice: 0,
      attachment: ""
    };
    this.setState({ finalTotalPrice: 0 });
  }

  componentDidMount() {
    this.props.getPendingOrder();
  }

  onChangeAttachment = event => {
    this.setState({ attachment: event.target.value });
  };

  render() {
    console.log(this.props.pendingOrder);
    const { payment, isLoading, error } = this.props.pendingOrder;

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
          <h1 style={{ color: "#E74267" }}>Payment List</h1>
          <Divider style={{ marginBottom: 20 }} />
          <Grid container>
            {payment.map((item, i) => (
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ marginBottom: 20 }}
                key={i}
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
                          {item.user.name}
                        </h3>
                        <p style={{ marginTop: 0 }}>
                          <small>User id : {item.user.id}</small>
                        </p>
                      </div>
                      <div style={{ position: "absolute", top: 4, right: 10 }}>
                        <small>
                          Face value : {convertToRupiah(item.total_price)}
                        </small>
                      </div>
                    </div>
                    <div
                      style={{
                        height: 40,
                        padding: 10,
                        display: "flex",
                        position: "relative",
                        flexDirection: "column"
                      }}
                    >
                      <Grid item lg={10} md={9} sm={12} xs={12}>
                        <h1 style={{ marginTop: 0, marginBottom: 0 }}>
                          {item.event.title}
                        </h1>
                        <p style={{ marginTop: 10, marginBottom: 5 }}>
                          {`${convertToDate(
                            item.event.start_time
                          )}, Time ${convertToTime(item.event.start_time)}`}
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 0 }}>
                          {item.event.address}
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
                        <Link
                          to={"/payment/" + item.id}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            size="large"
                            style={{
                              backgroundColor: "#CA4040",
                              color: "#FFF",
                              fontWeight: "bold"
                            }}
                          >
                            CHECK OUT
                          </Button>
                        </Link>
                      </Grid>
                      <div style={{ display: "flex" }}>
                        <h3>Status : {item.status}</h3>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "right" }}
                        ></Grid>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pendingOrder: state.pendingOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPendingOrder: () => {
      dispatch(getPendingOrder());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
