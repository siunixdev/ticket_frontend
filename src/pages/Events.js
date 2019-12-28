import React, { Component } from "react";
import "../App.css";

// Other Component
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { getEvents } from "../_actions/events";
import Search from "../components/Search";
import Categories from "../components/Categories";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    console.log(this.props.events);
    const { data, isLoading, error } = this.props.events;

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
        <Grid item lg md sm xs></Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "40px",
              textAlign: "center"
            }}
          >
            <Search />
          </div>
        </Grid>
        <Grid item lg md sm xs></Grid>
        <Categories />

        <Grid container spacing={3} style={{ paddingTop: "50px" }}>
          {data.map(item => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "200px" }}
                      image={item.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title.substring(0, 20)}...
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description.substring(0, 200)}...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Like
                    </Button>
                    <Link to={`/event/` + item.id}>
                      <Button size="small" color="primary">
                        More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  return {
    event_id: otherProps.match.params.id,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: event_id => {
      dispatch(getEvents(event_id));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));
