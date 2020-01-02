import React, { Component } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  IconButton
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userSetLikeEvent } from "../_actions/user";
import { convertToRupiah, convertToDate } from "../helper/helper";

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
    let price = convertToRupiah(this.props.price);
    let date = convertToDate(this.props.date);

    return (
      <Card elevation={3}>
        <Link
          to={this.props.id ? `/event/` + this.props.id : "/profile"}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            style={{ height: "200px" }}
            image={this.props.image}
            title={this.props.title}
          >
            <div style={{ position: "relative" }}>
              <Chip
                label={price}
                style={{
                  backgroundColor: "#FFF",
                  color: "#000",
                  fontWeight: "bold",
                  position: "absolute",
                  right: 10,
                  top: 10
                }}
              />
            </div>
          </CardMedia>
        </Link>
        <CardContent>
          <Typography variant="h5" component="h2">
            <div style={{ display: "flex", position: "relative" }}>
              <Link
                to={this.props.id ? `/event/` + this.props.id : "/profile"}
                style={{ textDecoration: "none" }}
              >
                <div style={{ marginTop: 10, fontWeight: "bold" }}>
                  {this.props.title.substring(0, 20)}...
                </div>
              </Link>
              <div style={{ position: "absolute", top: 5, right: 5 }}>
                <IconButton
                  aria-label="add to favorites"
                  onClick={this.handleLikeClick}
                >
                  <Favorite />
                </IconButton>
              </div>
            </div>
          </Typography>
          <Typography component="h5">
            <div style={{ marginTop: 0, fontWeight: "bold", color: "#CA4040" }}>
              {date}
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
