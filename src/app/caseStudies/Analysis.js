import { Typography, Box, Grid } from '@mui/material';
import AffinityGroupList from './AffinityGroupsList';
import Image from 'next/image';
import AffinityDiagramGraphic from '../../../public/Affinity_Diagram.jpg';
import WhiteboardPostItsGraphic from '../../../public/Whiteboard_PostIts.jpg';
import CustomerJourneyMapGraphic1 from '../../../public/Customer_Journey_Map_1.png';
import CustomerJourneyMapGraphic2 from '../../../public/Customer_Journey_Map_2.png';
import ProcessAnalysisGraphic from '../../../public/Process_Analysis.png';

import CategoryHotelGraphic from '../../../public/Category_Hotel.png';
import CategoryAccountGraphic from '../../../public/Category_Account.png';
import CategoryPricingGraphic from '../../../public/Category_Pricing.png';
import CategoryLocationGraphic from '../../../public/Category_Location.png';

import CategoryHotelOpportunityGraphic from '../../../public/Category_Hotel_Opportunity.png';
import CategoryAccountOpportunityGraphic from '../../../public/Category_Account_Opportunity.png';
import CategoryPricingOpportunityGraphic from '../../../public/Category_Pricing_Opportunity.png';
import CategoryLocationOpportunityGraphic from '../../../public/Category_Location_Opportunity.png';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { blue } from '@mui/material/colors';
import QuoteContainer from './QuoteContainer';


