import { Paper, Typography, Grid, List, ListItem } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import { blueGrey } from '@mui/material/colors';

export default function Overview() {
  return (
    <Paper elevation={3} sx={{ backgroundColor: blueGrey[50], paddingBottom: 5 }}>
    <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10} sx={{ mt: 5 }}>
            <Typography variant='h1' sx={globalStyles.heading1}>Project Summary</Typography>
            <Typography variant='h2' sx={globalStyles.heading2}>Menagerie Hotels TL;DR</Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Project Context
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                For my UX Design Institute diploma, I led a solo project to design the mobile experience for a hotel booking website, building a working prototype that covered the full booking flow. The project let me dive into the entire UX process, from research and analysis to journey mapping, usability testing, wireframing, interaction design, and prototyping.
            </Typography>
            
            <Typography variant='h3' sx={globalStyles.heading3}>
                Project Goal (Problem) & Approach
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                I started the project without a predefined problem statement other than “design a hotel booking experience.” However, through user surveys, competitive analysis, and affinity mapping, a clear problem emerged. People often feel uncertain when booking hotels because pricing, amenities, and location are unclear or inconsistent.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                This discovery reframed my approach and unlocked an opportunity. Rather than simply redesigning screens, I focused on reducing confusion and helping users make confident decisions by prioritizing transparency throughout the booking journey.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Key Insights
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              User research highlighted several consistent friction points in hotel booking. People struggled to quickly understand hotel location, amenities, reviews, and room options or rates, often feeling uncertain about what was included or how prices compared. 
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              The booking flow needed to be intuitive, with predictable steps, a clear and easy-to-use calendar picker for selecting dates, and optional add-ons presented transparently. 
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              Account creation and membership details were another area of confusion, with users wanting perks explained clearly and sign-in optional. Overall, clarity, consistency, and transparency emerged as the overarching themes guiding design decisions.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>
                Outcome and Reflections
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                The project resulted in a fully annotated, high-fidelity prototype in Figma, covering the full booking experience with screens and interactions that balanced familiar conventions with clarity and transparency.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Working on Menagerie Hotels reinforced the value of leaving my biases at the door and letting research guide design. I started with the goal of creating a hotel booking prototype, but it wasn’t until I dug into surveys, interviews, and the affinity diagram that the focus on clarity and transparency really came through. 
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Even as a school project, it gave me a solid sense of what leading an end-to-end UX process feels like and left me more confident tackling real-world problems.
            </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
