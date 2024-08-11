import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import SurveyQuestionsGraphic from '../../../public/Survey_Questions.png';
import QuantitativeAnswersGraphic from '../../../public/Quantitative_Answers.png';

import SurveyQuotesPainpoints from "../../../public/Survey_quotes_painpoints.png";
import SurveyQuotes from "../../../public/Survey_Quotes.png";

import BenchmarkHotelBestWestern from "../../../public/Hotel_Best_Western.png";
import BenchmarkHotelHilton from "../../../public/Hotel_Hilton.png";
import BenchmarkHotelMarriot from "../../../public/Hotel_Marriot.png";

import Zoom1 from "../../../public/Zoom1.png";
import Zoom3 from "../../../public/Zoom3.png";

import BestWesternNotes from "../../../public/Benchmark_Notes_Example_Best_Western.png";
import HiltonNotes from "../../../public/Benchmark_Notes_Example_Hilton.png";
import MarriotNotes from "../../../public/Benchmark_Notes_Example_Marriot.png";

import UsabilityQuotesPainpoints from "../../../public/Usability_Quotes_painpoints.png";
import UsabilityQuotes from "../../../public/Usability_quotes.png";
import HeuristicsGraphic from '../../../public/Heuristics.png';
import PersonaTomas from '../../../public/Persona_Tomas.png';
import PersonaRachel from '../../../public/Persona_Rachel.png';
import PersonaLinda from '../../../public/Persona_Linda.png';
import PersonaMike from '../../../public/Persona_Mike.png';
import ProcessResearchGraphic from '../../../public/Process_Research.png';

import QuoteContainer from './QuoteContainer';

import { blue } from '@mui/material/colors';

