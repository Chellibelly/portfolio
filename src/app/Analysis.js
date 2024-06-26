import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import AffinityDiagramGraphic from '../../public/Affinity_Diagram.jpg';
import CustomerJourneyMapGraphic1 from '../../public/Customer_Journey_Map_1.png';
import CustomerJourneyMapGraphic2 from '../../public/Customer_Journey_Map_2.png';
import ProcessAnalysisGraphic from '../../public/Process_Analysis.png';

export default function Analysis() {
  return (
      <Box>
        <Typography variant='h1' className='heading1'>The Analysis</Typography>
        <Typography variant='h2' className='heading2'>From the meat grinder to the meal</Typography>
        <Typography variant='body1' className='paragraph'>During my time earning my UX diploma, my instructor used an analogy I don’t ever think I’ll forget because I think it was a good one, but mostly because it was accompanied by a gross video clip of ground beef moving through a meat grinder. The analogy was that all of the research you do is the meat is the meat grinder. [or something. Find this in notes]. Analysis is about taking that meat and turning it into something. I had my meat. I had piles of notes, and it was time to find meaning in all the chaos.</Typography>
        <Typography variant='body1' className='paragraph'>For some direction, I decided to go back and review my goal: to make a desirable product. At the beginning of this story, when I decided on that goal, I didn’t exactly know what a desirable hotel booking website was, but now with my research in hand, I was hoping I would be able to figure out exactly what desirable meant in this context.</Typography>

        <Image
          className='graphic'
          src={ProcessAnalysisGraphic}
          width={900}
          alt="Picture of the author"
        />
        
        <Typography variant='h3' className='heading3'>Was There Really a Problem to Solve?</Typography>
        <Typography variant='body1' className='paragraph'>Although I was eager to find meaning in all the data, I couldn’t help but to wonder at this point whether or not there was a good enough reason to build this. What’s the real problem we’re solving? If this were a real endeavor to build this product, would we end up building something that isn’t any more desirable than any of the long-standing competitor products out there already? It wasn’t obvious to me (yet). </Typography>
        <Typography variant='h3' className='heading3'>Triangulation Time – The Affinity Diagram</Typography>
        <Typography variant='body1' className='paragraph'>Another metaphor I like has to do with “seeing the forest through the trees.” More or less this metaphor means being able to draw the larger meaning, or bigger picture, out of the parts. I realized I had some trees. I had data on who my users were, what the hotel booking process looked like, how my users interact with the process, and what sorts of feelings and experiences they’ve had when doing so. I decided that I needed something that would represent those trees together as a forest. This is where my affinity diagram came in.</Typography>
        <Typography variant='body1' className='paragraph'>I learned that an affinity diagram is a method of triangulation where raw data is grouped into more meaningful categories to make sense of it. Rather than defining the categories up front, instead I would group like data together first, then based on the commonalities, define the groups that formed. In this way, natural groupings would form and help me decide what’s important without biasing the groupings with my own opinions. Essentially, this process would allow the data to speak for itself.</Typography>
        <Typography variant='body1' className='paragraph'>Typically, and for good reason, affinity diagrams are worked as a collaboration exercise with a group of stakeholders. Unfortunately, I wasn’t able to work with anyone for this particular project, but I took this as an opportunity to learn the process very deeply so that when I’m able to collaborate in the future, I’ll already have a grasp on what it takes to triangulate data.</Typography>
        <Typography variant='h3' className='heading3'>The Process – I Should Have Bought a Bigger White Board</Typography>
        <Typography variant='body1' className='paragraph'>My process consisted of setting myself up with stacks of sticky notes of varying colors, my office white board, and whiteboard markers. I focused on one research result set at a time, traversing through the survey results, benchmark research notes, interview answers, and usability videos and notes, spending about 10 minutes with each. I examined each, writing any significant factor down on a sticky note. When I was finished, I stuck each note on the whiteboard.</Typography>
        <Typography variant='body1' className='paragraph'>Once my whiteboard was full of sticky note chaos, I got to work grouping together any notes which seemed related. I grouped, and regrouped, and tweaked until each sticky note had a home that made sense. I then gave each group a topic name. I noticed some groups could be further refined into subgroups, and I broke those down and gave them their own labels. I ended up with this.</Typography>
      
        <Image
          className='graphic'
          src={AffinityDiagramGraphic}
          width="100%"
          alt="Picture of the author"
        />

        <Typography variant='h3' className='heading3'>Takeaways</Typography>
        <Typography variant='body1' className='paragraph' style={{ color: "red" }}>[OUTLINE THE GROUPS I CAME UP WITH]</Typography>
        <Typography variant='body1' className='paragraph'>One of my biggest personal lessons from this exercise was that analysis isn’t as daunting when you break it into steps. Each step helps transition into the next. I was never doing anything without a blueprint built from the previous activity. </Typography>
        <Typography variant='body1' className='paragraph' style={{ color: "red" }}>[PULL SUMMARIES FROM THE GROUPINGS]</Typography>
        <Typography variant='h3' className='heading3'>The Eureka Moment</Typography>
        <Typography variant='body1' className='paragraph'>The glaring bottom line made evident from the affinity diagram was that the prevailing problem seemed to be a complete lack of – or at least confusing - information, often assuming the user know something which they may not. This was something that was happening across every site I learned about, and highlighted by every user interviewed and surveyed. </Typography>
        <Typography variant='body1' className='paragraph'>This is the point where my goal became clearer than it had been. There may not some huge obvious problem we needed to rectify, but instead there was an opportunity to do better. A desirable hotel booking site was one that would follow a process set by others in the business, but would do so while being completely transparent. This would be something that would set it apart from the others, make it stand out, and make it shine.</Typography>
        <Typography variant='body1' className='paragraph'>Areas of transparency I would need to focus on would predominantly fall into the following categories.</Typography>
        <Typography variant='body1' className='paragraph' style={{ color: "red" }}>[SHOW ABOUT 3 or 4 CATERGORIES]</Typography>
        <Typography variant='h3' className='heading3'>The Customer Journey Map</Typography>
        <Typography variant='body1' className='paragraph'>[Explain why I made an empathy map (needed to start building out a flow and defining what each step should be, and how I made it]</Typography>
        
        <Image
          className='graphic'
          src={CustomerJourneyMapGraphic1}
          width="100%"
          alt="Picture of the author"
        />
        
        <Image
          className='graphic'
          src={CustomerJourneyMapGraphic2}
          width="100%"
          alt="Picture of the author"
        />

        <Typography variant='body1' className='paragraph'>[Give insights drawn from the empathy map, explain how we have a happy path now]</Typography>
      </Box>
  );
}
