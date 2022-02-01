import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import {
  AddShoppingCart,
  AddTaskRounded,
  ExitToAppRounded,
  LocalPhoneRounded,
  Logout,
  SupervisorAccountRounded,
} from "@mui/icons-material";
import { ClientContext } from "../context/ClientProvider";
import { AuthContext } from "../context/AuthProvider";

const pages = ["Админ", "Добавить"];

const Navbar = () => {
  const { cartCount, cart } = React.useContext(ClientContext);
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "white" }}>
      <Container fixed maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            color: "darkred",
          }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/admin-panel">
                  <Box textAlign="center">{pages[0]}</Box>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/admin-panel/add">
                  <Box textAlign="center">{pages[1]}</Box>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Link to="/admin-panel">
              <Button sx={{ color: "darkred", mr: 2, my: 1, display: "block" }}>
                <SupervisorAccountRounded />
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Link to="/admin-panel/add">
              <Button sx={{ mr: 15, color: "darkred", display: "block" }}>
                <AddTaskRounded />
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Link to="/">
              <Button sx={{ mr: 0, color: "darkred", display: "block" }}>
                <img
                  style={{ width: "130px" }}
                  src="https://mysushi.by/wp-content/uploads/2020/04/logo01.png"
                  alt=""
                />
              </Button>
            </Link>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="image"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to="/">
              <img
                style={{ width: "100px" }}
                src="https://mysushi.by/wp-content/uploads/2020/04/logo01.png"
                alt=""
              />
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <IconButton
              size="small"
              color="inherit"
              sx={{ mr: 2, display: "block" }}
            >
              <Link type="number" to="/call">
                <LocalPhoneRounded sx={{ mr: 2 }} />
                +996 500 00 24 22
              </Link>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/cart">
              <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
                <Badge color="error" badgeContent={cartCount}>
                  <AddShoppingCart />
                  {/* !указать сумму заказа */}
                </Badge>
              </IconButton>
            </Link>
            {user ? (
              <>
                {/* <IconButton size="small" color="inherit">
                  {user.displayName}
                </IconButton> */}
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
                <IconButton size="large" color="inherit">
                  <Logout onClick={logout}></Logout>
                </IconButton>
              </>
            ) : (
              <IconButton onClick={authWithGoogle} size="small" color="inherit">
                <ExitToAppRounded />
                Вход
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
