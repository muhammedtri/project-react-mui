import {
  AppBar,
  Toolbar,
  Avatar,
  styled,
  Typography,
  InputBase,
  Badge,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { House, Mail, Notifications } from "@mui/icons-material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          ReactApp
        </Typography>
        <House sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search ..." fullWidth="true"></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => {
              setopen(true);
            }}
          >
            M
          </Avatar>
        </Icons>
        <UserBox>
          <Avatar
            onClick={(e) => {
              setopen(true);
            }}
          >
            M
          </Avatar>
          <Typography variant="span">Mellala</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setopen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
