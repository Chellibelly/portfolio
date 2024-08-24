"use client"; 
import React, { } from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import { blue } from '@mui/material/colors';

const Header = () => {
  return (
    <div>
        <Box style={{ width: "100%", backgroundColor: blue[800], position: "fixed", top: 0, zIndex: 99 }}>
        <Grid container direction="row" justifyContent="space-between" style={{ width:"50%", padding: 20 }}>
            <Grid item>
            <Link href="/about">
                <Typography className="nav-link">About Me</Typography>
            </Link>
            </Grid>
            <Grid item>
            <Link href="/resume">
                <Typography className="nav-link">Resume</Typography>
            </Link>
            </Grid>
            <Grid item>
            <Link href="/">
                <Typography className="nav-link">My Case Study</Typography>
            </Link>
            </Grid>
            <Grid item>
            <Link href="/currentProjects">
                <Typography className="nav-link">Current Projects</Typography>
            </Link>
            </Grid>
        </Grid>
        </Box>
    </div>
  );
};

export default Header;