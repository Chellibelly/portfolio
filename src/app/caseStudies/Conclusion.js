import React, { useState } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import Image from 'next/image';
import ProcessSolutionGraphic from '../../../public/Process_Solution.png';
import PrototypeGraphic from '../../../public/Prototype.png';

import DesignHotelInfo from '../../../public/Design_Hotel_Info.png';
import DesignPricingInfo from '../../../public/Design_Pricing_Info.png';
import DesignAccountInfo from '../../../public/Design_Account_Info.png';
import DesignLocationInfo from '../../../public/Design_Location_Info.png';
import DesignAdditional from '../../../public/Design_Additional_Catergories.png';

import QuoteContainer from './QuoteContainer';

import { blue, grey } from '@mui/material/colors';


export default function Conclusion() {
  const [fullDesignExpanded, setFullDesignExpanded] = useState(false);

  const handleToggle = () => {
    setFullDesignExpanded(!fullDesignExpanded);
  };

  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>Bringing My Designs to Life</Typography>
          <Typography variant='h2' className='heading2'>The Prototype</Typography>
          <Typography variant="body1" className='paragraph'>This was it—the moment to take all my sketched screens and turn them into something digital and high-fidelity, a prototype that could simulate working software well enough to present to stakeholders and engineers. A Prototype would be crucial in real-world UX design to reduce ambiguity, save time, and minimize risk. I used Figma - a popular and standard design tool - for this task.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={ProcessSolutionGraphic}
            width="100%"
            alt="An image of the UX process with the Solution step highlighted"
          />
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
          <Typography variant='h3' className='heading3'>Transparency Design</Typography>
          <Typography variant="body1" className='paragraph'>I put a lot of focus on the major opportunity I had found – to design my site to be completely transparent and informative regarding hotel quality and amenities, hotel location and relation to places of interest, pricing and rate comparisons, and account and membership programs.</Typography>
        </Grid>  
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={DesignHotelInfo}
            width="100%"
            alt="An image of screenshots taken from the website prototype"
          />
          <Image
            className='graphic'
            src={DesignLocationInfo}
            width="100%"
            alt="An image of screenshots taken from the website prototype"
          />
          <Image
            className='graphic'
            src={DesignPricingInfo}
            width="100%"
            alt="An image of screenshots taken from the website prototype"
          />
          <Image
            className='graphic'
            src={DesignAccountInfo}
            width="100%"
            alt="An image of screenshots taken from the website prototype"
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Other Important Areas of Focus</Typography>
          <Typography variant="body1" className='paragraph'>The other key areas identified in the analysis phase, especially from my affinity diagram, included navigation, date selection, extras and add-ons, and the overall look and feel. It was important to design these elements using established conventions while also addressing issues and negative feedback to make my site more user-friendly and delightful compared to the other guys.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={DesignAdditional}
            width="100%"
            alt="An image of screenshots taken from the website prototype"
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>The Results</Typography>
          <Typography variant="body1" className='paragraph'>And voila! After working through a bit of learning curve with Figma and a few days and building and rebuilding components, I finally had a collection of high-fidelity annotated screens and a working prototype for an entire hotel booking workflow from homepage to checkout!</Typography>
        </Grid>
        <Grid item xs={12}>


        <Box>
            {/* Preview image with fixed height */}
            <Box
              sx={{
                height: fullDesignExpanded ? 'auto' : '400px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image 
                src={PrototypeGraphic} 
                alt="An image of screenshots taken from the website prototype" 
                layout="responsive"  // This ensures the image maintains its aspect ratio
                width="100%"         // Example width; adjust based on your image
                style={{
                  objectFit: 'cover', // Maintain aspect ratio and prevent distortion
                  transition: 'height 0.3s ease',
                }} 
              />
            </Box>

            {!fullDesignExpanded &&
            <Button
              onClick={handleToggle}
              variant="contained"
              sx={{
                width: '100%',            // Make the button take up the full width of the container
                display: 'flex',          // Use flexbox to center content
                justifyContent: 'center', // Center the text inside the button
                padding: '10px',          // Add some padding for better visual appearance
                backgroundColor: grey[200],
                color: "black",
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: blue[100], // Background color on hover
                },
              }}
            >
            {fullDesignExpanded ? 'Show Less' : 'Show More'}
            </Button>}
          </Box>




        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Stakeholders and the Business</Typography>
          <Typography variant="body1" className='paragraph'>
          If this were a real design for an actual company, the project wouldn’t end here. Let’s pretend it is, and I’ll explain how I would have continued. After finalizing the annotated screen designs and prototype, the next step would be to gather all the key stakeholders—other designers, project and product managers, copywriters, legal, developers, and anyone else involved in the product and share the designs.
          </Typography>
          <Typography variant="body1" className='paragraph'>
          Ideally, there would be regular touch points throughout the design process, and this would be one of many checks to ensure everyone is still aligned on the problem we’re solving and agrees that this is the solution to test. I'd also make sure the development team understands the UI interactions and can build it as intended, addressing any questions, concerns, or suggestions they have.
          </Typography>
        </Grid>
        <QuoteContainer quote="Good design is good business. When you focus on designing a great experience for your users, your business will benefit." author="Jared Spool"/>
        <Grid item xs={10} sx={{ marginBottom: -5 }}>
          <Typography variant='h3' className='heading3'>Iterate, Iterate, and then Iterate Some More</Typography>
          <Typography variant="body1" className='paragraph'>
            If the design needs adjustments, this is a time for negotiation—deciding what we can compromise on and how to adjust for technical limitations without losing key functionality. Creativity doesn’t stop when the design is delivered.
          </Typography>
          <Typography variant="body1" className='paragraph'>
            Solving problems is an ongoing process. I’d continue to get creative to find the best solutions within our limitations. Plus, the design cycle doesn’t end after launch; deployed software opens the door for more research, testing, analysis, and continuous iterations.
          </Typography>
        </Grid>
      </Grid>
  );
}