export default function Research() {
  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>Tell Me How you <i>Really</i> Feel</Typography>
          <Typography variant='h2' className='heading2'>The Research</Typography>
          <Typography variant='body1' className='paragraph'>Focusing on my goal of creating a desirable product, I needed to understand why people use websites like these in the first place. Above all, when they go to one of these sites, what are their actual goals? What are they expecting? Could people share any success stories or frustrations that could help me further understand what they wanted? I knew what I wanted to know, and <i><b>I</b></i> knew I wasn’t the person to tell me.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={ProcessResearchGraphic}
            alt="An image of the UX process with the Research step highlighted"
          />
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5}}>
          <Typography variant='h3' className='heading3'>I Am Not My User</Typography>
          <Typography variant='body1' className='paragraph'>Starting with basically nothing, I needed to cast a wide net in terms of audience and gather information from real people about past experiences that they have had while using hotel booking websites. I wanted to know their stories, contexts, goals, and struggles.  </Typography>
          <Typography variant='body1' className='paragraph'>One easy way to get feedback from several users is to use a classic research method: a survey. I wanted both quantitative and qualitative feedback. Quantitative feedback would help to identify commonalities I could focus on, and qualitative feedback would reveal deeper insights and allow real emotions to come through.</Typography>
          <Typography variant='h3' className='heading3'>The Survey Questions</Typography>
          <Typography variant='body1' className='paragraph'>I decided to use Google Forms because it was free, familiar to me, and easy to use and distribute. I came up with a total of seven questions, an easily digestible amount that would take less than five minutes to answer. I figured as long as I had a <i>really</i> good reason behind asking each question, seven questions should be plenty to get some great insights.</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={SurveyQuestionsGraphic}
            width="100%"
            alt="An image of survey questions and reasons behind asking them"
          />
        </Grid>
        
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Rallying the Troops</Typography>
          <Typography variant='body1' className='paragraph'>After crafting the questions and getting the survey written in Google Forms, it was time to distribute. Since this was a school project, I had zero budget to work with. That being said, I needed volunteers. I reached out to friends, coworkers, colleagues, and family, looking for anyone I knew who had experienced booking hotels through websites before.</Typography>
          <Typography variant='body1' className='paragraph'>The survey was distributed to the qualified volunteers by email and, after a little over a week (and a few reminders), all of the surveys had been summitted!</Typography>
          <Typography variant='h3' className='heading3'>Do these twelve people have all the answers?</Typography>
          <Typography variant='body1' className='paragraph'>The short answer to this question is “no.” And the answer <i>should</i> be no. This was when I first realized avoiding actual analysis until the correct step in the process was going to be hard. Surprisingly however, I was able to get a good handful of useful insights from surveying twelve people. These insights weren’t “all the answers”, but they would be some of the stepping stones to those answers. They would help me to form assumptions that I could test later, and that would end up being very valuable. </Typography>
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
          <Typography variant='body1' className='paragraph'>When asked what task they were trying to complete, most respondents replied that they were trying to either book a stay or research and compare prices. Several mentioned selecting their chosen website because of good prices or being able to easily compare prices. Others mentioned using the site because they belong to a rewards or preferred program with the brand. Several also highlighted ease and quickness of use and reliability being the reason they use their favorite hotel booking websites.</Typography>
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
          <Typography variant='body1' className='paragraph'>One interesting contradition the survey results seemed to expose was that when asked what the most important thing to them is when booking a hotel, most respondents reported that the most important thing is the proximity to activities in the area. However, almost none of the respondents mentioned anything to do with this desire when describing what they were trying to accomplish or what they actually interacted with on the website.</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1' className='paragraph'>
            I wondered if that's what was going on with this contradition, and I also wondered if I'd be able to witness contradictions like this in action later on in the research. At this point though, I tried to keep in mind that I had a small sample size and to not draw any conclusions yet.
          </Typography>
          <Typography variant='h3' className='heading3'>The Pain</Typography>
          <Typography variant='body1' className='paragraph'>
            Out of all of the questions I asked, the longest and most detailed answers came in response to the last question on the survey: "What would you change?" It was clear that even though some respondants were answering questions about an experience they had weeks to months ago, their frustrations stuck with them.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Image
            className='graphic'
            src={SurveyQuotesPainpoints}
            width="100%"
            height={500}
            alt="A collection of user pain point survey quotes"
          />
        </Grid>

        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Checking out the Competition and the Hunt for Conventions</Typography>
          <Typography variant='body1' className='paragraph'>Having some preliminary research gathered about user goals, I wanted to see how other hotel websites were catering to (or not catering to) them, discover conventions, and form a baseline. </Typography>
          <Typography variant='body1' className='paragraph'>I acknowledged this as yet another place where I could potentially easily insert my own opinion, and I wanted to avoid that as much as possible. Something important to me might not be to my user. So, if one of my goals was to discover holes in the products of the competition, how would I go about this without letting my opinions take over?</Typography>
          <Typography variant='h3' className='heading3'>Heuristics to the Rescue</Typography>
          <Typography variant='body1' className='paragraph'>Before looking at a single hotel site, I wanted to establish rules to guide me. I figured if I examined these websites through the correct design lens, my personal opinions would have little room to interfere. From a set of twelve heuristics, I came up with a small set of categories I could focus on. My categories were navigation and order, saving time or effort, alignment with user goals, expectations, and forthcomingness. </Typography>
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
          <Typography variant='h3' className='heading3'>The Search for The Lucky Contestants</Typography>
          <Typography variant='body1' className='paragraph'>
            Now that I had a lens for how I intended to examine the websites, I needed to actually pick some websites to look at. How was I to pick these? Well, a hotel booking website isn’t a new concept by any means. Surely most successful hotel companies have everything figured out and should pass design heuristics with flying colors. I knew, though that this was an assumption, and I wanted to find out if it was true.
          </Typography>
          <Typography variant='h3' className='heading3'>Who Qualified?</Typography>
          <Typography variant='body1' className='paragraph'>
            I decided to pick companies that were well established because these would be the companies that should have had the time, resources, and reach to have ironed things out. These would be the websites that mine should compare to.  
          </Typography>
          <Typography variant='body1' className='paragraph'>
            I first needed to define “established” for my use case. The definition I landed on was this: a company that has existed for over 50 years and has several thousands of hotel locations counted as established. 
          </Typography>
          <Typography variant='h3' className='heading3'>My Picks</Typography>
          <Typography variant='body1' className='paragraph'>
            I selected Hilton, Marriot, and Best Western. All three companies met my "established" definition. Hilton and Marriot are arguably the biggest hospitality companies in the United States and were mentioned quite a few times in the user surveys. I chose Best Western because it qualified and is also a large company, but is a little different from the others for it's franchisee-operated locations and reputation as a more budget-friendly option from the other two. It gave me a little variety in research subject without straying too far from my target group.
          </Typography>
        </Grid>
        

        <Grid container direction="row" justifyContent="space-around">
          <Grid item xs={4}>
            <Image
              className='graphic'
              src={BenchmarkHotelHilton}
              width={900}
              height={500}
              alt="Hilton and Facts"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              className='graphic'
              src={BenchmarkHotelMarriot}
              width={900}
              height={500}
              alt="Marriot Logo and Facts"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              className='graphic'
              src={BenchmarkHotelBestWestern}
              width={900}
              height={500}
              alt="Best Western Logo and Facts"
            />
          </Grid>
        </Grid>

        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>An Afternoon and a Notebook</Typography>
          <Typography variant='body1' className='paragraph'>
            With my design categories, chosen hotel websites, and a big cup of coffee, I got to work. I walked through the booking process of each of the hotels’ mobiles sites several times, taking screenshots and notes on anything of interest relating to my categories.
          </Typography>
          <Typography variant='body1' className='paragraph'>
            In addition to the heuristic evaluations, I also took notes on the steps in the process that I had to take on each site to complete a booking.
          </Typography>
        </Grid>
        
        <Grid container direction="row" justifyContent="space-around">
          <Grid item xs={4}>
            <Image
              className='graphic'
              src={HiltonNotes}
              width={900}
              height={500}
              alt="An example of notes taken on the Hilton website"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              className='graphic'
              src={MarriotNotes}
              width={900}
              height={500}
              alt="An example of notes taken on the Marriot website"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              className='graphic'
              src={BestWesternNotes}
              width={900}
              height={500}
              alt="An example of notes taken on the Best Western website"
            />
          </Grid>
        </Grid>
  
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>The Good, the Bad, and the Conventional</Typography>
          <Typography variant='body1' className='paragraph'>
            I discovered a few interesting things through this exercise. For one, there was certainly a conventional pattern to the steps through the booking process. Each site more or less took me through the same steps to complete my booking. Anyone who has used these sites has likely shaped a mental model off of this pattern. I was eager to see if further research would demonstrate that.
          </Typography>
          <Typography variant='body1' className='paragraph'>
            Besides the conventional process, there were plenty of interesting points related to my five defined categories. Included is a short summary of some of the things that stood out. It wasn't clear just yet if these were the actual guidelines I would follow or pain points I would avoid, but they were definitely more assumptions that I could test.
          </Typography>
        </Grid>
       
        <Grid container direction="row" justifyContent="space-around" sx={{ margin: 3 }}>
          <Grid item xs={2.4} sx={{ backgroundColor: blue[50], padding: 2 }}>
              <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Alignment with User Goals</Typography>
              <Typography variant='body2' className='paragraph-small'>
                Too much promotional
                content may obscure the
                path or point of entry to
                completing the goal
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
                Interactable maps may
                help users visualize and
                locate hotels close to
                their exact destination
                preferences
              </Typography>
            
              <Typography variant='body2' className='paragraph-small'>
                Important information
                or fields may be missed
                if covered up with
                pop-ups and tooltips
              </Typography>

          </Grid>
          <Grid item xs={2.4} sx={{ backgroundColor: blue[100], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Navigation & Order</Typography>
            <Typography variant='body2' className='paragraph-small'>
                Including a consistent
                header for navigation
                and for showing the
                user their current place
                on the site is
                important, especially
                on mobile sites where
                many functions are
                hidden
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Navigation and
                important info for the
                user to have on hand
                can be ever-present on
                screen on mobile
                sites
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Organizing, labelling, and
                numbering confirmation
                and payment form fields
                may help guide the user
                to providing all necessary
                information easily
              </Typography>
              <Typography variant='body2' className='paragraph-small'>
                Having good navigation
                with obvious back
                buttons may help users
                get back on track when
                they’ve made a mistake
                or changed their minds
              </Typography>
          </Grid>
          <Grid item xs={2.4} sx={{ backgroundColor: blue[50], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Expectations</Typography>
            <Typography variant='body2' className='paragraph-small'>
              A calendar date picker
              is a common
              convention for stay
              duration selection and
              can promote ease of
              date selection or cause
              frustration depending
              on how easy it is to use
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              It is common to see
              multiple ways to filter
              results, including by
              amenities, type, brand,
              and price range when
              searching for hotel
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Including summary of
              stay (hotel name and
              address/phone, dates of
              stay, total cost) during
              the confirmation section
              may be both expected
              and helpful for users
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Prompting user to sign
              in, create and account,
              or continue as a guest
              appears to be a common
              convention; sign-in 
              is typically
              offered but not required
            </Typography>
          </Grid>
          <Grid item xs={2.4} sx={{ backgroundColor: blue[100], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Forthcomingness</Typography>
            <Typography variant='body2' className='paragraph-small'>
              Displaying pricing
              breakdown informs the
              user why the total price
              is what it is
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Be careful with “points”
              and other “hotel
              currency”; likely not all
              users, especially first
              time or casual users of
              the site, will know what
              these mean
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Using icons is useful and
              conventional for mobile, but it is important
              to ensure icons have
              obvious meanings or are
              explained initially
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Including good validation
              requirements and clear
              errors will give
              the user a clear
              understanding of what’s
              missing or incorrect
            </Typography>
          </Grid>
          <Grid item xs={2.4} sx={{ backgroundColor: blue[50], padding: 2 }}>
            <Typography className='heading6' sx={{ textAlign: "center", height: 50, fontWeight: "bold" }}>Saving Time/Effort</Typography>
            <Typography variant='body2' className='paragraph-small'>
              As a user types in their
              trip destination, it may
              be helpful to
              automatically supply
              result suggestions
              based on the search
              criteria
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Having common search
              filters present and more
              filter options a click away
              can save the user clicks
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Having an easy way to
              reset filters saves the user
              from having to change
              them manually
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Forcing users to
              repeatedly decline offers
              could cause frustration
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Forcing users to select
              card type is an
              unconventional extra
              step
            </Typography>
            <Typography variant='body2' className='paragraph-small'>
              Clearing out
              input when they toggle
              options may force them
              to have to start over
              unnecessarily
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>The Importance of Observation</Typography>
          <Typography variant='body1' className='paragraph'>Now that I was starting to get an idea of what users wanted and what the booking process tends to look like on existing websites, it was time to go deeper and bridge the gap between the people and the software. I wanted to get organic. What could I learn by just watching some people use existing booking software? Would their real-time behaviors align with the assumptions I had formed so far? Would users feel confident in their actions? What points in the process would cause frustration? What else could I learn about their mental models? </Typography>
          <Typography variant='body1' className='paragraph'>It was time for some usability tests. Usability tests were going to be my best bet for witnessing real, organic reactions. I would be able to see expressions and body language in real time. I could observe what they actually do when they get stuck or confused, and how long it would take them to get back on track. </Typography>
          
          <QuoteContainer quote="Good research is not about finding what you expect to find; it’s about finding what’s actually there." author="Margaret Mead"/>

          <Typography variant='h3' className='heading3'>Selecting my Users</Typography>
          <Typography variant='body1' className='paragraph'>In total, I observed four usability test sessions with four different users. Two of those were prerecorded with another researcher, and I watched and took notes on the sessions for later analysis. The other two were conducted by me. </Typography>
          <Typography variant='body1' className='paragraph'>For the two I conducted, I chose participants who both had experience booking hotels, but who had pretty different backgrounds from each other. I did this because I was curious if different types of users would go about completing tasks in different ways. </Typography>
          <Typography variant='h3' className='heading3'>Setting Up</Typography>
          <Typography variant='body1' className='paragraph'>The usability tests were conducted over Zoom with LetsView (a screen mirroring application). A few days before the tests were to take place, I emailed my two participants an outline briefly explaining what a usability test is and is not, when the test would be conducted, how long roughly it would take, and provided detailed instructions on how to install and test the necessary software and hardware we’d be using.</Typography>
          <Typography variant='body1' className='paragraph'>When it was time to conduct each test, I hosted my Zoom room and allowed my participant to join. Both participants were very familiar with Zoom, so this went very smoothly. The screen mirroring software, on the other hand, was brand new to both participants, and I carefully walked them through what they needed to do to mirror their screens. </Typography>
          
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
            <Typography variant='body1' className='paragraph'>Once the technology was set up, I took dedicated time to ensure my participant was comfortable. I made sure they knew I wasn’t testing them as people, but that I was testing the software. I stressed that there were absolutely no mistakes to make here, only insights. I let them know they could ask questions at any time, but that I may not be able to answer all of their questions to maintain the integrity of the test. </Typography>
            <Typography variant='body1' className='paragraph'>I told them it was important for them to take their time and speak all of their thoughts out loud. The more they could tell me about what they were trying to do, what they were looking at, what their impressions were of elements on the screens, and what they thought would happen when they interacted with them, the more insights I would gain.</Typography>
            <Typography variant='body1' className='paragraph'>Lastly, I explained the structure of the test so they knew what to expect, and I reminded them that the sessions would be recorded for later analysis and double-checked that they were okay with that.</Typography>
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
            <Typography variant='h3' className='heading3'>Getting to Know the Participants - The Depth interviews</Typography>
            <Typography variant='body1' className='paragraph'>All four tests opened with short depth interviews intended to help me understand who these users really were, what they were like, what their backgrounds were, and in what context they might be using this software. I prepared questions about their occupations, location, what reasons they typically booked hotels, how they book typically, what was important for them when booking, and any information they could provide about a recent booking experience. </Typography>
            <Typography variant='body1' className='paragraph'>Based on their answers to all of these questions, I later created three user personas to help design a customer journey later on.</Typography>
          </Grid>

        <Grid container direcion="row" justifyContent="space-around" xs={12}>
          <Grid item xs={5.5}>
              <Image
              className='graphic'
              src={PersonaTomas}
              width="100%"
              alt="A stock photograph of a woman representing Tomas"
            />
          </Grid>
          <Grid item xs={5.5}>
              <Image
              className='graphic'
              src={PersonaRachel}
              width="100%"
              alt="A stock photograph of a woman representing Rachel"
            />
          </Grid>
          <Grid item xs={5.5}>
              <Image
              className='graphic'
              src={PersonaMike}
              width="100%"
              alt="A stock photograph of a woman representing Mike"
            />
          </Grid>
          <Grid item xs={5.5}>
              <Image
              className='graphic'
              src={PersonaLinda}
              width="100%"
              alt="A stock photograph of a woman representing Linda"
            />
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>How the tests were conducted</Typography>
          <Typography variant='body1' className='paragraph'>In each test, after the depth interviews concluded, it was time to shift into the exciting part – testing the usability of the websites. I chose to test a few of the websites I had looked at during the benchmark research for the two sessions I conducted. The other two tested two other hotel websites based in the UK. </Typography>
          <Typography variant='body1' className='paragraph'>Each participant was tasked with booking a hotel in a specified city for a specified weekend on two different websites. I watched the participants go through the exercise, reminded them to continue speaking out loud if they got quiet, asking some follow up questions when I noticed interesting behavior, and being careful not to bias or compromise the integrity of the test. Each test took about an hour to complete. </Typography>
          <Typography variant='body1' className='paragraph'>After each participant had completed their tasks, we concluded the sessions with a few questions about what they thought about the experience. I asked about their overall sentiment, what differed from their expectations, what they liked, what they disliked, and what they thought was missing, if anything. Finally, I expressed gratitude, thanking them for their time and participation and reiterating how useful their insight is to my research.</Typography>
        </Grid>

        <QuoteContainer quote="Efficiency is doing things right; effectiveness is doing the right things." author="Peter Drucker"/>

        <Grid item xs={10}>  
          <Typography variant='h3' className='heading3'>Notable Behaviors</Typography>
          <Typography variant='body1' className='paragraph'>
            Participants all remarked on colorful, on-theme imagery and photos of hotels. 
            Imagery seemed very important, especially on the homepage. 
            Speaking of the homepage, each user began the same way: by looking for a place to enter their desired destination and dates of stay.
            Once they get to the hotel results page, they were mostly looking for the
            for a hotel which looked most appealing to them and which was the least expensive
            with good ratings. They loved to see TripAdvisor ratings present.
          </Typography>
          <Typography variant='body1' className='paragraph'>
            After selecting a hotel, they would do a quick read-through of more detailed information on amenities if it was present, and then continue on. They would then get to the room selection screen and scroll up and down on the page, comparing pricing and room amenities until they found a match closest to what they were looking for.
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
          <Typography variant='body1' className='paragraph'>Watching people struggle is painful, but powerful. Not everyone works through problems in the same way, and completing the task isn’t everything if the journey was painful. </Typography>
          <Typography variant='body1' className='paragraph'>These were the first usability tests I’ve ever conducted. I was nervous. I was afraid I would miss a step or overstep. I didn’t want to bias the data, but I also didn’t want my users to feel bad about themselves. There were a few times with one participant where I could tell she was getting anxious and blaming herself and it took everything I had not to jump in and console her. </Typography>
          <Typography variant='body1' className='paragraph'>That being said, I do think I slipped a few times, and there are some things I would do differently  time. I won't interupt immediately just because a user is struggling. I won't agree with or verbally justify their annoyances or suggest a particular action to get them out of trouble. Instead, I will express empathy without being too specific, allowing them some time to figure it out before I jump in, and ask them to explain what they are feeling and trying to do when they do get stuck.</Typography>
        </Grid>
      </Grid>
  );
}
