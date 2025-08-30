import React, { forwardRef } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import SurveyQuestionsGraphic from '../../../public/Survey_Questions.png';
import QuantitativeAnswersGraphic from '../../../public/Quantitative_Answers_Mobile.png';

import SurveyQuotesPainpoints from "../../../public/Survey_quotes_painpoints_Mobile.png";
import SurveyQuotes from "../../../public/Survey_Quotes_Mobile.png";

import Zoom1 from "../../../public/Zoom1.png";
import Zoom3 from "../../../public/Zoom3.png";

import BestWesternNotes from "../../../public/Benchmark_Notes_Example_Best_Western.png";
import HiltonNotes from "../../../public/Benchmark_Notes_Example_Hilton.png";
import MarriotNotes from "../../../public/Benchmark_Notes_Example_Marriot.png";

import UsabilityQuotesPainpoints from "../../../public/Usability_Quotes_Painpoints_Mobile.png";
import UsabilityQuotes from "../../../public/Usability_quotes_Mobile.png";
import HeuristicsGraphic from '../../../public/Heuristics.png';
import PersonaTomas from '../../../public/Persona_Tomas.png';
import PersonaRachel from '../../../public/Persona_Rachel.png';
import PersonaLinda from '../../../public/Persona_Linda.png';
import PersonaMike from '../../../public/Persona_Mike.png';
import ProcessResearchGraphic from '../../../public/Process_Research.png';

