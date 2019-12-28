import React, { Component } from "react";
import "../App.css";

// Other Component
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Person } from "@material-ui/icons";
import { Link } from "react-router-dom";

import {
  Fab,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  btnLogin: {
    marginRight: theme.spacing(1)
  },
  btnRegisterLink: {
    textDecoration: "none",
    color: "#FFFFFF"
  },
  btnLoginLink: {
    textDecoration: "none",
    color: "#FFF",
    borderColor: "#FFF"
  }
}));

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "#EB4167", color: "#FFF", boxShadow: "none" }}
      >
        <div style={{ width: "70%", margin: "auto" }}>
          <Toolbar>
            <h2 className={classes.title}>
              <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                Tricket
              </Link>
            </h2>
            <Button variant="outlined" style={{ marginRight: "20px" }}>
              <Link className={classes.btnLoginLink} to="/login">
                Login
              </Link>
            </Button>
            <Button variant="outlined" style={{ marginRight: "20px" }}>
              <Link className={classes.btnLoginLink} to="/register">
                Register
              </Link>
            </Button>
            <IconButton onClick={handleClick} aria-controls="user-account-menu">
              <Person style={{ color: "#FFF" }} />
            </IconButton>
            <Menu
              id="user-account-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ transformOrigin: "bottom" }}
            >
              <List style={{ padding: "0px 40px 10px 40px" }}>
                <ListItem onClick={handleClose}>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Abdillah F." secondary="abd.siunix" />
                </ListItem>
              </List>
              <Divider light style={{ marginBottom: "10px" }}></Divider>
              <Link to="/new_stories" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link to="/stories" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>My Ticket</MenuItem>
              </Link>
              <Link to="/stats" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Payment</MenuItem>
              </Link>
              <Link to="/bookmark" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Add Event</MenuItem>
              </Link>
              <Divider light style={{ marginBottom: "10px" }}></Divider>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Link>
            </Menu>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
