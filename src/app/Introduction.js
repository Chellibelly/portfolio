import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import ProcessProblemGraphic from '../../public/Process_Problem.png';

export default function Introduction() {
  return (
    <Box>
        <Typography variant='h1' className='heading1'>Defining the Outcomes</Typography>
        <Typography variant='h2' className='heading2'>Purpose, Plan, and Measurements of Success</Typography>
      
        
        <Grid container direction="row">
          <Grid item xs={7}>
            <Typography variant='h3' className='heading3'>Setting the Stage</Typography>
            <Typography variant='body1' className='paragraph'>This was my first UX case study ever, and it was both exciting and daunting. My task sounded large but uncomplicated - design the mobile version of a brand-new hotel booking website. I immediately knew I already needed to take a step back and get some important questions answered. For one, why is this product necessary? What are the metrics of success? What is the scope? What is my role?</Typography>
        <Typography variant='body1' className='paragraph'>Well, for full disclosure, this was a school project for the UX Design Institute. My role was lead researcher and designer. The scope was to follow the UX process to create a working prototype from nothing, but to focus on the process of booking a hotel room, ignoring any other functions one might find on a company’s website. </Typography>
          </Grid>
          <Grid item xs={5}>
          <Typography variant='body1' className='paragraph' style={{ color: "red" }}>[GRAPHIC SUMMARIZING WHAT I JUST SAID]</Typography>
          </Grid>
        </Grid>

        <Typography variant='h3' className='heading3'>The Plan</Typography>
        <Typography variant='body1' className='paragraph'>Describe the project plan</Typography>

        <Image
          className='graphic'
          width={900}
          src={ProcessProblemGraphic}
          alt="Picture of the author"
        />
        
        <Typography variant='h3' className='heading3'>What Would Success Look Like?</Typography>
        <Typography variant='body1' className='paragraph'>Answering why we needed this was difficult. Since this was going to be a new product for a fabricated company, I couldn’t ask any stakeholders what exactly we were trying to solve. I couldn’t compare revenue or costs. I couldn’t increase customer acquisition and retention or decrease churn and drop out when I had no baseline, no real company, and no real metrics. So, I decided for this project, my goal would simply be</Typography>
        <Typography variant='body1' className='paragraph'>to create a desirable product.</Typography>
        </Box>
  );
}
