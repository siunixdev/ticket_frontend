import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  IconButton
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userSetLikeEvent } from "../_actions/user";

class eventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
      eventId: ""
    };
  }

  handleLikeClick = () => {
    const eventData = {
      event_id: this.props.id
    };
    this.props.userSetLike(eventData);
  };

  render() {
    return (
      <Card elevation={3}>
        <CardActionArea>
          <Link
            to={`/event/` + this.props.id}
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              style={{ height: "200px" }}
              image={this.props.image}
              title="Contemplative Reptile"
            >
              <div style={{ position: "absolute", right: 10, top: 10 }}>
                <Chip
                  label={this.props.price}
                  style={{
                    backgroundColor: "#FFF",
                    color: "#000",
                    fontWeight: "bold"
                  }}
                />
              </div>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h2">
                <div style={{ marginTop: 10, fontWeight: "bold" }}>
                  {this.props.title.substring(0, 20)}...
                </div>
              </Typography>
              <Typography variant="h6" component="h3">
                <div
                  style={{ marginTop: 0, fontWeight: "bold", color: "#CA4040" }}
                >
                  {this.props.title}
                </div>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ textAlign: "justify", marginTop: 20 }}
              >
                {this.props.description.substring(0, 200)}...
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={this.handleLikeClick}
          >
            <Favorite />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     userLikeData: state.userEventsfavorites
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    userSetLike: eventData => {
      dispatch(userSetLikeEvent(eventData));
    }
  };
};

export default connect(null, mapDispatchToProps)(eventCard);
