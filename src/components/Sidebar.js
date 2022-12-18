import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Article,
  ContactPage,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ContactPage />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
