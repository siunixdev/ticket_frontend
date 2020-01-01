import React, { Component } from "react";
import { Divider, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EventCard from "../components/eventCard";

import { getUserEventsfavorites } from "../_actions/user";

class ArticleDetail extends Component {
  componentDidMount() {
    this.props.getEventFavorites();
  }

  render() {
    const { data } = this.props.user;

    const {
      dataFavorites,
      isLoadingFavorites,
      errorFavorites
    } = this.props.eventFavoritesData;

    if (errorFavorites) {
      return (
        <div>
          <h1>Something error!</h1>
        </div>
      );
    }

    if (isLoadingFavorites) {
      return (
        <div>
          <h1>Now loading...!</h1>
        </div>
      );
    }

    return (
      <>
        <h1 style={{ color: "#E74267" }}>Profile</h1>
        <h2>{data.name}</h2>
        <p>@{data.username}</p>
        <p>{data.email}</p>
        <div style={{ marginBottom: "20px" }}>
          <Divider
            light
            style={{ marginTop: "0px", marginBottom: "10px" }}
          ></Divider>
        </div>

        <div style={{ paddingTop: "10px" }}>
          <h1 style={{ color: "#E74267" }}>Favorites</h1>
          <Grid container spacing={3}>
            {dataFavorites.map((item, i) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={i}>
                <EventCard
                  image={item.event.image}
                  price={item.event.price}
                  title={item.event.title}
                  description={item.event.description}
                  id={item.event.id}
                />
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
    user: state.userDetail,
    eventFavoritesData: state.userEventsfavorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventFavorites: () => {
      dispatch(getUserEventsfavorites());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
);
