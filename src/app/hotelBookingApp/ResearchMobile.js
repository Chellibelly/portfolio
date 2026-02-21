import React, { forwardRef } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import SurveyQuotes from "../../../public/Survey_Quotes_Combined_Mobile_V2.png";
import Zoom3 from "../../../public/Zoom3.png";
import UsabilityQuotes from "../../../public/Usability_Quotes_Combined_Mobile_V2.png";
import { blue, grey } from '@mui/material/colors';
import * as globalStyles from '../styles/globalStyleConsts';

const ResearchMobile = forwardRef((props, ref) => {
  return (
    <Grid container justifyItems="center" justifyContent="center" sx={{ minHeight: '100vh' }} ref={ref}>
    <Grid item xs={10} ref={ref}>
      <Typography variant='h1' sx={globalStyles.heading1}>Collecting Initial Insights</Typography>
      <Typography variant='h2' sx={globalStyles.heading2}>The Research</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        First and foremost, I needed to understand <b>why people use hotel booking websites</b>. What are their actual <i>goals and expectations</i>? What success stories and struggles could provide insights into their needs?
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        To get started, I created a <b>seven-question survey in Google Forms</b> to gather both quantitative and qualitative data from friends, coworkers, and family with hotel booking experience.
      </Typography>
    </Grid>
    
    <Grid item xs={10} ref={ref}>
      <Typography variant='h3' sx={globalStyles.heading3}>Survey results: Goals, Behavior, and Pain</Typography>
        <Typography sx={globalStyles.paragraph}>
          Most of the 12 respondents said <b>proximity to activities</b> was their top priority when booking a hotel, followed by price. About half spent most of their time <b>comparing prices</b>, and many also focused on <b>filtering amenities</b> and <b>browsing search results</b>.
        </Typography>
        <Typography sx={globalStyles.paragraph}>
          When asked about tasks, participants were typically booking, comparing prices, or <b>seeking the best value</b>. Some used sites tied to <b>rewards programs</b>. Speed, ease, and reliability were common priorities. Participants also reported lingering frustrations with <b>unclear information</b> or confusing flows, even <i>several months</i> after their experience.
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
          I was interested to see how other hotel websites were addressing (or <i>failing</i> to address) user goals, identify common conventions, and <b>establish a baseline</b>. 
          I reviewed established hotel sites, including those mentioned by my survey participants.
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
      <Typography variant='h3' sx={globalStyles.heading3}>Usability Testing: Observation in Real Time</Typography>
      <Typography sx={globalStyles.paragraph}>
        To validate my assumptions and uncover friction points, I ran remote usability tests with <b>two participants</b> experienced in booking hotels. Each completed tasks on <b>two booking websites</b> while thinking aloud, allowing me to observe real-time behaviors, frustrations, and strategies. I also asked follow-up questions and gathered reflections on what surprised them, what they liked, and what was missing.
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