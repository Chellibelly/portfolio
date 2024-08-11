import { Typography, Box, Grid  } from '@mui/material';
import Image from 'next/image';
import FlowDiagramGraphic from '../../../public/Flow_Diagram.png';
import SketchesGraphic from '../../../public/Sketches.png';
import ProcessDesignGraphic from '../../../public/Process_Design.png';

export default function Design() {
  return (
      <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10}>
          <Typography variant='h1' className='heading1'>Enter Paper, Pencils, & Pixels</Typography>
          <Typography variant='h2' className='heading2'>The Design</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1' className='paragraph'>My analysis was complete and it was time to move on to design. I needed to translate my customer journey map into the actual screens that would compose the website. Each screen needed to serve a purpose, and I needed to define what interactions would take place on those screens to serve that purpose. I wanted to really focus on the goals, actions, intentions, and results expected from each screen without clouding anything with content positioning or styling or anything else. </Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={ProcessDesignGraphic}
            width="100%"
            alt="An image of the UX process with the Design step highlighted"
          />
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: 5 }}>
        <Typography variant='h3' className='heading3'>Information Architecture</Typography>
        <Typography variant='body1' className='paragraph'>I created a Miro board and began building out the information architecture of the website by adding screens as rectangles, one at a time, and filling each with bullet points about what interactions needed to take place there, using my customer journey map and affinity diagram as guides. </Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={FlowDiagramGraphic}
            width="100%"
            alt="An image of several screens with basic actions described in bullets"
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3' className='heading3'>Sketching the Architecture with Actual Controls</Typography>
          <Typography variant='body1' className='paragraph'>At this point, I realized I had enough to start sketching out the design. Sketching would allow me to get ideas out quickly. Pens and paper are a physical medium that make for a fantastic way to brainstorm with relative ease and translate the interaction notes from the previous exercise into actual web controls, such as inputs and buttons, and determine where these controls would be positioned on each page. The goal here was to end up with realistic screen states, a low fidelity draft I’d be able to use to design my prototype later. </Typography>
          <Typography variant='body1' className='paragraph'>I pulled out some pens, notebook paper, and grid paper and got to work. I chose controls and positioning mostly which aligned with conventions I found or which improved usability issues I’d discovered. I kept it as simple as possible, focusing on discovered opportunities within a happy path. I started with very sloppy, quick sketches on notebook paper, then redrew and tweaked those sketches on grid paper for a cleaner representation. I uploaded pictures of the clean sketches to a Miro board and wrote careful, detailed annotations that any stakeholders, especially developers, would need to know about the interactions and screen states.</Typography>
        </Grid> 
        <Grid item xs={12}>
          <Image
            className='graphic'
            src={SketchesGraphic}
            width="100%"
            alt="An image of high-fidelity design sketches arranged in a flowchart"
          />
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: -5 }}>
          <Typography variant='h3' className='heading3'>Pretty Artwork Does Not Equal Good Design</Typography>
          <Typography variant='body1' className='paragraph'>One lesson I learned through this exercise was that having artistic skills doesn’t necessarily make you a good designer. Aesthetics were not important here, and having the interaction designs I did previously to base the sketches off of helped me focus just on the functions of the screens, not the aesthetics. When I was done, I ended up with high enough fidelity designs to start working on my prototype.</Typography>
        </Grid>
      </Grid>
  );
}
