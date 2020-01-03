import React from "react";
import "../App.css";

// Other Component
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Payment, Event, ExitToAppOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ConfirmationNumber, PersonOutline } from "@material-ui/icons";

import {
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

function Header(props) {
  const { data } = props.user;

  const token = localStorage.getItem("token");
  let auth = true;
  if (token === null) auth = false;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "#CA4040", color: "#FFF", boxShadow: "none" }}
      >
        <div style={{ width: "70%", margin: "auto" }}>
          <Toolbar>
            <ConfirmationNumber style={{ marginRight: 10 }} />
            <h2 className={classes.title}>
              <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                Tricket
              </Link>
            </h2>
            {!auth && (
              <>
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
              </>
            )}

            {auth && (
              <>
                <h3 style={{ marginRight: 20 }}>{data.name}</h3>
                <ListItemAvatar
                  onClick={handleClick}
                  aria-controls="user-account-menu"
                >
                  <Avatar alt={data.name} src={data.image}></Avatar>
                </ListItemAvatar>
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
                        <Avatar alt={data.name} src={data.image}></Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={data.name}
                        secondary={data.email}
                      />
                    </ListItem>
                  </List>
                  <Divider light style={{ marginBottom: "10px" }}></Divider>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "#5e5e5e" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <PersonOutline style={{ marginRight: 20 }} />
                      Profile
                    </MenuItem>
                  </Link>
                  <Link
                    to="/tickets"
                    style={{ textDecoration: "none", color: "#5e5e5e" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <ConfirmationNumber style={{ marginRight: 20 }} />
                      My Ticket
                    </MenuItem>
                  </Link>
                  <Link
                    to="/payments"
                    style={{ textDecoration: "none", color: "#5e5e5e" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Payment style={{ marginRight: 20 }} /> Payment
                    </MenuItem>
                  </Link>
                  <Link
                    to="/event/add"
                    style={{ textDecoration: "none", color: "#5e5e5e" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Event style={{ marginRight: 20 }} /> Add Event
                    </MenuItem>
                  </Link>
                  <Divider light style={{ marginBottom: "10px" }}></Divider>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#5e5e5e" }}
                  >
                    <MenuItem onClick={logout}>
                      <ExitToAppOutlined style={{ marginRight: 20 }} />
                      Logout
                    </MenuItem>
                  </Link>
                </Menu>
              </>
            )}
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userDetail
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     userDetail1: () => {
//       dispatch(getUserProfil());
//     }
//   };
// };

export default connect(mapStateToProps)(Header);
