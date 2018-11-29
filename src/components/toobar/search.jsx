import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className={"search"}>
        <div className={"searchIcon"}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: "inputRoot",
            input: "inputInput"
          }}
        />
      </div>
    );
  }
}

export default Search;
