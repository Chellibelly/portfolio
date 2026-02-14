import React, { forwardRef } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import SurveyQuestionsGraphic from '../../../public/Survey_Questions.png';
import QuantitativeAnswersGraphic from '../../../public/Quantitative_Answers_Mobile.png';

import SurveyQuotes from "../../../public/survey_quotes_combined_mobile.png";

import Zoom3 from "../../../public/Zoom3.png";

import UsabilityQuotes from "../../../public/Usability_quotes_combined_mobile.png";

import { blue, grey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

const ResearchMobile = forwardRef((props, ref) => {
  return (
    <Grid container justifyItems="center" justifyContent="center" sx={{ minHeight: '100vh' }} ref={ref}>
    <Grid item xs={10} ref={ref}>
      <Typography variant='h1' sx={globalStyles.heading1}>Tell Me How you <i>Really</i> Feel</Typography>
      <Typography variant='h2' sx={globalStyles.heading2}>The Research</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Focusing on my goal of creating a desirable product, I needed to understand why people use hotel booking websites. What are their actual goals and expectations? What success stories and struggles could provide insights into their needs?
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        To get started, I created a seven-question survey in Google Forms to gather both quantitative and qualitative data from friends, coworkers, and family with hotel booking experience, ultimately collecting 12 responses.
      </Typography>
    </Grid>
    
    <Grid item xs={10} ref={ref}>
      <Typography variant='h3' sx={globalStyles.heading3}>Goals</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        The survey results were full of insights. These insights weren’t definitive by any means, but they would help me to form testable assumptions which proved very valuable later. Most respondents reported that proximity to activities in the area is the most important thing to them when looking for a hotel. Additionally, a large portion of respondents also reported that they spent the majority of their efforts filtering hotel amenities and browsing through search results.
      </Typography>
    </Grid>
    
    <Grid item xs={12} ref={ref}> 
      <Box sx={globalStyles.graphic}>
        <Image
          src={QuantitativeAnswersGraphic}
          width="100%"
          alt="An image of pie charts representing quantitative survey results"
        />
      </Box>
    </Grid>

    <Grid item xs={10} ref={ref} sx={{ marginTop: 5, marginBottom: 5 }}>
      <Typography variant='h3' sx={globalStyles.heading3}>Context, Behavior, and Pain</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        When asked about tasks, most participants were booking or comparing prices or looking for the best value. Others mentioned using sites where they belonged to a rewards program with the brand.  Speed, ease, and reliability were common priorities. Respondents also shared frustrations with unclear information or confusing flows, which stuck with them even several months after their experience.
      </Typography>
    </Grid>

    <Grid item xs={12} ref={ref}>
      <Box sx={globalStyles.graphic}>
      <Image
        src={SurveyQuotes}
        width="100%"
        alt="A collection of user opinion survey quotes"
      />
      </Box>
    </Grid>

    <Grid item xs={10} ref={ref}>
      <Typography variant='h3' sx={globalStyles.heading3}>Checking out the Competition</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        <Typography variant='body1' sx={globalStyles.paragraph}>
         With survey insights in hand, I wanted to see how other hotel websites were addressing (or failing to address) user goals, discover conventions, and form a baseline. I focused on well-established sites and hotels cited by survey participants, using a small set of categories to minimize bias: expectations, navigation and order, saving time/effort, alignment with user goals, and forthcomingness.
        </Typography>      
      </Typography>
    </Grid>
    <Grid container direction="row" justifyContent="space-around" sx={{ margin: 3 }}>
      <Grid item ref={ref} sx={{ backgroundColor: blue[50], padding: 2 }}>
          <Typography sx={{ ...globalStyles.heading6, textAlign: "center", height: 50, fontWeight: "bold" }}>Alignment with User Goals</Typography>
          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Excessive promotional content can obscure the user's path to completing their goal.
          </Typography>
          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Limited real-estate on
            mobile sites can result in
            designs that inadvertently
            create visual relationships
            between unrelated items
          </Typography>

          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Allowing users to sort by
            distance, price, etc. may
            help them focus on their
            specific goal
          </Typography>
          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Interactive maps can help users visualize and find hotels near their preferred destinations.
          </Typography>
        
          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Pop-ups and tooltips can obscure important information or fields.
          </Typography>

      </Grid>
      <Grid item ref={ref} sx={{ backgroundColor: grey[50], padding: 2 }}>
        <Typography sx={{ ...globalStyles.heading6, textAlign: "center", height: 50, fontWeight: "bold" }}>Navigation & Order</Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
           A consistent header for navigation and indicating the user's current location is crucial, especially on mobile sites with hidden functions.
          </Typography>
          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Navigation and key information for the user to have on hand should remain visible on mobile sites.
          </Typography>
          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Organizing, labeling, and numbering form fields can help users provide necessary information more easily.
          </Typography>
          <Typography variant='body2' sx={globalStyles.paragraphSmall}>
            Clear navigation and visible back buttons help users recover from mistakes or change their minds.
          </Typography>
      </Grid>
      <Grid item ref={ref} sx={{ backgroundColor: blue[50], padding: 2 }}>
        <Typography sx={{ ...globalStyles.heading6, textAlign: "center", height: 50, fontWeight: "bold" }}>Expectations</Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          A calendar date picker is a common convention for selecting stay duration, but its ease of use can impact user frustration.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          It is common for hotel search results to offer multiple filters, such as amenities, type, brand, and price range.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Including a stay summary (hotel name, phone number, address, dates, and total cost) in the confirmation section may be both expected and helpful for users.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Prompting users to sign in, create an account, or continue as a guest is a common convention, with sign-in typically optional.
        </Typography>
      </Grid>
      <Grid item ref={ref} sx={{ backgroundColor: grey[50], padding: 2 }}>
        <Typography sx={{ ...globalStyles.heading6, textAlign: "center", height: 50, fontWeight: "bold" }}>Forthcomingness</Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          A pricing breakdown can be useful to users for cost details.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Be cautious with “points” and other hotel currency, as not all users, especially first-timers, may understand them.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Icons are useful and conventional on mobile, but they should have clear meanings or be explained upfront.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Clear validation requirements and error messages help users understand what’s missing or incorrect.
        </Typography>
      </Grid>
      <Grid item ref={ref} sx={{ backgroundColor: blue[50], padding: 2 }}>
        <Typography sx={{ ...globalStyles.heading6, textAlign: "center", height: 50, fontWeight: "bold" }}>Saving Time/Effort</Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Auto-suggestions based on search criteria can help users as they type in their trip destination.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Displaying common search filters and additional options a click away saves users time.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          An easy way to reset filters saves users from changing them manually.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Forcing users to repeatedly decline offers can lead to frustration.
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Forcing users to select
          card type is an
          unconventional extra
          step
        </Typography>
        <Typography variant='body2' sx={globalStyles.paragraphSmall}>
          Clearing inputs when toggling options may force users to start over unnecessarily.
        </Typography>
      </Grid>
    </Grid>
    <Grid item ref={ref} xs={10} sx={{ marginBottom: 5 }}>
      <Typography variant='h3' sx={globalStyles.heading3}>Usability Testing: The Importance of Observation </Typography>
      <Typography sx={globalStyles.paragraph}>
        With a better understanding of user needs and the typical booking process, I wanted to see for myself how people interacted with existing booking websites in real time to learn whether or not behaviors and body language aligned with my assumptions, identify points of confusion, and understand their mental models in real time.
      </Typography>
      <Typography sx={globalStyles.paragraph}>
        I ran remote usability tests with participants experienced in booking hotels. They completed tasks on two different sites while thinking aloud. I observed actions, asked follow-ups, and collected reflections on surprises, likes, dislikes, and missing features.
      </Typography>
      </Grid>
      <Grid item ref={ref} xs={12}>
        <Box sx={globalStyles.graphic}>
          <Image
            src={Zoom3}
            width="100%"
            alt="An image usability testing"
          />
        </Box>
      </Grid>
    <Grid item ref={ref} xs={10}>  
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
    <Grid item ref={ref} xs={12}>
      <Box sx={globalStyles.graphic}>
        <Image
          src={UsabilityQuotes}
          width="100%"
          alt="An image of quotes expressing user opinions"
        />
      </Box>
    </Grid>
  </Grid>
  );
});

ResearchMobile.displayName = 'ResearchMobile'; 

export default ResearchMobile;