import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#6200ea" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Contact Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          View Contacts
        </Button>
        <Button color="inherit" component={Link} to="/add">
          Add Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
