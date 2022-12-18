import React, { Component } from "react";
import "./App.css";
import { Feed, Sidebar, Rightbar, Navbar } from "./components";
import { Box, Stack } from "@mui/material";
import AddPostButton from "./components/AddPostButton";

class App extends Component {
  render() {
    return (
      <Box>
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPostButton />
      </Box>
    );
  }
}

export default App;
