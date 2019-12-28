import React, { Component } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Button,
  Chip,
  Divider
} from "@material-ui/core";
import { Twitter, Facebook, BookmarkBorder, ThumbUp } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class ArticleDetail extends Component {
  state = {
    articleDetailData: []
  };

  componentDidMount() {
    const event_id = this.props.match.params.id;
    console.log(event_id);
    axios.get(`http://localhost:5000/api/v1/event/${event_id}`).then(res => {
      const articleDetailData = res.data;
      console.log(articleDetailData);
      this.setState({ articleDetailData });
    });
  }

  render() {
    return (
      <>
        <Card>
          <CardActionArea>
            <CardMedia
              style={{ height: "500px" }}
              image={this.state.articleDetailData.image}
              title={this.state.articleDetailData.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.state.articleDetailData.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.state.articleDetailData.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
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

export default ArticleDetail;
