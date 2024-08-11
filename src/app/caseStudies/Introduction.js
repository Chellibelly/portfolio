import { Typography, Box, List, ListItem, Grid } from '@mui/material';
import Image from 'next/image';
import ProcessProblemGraphic from '../../../public/Process_Problem.png';
import QuoteContainer from './QuoteContainer';
import { blue } from '@mui/material/colors';

export default function Introduction() {
  return (
    <Grid container justifyItems="center" justifyContent="center">
      <Grid item xs={10}>
        <Typography variant='h1' className='heading1'>Setting the Stage</Typography>
        <Typography variant='h2' className='heading2'>Purpose, Plan, and Measurements of Success</Typography>
        <Typography variant='body1' className='paragraph'>Hello there! You have stumbled upon the story of my first journey in UX. It was exciting, daunting, and enlightening in ways I couldn't have imagined. Let me tell you why. My task sounded large but uncomplicated - design the mobile version of a brand-new hotel booking website. I immediately knew I already needed to take a step back and get some important questions answered. For one, why is this product necessary? What would success look like? What is the scope? What is my role?</Typography>
        <Typography variant='body1' className='paragraph'>Well, for full disclosure, this was a school project for the UX Design Institute. My role was lead researcher and designer. The scope was to follow the UX process to create a working prototype from nothing, but to focus on the process of booking a hotel room, ignoring any other functions one might find on such a website. </Typography>
      </Grid>
      <QuoteContainer quote="A problem well-stated is a problem half-solved." author="Charles F. Kettering"/>
      <Grid item xs={10}>
        <Typography variant='h3' className='heading3'>The Plan</Typography>
        <Typography variant='body1' className='paragraph'>The double-diamond design process is a popular model in the UX industry and for good reason. It involves getting broad, then specific, then broad, then specific, and so on. Ideally this can even become cyclical in a system where iteration and continuous improvement are welcome. I decided to use a version of the double diamond in my process. I wanted to accomplish the project goal in a series of defined steps.</Typography>
        <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
          <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
            <Typography variant='body1' className='paragraph'>
              <b>Discover</b> - Explore the problem by doing a variety of research, collecting data artifacts
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
            <Typography variant='body1' className='paragraph'>
            <b>Define</b> - Analyze the data and determine what the real problems and opportunities are 
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
            <Typography variant='body1' className='paragraph'>
            <b>Design</b> - With a direction in mind, explore various options for accomplishing the goals through sketching, flowcharting, and wireframing with various levels of fidelity
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', marginTop: -3 }}>
            <Typography variant='body1' className='paragraph'>
            <b>Deliver</b> - Refine the design, eliminating options and getting more granular until I have a working high-fidelity solution to deliver to stakeholders
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Image
          className='graphic'
          src={ProcessProblemGraphic}
          alt="An image of the UX process with the Problem step highlighted"
        />
      </Grid>
      <Grid item xs={10} sx={{ marginBottom: -5 }}>
        <Typography variant='h3' className='heading3'>What Would Success Look Like?</Typography>
        <Typography variant='body1' className='paragraph'>Answering why we needed this was difficult. Since this was going to be a new product for a fabricated company, I couldn’t ask any stakeholders what exactly we were trying to solve. I couldn’t compare revenue or costs. I couldn’t increase customer acquisition and retention or decrease churn and drop out when I had no baseline, no real company, and no real metrics. So, I decided for this project, my goal would simply be: <i><b>to create a desirable product.</b></i></Typography>
      </Grid>
    </Grid>
  );
}
