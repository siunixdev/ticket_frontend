import React, { Component } from "react";
import "../App.css";

import { TextField } from "@material-ui/core";

class Search extends Component {
  render() {
    return (
      <TextField
        id="filled-password-input"
        label="Search"
        type="text"
        autoComplete="current-password"
        fullWidth
      />
    );
  }
}

export default Search;
