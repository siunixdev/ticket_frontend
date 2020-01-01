import React, { Component } from "react";
import "../App.css";

// Other Component
import { Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

// ambil action dari directory action
import { getCategories } from "../_actions/categories";

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories1();
  }

  render() {
    const { data, isLoading, error } = this.props.categories12;
    console.log(data);

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
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {data.map((item, i) => {
            return (
              <Grid item lg={3} style={{ textAlign: "center" }} key={i}>
                <Link
                  to={`/category/${item.id}/events`}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <Paper
                    elevation={3}
                    style={{
                      padding: "1px 40px",
                      backgroundColor: "#5A5A5A", //#E74267
                      color: "#FFF",
                      textTransform: "uppercase"
                    }}
                  >
                    <h3>{item.name}</h3>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories12: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories1: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
