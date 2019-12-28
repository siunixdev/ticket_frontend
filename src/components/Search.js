import React, { Component } from "react";
import "../App.css";

import { TextField } from "@material-ui/core";

class Search extends Component {
  render() {
    return (
      <TextField
        id="filled-password-input"
        label="Pencarian"
        type="text"
        autoComplete="current-password"
        fullWidth
        style={{ width: "70%", margin: "auto" }}
      />
    );
  }
}

export default Search;
