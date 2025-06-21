import { Typography, Box, List, ListItem, Grid } from '@mui/material';
import Image from 'next/image';
import ProcessProblemGraphic from '../../../public/Process_Problem.png';
import QuoteContainer from './QuoteContainer';
import { blue } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

export default function Introduction() {
  return (
    <Grid container justifyItems="center" justifyContent="center">
      <Grid item xs={10}>
        <Typography variant='h1' sx={globalStyles.heading1}>Setting the Stage</Typography>
        <Typography variant='h2' sx={globalStyles.heading2}>Purpose and Measurements of Success</Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>Welcome to the story of my first journey in UX! It was exciting, challenging, and enlightening in ways I hadn't anticipated. My task sounded both straightforward and ambitious: design the mobile version of a new hotel booking website.</Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>I would need to create a working prototype from nothing, but to focus only on the process of booking a hotel room. As a solo designer on this project, I would be the lead (and only) researcher and designer.</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>What Would Success Look Like?</Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>Defining success proved difficult at this point. This was going to be a new product for a fictional company. With no stakeholders or baseline metrics, what could I measure? I couldn’t compare revenue or costs. I couldn’t increase customer acquisition and retention or decrease drop out rate. So instead, I set a simple goal: <i><b>to create a desirable product.</b></i></Typography>
      </Grid>
      <QuoteContainer quote="A problem well-stated is a problem half-solved." author="Charles F. Kettering"/>
    </Grid>
  );
}
