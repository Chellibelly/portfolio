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
import { blue } from '@mui/material/colors';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuFont = {
    fontFamily: "Montserrat",
    fontSize: 26,
    color: "black"
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
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
                            <Face3Icon sx={{ fontSize: "30px", color: blue[800] }}/>
                        </Grid>
                        <Grid item>
                            <Link href="/about" sx={{ textDecoration: "none" }}>
                                <Typography sx={menuFont}>About Me</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </MenuItem>

                <MenuItem sx={{ padding: 2 }} onClick={handleClose}>
                    <Grid container>
                        <Grid item sx={{ mr: 2 }}>
                            <WorkIcon sx={{ fontSize: "30px", color: blue[800] }}/>
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
                            <PhoneAndroidIcon sx={{ fontSize: "30px", color: blue[800] }}/>
                        </Grid>
                        <Grid item>
                          <Link href="/" sx={{ textDecoration: "none" }}>
                            <Typography sx={menuFont}>My Case Study</Typography>
                          </Link>
                        </Grid>
                    </Grid>
                </MenuItem>

                <MenuItem sx={{ padding: 2 }} onClick={handleClose}>
                    <Grid container>
                        <Grid item sx={{ mr: 2 }}>
                            <DrawIcon sx={{ fontSize: "30px", color: blue[800] }}/>
                        </Grid>
                        <Grid item>
                          <Link href="/currentProjects" sx={{ textDecoration: "none" }}>
                            <Typography sx={menuFont}>Current Projects</Typography>
                          </Link>
                        </Grid>
                    </Grid>
                </MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}