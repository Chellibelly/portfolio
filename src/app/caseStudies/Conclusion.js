import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import ProcessSolutionGraphic from '../../../public/Process_Solution.png';
import PrototypeGraphic from '../../../public/Prototype.png';

import DesignHotelInfo from '../../../public/Design_Hotel_Info.png';
import DesignPricingInfo from '../../../public/Design_Pricing_Info.png';
import DesignAccountInfo from '../../../public/Design_Account_Info.png';
import DesignLocationInfo from '../../../public/Design_Location_Info.png';
import DesignAdditional from '../../../public/Design_Additional_Catergories.png';

import QuoteContainer from './QuoteContainer';

import { blue } from '@mui/material/colors';


export default function Conclusion() {
  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>Bringing My Designs to Life</Typography>
          <Typography variant='h2' className='heading2'>The Prototype</Typography>
          <Typography variant="body1" className='paragraph'>This was it. It was time to take all of my sketched screens and translate them into something digital, something high-fidelity, and something that could simulate working software well enough that I could theoretically take to stakeholders and engineers. It was time to build my prototype in Figma. Prototypes are imperative in real-world UX design to reduce ambiguity, time, and risk.</Typography>
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
          <Typography variant='h3' className='heading3'>I Didn't Forget About My Eureka Moment</Typography>
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
          <Typography variant='h3' className='heading3'>Other Areas of Focus</Typography>
          <Typography variant="body1" className='paragraph'>The other areas to pay attention to that were identified in the analysis phase, particularly from my affinity diagram, included interfaces pertaining to navigation, date selection, extras and add-ons, and overall look and feel. It was important to design these areas with excellent established conventions but also to address issues and negative feedback to make my site more user-friendly and delightful than the other guys.</Typography>
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
          <Image
            className='graphic'
            src={PrototypeGraphic}
            width="100%"
            alt="An image of screenshots taken from the website prototype"
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Sharing with Stakeholders</Typography>
          <Typography variant="body1" className='paragraph'>
            If this were a real design for a real company, the project would not have ended here. So, let’s pretend for a moment that it was real, and I’ll explain how I would have proceeded from here. After finishing the annotated screen designs and prototype, the next step for me would most likely be to round up all of the important shareholders of the product – other designers, project and product managers, copywriters, legal, developers, and whoever else this product would be important to. 
          </Typography>
          <Typography variant='h3' className='heading3'>Don't Forget About the Business's Bottomline</Typography>
          <Typography variant="body1" className='paragraph'>
            The goal of sharing would be multifaceted. Ideally, there would be communication touch points occurring throughout the entire design process and this would be one of many checks to ensure everyone is still aligned with the problem we’re solving and agree that this is the solution to test. I would also ensure the solution is technically feasible and the development team understands exactly what to build, going into detail on all UI interactions and answering any questions they have.
          </Typography>
        </Grid>
        <QuoteContainer quote="Good design is good business. When you focus on designing a great experience for your users, your business will benefit." author="Jared Spool"/>
        <Grid item xs={10} sx={{ marginBottom: -5 }}>
          <Typography variant='h3' className='heading3'>Iterate, Iterate, and then Iterate Some More</Typography>
          <Typography variant="body1" className='paragraph'>
            If anything in the design needs to change based on the discussion, this could also be a time for negotiations. What can we compromise on? If we need to slim down the design to account to technical limitations, how might we do that without sacrificing important functionality? Creativity doesn’t end when the design has been delivered. 
          </Typography>
          <Typography variant="body1" className='paragraph'>
            Solving problems is ongoing, and I would expect to get very creative to deliver the best solution possible within our limitations. Additionally, the design cycle doesn’t end after the software is built and deployed. Deployed software only opens opportunities for more research and testing, more analysis, more design sessions, and continual software iterations.
          </Typography>
        </Grid>
      </Grid>
  );
}
