import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import EventCard from "./eventCard";

import { getUserEventsfavorites } from "../_actions/user";

class Favorites extends Component {
  componentDidMount() {
    this.props.getEventFavorites();
  }

  render() {
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
        <div style={{ paddingTop: "10px" }}>
          <h1 style={{ color: "#E74267" }}>Favorites</h1>
          <Grid container spacing={3}>
            {dataFavorites.map((item, i) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={i}>
                <EventCard
                  image={item.event.image}
                  price={item.event.price}
                  title={item.event.title}
                  date={item.event.start_time}
                  description={item.event.description}
                  // id={item.event.id}
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
