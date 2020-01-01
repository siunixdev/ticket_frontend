import React, { Component } from "react";
import "../App.css";

// Other Component
import { Grid } from "@material-ui/core";
import { Update, AccessTime } from "@material-ui/icons";

import { connect } from "react-redux";
import {
  getEvents,
  getEventsToday,
  getUpcomingEvents
} from "../_actions/events";
import Search from "../components/Search";
import Categories from "../components/Categories";
import EventCard from "../components/eventCard";

class Events extends Component {
  componentDidMount() {
    this.props.getEventsToday();
    this.props.getUpcomingEvent();
  }

  render() {
    // const { events, isLoading, error } = this.props.eventsData;
    const { events, isLoading, error } = this.props.eventsTodayData;
    const {
      eventsUpcoming,
      isLoadingUpcoming,
      errorUpcoming
    } = this.props.upcomingEventsData;
    // console.log(events.data[0]);

    if (error && errorUpcoming) {
      return (
        <div>
          <h1>Something error!</h1>
        </div>
      );
    }

    if (isLoading && isLoadingUpcoming) {
      return (
        <div>
          <h1>Now loading...!</h1>
        </div>
      );
    }
    return (
      <>
        <Search />
        <h1 style={{ color: "#E74267", marginTop: "60px" }}>Categories</h1>
        <Categories />

        <div style={{ paddingTop: "40px" }}>
          <h1 style={{ color: "#E74267" }}>
            <AccessTime /> Todays
          </h1>
          {!events.length && <h3>Today event not available</h3>}
          <Grid container spacing={3} style={{ paddingTop: "10px" }}>
            {events.map((item, i) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={i}>
                <EventCard
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div style={{ paddingTop: "40px" }}>
          <h1 style={{ color: "#E74267" }}>
            {" "}
            <Update /> Upcoming
          </h1>
          {!eventsUpcoming.length && <h3>Upcoming event not available</h3>}
          <Grid container spacing={3} style={{ paddingTop: "10px" }}>
            {eventsUpcoming.map((item, i) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={i}>
                <EventCard
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  id={item.id}
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
    eventsData: state.events,
    eventsTodayData: state.eventsToday,
    upcomingEventsData: state.upcomingEvents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => {
      dispatch(getEvents());
    },

    getEventsToday: () => {
      dispatch(getEventsToday());
    },

    getUpcomingEvent: () => {
      dispatch(getUpcomingEvents());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
