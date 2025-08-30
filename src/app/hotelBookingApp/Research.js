import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import * as globalStyles from '../styles/globalStyleConsts';

import SurveyQuestionsGraphic from '../../../public/Survey_Questions.png';
import QuantitativeAnswersGraphic from '../../../public/Quantitative_Answers.png';
import SurveyQuotesPainpoints from "../../../public/Survey_quotes_painpoints.png";
import SurveyQuotes from "../../../public/Survey_Quotes.png";
import Zoom3 from "../../../public/Zoom3.png";
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
        <Typography variant='h3' sx={globalStyles.heading3}>Goals</Typography>
        <Typography sx={globalStyles.paragraph}>
          The survey results were full of insights. These insights weren’t definitive by any means, but they would help me to form testable assumptions which proved very valuable later. Most respondents reported that proximity to activities in the area is the most important thing to them when looking for a hotel. Additionally, a large portion of respondents also reported that they spent the <i>majority</i> of their efforts filtering hotel amenities and browsing through search results.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={QuantitativeAnswersGraphic} alt="Pie charts representing quantitative survey results" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* Context & Behavior */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>Context and Behavior</Typography>
        <Typography sx={globalStyles.paragraph}>
          When asked what task they were trying to complete, most respondents replied that they were either booking or comparing prices. Several mentioned specifically choosing sites with the best prices or which supported easy price comparisons. Others mentioned using sites where they belonged to a rewards program with the brand. Several highlighted ease, speed, and reliability as key attributes of their favorite booking sites.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          An interesting contradiction emerged in the survey results. Most respondents said that proximity to activities in the area was the most important factor to them. However, almost none mentioned it when describing their goals or interactions. I found this apparent contradiction interesting, but reminded myself not to jump to conclusions. I was only just scratching the surface of my research.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={SurveyQuotes} alt="Collection of user opinion survey quotes" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* Pain */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>The Pain</Typography>
        <Typography sx={globalStyles.paragraph}>
          Of the questions I asked, the longest and most detailed answers came in response to the last question on the survey: "What would you change?" It was clear that even though some respondents were answering questions about an experience they had weeks to months ago, their frustrations stuck with them.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={SurveyQuotesPainpoints} alt="Collection of user pain point survey quotes" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* Competition */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>Checking out the Competition</Typography>
        <Typography sx={globalStyles.paragraph}>
          Having gathered some basic data about user needs through my survey, I wanted to see how other hotel websites were addressing (or failing to address) them, discover conventions, and form a baseline. To minimize my personal bias, I set rules for myself. From a set of twelve UX design principles, I came up with a small set of categories I could focus on. My categories were navigation and order, saving time or effort, alignment with user goals, expectations, and forthcomingness.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          With a clear lens for analysis with the help of my defined categories, I was ready to pick some websites to examine. I focused on well-established companies who likely have the resources to optimize their websites as well as hotels mentioned in the survey responses.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={HeuristicsGraphic} alt="Mapping UX heuristics to categories" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

    </Grid>
  );
}
