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
          <Typography variant='body1' className='paragraph'>During my time earning my UX diploma, my instructor used an analogy I don’t ever think I’ll forget because I think it was a good one, but mostly because it was accompanied by a gross video clip of ground beef moving through a meat grinder. The point was, research is just raw material, and analysis is where you turn it into something useful. I had my "meat" - had piles of notes - and it was time to find meaning in all the chaos.</Typography>
          <Typography variant='body1' className='paragraph'>For some direction, I revisited my goal: creating a desirable product. When I first set that goal, I wasn’t sure what a desirable hotel booking site looked like. But now, with my research in hand, I hoped I could finally figure it out.</Typography>
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
          <Typography variant='body1' className='paragraph'>I was excited to dig into the data, but I couldn’t help wondering: was there a real need for this? What problem were we solving? If we actually built this, would it be any better than the well-established competitors out there? At that point, I wasn’t so sure.</Typography>
        </Grid>

        <QuoteContainer quote="People don't want to buy a quarter-inch drill. They want a quarter-inch hole!" author="Theodore Levitt"/>

        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Triangulating: I Should Buy a Bigger White Board</Typography>
          <Typography variant='body1' className='paragraph'>Another metaphor I like has to do with “seeing the forest through the trees.” More or less, this metaphor means being able to draw the larger meaning, or bigger picture, out of the parts. I realized I had some trees. </Typography>
          <Typography variant='body1' className='paragraph'>I learned that an affinity diagram is a method of triangulation where raw data is grouped into more meaningful categories to make sense of it. Rather than defining the categories up front, instead I would group like data together first, then based on the commonalities, define the groups that formed. In this way, natural groupings would form and help me decide what’s important without biasing the groupings with my own opinions. Essentially, this process would allow the data to speak for itself.</Typography>
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
          <Typography variant='body1' className='paragraph'>My whiteboard was a mess of sticky notes, but I started grouping related ones together. I kept adjusting, moving things around until everything had its place. Then, I gave each group a name. Some groups needed further breakdown, so I created subgroups and labeled those too. In the end, I had a clearer picture of everything.</Typography>
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
        <Typography variant='body1' className='paragraph'>I ended up with nine categories: filtering, account, look & feel, hotel info, extras, room selection, navigation, date selection, and pricing.</Typography>
        <Typography variant='body1' className='paragraph'>The groupings seemed to line up with what users had emphasized as most important. The Hotel Information category had the most sticky notes—users often felt the info about hotels wasn’t clear enough. Within that group, three key themes kept coming up: location, amenities, and reviews.
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
          <Typography variant='body1' className='paragraph'>Now that I had my focus areas from the affinity diagram and defined the journey steps, it was time to organize everything. I added the user goals, behaviors, and sentiments to create a customer journey map. This would give me a clearer picture of the website’s information architecture and help guide the design by identifying key screen purposes, opportunities, and guidelines.</Typography>
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
