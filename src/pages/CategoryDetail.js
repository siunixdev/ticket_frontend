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
import Search from "../components/Search";
import Categories from "../components/Categories";

class CategoryDetail extends Component {
  state = {
    CategoryDetailData: []
  };

  componentDidMount() {
    const category_id = this.props.match.params.id;
    console.log(category_id);
    axios
      .get(`http://localhost:5000/api/v1/category/${category_id}/events`)
      .then(res => {
        const CategoryDetailData = res.data;
        console.log(CategoryDetailData);
        this.setState({ CategoryDetailData });
      });
  }

  render() {
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
          {this.state.CategoryDetailData.map(item => {
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

export default CategoryDetail;
