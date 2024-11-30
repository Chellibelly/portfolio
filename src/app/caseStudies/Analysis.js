import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Typography, Box, Grid, List, ListItem, Button, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AffinityGroupList from './AffinityGroupsList';
import AffinityGroupListMobile from './AffinityGroupListMobile';
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

import { blue, grey } from '@mui/material/colors';
import QuoteContainer from './QuoteContainer';


export default function Analysis() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

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

  const [journeyMap1Expanded, setJourneyMap1Expanded] = useState(false);
  const [journeyMap2Expanded, setJourneyMap2Expanded] = useState(false);

  const handleJourneyMap1Toggle = () => {
    setJourneyMap1Expanded(!journeyMap1Expanded);
  };

  const handleJourneyMap2Toggle = () => {
    setJourneyMap2Expanded(!journeyMap2Expanded);
  };

  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>The Forest Through the Trees</Typography>
          <Typography variant='h2' className='heading2'>The Analysis</Typography>
          <Typography variant='body1' className='paragraph'>One of my favorite methaphors has to do with “seeing the forest through the trees.” More or less, this means being able to draw the larger meaning, or bigger picture, out of the parts. I definitely had a bunch of trees - piles of research notes. Through analysis, I was hoping to make sense out of it all.</Typography>
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
          <Typography variant='body1' className='paragraph'>I was excited to dig into the data, but I couldn’t help wondering: was there a real need for this? What problem were we solving? If we actually built this, would it be any better than the competitors?</Typography>
        </Grid>

        <QuoteContainer quote="People don't want to buy a quarter-inch drill. They want a quarter-inch hole!" author="Theodore Levitt"/>

        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Triangulation (I Should Buy a Bigger White Board)</Typography>
          <Typography variant='body1' className='paragraph'> </Typography>
          <Typography variant='body1' className='paragraph'>I decided to start with an affinity diagram to organize all my notes. I grouped related data together first, then defined the categories based on commonalities. This way, natural groupings emerged, helping me focus on what's important without letting my own opinions influence the process. Essentially, it allowed the data to speak for itself.</Typography>
          <Typography variant='body1' className='paragraph'>I gathered stacks of sticky notes in different colors, a whiteboard, and markers. I worked through one research set at a time—survey results, benchmark notes, interview answers, and usability videos—spending about 10 minutes on each. I wrote down key points on sticky notes and placed them on the whiteboard.</Typography>
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
          {isDesktopOrLaptop ? <AffinityGroupList/> : <AffinityGroupListMobile/>}
        </Box>

        <Grid item xs={10}>
        <Typography variant='h3' className='heading3'>A User Journey Taking Shape</Typography>
          <Typography variant='body1' className='paragraph'>
            At this point, it felt crucial to define the key stages of the booking journey, which I had started to visualize through the research and affinity diagram. There were about eight major steps: home page (destination selection), date selection, hotel search, hotel selection, room selection, rate selection, add-ons, and booking completion (payment & contact details).
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
          <Typography variant='body1' className='paragraph'>With my focus areas from the affinity diagram and the journey steps defined, it was time to organize everything. I added user goals, behaviors, and sentiments to create a customer journey map. This helped me get a clearer picture of the website’s information architecture and guided the design by identifying key screen purposes, opportunities, and guidelines.</Typography>
        </Grid>
        
        <Grid item xs={12}>

        <Box>
            {/* Preview image with fixed height */}
            <Box
              sx={{
                height: journeyMap1Expanded ? 'auto' : isDesktopOrLaptop ? '700px' : '400px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src={CustomerJourneyMapGraphic2}
                width="100%"
                alt="An image of a customer journey map (1 of 2)"
                layout="responsive"
                style={{
                  objectFit: 'cover', // Maintain aspect ratio and prevent distortion
                  transition: 'height 0.3s ease',
                }} 
              />
            </Box>
            {!journeyMap1Expanded &&
            <Button
              onClick={handleJourneyMap1Toggle}
              variant="contained"
              sx={{
                width: '100%',            // Make the button take up the full width of the container
                display: 'flex',          // Use flexbox to center content
                justifyContent: 'center', // Center the text inside the button
                padding: '10px',          // Add some padding for better visual appearance
                backgroundColor: grey[200],
                color: "black",
                borderRadius: 0,
                marginBottom: "50px",
                '&:hover': {
                  backgroundColor: blue[100], // Background color on hover
                },
              }}
            >
            {journeyMap1Expanded ? 'Show Less' : 'Show More'}
            </Button>}
          </Box>


          <Box
              sx={{
                height: journeyMap2Expanded ? 'auto' : isDesktopOrLaptop ? '700px' : '400px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src={CustomerJourneyMapGraphic1}
                width="100%"
                alt="An image of a customer journey map (1 of 2)"
                layout="responsive"
                style={{
                  objectFit: 'cover', // Maintain aspect ratio and prevent distortion
                  transition: 'height 0.3s ease',
                }} 
              />
            </Box>

            {!journeyMap2Expanded &&
            <Button
              onClick={handleJourneyMap2Toggle}
              variant="contained"
              sx={{
                width: '100%',            
                display: 'flex',          
                justifyContent: 'center', 
                padding: '10px',          
                backgroundColor: grey[200],
                color: "black",
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: blue[100], 
                },
              }}
            >
            {journeyMap2Expanded ? 'Show Less' : 'Show More'}
            </Button>}
         

          
          
        </Grid>

        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>The Eureka Moment</Typography>
          <Typography variant='body1' className='paragraph'>The glaring bottom line made evident from the affinity diagram and customer journey map was clear: the main issue was a lack of (or at least confusing) information, often assuming users knew things they didn’t. This was a consistent problem across every site I researched and was highlighted by every user interviewed and surveyed.</Typography>
          <Typography variant='body1' className='paragraph'>At this point, my goal became much clearer. While there might not have been a glaring problem to fix, there was an opportunity to improve. A desirable hotel booking site would follow industry standards but do so with complete transparency, providing users with all the information they need at every step.</Typography>
        </Grid>

        <QuoteContainer quote="Good research is not about finding what you expect to find; it’s about finding what’s actually there." author="Albert Szent-Györgyi"/>

        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Opportunities</Typography>
          <Typography variant='body1' className='paragraph'>
            My analysis thus far revealed that the key areas of transparency I needed to focus on fell into four main categories: hotel quality and amenities, hotel location and its relation to places of interest, pricing and rate comparisons, and account and membership programs.
          </Typography>
        </Grid>



        {/*New Quality*/}
        <Grid container direction="row" justifyContent="flex-start" sx={{ marginTop: 5 }}>
          {isDesktopOrLaptop && <Grid item xs={3} sx={{ 
              display: 'flex',         
              flexDirection: 'column', 
              justifyContent: "center",
              marginRight: 1 }}>
            <Typography sx={{...categoryLabel, color: blue[700], fontSize: 26}}>Hotel Quality & Amenities</Typography>
          </Grid>}
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center',
            }}>
            <Image
                src={CategoryHotelOpportunityGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
            <Typography sx={{ ...categoryLabel }}>The Other Guys</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Unknown hotel quality
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Limited hotel descriptions
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Ambiguous amenity icons, labels, and descriptions
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{               
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center',
               }}>
            <Image
                src={CategoryHotelGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
              <Typography sx={{ ...categoryLabel }}>Opportunities</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Hotel quality rating prominently displayed
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Detailed hotel description
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Clear amenity icons, labels,and descriptions
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ width: '100%', marginTop: 2 }} /> {/* Ensures it spans full width */}
        </Grid>


        {/*New Location*/}
        <Grid container direction="row" justifyContent="flex-start" sx={{ marginTop: 5 }}>
          {isDesktopOrLaptop && <Grid item xs={3} sx={{ 
              display: 'flex',         
              flexDirection: 'column', 
              justifyContent: "center",
              marginRight: 1 }}>
            <Typography sx={{...categoryLabel, color: blue[700], fontSize: 24}}>Hotel Location & Relation to Places of Interest</Typography>
          </Grid>}
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center' 
            }}>
            <Image
                src={CategoryLocationOpportunityGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
            <Typography sx={{ ...categoryLabel }}>The Other Guys</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Unexpected search results
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Unclear relation to the area, airports, or places of interest
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{               
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center'  }}>
            <Image
                src={CategoryLocationGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
            <Typography sx={{ ...categoryLabel }}>Opportunities</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Search results based on location-only for simplicity
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Intuitive map view options for search results, providing clear relationships to the area
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Emphasizes when close to airports or points of interest
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ width: '100%', marginTop: 2 }} /> {/* Ensures it spans full width */}
        </Grid>



        {/*New Pricing*/}
        <Grid container direction="row" justifyContent="flex-start" sx={{ marginTop: 5 }}>
          {isDesktopOrLaptop && <Grid item xs={3} sx={{ 
              display: 'flex',         
              flexDirection: 'column', 
              justifyContent: "center",
              marginRight: 1 }}>
            <Typography sx={{...categoryLabel, color: blue[700], fontSize: 26}}>Pricing & Rate Comparisons</Typography>
          </Grid>}
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center' 
            }}>
            <Image
                src={CategoryPricingOpportunityGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
            <Typography sx={{ ...categoryLabel }}>The Other Guys</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Unclear inclusions and limited descriptions of special rates
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Ambiguity between member and non-member rates
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Lack of pricing breakdowns and hidden fees
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{               
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center'  }}>
            <Image
                src={CategoryPricingGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
            <Typography sx={{ ...categoryLabel }}>Opportunities</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Clearly describes what is included in special rates
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Member and non-member rates clearly labeled and separated from each other
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Pricing breakdowns prominently displayed
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ width: '100%', marginTop: 2 }} /> {/* Ensures it spans full width */}
        </Grid>


        {/*New Account*/}
        <Grid container direction="row" justifyContent="flex-start" sx={{ marginTop: 5 }}>
          {isDesktopOrLaptop && <Grid item xs={3} sx={{ 
              display: 'flex',         
              flexDirection: 'column', 
              justifyContent: "center",
              marginRight: 1 }}>
            <Typography sx={{...categoryLabel, color: blue[700], fontSize: 26}}>Account &  Membership Programs</Typography>
          </Grid>}
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center' 
            }}>
            <Image
                src={CategoryAccountOpportunityGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
            <Typography sx={{ ...categoryLabel }}>The Other Guys</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Unintuitive membership opt-outs
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Unexplained perks or membership inclusions
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CloseIcon sx={{ color: 'red', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Insufficient distinction between member and non-member options
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={isDesktopOrLaptop ? 4 : 6} sx={{               
              display: 'flex',         
              flexDirection: 'column', 
              alignItems: 'center'  }}>
            <Image
                src={CategoryAccountGraphic}
                alt="A graphic depicting a hotel information category"
                width={isDesktopOrLaptop ? 200 : 160}
              />
            <Typography sx={{ ...categoryLabel }}>Opportunities</Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* Use flex layout for list item */}
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} /> {/* Check icon */}
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Clear opt-out of membership programs
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Fully explained perks and membership inclusions
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', marginRight: 1 }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif', // Custom font
                    fontSize: '16px'
                  }}
                >
                  Plenty of delineation between member and non-member options
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
  );
}
