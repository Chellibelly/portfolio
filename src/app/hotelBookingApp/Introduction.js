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
        <Typography variant='body1' sx={globalStyles.paragraph}>
          My first ever project in UX was exciting, challenging, and enlightening. My task was to design the mobile version of a hotel booking website.
          I would need to create a working prototype from nothing, but to focus only on the process of booking a hotel room. As a solo designer on this project, I would be the lead (and only) researcher and designer.
        </Typography>
        <Typography variant='body1' sx={globalStyles.paragraph}>With no baseline metrics, it was challenging to determine how I would measure success up front. After some thought, I settled on a simple goal to give me a meaningful direction: <i><b>to create a desirable product.</b></i>
        </Typography>
      </Grid>
     
      <Grid item xs={12}>
                <Box sx={globalStyles.graphic}>
                  <Image
                    src={ProcessProblemGraphic}
                    width="100%"
                    alt="An image of the UX process with the Solution step highlighted"
                  />
                </Box>
              </Grid>
    
    </Grid>
  );
}
