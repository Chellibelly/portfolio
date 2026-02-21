import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import * as globalStyles from '../styles/globalStyleConsts';

import SurveyQuotes from "../../../public/Survey_Quotes_Combined.png";
import Zoom3 from "../../../public/Zoom3.png";
import UsabilityQuotes from "../../../public/Usability_Quotes_Combined_V2.png";
import CompetitiveAnalysisGraphic from '../../../public/Benchmark_Insights.png';

export default function Research() {
  return (
    <Grid container justifyContent="center" spacing={4}>
      
      {/* Intro */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h1' sx={globalStyles.heading1}>Collecting Initial Insights</Typography>
        <Typography variant='h2' sx={globalStyles.heading2}>The Research</Typography>
        <Typography sx={globalStyles.paragraph}>
          First and foremost, I needed to understand <b>why people use hotel booking websites</b>. What are their actual <i>goals and expectations</i>? What success stories and struggles could provide insights into their needs?
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          To get started, I created a <b>seven-question survey in Google Forms</b> to gather both quantitative and qualitative data from friends, coworkers, and family with hotel booking experience.
        </Typography>
      </Grid>

      {/* Survey Results */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>Survey results: Goals, Behavior, and Pain</Typography>
        <Typography sx={globalStyles.paragraph}>
          Most of the 12 respondents said <b>proximity to activities</b> was their top priority when booking a hotel, followed by price. About half spent most of their time <b>comparing prices</b>, and many also focused on <b>filtering amenities</b> and <b>browsing search results</b>.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          When asked about tasks, participants were typically booking, comparing prices, or <b>seeking the best value</b>. Some used sites tied to <b>rewards programs</b>. Speed, ease, and reliability were common priorities. Participants also reported lingering frustrations with <b>unclear information</b> or confusing flows, even <i>several months</i> after their experience.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={SurveyQuotes} alt="Collection of user opinion survey quotes" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* Competition */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>Checking out the Competition</Typography>
        <Typography sx={globalStyles.paragraph}>
          I was interested to see how other hotel websites were addressing (or <i>failing</i> to address) user goals, identify common conventions, and <b>establish a baseline</b>. 
          I reviewed established hotel sites, including those mentioned by my survey participants.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={CompetitiveAnalysisGraphic} alt="Benchmark research Insights" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* usability testing */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>Usability Testing: Observation in Real Time</Typography>
        <Typography sx={globalStyles.paragraph}>
         To validate my assumptions and uncover friction points, I ran remote usability tests with <b>two participants</b> experienced in booking hotels. Each completed tasks on <b>two booking websites</b> while thinking aloud, allowing me to observe real-time behaviors, frustrations, and strategies. I also asked follow-up questions and gathered reflections on what surprised them, what they liked, and what was missing.
        </Typography>
      </Grid>
        <Grid item xs={12} sm={10}>
          <Box sx={globalStyles.graphic}>
              <Image src={Zoom3} alt="An image of a usability test participant" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>Behaviors, Frustrations, and an Exercise in Empathy</Typography>
          <Typography sx={globalStyles.paragraph}>
            Participants remarked on colorful, <b>inviting imagery</b>, particularly on the home page. Both began by looking for a place to enter their desired destination and dates. On the hotel results page, they focused on finding the most appealing hotel with <b>good ratings</b> at the <b>lowest price</b> and the best <b>amenities</b>. 
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Pain points included overwhelming or unexpected search results, confusing date pickers, <b>lack of clear and descriptive information</b> about the hotels and amenities, unclear sorting options, confusing rates and promotions that weren't easy to compare, and unclear lines drawn between member and non-member options.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Watching people struggle was a reminder that completing the task isn’t everything if the journey is <i>painful</i>. This exercise truly taught me to step back, <b>observe without bias</b>, and focus on understanding feelings and strategies with <b>empathy, not control</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Box sx={globalStyles.graphic}>
              <Image src={UsabilityQuotes} alt="An image of a usability test participant" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
    </Grid>
  );
}