import QuoteContainer from './QuoteContainer';

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
      <Typography variant='h3' sx={globalStyles.heading3}>Context and Behavior</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        When asked what task they were trying to complete, most respondents replied that they were either booking or comparing prices. Several mentioned specifically choosing sites with the best prices or which supported easy price comparisons. Others mentioned using sites where they belonged to a rewards program with the brand. Several highlighted ease, speed, and reliability as key attributes of their favorite booking sites.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        An interesting contradiction emerged in the survey results. Most respondents said that proximity to activities in the area was the most important factor to them. However, almost none mentioned it when describing their goals or interactions. I found this apparent contradiction interesting, but reminded myself not to jump to conclusions. I was only just scratching the surface of my research.
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
      <Typography variant='h3' sx={globalStyles.heading3}>The Pain</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Of the questions I asked, the longest and most detailed answers came in response to the last question on the survey: "What would you change?" It was clear that even though some respondents were answering questions about an experience they had weeks to months ago, their frustrations stuck with them.
      </Typography>
    </Grid>

    <Grid item xs={12} ref={ref}>
      <Box sx={globalStyles.graphic}>
        <Image
          src={SurveyQuotesPainpoints}
          width="100%"
          alt="A collection of user pain point survey quotes"
        />
      </Box>
    </Grid>

    <Grid item xs={10} ref={ref}>
      <Typography variant='h3' sx={globalStyles.heading3}>Checking out the Competition</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        <Typography variant='body1' sx={globalStyles.paragraph}>
          Having gathered some basic data about user needs through my survey, I wanted to see how other hotel websites were addressing (or failing to address) them, discover conventions, and form a baseline. To minimize my personal bias, I set rules for myself. From a set of twelve UX design principles, I came up with a small set of categories I could focus on. My categories were navigation and order, saving time or effort, alignment with user goals, expectations, and forthcomingness.
        </Typography> 
        <Typography variant='body1' sx={globalStyles.paragraph}>
          With a clear lens for analysis with the help of my defined categories, I was ready to pick some websites to examine. I focused on well-established companies who likely have the resources to optimize their websites as well as hotels mentioned in the survey responses
        </Typography>
      </Typography>
    
    </Grid>

    <Grid item xs={12} ref={ref}>
      <Box sx={globalStyles.graphic}>
        <Image
          src={HeuristicsGraphic}
          width="100%"
          height={900}
          alt="A graphic depicting mapping UX heuristics to categories"
        />
      </Box>
    </Grid>

    
   

    <Grid item ref={ref} xs={10} sx={{ marginBottom: 5 }}>
      <Typography variant='h3' sx={globalStyles.heading3}>The Good, the Bad, and the Conventional</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        I discovered a few interesting things through this exercise. For one, there was certainly a conventional pattern to the steps through the booking process. Each site more or less took me through the same steps to complete my booking. Anyone who has used these sites has likely shaped a mental model off of this pattern.
        Beyond the process, I identified several key insights that fell easily into my categories.
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
      <Typography variant='h3' sx={globalStyles.heading3}>The Importance of Observation: Usability Testing</Typography>
      
     <Typography variant='body1' sx={globalStyles.paragraph}>
        With a better understanding of user needs and the typical booking process, I wanted to see for myself how people interacted with existing booking websites in real time to learn whether or not behaviors and body language aligned with my assumptions, identify points of confusion, and understand their mental models in real time.
      </Typography>

      <Typography variant='body1' sx={globalStyles.paragraph}>
        I ran four remote usability tests with participants from different backgrounds who had hotel booking experience. I made sure they were comfortable, emphasized that there were no mistakes (only insights) and encouraged think-aloud feedback throughout the session.
      </Typography>

      <Typography variant='body1' sx={globalStyles.paragraph}>
        Each participant was asked to book a hotels on two different websites while I observed their actions and asked follow-up questions when needed. Afterwards, I gathered reflections on what surprised them, what they liked and didn't like, and what features they felt were missing.
      </Typography>
     

     
      </Grid>

      <Grid item ref={ref} xs={12}>
        <Box sx={globalStyles.graphic}>
          <Image
            src={Zoom3}
            width="100%"
            alt="An image of pie charts representing quantitative survey results"
          />
        </Box>
      </Grid>
      


        


  

   

    

    <Grid item ref={ref} xs={10}>  
      <Typography variant='h3' sx={globalStyles.heading3}>Notable Behaviors</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Participants all remarked on colorful, on-theme imagery and photos of hotels. Imagery seemed very important, especially on the homepage. Each user began the same way: by looking for a place to enter their desired destination and dates. On the hotel results page, they focused on finding the most appealing hotel with good ratings at the lowest price. They also seemed to love seeing ratings. 
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        After selecting a hotel, they quickly reviewed the amenities if available, then moved on to the room selection page. Here, they compared prices and room features, scrolling up and down the page until they found a match closest to what they were looking for.
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
    <Grid item ref={ref} xs={10} sx={{ marginBottom: 5 }}>
      <Typography variant='h3' sx={globalStyles.heading3}>Pain Points</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>Pain points encountered by the participants included overwhelming or unexpected search results, unconventional or confusing date picker controls, lack of clear and descriptive information about the hotels and amenities, unclear sorting options, confusing rates and promotions that weren't easy to compare, and unclear lines drawn between member and non-member options.</Typography>
    </Grid>
    <Grid item ref={ref} xs={12}>
      <Box sx={globalStyles.graphic}>
        <Image
          src={UsabilityQuotesPainpoints}
          width="100%"
          alt="An image of quotes expressing user pain points"
        />
      </Box>
    </Grid>
    <Grid item ref={ref} xs={10} sx={{ marginBottom: -5 }}>
      <Typography variant='h3' sx={globalStyles.heading3}>An Exercise in Empathy</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>Watching people struggle is painful, but important. Not everyone works through problems in the same way, and completing the task isn’t everything if the journey was painful. I didn’t want to bias the data, but I also didn’t want my users to feel bad about themselves. With one participant in particular, I could tell she was getting anxious and blaming herself, and it took everything I had not to jump in and console her.</Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>Looking back, I can see where I could’ve done things differently. Next time, I won’t agree with or justify their frustrations, and I won’t jump in with solutions. Instead, I’ll show empathy, give them some space to figure things out, and ask them to share what they’re feeling or trying to do when they get stuck.</Typography>
    </Grid>
  </Grid>
  );
});

ResearchMobile.displayName = 'ResearchMobile'; 

export default ResearchMobile;