import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userdata";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.userdata);

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box py={3}>
      <Toolbar py={10}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h4"
          color={"primary"}
          sx={{ textDecoration: "none", flexGrow: 1 }}
          component={Link}
          to="/"
        >
          Digital Recruitment
        </Typography>
        <Stack
          direction={"row"}
          display={{ xs: "none", md: "flex" }}
          spacing={2}
          mx={5}
          alignItems={"center"}
        >
          <Typography
            variant="h5"
            my={4}
            px={2}
            py={1}
            mx={2}
            sx={{
              textDecoration: "none",
              ":hover": {
                transform: "scale(1.04)",
                borderBottom: "2px solid white",
                transition: "transform 0.5s ease-in-out",
              },
            }}
            color="primary"
            component={Link}
            to="/Dashboard"
          >
            Dashboard
          </Typography>
          {!isLoggedIn && (
            <Stack direction={"row"} mx={2} spacing={2}>
              <Button
                variant="outlined"
                component={Link}
                to="/login"
                color="primary"
              >
                login
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/signup"
                color="primary"
              >
                join
              </Button>
            </Stack>
          )}
        </Stack>
        {isLoggedIn && (
          <Box mx={3}>
            <Button
              onClick={() => {
                dispatch(logout());
              }}
              variant="contained"
              color="primary"
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="left"
        fullWidth
        open={menuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Typography
          variant="h5"
          my={3}
          mx={2}
          color="primary"
          component={Link}
          sx={{ textDecoration: "none" }}
          to="/Dashboard"
        >
          Dashboard
        </Typography>
        <List>
         

          {!isLoggedIn ? (
            <>
              <ListItem
                sx={{
                  textDecoration: "none",
                  color: "white",
                }}
                component={Link}
                to="/login"
              >
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem
                sx={{
                  textDecoration: "none",
                  color: "white",
                }}
                component={Link}
                to="/signup"
              >
                <ListItemText primary="Join" />
              </ListItem>
            </>
          ) : (
            <ListItem
              onClick={() => {
                dispatch(logout());
              }}
              sx={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <ListItemText primary="Logout" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
