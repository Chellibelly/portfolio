import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import SurveyQuestionsGraphic from '../../public/Survey_Questions.png';
import QuantitativeAnswersGraphic from '../../public/Quantitative_Answers.png';
import QualitativeAnswersGraphic from '../../public/Qualitative_Answers.png';
import HeuristicsGraphic from '../../public/Heuristics.png';
import CategoriesGraphic from '../../public/Categories.png';

import PersonaTomas from '../../public/Persona_Tomas.png';
import PersonaRachel from '../../public/Persona_Rachel.png';
import PersonaLinda from '../../public/Persona_Linda.png';

import ProcessResearchGraphic from '../../public/Process_Research.png';

export default function Research() {
  return (
      <Box>
        <Typography variant='h1' className='heading1'>How Do I Make a Product People Want to Use?</Typography>
        <Typography variant='h2' className='heading2'>The Research</Typography>
        <Typography variant='body1' className='paragraph'>Focusing on my goal of creating a desirable product, I needed to understand why people use websites like these in the first place. Above all, when they go to one of these sites, what are their actual goals? What are they expecting? Could people share any success stories or frustrations that could help me further understand what they wanted? I knew what I wanted to know, and I knew I wasn’t the person to tell me.</Typography>
        
        <Image
          className='graphic'
          src={ProcessResearchGraphic}
          width={900}
          height={500}
          alt="Picture of the author"
        />
        
        <Typography variant='h3' className='heading3'>I Am Not My User</Typography>
        <Typography variant='body1' className='paragraph'>Starting with basically nothing, I needed to cast a wide net in terms of audience and gather information from real people about past experiences that they have had while using hotel booking websites. I wanted to know their stories, contexts, goals, and struggles.  </Typography>
        <Typography variant='body1' className='paragraph'>One easy way to get feedback from several users is to use a classic research method: a survey. I wanted both quantitative and qualitative feedback. Quantitative feedback would help to identify commonalities I could focus on, and qualitative feedback would reveal deeper insights and allow real emotions to come through.</Typography>
        <Typography variant='h3' className='heading3'>The Survey: Gathering Experiences</Typography>
        <Typography variant='body1' className='paragraph'>I decided to use Google Forms because it was free, familiar to me, and easy to use and distribute. I came up with a total of seven questions, an easily digestible amount that would take less than five minutes to answer. I figured as long as I had a really good reason behind asking each question, seven questions should be plenty to get some really good insights.</Typography>

        <Image
          className='graphic'
          src={SurveyQuestionsGraphic}
          width="100%"
          height={500}
          alt="Picture of the author"
        />
        
        <Typography variant='body1' className='paragraph'>After crafting the questions and getting the survey written in Google Forms, it was time to distribute. Since this was a school project, I had zero budget to work with. That being said, I needed volunteers. I reached out to friends, coworkers, colleagues, and family, looking for anyone I knew who had experienced booking hotels through websites before.</Typography>
        <Typography variant='body1' className='paragraph'>The survey was distributed to the qualified volunteers by email and, after a little over a week (and a few reminders), all of the surveys had been summitted!</Typography>
        <Typography variant='h3' className='heading3'>My First Piece of the Puzzle</Typography>
        <Typography variant='body1' className='paragraph'>Once I had all of the survey results, I summarized the data into some assumptions I wanted to continue to test into. This was the first time I realized avoiding actual analysis until the correct part in the process was going to be hard. I’m human, and reading all of survey responses made me want to jump into designing out the pain points I was reading about. And there were a lot. In fact, there were a lot more pain points than I expected. In fact, the answers to my pain points focused question were longer and more in depth than any other question I included.</Typography>

        
        <Image
          className='graphic'
          src={QuantitativeAnswersGraphic}
          width="100%"
          height={500}
          alt="Picture of the author"
        />

        <Image
          className='graphic'
          src={QualitativeAnswersGraphic}
          width="100%"
          height={500}
          alt="Picture of the author"
        />

        <Typography variant='h3' className='heading3'>Checking out the Competition and the Hunt for Conventions</Typography>
        <Typography variant='body1' className='paragraph'>Having some preliminary research gathered about user goals, I wanted to see how other hotel websites were catering to (or not catering to) them, discover conventions, and form a baseline. </Typography>
        <Typography variant='body1' className='paragraph'>I acknowledged this as yet another place where I could potentially easily insert my own opinion, and I wanted to avoid that as much as possible. Something important to me might not be to my user. So, if one of my goals was to discover holes in the products of the competition, how would I go about this without letting my opinions take over?</Typography>
        <Typography variant='h3' className='heading3'>Good ‘ol Heuristics to the Rescue</Typography>
        <Typography variant='body1' className='paragraph'>Before looking at a single hotel site, I wanted to establish rules to guide me. I figured if I examined these websites through the correct design lens, my personal opinions would have little room to interfere. From a set of twelve heuristics, I came up with a small set of categories I could focus on. My categories were navigation and order, saving time or effort, alignment with user goals, expectations, and forthcomingness. </Typography>

        <Image
          className='graphic'
          src={HeuristicsGraphic}
          width="100%"
          height={900}
          alt="Picture of the author"
        />

        <Typography variant='h3' className='heading3'>The Search for The Lucky Contestants</Typography>
        <Typography variant='body1' className='paragraph'>Besides the convention, I noticed in the set of steps through the booking process, I also noticed [List the common findings/assumptions to test].</Typography>
        <Typography variant='h3' className='heading3'>Testing the Assumptions (something about getting real or observation)</Typography>
        <Typography variant='body1' className='paragraph'>Now that I was starting to get an idea of what users wanted and what the booking process tends to look like on existing websites, it was time to go deeper and bridge the gap between the people and the software. I wanted to get organic. What could I learn by just watching some people use existing booking software? Would their real-time behaviors align with the assumptions I had formed so far? Would users feel confident in their actions? What points in the process would cause frustration? What else could I learn about their mental models? </Typography>
        <Typography variant='body1' className='paragraph'>It was time for some usability tests. Usability tests were going to be my best bet for witnessing real, organic reactions. I would be able to see expressions and body language in real time. I could observe what they actually do when they get stuck or confused, and how long it would take them to get back on track. </Typography>
        <Typography variant='body1' className='paragraph'>In total, I observed four usability test sessions with four different users. Two of those were prerecorded with another researcher, and I watched and took notes on the sessions for later analysis. The other two were conducted by me. </Typography>
        <Typography variant='h3' className='heading3'>Selecting my Users</Typography>
        <Typography variant='body1' className='paragraph'>For the two I conducted, I chose participants who both had experience booking hotels, but who had pretty different backgrounds from each other. I did this because I was curious if different types of users would go about completing tasks in different ways. </Typography>
        <Typography variant='h3' className='heading3'>Setting Up</Typography>
        <Typography variant='body1' className='paragraph'>The usability tests were conducted over Zoom with [insert screen mirroring technology]. A few days before the tests were to take place, I emailed my two participants an outline briefly explaining what a usability test is and is not, when the test would be conducted, how long roughly it would take, and provided detailed instructions on how to install and test the necessary software and hardware we’d be using.</Typography>
        <Typography variant='body1' className='paragraph'>When it was time to conduct each test, I hosted my Zoom room and allowed my participant to join. Both participants were very familiar with Zoom, so this went very smoothly. The screen mirroring software, on the other hand, was brand new to both participants, and I carefully walked them through what they needed to do to mirror their screens. </Typography>
        <Typography variant='h3' className='heading3'>Getting Comfortable</Typography>
        <Typography variant='body1' className='paragraph'>Once the technology was set up, I took dedicated time to ensure my participant was comfortable. I made sure they knew I wasn’t testing them as people, but that I was testing the software. I stressed that there were absolutely no mistakes to make here, only insights. I let them know they could ask questions at any time, but that I may not be able to answer all of their questions to maintain the integrity of the test. </Typography>
        <Typography variant='body1' className='paragraph'>I told them it was important for them to take their time and speak all of their thoughts out loud. The more they could tell me about what they were trying to do, what they were looking at, what their impressions were of elements on the screens, and what they thought would happen when they interacted with them, the more insights I would gain.</Typography>
        <Typography variant='body1' className='paragraph'>Lastly, I explained the structure of the test so they knew what to expect, and I reminded them that the sessions would be recorded for later analysis and double-checked that they were okay with that.</Typography>
        <Typography variant='h3' className='heading3'>Understanding the user (who is my user, really?) – the depth interviews</Typography>
        <Typography variant='body1' className='paragraph'>All four tests opened with short depth interviews intended to help me understand who these users really were, what they were like, what their backgrounds were, and in what context they might be using this software. I prepared questions about their occupations, location, what reasons they typically booked hotels, how they book typically, what was important for them when booking, and any information they could provide about a recent booking experience. </Typography>
        <Typography variant='body1' className='paragraph'>Based on their answers to all of these questions, I later created three user personas to help design a customer journey later on.</Typography>

        <Image
          className='graphic'
          src={PersonaTomas}
          width="100%"
          height={500}
          alt="Picture of the author"
        />
        <Image
          className='graphic'
          src={PersonaRachel}
          width="100%"
          height={500}
          alt="Picture of the author"
        />
        <Image
          className='graphic'
          src={PersonaLinda}
          width="100%"
          height={500}
          alt="Picture of the author"
        />

        <Typography variant='h3' className='heading3'>How the tests were conducted</Typography>
        <Typography variant='body1' className='paragraph'>In each test, after the depth interviews concluded, it was time to shift into the exciting part – testing the usability of the websites. I chose to test a few of the websites I had looked at during the benchmark research for the two sessions I conducted. The other two tested two other hotel websites based in the UK. </Typography>
        <Typography variant='body1' className='paragraph'>Each participant was tasked with booking a hotel in a specified city for a specified weekend on two different websites. I watched the participants go through the exercise, reminded them to continue speaking out loud if they got quiet, asking some follow up questions when I noticed interesting behavior, and being careful not to bias or compromise the integrity of the test. Each test took about an hour to complete. </Typography>
        <Typography variant='body1' className='paragraph'>After each participant had completed their tasks, we concluded the sessions with a few questions about what they thought about the experience. I asked about their overall sentiment, what differed from their expectations, what they liked, what they disliked, and what they thought was missing, if anything. Finally, I expressed gratitude, thanking them for their time and participation and reiterating how useful their insight is to my research.</Typography>
        <Typography variant='h3' className='heading3'>Self-Reflection on an Exercise in Empathy</Typography>
        <Typography variant='body1' className='paragraph'>Watching people struggle is painful, but powerful. Not everyone works through problems in the same way, and completing the task isn’t everything if the journey was painful. </Typography>
        <Typography variant='body1' className='paragraph'>These were the first usability tests I’ve ever conducted. I was nervous. I was afraid I would miss a step or overstep. I didn’t want to bias the data, but I also didn’t want my users to feel bad about themselves. There were a few times with [participant mom], where I could tell she was getting anxious and blaming herself and it took everything I had not to jump in and console her. </Typography>
        <Typography variant='body1' className='paragraph'>That being said, I do think I slipped a few times, and there are some things I would do differently next time. </Typography>
        <Typography variant='body1' className='paragraph' style={{ color: "red" }}>[INCLUDE MISTAKES MADE AND HOW I THINK I COULD DO BETTER NEXT TIME]</Typography>
        <Typography variant='h3' className='heading3'>Takeaways</Typography>
        <Typography variant='body1' className='paragraph' style={{ color: "red" }}>[INCLUDE SOME TAKEAWAYS HERE]</Typography>
        <Typography variant='body1' className='paragraph' style={{ color: "red" }}>[INCLUDE PLENTY OF USER QUOTES]</Typography>
      </Box>
  );
}
