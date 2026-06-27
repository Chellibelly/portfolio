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
        <Typography component="h2" sx={globalStyles.heading1}>Collecting Initial Insights</Typography>
        <Typography component="p" sx={globalStyles.heading2}>The Research</Typography>
        <Typography sx={globalStyles.paragraph}>
          First and foremost, I needed to understand why people use hotel booking websites. To get started, I created a <b>seven-question survey in Google Forms</b> to gather both quantitative and qualitative data from friends and collegues with hotel booking experience.
        </Typography>
      </Grid>

      {/* Survey Results */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>The Survey: Goals, Behavior, and Pain</Typography>
        <Typography sx={globalStyles.paragraph}>
          Most of the 12 respondents said <b>proximity to activities</b> was their top priority when booking a hotel, followed by price. About half spent most of their time <b>comparing prices</b>, and many also focused on <b>filtering amenities</b> and <b>browsing search results</b>.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          When asked about tasks, participants were typically booking, comparing prices, or <b>seeking the best value</b>. Some used sites tied to <b>rewards programs</b>. Participants also reported lingering frustrations with <b>unclear information</b> or confusing flows, even <i>several months</i> after their experience.
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
        <Typography variant='h3' sx={globalStyles.heading3}>Comparative Usability Testing: Observation in Real Time</Typography>
        <Typography sx={globalStyles.paragraph}>
         The survey revealed broad priorities and frustrations, but I wanted to see how they played out during an actual booking experience. I conducted remote comparative usability tests with two people who regularly booked hotels online. Each participant completed tasks on two existing booking websites while thinking aloud, allowing me to observe where they hesitated, what information they searched for, and what caused confusion. I followed each session with questions about what worked, what surprised them, and what felt missing.
        </Typography>
      </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>Behaviors, Frustrations, and an Exercise in Empathy</Typography>
          <Typography sx={globalStyles.paragraph}>
            Participants remarked on <b>inviting imagery</b>, particularly on the home page. Both began by looking for a place to enter destination and dates. On the hotel results page, they looked for the hotel with <b>good ratings</b> at the <b>lowest price</b> and the best <b>amenities</b>. 
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Friction came from unexpected search results, confusing date pickers, unclear hotel and amenity information, difficult-to-compare rates, and blurred distinctions between member and non-member options.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Watching participants complete the tasks while still feeling confused or frustrated reshaped how I thought about success. Task completion alone did not mean the experience was working well. The sessions taught me to step back, observe with empathy, and let users’ behavior reveal problems I might otherwise have missed.
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
