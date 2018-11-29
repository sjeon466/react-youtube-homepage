import React, { Component } from "react";
import PropTypes from "prop-types";
import "./toolBar.css";
import DrawerToggleButton from "./../sideDrawer/drawerToggleButton";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Search from "./search";
import { toolBarStyles } from "./toolBarStyles";
import { withStyles } from "@material-ui/core/styles";

class ToolBar extends Component {
  state = {
    anchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    //console.log(this.props);
    const { anchorEl } = this.state;
    const { onSidebarbarToggle } = this.props;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    return (
      <div>
        <header className="toolBar">
          <nav className="toolBar__navigation">
            <div className="toolBar__toggle-button">
              <DrawerToggleButton onSidebarbarToggle={onSidebarbarToggle} />
            </div>
            <div className="toolBar__logo">
              <a href="/">Logo</a>
            </div>
            <Search className="toolBar__search" />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </nav>
        </header>
        {renderMenu}
      </div>
    );
  }
}

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(toolBarStyles)(ToolBar);
