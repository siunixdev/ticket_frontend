import React, { Component } from "react";
import "../App.css";

// Other Component
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";

import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { data, isLoading, error } = this.props.categories;
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

    const MenuItem = ({ text, id }) => {
      return (
        <>
          <Link
            to={`/category/${id}/events`}
            style={{ textDecoration: "none" }}
          >
            <Button
              style={{
                color: "#FFF",
                padding: "10px 30px",
                backgroundColor: "#792235",
                marginLeft: "10px"
              }}
            >
              {text}
            </Button>
          </Link>
        </>
      );
    };

    const menu = data.map(item => {
      return <MenuItem text={item.name} id={item.id} />;
    });

    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          color: "#3F3F3F",
          textAlign: "left"
        }}
      >
        <div style={{ width: "70%", margin: "auto", marginTop: "20px" }}>
          <ScrollMenu data={menu} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
