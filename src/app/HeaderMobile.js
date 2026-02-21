"use client"; 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';

import Face3Icon from '@mui/icons-material/Face3';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DrawIcon from '@mui/icons-material/Draw';
import { blueGrey } from '@mui/material/colors';

export default function HeaderMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [pageName, setPageName] = React.useState('');

  React.useEffect(() => {
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    let pageName = lastSegment ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1) : 'Home';
    if (pageName === "Home") {
      pageName = "About Me";
    }
    if (pageName === "HotelBookingApp") {
      pageName = "Freebird Hotels";
    }
    if (pageName === "Portfolio") {
      pageName = "Selected UX Work";
    }
    if (pageName === "LifeManagementApp") {
      pageName = "KorkBoard"
    }
    if (pageName === "DesignTidbits") {
      pageName = "Professional Highlights"
    }
    setPageName(pageName);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuFont = {
    fontFamily: "Montserrat",
    fontSize: 20,
    color: "black"
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{ backgroundColor: blueGrey[900] }}>
        <Toolbar>
            <div>
              <IconButton
                size="large"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem sx={{ padding: 2 }} onClick={handleClose}>
                    <Grid container>
                        <Grid item sx={{ mr: 2 }}>
                            <Face3Icon sx={{ fontSize: "24px", color: blueGrey[900] }}/>
                        </Grid>
                        <Grid item>
                            <Link href="/" sx={{ textDecoration: "none" }}>
                                <Typography sx={menuFont}>About Me</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </MenuItem>

                <MenuItem sx={{ padding: 2 }} onClick={handleClose}>
                    <Grid container>
                        <Grid item sx={{ mr: 2 }}>
                            <WorkIcon sx={{ fontSize: "24px", color: blueGrey[900] }}/>
                        </Grid>
                        <Grid item>
                          <Link href="/resume" sx={{ textDecoration: "none" }}>
                            <Typography sx={menuFont}>Resume</Typography>
                          </Link>
                        </Grid>
                    </Grid>
                </MenuItem>

                <MenuItem sx={{ padding: 2 }} onClick={handleClose}>
                    <Grid container>
                        <Grid item sx={{ mr: 2 }}>
                            <PhoneAndroidIcon sx={{ fontSize: "24px", color: blueGrey[900] }}/>
                        </Grid>
                        <Grid item>
                          <Link href="/portfolio" sx={{ textDecoration: "none" }}>
                            <Typography sx={menuFont}>Selected UX Works</Typography>
                          </Link>
                        </Grid>
                    </Grid>
                </MenuItem>
              </Menu>
            </div>
            <Typography>{pageName}</Typography> {/* Dynamically set the page name */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}