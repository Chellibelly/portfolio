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

export default function Research() {
  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>Tell Me How you <i>Really</i> Feel</Typography>
          <Typography variant='h2' className='heading2'>The Research</Typography>
          <Typography variant='body1' className='paragraph'>Focusing on my goal of creating a desirable product, I needed to understand why people use hotel booking websites. What are their actual goals and expectations? What success stories or frusterations could provide insights into their needs? I knew what I wanted to know, and <i><b>I</b></i> knew I wasn’t the person to tell me.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={ProcessResearchGraphic}
            alt="An image of the UX process with the Research step highlighted"
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>I Am Not My User</Typography>
          <Typography variant='body1' className='paragraph'>Starting with basically nothing, I needed to cast a wide net. I wanted to know what past experiences, contexts, goals, and struggles real people have had when booking hotels online. To cast such a net, I decided to use a survey. A survey could give me both quantitative data to identify patterns and qualitative data to uncover deeper insights and reveal emotional responses.</Typography>
          <Typography variant='h3' className='heading3'>The Survey Questions</Typography>
          <Typography variant='body1' className='paragraph'>I decided to use Google Forms because it was free, familiar to me, and easy to use and distribute. I came up with a total of seven questions, an easily digestible amount that would take less than five minutes to answer.</Typography>
        </Grid>
        
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Rallying the Troops</Typography>
          <Typography variant='body1' className='paragraph'>I reached out to friends, coworkers, and family, seeking anyone with experience booking hotels online. After a couple weeks (and a few reminders) I had survey responses from twelve lovely volunteers, and a good handful of useful insights. These insights weren’t definitive by any means, but they would help me to form testable assumptions which proved very valuable later.</Typography>
          
          <Typography variant='body1' className='paragraph'></Typography>
          <Typography variant='h3' className='heading3'>Goals, Context, and Behavior</Typography>
          <Typography variant='body1' className='paragraph'>Most respondents reported that proximity to activities in the area is the most important thing to them when looking for a hotel. Additionally, a large portion of respondents also reported that they spent the <i>majority</i> of their efforts filtering hotel amenities and browsing through search results.</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={QuantitativeAnswersGraphic}
            width="100%"
            alt="An image of pie charts representing quantitative survey results"
          />
        </Grid>

        <Grid item xs={10} sx={{ marginTop: 5, marginBottom: 5 }}>
          <Typography variant='body1' className='paragraph'>When asked what task they were trying to complete, most respondents replied that they were either booking or comparing prices. Several mentioned specifically choosing sites with the best prices or which supported easy price comparisons. Others mentioned using sites where they belonged to a rewards program with the brand. Several highlighted ease, speed, and reliability as key attributes of their favorite booking sites.</Typography>
        </Grid>

        <Grid item xs={12}>
          <Image
            className='graphic'
            src={SurveyQuotes}
            width="100%"
            alt="A collection of user opinion survey quotes"
          />
        </Grid>

        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>The Contradiction</Typography>
          <Typography variant='body1' className='paragraph'>An interesting contradiction emerged in the survey results. Most respondents said that proximity to activities in the area was the most important factor to them. However, almost none mentioned it when describing their goals or interactions. I found this apparent contradiction interesting, but reminded myself not to jump to conclusions. I was only just scratching the surface of my research.</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>The Pain</Typography>
          <Typography variant='body1' className='paragraph'>
            Out of all of the questions I asked, the longest and most detailed answers came in response to the last question on the survey: "What would you change?" It was clear that even though some respondents were answering questions about an experience they had weeks to months ago, their frustrations stuck with them.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Image
            className='graphic'
            src={SurveyQuotesPainpoints}
            width="100%"
            alt="A collection of user pain point survey quotes"
          />
        </Grid>

        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Checking out the Competition and Hunting for Conventions</Typography>
          <Typography variant='body1' className='paragraph'>Having gathered some basic data about user needs through my survey, I wanted to see how other hotel websites were addressing (or failing to address) them, discover conventions, and form a baseline. To minimize my personal bias, I set rules for myself. From a set of twelve UX design principles, I came up with a small set of categories I could focus on. My categories were navigation and order, saving time or effort, alignment with user goals, expectations, and forthcomingness.</Typography>
        
        </Grid>

        <Grid item xs={12}>
          <Image
            className='graphic'
            src={HeuristicsGraphic}
            width="100%"
            height={900}
            alt="A graphic depicting mapping UX heuristics to categories"
          />
        </Grid>

        <Grid item xs={10} sx={{ marginTop: 5, marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>The Lucky Contestants</Typography>
          <Typography variant='body1' className='paragraph'>
            With a clear lens for analysis with the help of my defined categories, I was ready to pick some websites to examine. 
            I focused on well-established companies who likely have the resources to optimize their websites. I landed on Hilton, Marriott, and Best Western. All three brands have been around for over fifty years and have thousands of active users. Hilton and Marriott were mentioned multiple times in survey answers. Best Western stands out with its franchisee-operated locations and budget-friendly reputation. 
          </Typography>
          <Typography variant='body1' className='paragraph'>
            With my target site chosen and a big cup of coffee, I began walking through the booking process on each mobile site. I took screenshots and jotted notes on anything interesting. 
          </Typography>
        </Grid>
        

        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Image
              className='graphic'
              src={HiltonNotes}
              alt="An example of notes taken on the Hilton website"
            />
          </Grid>
          <Grid item>
            <Image
              className='graphic'
              src={MarriotNotes}
              alt="An example of notes taken on the Marriot website"
            />
          </Grid>
          <Grid item>
            <Image
              className='graphic'
              src={BestWesternNotes}
              alt="An example of notes taken on the Best Western website"
            />
          </Grid>
        </Grid>
        
       
  
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>The Good, the Bad, and the Conventional</Typography>
          <Typography variant='body1' className='paragraph'>
            I discovered a few interesting things through this exercise. For one, there was certainly a conventional pattern to the steps through the booking process. Each site more or less took me through the same steps to complete my booking. Anyone who has used these sites has likely shaped a mental model off of this pattern.
            Beyond the process, I identified several key insights that fell easily into my categories.
          </Typography>
        </Grid>
      
       
        <Grid container direction="row" justifyContent="space-around" sx={{ margin: 3 }}>
          <Grid item sx={{ backgroundColor: blue[50], padding: 2 }}>
              <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Alignment with User Goals</Typography>
              <Typography variant='body2' className='paragraph-small'>
                Excessive promotional content can obscure the user's path to completing their goal.
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Limited real-estate on
                mobile sites can result in
                designs that inadvertently
                create visual relationships
                between unrelated items
              </Typography>

              <Typography variant='body2' className='paragraph-small'>
                Allowing users to sort by
                distance, price, etc. may
                help them focus on their
                specific goal
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Interactive maps can help users visualize and find hotels near their preferred destinations.
              </Typography>
            
              <Typography variant='body2' className='paragraph-small'>
                Pop-ups and tooltips can obscure important information or fields.
              </Typography>

          </Grid>
          <Grid item sx={{ backgroundColor: grey[50], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Navigation & Order</Typography>
            <Typography variant='body2' className='paragraph-small'>
               A consistent header for navigation and indicating the user's current location is crucial, especially on mobile sites with hidden functions.
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Navigation and key information for the user to have on hand should remain visible on mobile sites.
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Organizing, labeling, and numbering form fields can help users provide necessary information more easily.
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Clear navigation and visible back buttons help users recover from mistakes or change their minds.
              </Typography>
          </Grid>
          <Grid item sx={{ backgroundColor: blue[50], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Expectations</Typography>
            <Typography variant='body2' className='paragraph-small'>
              A calendar date picker is a common convention for selecting stay duration, but its ease of use can impact user frustration.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              It is common for hotel search results to offer multiple filters, such as amenities, type, brand, and price range.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Including a stay summary (hotel name, phone number, address, dates, and total cost) in the confirmation section may be both expected and helpful for users.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Prompting users to sign in, create an account, or continue as a guest is a common convention, with sign-in typically optional.
            </Typography>
          </Grid>
          <Grid item sx={{ backgroundColor: grey[50], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Forthcomingness</Typography>
            <Typography variant='body2' className='paragraph-small'>
              A pricing breakdown can be useful to users for cost details.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Be cautious with “points” and other hotel currency, as not all users, especially first-timers, may understand them.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Icons are useful and conventional on mobile, but they should have clear meanings or be explained upfront.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Clear validation requirements and error messages help users understand what’s missing or incorrect.
            </Typography>
          </Grid>
          <Grid item sx={{ backgroundColor: blue[50], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Saving Time/Effort</Typography>
            <Typography variant='body2' className='paragraph-small'>
              Auto-suggestions based on search criteria can help users as they type in their trip destination.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Displaying common search filters and additional options a click away saves users time.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              An easy way to reset filters saves users from changing them manually.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Forcing users to repeatedly decline offers can lead to frustration.
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Forcing users to select
              card type is an
              unconventional extra
              step
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Clearing inputs when toggling options may force users to start over unnecessarily.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>The Importance of Observation</Typography>
          
          <Typography variant='body1' className='paragraph'>
            With a better understanding of user needs and the typical booking process, I wanted to see for myself how real people interacted with existing booking websites. Would their behaviors align with my assumptions? Would they feel confident? Where would frustration arise, and what could I learn about their mental models?
            Getting the answers to these questions and more would be possible with usability tests, allowing me to observe users’ expressions, body language, and confusion in real time and organically.
          </Typography>

          <QuoteContainer quote="What people say, what people do, and what they say they do are entirely different things." author="Margaret Mead"/>

          <Typography variant='h3' className='heading3'>Selecting Users and Setting Up</Typography>
               
          <Typography variant='body1' className='paragraph'>I observed four usability test session, each with a different user. I selected participants with hotel booking experience but from different backgrounds to see if their approaches varied. The tests were conducted via Zoom and LetsView (a screen mirroring app). A few days before the session, I emailed participants an outline explaining the test, its purpose, the expected duration, and instructions for installing and using the necessary software. </Typography>

          </Grid>

          <Grid item xs={12}>
            <Image
              className='graphic'
              src={Zoom3}
              width="100%"
              alt="An image of pie charts representing quantitative survey results"
            />
          </Grid>
          
          <Grid item xs={10} sx={{ marginBottom: 5 }}>
            <Typography variant='h3' className='heading3'>Getting Comfortable</Typography>
            <Typography variant='body1' className='paragraph'>
              Once the technology was set up, I took time and care to ensure my participants were comfortable. I clarified that we testing the website - not them - and emphasized that there were no mistakes — only insights. I encouraged them to ask questions, but explained that I might not answer all to maintain the test’s integrity.
              I asked them to take their time and think aloud, sharing their actions, thoughts, and impressions of the screens. Finally, I explained the test structure and expectations as well as confirmed they were okay with the session being recorded.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Image
              className='graphic'
              src={Zoom1}
              width="100%"
              alt="An image of pie charts representing quantitative survey results"
            />
          </Grid>
            
          <Grid item xs={10} sx={{ marginBottom: 5 }}>
            <Typography variant='h3' className='heading3'>Depth interviews: Getting to Know the Participants</Typography>
            <Typography variant='body1' className='paragraph'>
              Each of the four tests began with a short interview to understand the users' backgrounds, behaviors, and context for using the software. I asked about their occupations, location, booking habits, priorities when booking, and recent booking experiences.
              Their responses helped me create four user personas, which I later used to design the customer journey.
            </Typography>
          </Grid>

        <Grid container direcion="row" justifyContent="space-around" xs={12}>
          <Grid item>
              <Image
              className='graphic'
              src={PersonaTomas}
              width="100%"
              alt="A stock photograph of a woman representing Tomas"
            />
          </Grid>
          <Grid item>
              <Image
              className='graphic'
              src={PersonaRachel}
              width="100%"
              alt="A stock photograph of a woman representing Rachel"
            />
          </Grid>
          <Grid item>
              <Image
              className='graphic'
              src={PersonaMike}
              width="100%"
              alt="A stock photograph of a woman representing Mike"
            />
          </Grid>
          <Grid item>
              <Image
              className='graphic'
              src={PersonaLinda}
              width="100%"
              alt="A stock photograph of a woman representing Linda"
            />
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Conducting the Usability Tests</Typography>
          <Typography variant='body1' className='paragraph'>After each depth interview concluded, it was time for the exciting part – testing the usability of the websites. Each participant was tasked with booking a hotel in a specified city for a weekend on two different sites – two of the sites I examined during my benchmark research. I watched what they were doing, reminded them to talk through their thoughts if they got quiet, and asked follow-up questions when needed, being as careful as possible not to bias the tests.</Typography>
          <Typography variant='body1' className='paragraph'>Each session took about an hour. After they finished the tasks, I asked how they felt about the experience—what surprised them, what they liked or didn’t like, and if they thought anything was missing. I wrapped up by thanking them for their time and letting them know how helpful their feedback was for my research.</Typography>
        
        </Grid>

        <QuoteContainer quote="Efficiency is doing things right; effectiveness is doing the right things." author="Peter Drucker"/>

        <Grid item xs={10}>  
          <Typography variant='h3' className='heading3'>Notable Behaviors</Typography>
          <Typography variant='body1' className='paragraph'>
            Participants all remarked on colorful, on-theme imagery and photos of hotels. Imagery seemed very important, especially on the homepage. Each user began the same way: by looking for a place to enter their desired destination and dates. On the hotel results page, they focused on finding the most appealing hotel with good ratings at the lowest price. They also seemed to love seeing ratings. 
          </Typography>
          <Typography variant='body1' className='paragraph'>
            After selecting a hotel, they quickly reviewed the amenities if available, then moved on to the room selection page. Here, they compared prices and room features, scrolling up and down the page until they found a match closest to what they were looking for.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={UsabilityQuotes}
            width="100%"
            alt="An image of quotes expressing user opinions"
          />
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Pain Points</Typography>
          <Typography variant='body1' className='paragraph'>Pain points encountered by the participants included overwhelming or unexpected search results, unconventional or confusing date picker controls, lack of clear and descriptive information about the hotels and amenities, unclear sorting options, confusing rates and promotions that weren't easy to compare, and unclear lines drawn between member and non-member options.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={UsabilityQuotesPainpoints}
            width="100%"
            alt="An image of quotes expressing user pain points"
          />
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: -5 }}>
          <Typography variant='h3' className='heading3'>An Exercise in Empathy</Typography>
          <Typography variant='body1' className='paragraph'>Watching people struggle is painful, but important. Not everyone works through problems in the same way, and completing the task isn’t everything if the journey was painful. I didn’t want to bias the data, but I also didn’t want my users to feel bad about themselves. With one participant in particular, I could tell she was getting anxious and blaming herself, and it took everything I had not to jump in and console her.</Typography>
          <Typography variant='body1' className='paragraph'>Looking back, I can see where I could’ve done things differently. Next time, I won’t agree with or justify their frustrations, and I won’t jump in with solutions. Instead, I’ll show empathy, give them some space to figure things out, and ask them to share what they’re feeling or trying to do when they get stuck.</Typography>
        </Grid>
      </Grid>
  );
}
