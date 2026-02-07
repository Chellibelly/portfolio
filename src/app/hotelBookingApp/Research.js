import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import * as globalStyles from '../styles/globalStyleConsts';

import SurveyQuestionsGraphic from '../../../public/Survey_Questions.png';
import QuantitativeAnswersGraphic from '../../../public/Quantitative_Answers.png';
import SurveyQuotesPainpoints from "../../../public/Survey_quotes_painpoints.png";
import SurveyQuotes from "../../../public/Survey_Quotes.png";
import Zoom3 from "../../../public/Zoom3.png";
import UsabilityQuotes from "../../../public/usability_quotes.png";
import UsabilityPainPoints from "../../../public/usability_quotes_painpoints.png";
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
          With survey insights in hand, I wanted to see how other hotel websites were addressing (or failing to address) user goals, discover conventions, and form a baseline. 
          I focused on well-established sites and hotels cited by survey participants, using a small set of categories to minimize bias: expectations, navigation and order, saving time/effort, alignment with user goals, and forthcomingness.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10}>
        <Box sx={globalStyles.graphic}>
          <Image src={HeuristicsGraphic} alt="Mapping UX heuristics to categories" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>

      {/* usability testing */}
      <Grid item xs={12} sm={10}>
        <Typography variant='h3' sx={globalStyles.heading3}>The Importance of Observation: Usability Testing</Typography>
        <Typography sx={globalStyles.paragraph}>
         With a better understanding of user needs and the typical booking process, I wanted to see for myself how people interacted with existing booking websites in real time to learn whether or not behaviors and body language aligned with my assumptions, identify points of confusion, and understand their mental models in real time.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
         I ran four remote usability tests with participants from different backgrounds who had hotel booking experience. I made sure they were comfortable, emphasized that there were no mistakes (only insights) and encouraged think-aloud feedback throughout the session.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          Each participant was asked to book a hotels on two different websites while I observed their actions and asked follow-up questions when needed. Afterwards, I gathered reflections on what surprised them, what they liked and didn't like, and what features they felt were missing.
        </Typography>
      </Grid>
        
        <Grid item xs={12} sm={10}>
          <Box sx={globalStyles.graphic}>
              <Image src={Zoom3} alt="An image of a usability test participant" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>Notable Behaviors</Typography>
          <Typography sx={globalStyles.paragraph}>
            Participants all remarked on colorful, on-theme imagery and photos of hotels. Imagery seemed very important, especially on the homepage. Each user began the same way: by looking for a place to enter their desired destination and dates. On the hotel results page, they focused on finding the most appealing hotel with good ratings at the lowest price. They also seemed to love seeing ratings.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            After selecting a hotel, they quickly reviewed the amenities if available, then moved on to the room selection page. Here, they compared prices and room features, scrolling up and down the page until they found a match closest to what they were looking for.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10}>
          <Box sx={globalStyles.graphic}>
              <Image src={UsabilityQuotes} alt="An image of a usability test participant" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>Pain Points</Typography>
          <Typography sx={globalStyles.paragraph}>
            Pain points encountered by the participants included overwhelming or unexpected search results, unconventional or confusing date picker controls, lack of clear and descriptive information about the hotels and amenities, unclear sorting options, confusing rates and promotions that weren't easy to compare, and unclear lines drawn between member and non-member options.
          </Typography>
        </Grid>
      
        <Grid item xs={12} sm={10}>
          <Box sx={globalStyles.graphic}>
              <Image src={UsabilityPainPoints} alt="An image of a usability test participant" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={10}>
          <Typography variant='h3' sx={globalStyles.heading3}>An Exercise in Empathy</Typography>
          <Typography sx={globalStyles.paragraph}>
            Watching people struggle is painful, but important. Not everyone works through problems in the same way, and completing the task isn’t everything if the journey was painful. I didn’t want to bias the data, but I also didn’t want my users to feel bad about themselves. With one participant in particular, I could tell she was getting anxious and blaming herself, and it took everything I had not to jump in and console her.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Looking back, I can see where I could’ve done things differently. Next time, I won’t agree with or justify their frustrations, and I won’t jump in with solutions. Instead, I’ll show empathy, give them some space to figure things out, and ask them to share what they’re feeling or trying to do when they get stuck.
          </Typography>
        </Grid>



    </Grid>
  );
}
