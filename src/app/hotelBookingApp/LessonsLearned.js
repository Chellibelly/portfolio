import { Typography, Box, Grid, Link} from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';

export default function LessonsLearned() {
  return (
    <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10} sx={{ marginBottom: 10 }}>
            <Typography variant='h1' sx={globalStyles.heading1}>A Reflection on the Experience</Typography>
            <Typography variant='h2' sx={globalStyles.heading2}>Lessons Learned</Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Technical skills through the UX lifecycle
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Throughout this project, I practiced a variety of skills and tools essential for effective user research, analysis, and design. I wrote and administered a survey with both qualitative and quantitative questions, conducted benchmark research on several products to establish baselines, and led usability tests, recording and taking notes using Zoom and screen mirroring technology.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                I analyzed feedback by whiteboarding an affinity diagram, created customer personas, and mapped sentiments and journeys using Miro. I designed wireframes and web screens in low, medium, and high fidelity using paper, pencils, Miro, Photoshop, and Figma, ultimately culminating in a working, annotated prototype in Figma.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>
                The importance of user research and expecting the unexpected
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Without the research, I wouldn’t have been able to create designs that truly met user goals and needs. Learning about users' past frustrations with similar software uncovered key opportunities and led to my “eureka moment” about where to focus my design efforts.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                I had to stay flexible and let the research guide me, setting aside my own opinions and disproving assumptions along the way. Watching users struggle, while difficult, was crucial for building empathy and making key discoveries. Those discoveries were the core of the project. I learned that without listening to and understanding user sentiment, designing functional software that truly solves a problem for both the business and the customer isn’t possible.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>
                Final thoughts
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Thank you for reading about my journey in this case study. I'm incredibly grateful for the opportunity and experience—it turned out to be even more interesting and enjoyable than I expected, and I learned so much. My UX journey doesn’t end here. This field means so much to me and is crucial to technology. I have a lot to learn, and I’m just getting started.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                If you'd like to learn more about me, check out my <Link href="/">about me</Link> page.
            </Typography>
        </Grid>
      </Grid>
  );
}