export default function Analysis() {

  const categoryLabel = {
    textAlign: "center", 
    fontSize: 20, 
    fontFamily: "Montserrat", 
    fontWeight: "bold", 
    marginTop: "12px"
  };

  const numberBackgroundStyle = {
    display: "inline-block",
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: "#96D1FF",
    textAlign: "center",
    width: "32px",
    height: "32px",
    LineHeight: "32px",
    margin: -12,
  };

  const numberTextStyle = {
    color: "white",
    fontWeight: "bold"
  };

  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>The Forest Through the Trees</Typography>
          <Typography variant='h2' className='heading2'>The Analysis</Typography>
          <Typography variant='body1' className='paragraph'>During my time earning my UX diploma, my instructor used an analogy I don’t ever think I’ll forget because I think it was a good one, but mostly because it was accompanied by a gross video clip of ground beef moving through a meat grinder. The analogy was that all of the research you do is the meat in the meat grinder. Analysis is about taking that meat and turning it into something. I had my meat. I had piles of notes, and it was time to find meaning in all the chaos.</Typography>
          <Typography variant='body1' className='paragraph'>For some direction, I decided to go back and review my goal: to make a desirable product. At the beginning of this story, when I decided on that goal, I didn’t exactly know what a desirable hotel booking website was, but now with my research in hand, I was hoping I would be able to figure out exactly what desirable meant in this context.</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={ProcessAnalysisGraphic}
            width="100%"
            alt="An image of the UX process with the Analysis step highlighted"
          />
        </Grid>
        
        <Grid item xs={10} sx={{ marginTop: 5, marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Was There Really a Problem to Solve?</Typography>
          <Typography variant='body1' className='paragraph'>Although I was eager to find meaning in all the data, I couldn’t help but to wonder at this point whether or not there was a good enough reason to build this. What’s the real problem we’re solving? If this were a real endeavor to build this product, would we end up building something that isn’t any more desirable than any of the long-standing competitor products out there already? It wasn’t obvious to me (yet). </Typography>
        </Grid>

        <QuoteContainer quote="People don't want to buy a quarter-inch drill. They want a quarter-inch hole!" author="Theodore Levitt"/>

        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Triangulation Time</Typography>
          <Typography variant='body1' className='paragraph'>Another metaphor I like has to do with “seeing the forest through the trees.” More or less, this metaphor means being able to draw the larger meaning, or bigger picture, out of the parts. I realized I had some trees. I had data on who my users were, what the hotel booking process looked like, how my users interact with the process, and what sorts of feelings and experiences they’ve had when doing so. I decided that I needed something that would represent those trees together as a forest. This is where my affinity diagram came in.</Typography>
          <Typography variant='body1' className='paragraph'>I learned that an affinity diagram is a method of triangulation where raw data is grouped into more meaningful categories to make sense of it. Rather than defining the categories up front, instead I would group like data together first, then based on the commonalities, define the groups that formed. In this way, natural groupings would form and help me decide what’s important without biasing the groupings with my own opinions. Essentially, this process would allow the data to speak for itself.</Typography>
          <Typography variant='h3' className='heading3'>The Process (I Should Have Bought a Bigger White Board)</Typography>
          <Typography variant='body1' className='paragraph'>My process consisted of setting myself up with stacks of sticky notes of varying colors, my office white board, and whiteboard markers. I focused on one research result set at a time, traversing through the survey results, benchmark research notes, interview answers, and usability videos and notes, spending about 10 minutes with each. I examined each, writing any significant factor down on a sticky note. When I was finished, I stuck each note on the whiteboard.</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={WhiteboardPostItsGraphic}
            width="100%"
            alt="An image of a whiteboard with a collection of unsorted sticky notes"
          />
        </Grid>
       
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Building the Affinity Diagram</Typography>
          <Typography variant='body1' className='paragraph'>My whiteboard was full of sticky note chaos, and I got to work grouping together any notes which seemed related. I grouped, and regrouped, and tweaked until each sticky note had a home that made sense. I then gave each group a topic name. I noticed some groups could be further refined into subgroups, and I broke those down and gave them their own labels. I ended up with this.</Typography>
        </Grid>
      
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={AffinityDiagramGraphic}
            width="100%"
            alt="An image of a whiteboard with a collection of categorized sticky notes"
          />
        </Grid>

        <Grid item xs={10} sx={{ marginBottom: 5 }}>
        <Typography variant='h3' className='heading3'>Areas of Importance Exposed</Typography>
        <Typography variant='body1' className='paragraph'>I ended up with nine different categories: filtering, account, look & feel, hotel information, extras, room selection, navigation, date selection, and pricing.</Typography>
        <Typography variant='body1' className='paragraph'>It seemed clear to me
          that the groupings that resulted mirrored what users described as most
          important to them. The largest group with the most post it notes (many
          of which were stacked) was the Hotel Information group. Much of the
          research reflected user sentiment that information on hotels wasn’t
          forthcoming or clear enough. This sentiment can be subdivided into
          three major groups that came up many times in research – hotel
          location, hotel amenities, and hotel reviews.
        </Typography>
        </Grid>
        
        <Box>
          <AffinityGroupList/>
        </Box>

        <Grid item xs={10}>
        <Typography variant='h3' className='heading3'>A User Journey Was Beginning to Take Shape</Typography>
          <Typography variant='body1' className='paragraph'>
            Many of the groups seemed to correspond to steps
            of the process or screens. Room selection, date selection, pricing, and
            account were major groups that we probably want to pay a great deal
            of attention to during the rest of the design process, especially when
            designing specific screens. 
          </Typography>

          <Typography variant='body1' className='paragraph'>
            Navigation was also a major group the came out of research. We may
            want to spend some time coming up with a good, solid navigation
            pattern to help circumvent user concerns over where they are in the
            process, how do they get to what they want, and what’s next.
          </Typography>

          <Typography variant='body1' className='paragraph'>
            It felt important to me at this point, to define specific beats in the process that I was starting to visualize after the research and the affinity diagram excercise. 
            There were about eight major parts of the booking journey where the user would need to complete tasks: home page (destination selection), date selection, hotel search, hotel selection, room selection, rate selection, add-ons, and booking completion (payment & contact details).
          </Typography>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", margin: 5 }}>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2 }}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>1</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Home Page (destination selection)</Typography>
          </Grid>
          <Grid item sx={{ marginTop: 4.5 }}>
            <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
          </Grid>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2}}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>2</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Date Selection</Typography>
          </Grid>
          <Grid item sx={{ marginTop: 4.5 }}>
            <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
          </Grid>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2}}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>3</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Search, sort, & filter hotels</Typography>
          </Grid>
          <Grid item sx={{ marginTop: 4.5 }}>
            <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
          </Grid>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2}}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>4</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Compare hotel results & select a hotel</Typography>
          </Grid>
          <Grid item sx={{ marginTop: 4.5 }}>
            <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
          </Grid>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2}}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>5</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Compare hotel rooms & select a room</Typography>
          </Grid>
          <Grid item sx={{ marginTop: 4.5 }}>
            <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
          </Grid>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2}}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>6</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Select a rate</Typography>
          </Grid>
          <Grid item sx={{ marginTop: 4.5 }}>
            <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
          </Grid>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2}}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>7</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Choose or skip add-ons</Typography>
          </Grid>
          <Grid item sx={{ marginTop: 4.5 }}>
            <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
          </Grid>
          <Grid item sx={{ backgroundColor: "lightgray", width: 250, height: 80, marginTop: 2}}>
            <Box style={numberBackgroundStyle}><Typography style={numberTextStyle}>8</Typography></Box>
            <Typography sx={{textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat" }}>Complete the booking</Typography>
          </Grid>
        </Grid>

        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>The Customer Journey Map</Typography>
          <Typography variant='body1' className='paragraph'>Now that I had groups of focus pulled from my affinity diagram and I had defined the steps of the journey, it was time to get a little more organized and flesh out the journey by adding all of the user goals, behaviors, and sentiments on top of it. This would help me form a blueprint for the first steps of the actual design. With a customer journey map, I'd be able to start visualizing the information architecture of the website and the guidelines, opportunities, and purposes of screen.</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={CustomerJourneyMapGraphic1}
            width="100%"
            alt="An image of a customer journey map (1 of 2)"
          />
          
          <Image
            className='graphic'
            src={CustomerJourneyMapGraphic2}
            width="100%"
            alt="An image of a customer journey map (2 of 2)"
          />
        </Grid>

        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>The Eureka Moment</Typography>
          <Typography variant='body1' className='paragraph'>The glaring bottom line made evident from the affinity diagram and the customer journey map was that the prevailing problem seemed to be a complete lack of – or at least confusing - information, often assuming the user knows something which they may not. This was something that was happening across every site I learned about, and highlighted by every user interviewed and surveyed. </Typography>
          <Typography variant='body1' className='paragraph'>This is the point where my goal became clearer than it had been. There may not some huge obvious problem we needed to rectify, but instead there was an opportunity to do better. A desirable hotel booking site was one that would follow a process set by others in the business, but would do so while being completely transparent and forthcoming with information.</Typography>
        </Grid>

        <QuoteContainer quote="Good research is not about finding what you expect to find; it’s about finding what’s actually there." author="Albert Szent-Györgyi"/>

        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>The Opportunity</Typography>
          <Typography variant='body1' className='paragraph'>
            Every user I'd listened to seemed to be screaming that what they wanted was to able to visualize their trip. And I wanted to do everything I could to deliver that picture. This would be something that would set it apart from the others, make it stand out, and make it shine. Areas of transparency I would need to focus on would predominantly fall into one of four categories: hotel quality & amenities, hotel location & relation to places of interest, pricing & rate comparisons, and account & membership programs.
          </Typography>
        </Grid>
        
        <Grid container direction="row" justifyContent="center" sx={{ marginBottom: 3, marginTop: 5 }}>
          <Grid item>
            <Typography sx={{ fontSize: 50, fontFamily: "Montserrat" }}>The Other Guys</Typography>
          </Grid>
        </Grid>


        <Grid container direction="row">
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#4A4A4A"}}>Hotel Quality & Amenities</Typography>
            </Box>
            <Image
              src={CategoryHotelOpportunityGraphic}
              alt="A graphic depicting a hotel information category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Unknown hotel quality, limited hotel description, ambiguous amenity icons and labels, limited amenity descriptions
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#4A4A4A"}}>Hotel Location & Relation to Places of Interest</Typography>
            </Box>
            <Image
              src={CategoryLocationOpportunityGraphic}
              alt="A graphic depicting a hotel location category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Unexpected search results, unclear relation to the area, airports, or places of interest
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#4A4A4A"}}>Pricing & Rate Comparisons</Typography>
            </Box>
            <Image
              src={CategoryPricingOpportunityGraphic}
              alt="A graphic depicting a hotel pricing category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Unclear inclusions and limited descriptions of special rates, ambiguity between member and non-member rates, hidden fees, lack of pricing breakdowns
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#4A4A4A"}}>Account &  Membership Programs</Typography>
            </Box>
            <Image
              src={CategoryAccountOpportunityGraphic}
              alt="A graphic depicting a hotel accounts category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Unintuitive membership opt-outs, unexplained perks or membership inclusions, not enough delineation between member and non-member options
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="center" sx={{ marginBottom: 3, marginTop: 6 }}>
          <Grid item>
            <Typography sx={{ fontSize: 50, fontFamily: "Montserrat" }}>Menagerie Hotels</Typography>
          </Grid>
        </Grid>


        <Grid container direction="row">
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#4C2A61"}}>Hotel Quality & Amenities</Typography>
            </Box>
            <Image
              className='graphic'
              src={CategoryHotelGraphic}
              alt="A graphic depicting a hotel information category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Hotel quality rating prominently displayed, detailed hotel description, Clear amenity icons and labels, detailed amenity descriptions
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#2A4361"}}>Hotel Location & Relation to Places of Interest</Typography>
            </Box>
            <Image
              className='graphic'
              src={CategoryLocationGraphic}
              alt="A graphic depicting a hotel location category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Search results based on location-only for simplicity, intuitive map view option for search results for clear relation to area, points out when close to airports or points of interest
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#225515"}}>Pricing & Rate Comparisons</Typography>
            </Box>
            <Image
              className='graphic'
              src={CategoryPricingGraphic}
              alt="A graphic depicting a hotel pricing category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Clearly describes what is included in special rates, member and non-member rates clearly labeled and separated from each other, pricing breakdowns prominently displayed
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: "10px" }}>
            <Box sx={{ height: 100 }}>
              <Typography sx={{...categoryLabel, color: "#B88523"}}>Account &  Membership Programs</Typography>
            </Box>
            <Image
              className='graphic'
              src={CategoryAccountGraphic}
              alt="A graphic depicting a hotel accounts category"
            />
            <Box>
              <Typography sx={{ textAlign: "center", marginTop: 2, fontFamily: "Montserrat" }}>
                Clear opt-out of membership programs, fully explained perks and membership inclusions, plenty of delineation between member and non-member options
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
  );
}
