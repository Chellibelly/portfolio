"use client"; 
import React, { } from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

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
        <Grid container direction="row" justifyContent="space-around" style={{ width:"50%" }}>
            <Grid item xs={3} className={pageName === "Home" ? "nav-section-active" : "nav-section"}>
                <Link href="/" className={pageName === "Home" ? "nav-link-active" : "nav-link"}>
                    <Typography sx={navText}>About Me</Typography>
                </Link>
            </Grid>
            <Grid item xs={3} className={pageName === "Resume" ? "nav-section-active" : "nav-section"}>
                <Link href="/resume" className={pageName === "Resume" ? "nav-link-active" : "nav-link"}>
                    <Typography sx={navText}>Resume</Typography>
                </Link>
            </Grid>
            <Grid item xs={3} className={pageName === "CaseStudies" ? "nav-section-active" : "nav-section"}>
                <Link href="/caseStudies" className={pageName === "CaseStudies" ? "nav-link-active" : "nav-link"}>
                    <Typography sx={navText}>UX Case Study</Typography>
                </Link>
            </Grid>
            <Grid item xs={3} className={pageName === "CurrentProjects" ? "nav-section-active" : "nav-section"}>
                <Link href="/currentProjects" className={pageName === "CurrentProjects" ? "nav-link-active" : "nav-link"}>
                    <Typography sx={navText}>Current Projects</Typography>
                </Link>
            </Grid>
        </Grid>
        </Box>
    </div>
  );
};

export default Header;