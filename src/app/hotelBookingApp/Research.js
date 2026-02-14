import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import * as globalStyles from '../styles/globalStyleConsts';

import SurveyQuestionsGraphic from '../../../public/Survey_Questions.png';
import QuantitativeAnswersGraphic from '../../../public/Quantitative_Answers.png';
import SurveyQuotes from "../../../public/Survey_Quotes_Combined.png";
import Zoom3 from "../../../public/Zoom3.png";
import UsabilityQuotes from "../../../public/usability_quotes_combined.png";
import HeuristicsGraphic from '../../../public/Heuristics.png';

export default function Research() {
  return (
    <Grid container justifyContent="center" spacing={4}>
      
      {/* Intro */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h1' sx={globalStyles.heading1}>Tell Me How you <i>Really</i> Feel</Typography>
        <Typography variant='h2' sx={globalStyles.heading2}>The Research</Typography>
        <Typography sx={globalStyles.paragraph}>
          Focusing on my goal of creating a desirable product, I needed to understand why people use hotel booking websites. What are their actual goals and expectations? What success stories and struggles could provide insights into their needs?
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          To get started, I created a seven-question survey in Google Forms to gather both quantitative and qualitative data from friends, coworkers, and family with hotel booking experience, ultimately collecting 12 responses.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={SurveyQuestionsGraphic} alt="Survey questions and reasons behind asking them" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* Goals */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>User Goals</Typography>
        <Typography sx={globalStyles.paragraph}>
          The survey results were full of insights. These insights weren’t definitive by any means, but they would help me to form testable assumptions which proved very valuable later. Most respondents reported that proximity to activities in the area is the most important thing to them when looking for a hotel. Additionally, a large portion of respondents also reported that they spent the <i>majority</i> of their efforts filtering hotel amenities and browsing through search results.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={QuantitativeAnswersGraphic} alt="Pie charts representing quantitative survey results" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* Context, Behavior, and Pain */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>Context, Behavior, and Pain</Typography>
        <Typography sx={globalStyles.paragraph}>
          When asked about tasks, most participants were booking or comparing prices or looking for the best value. Others mentioned using sites where they belonged to a rewards program with the brand.  Speed, ease, and reliability were common priorities. Respondents also shared frustrations with unclear information or confusing flows, which stuck with them even several months after their experience.
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
          With survey insights in hand, I wanted to see how other hotel websites were addressing (or failing to address) user goals, discover conventions, and form a baseline. 
          I reviewed established hotel sites and those mentioned by participants, evaluating them against categories like expectations, navigation, time-saving, alignment with goals, and transparency.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={HeuristicsGraphic} alt="Mapping UX heuristics to categories" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* usability testing */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>Usability Testing: The Importance of Observation</Typography>
        <Typography sx={globalStyles.paragraph}>
         With a better understanding of user needs and the typical booking process, I wanted to see for myself how people interacted with existing booking websites in real time to learn whether or not behaviors and body language aligned with my assumptions, identify points of confusion, and understand their mental models in real time.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          I ran remote usability tests with participants experienced in booking hotels. They completed tasks on two different sites while thinking aloud. I observed actions, asked follow-ups, and collected reflections on surprises, likes, dislikes, and missing features.
        </Typography>
      </Grid>
        <Grid item xs={12} sm={10}>
          <Box sx={globalStyles.graphic}>
              <Image src={Zoom3} alt="An image of a usability test participant" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>Behaviors, Frusterations, and an Excercise in Empathy</Typography>
          <Typography sx={globalStyles.paragraph}>
            Participants all remarked on colorful, inviting imagery, particularly on the home page. Each user began by looking for a place to enter their desired destination and dates. On the hotel results page, they focused on finding the most appealing hotel with good ratings at the lowest price and the best amenities. 
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Pain points included overwhelming or unexpected search results, confusing date pickers, lack of clear and descriptive information about the hotels and amenities, unclear sorting options, confusing rates and promotions that weren't easy to compare, and unclear lines drawn between member and non-member options.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Watching people struggle is painful. Not everyone works through problems in the same way, and completing the task isn’t everything if the journey is painful. This exercise truly taught me to step back, observe without bias, and focus on understanding feelings and strategies with empathy, not control.
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
