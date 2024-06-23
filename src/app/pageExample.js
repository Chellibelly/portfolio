import { Typography, Grid, Box } from '@mui/material';
import Introduction from './Introduction';
import Research from './Research';
import Analysis from './Analysis';
import Design from './Design';
import Conclusion from './Conclusion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Box style={{ width: "100%", backgroundColor: "#A9A9A9", position: "fixed", top: 0 }}>
        <Grid container direction="row" justifyContent="space-between" style={{ width:"50%", padding: 20 }}>
          <Grid item><Typography className="nav-link">About Me</Typography></Grid>
          <Grid item><Typography className="nav-link">My Case Study</Typography></Grid>
          <Grid item><Typography className="nav-link">My Resume</Typography></Grid>
          <Grid item><Typography className="nav-link">My Blog</Typography></Grid>
        </Grid>
      </Box>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={2}>
          <Box style={{ position: "fixed" }}>
            <Typography className="column-b"><a href="#section1">Introduction</a></Typography>
            <Typography className="column-b"><a href="#section2">Research</a></Typography>
            <Typography className="column-b"><a href="#section3">Analysis</a></Typography>
            <Typography className="column-b"><a href="#section4">Design</a></Typography>
            <Typography className="column-b"><a href="#section5">Conclusion</a></Typography>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Introduction/>
          <Research/>
          <Analysis/>
          <Design/>
          <Conclusion/>
        </Grid>
      </Grid>
    </main>
  );
}
