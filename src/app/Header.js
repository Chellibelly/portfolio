"use client"; 
import React, { } from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import * as globalStyles from './styles/globalStyleConsts';

const Header = () => {
  const [pageName, setPageName] = React.useState('');
  React.useEffect(() => {
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    setPageName(lastSegment ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1) : 'Home');
  }, []);

  const navText = {
    textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat"
  };

  return (
    <div>
        <Box style={{ width: "100%", backgroundColor: blueGrey[900], position: "fixed", top: 0, zIndex: 99 }}>
        <Grid container direction="row" justifyContent="space-around" style={{ width:"60%" }}>
            <Grid item xs={3} 
            sx={pageName === "Home" ? globalStyles.navSectionActive : globalStyles.navSection}
            >
                <Link href="/" 
                sx={pageName === "Home" ? globalStyles.navLinkActive : globalStyles.navLink}
                >
                    <Typography sx={navText}>About Me</Typography>
                </Link>
            </Grid>
            <Grid item xs={3} 
            sx={pageName === "Resume" ? globalStyles.navSectionActive : globalStyles.navSection}
            >
                <Link href="/resume" 
                sx={pageName === "Resume" ? globalStyles.navLinkActive : globalStyles.navLink}
                >
                    <Typography sx={navText}>Resume</Typography>
                </Link>
            </Grid>
            <Grid item xs={3} 
            sx={pageName === "Portfolio" ? globalStyles.navSectionActive : globalStyles.navSection}
            >
                <Link href="/portfolio" 
                sx={pageName === "Portfolio" ? globalStyles.navLinkActive : globalStyles.navLink}
                >
                    <Typography sx={navText}>Selected UX Work</Typography>
                </Link>
            </Grid>
        </Grid>
        </Box>
    </div>
  );
};

export default Header;