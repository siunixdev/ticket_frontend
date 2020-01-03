import "../App.css";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Person, Phone, Email } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ArticleDetail extends Component {
  render() {
    const { data, isLoading, error } = this.props.user;

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
        <div style={{ position: "relative", display: "flex" }}>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 0 }}
            >
              <h1 style={{ color: "#E74267", marginRight: 40 }}>Profile</h1>
              <Link to="/profile/edit" style={{ textDecoration: "none" }}>
                <Button variant="outlined" size="small" color="secondary">
                  Edit Profile
                </Button>
              </Link>
            </div>
            <h2>{data.name}</h2>
            <p>
              <Person style={{ marginRight: 20 }} /> @{data.username}
            </p>
            <p>
              <Phone style={{ marginRight: 20 }} />{" "}
              {data.no_telp ? data.no_telp : "-"}
            </p>
            <p>
              <Email style={{ marginRight: 20 }} /> {data.email}
            </p>
          </div>
          <div>
            <div
              className="User-picture"
              style={{
                position: "absolute",
                right: 20,
                top: 100,
                backgroundImage: `url(${
                  data.image
                    ? data.image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhfBpDwhKIa8VKx1vGz0OfDOR_02JfO6HWgBXvLzzBnub87QNW"
                })`
              }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userDetail
  };
};

export default withRouter(connect(mapStateToProps)(ArticleDetail));
