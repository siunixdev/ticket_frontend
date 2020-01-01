import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { getEventDetail } from "../_actions/eventDetail";
import { connect } from "react-redux";

class ArticleDetail extends Component {
  componentDidMount() {
    this.props.getEventDetail1(this.props.event_id);
  }

  render() {
    console.log(this.props.eventDetail);
    const { event } = this.props.eventDetail;
    return (
      <>
        <h1>{event.title}</h1>
        <div style={{ marginBottom: "20px" }}>
          <Divider
            light
            style={{ marginTop: "0px", marginBottom: "40px" }}
          ></Divider>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  return {
    event_id: otherProps.match.params.id,
    eventDetail: state.eventDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventDetail1: event_id => {
      dispatch(getEventDetail(event_id));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
);
