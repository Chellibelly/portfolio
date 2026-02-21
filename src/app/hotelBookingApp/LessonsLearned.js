import { Typography, Box, Grid, Link} from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';

export default function LessonsLearned() {
  return (
    <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10} sx={{ marginBottom: 10 }}>
            <Typography variant='h1' sx={globalStyles.heading1}>A Reflection on the Experience</Typography>
            <Typography variant='h2' sx={globalStyles.heading2}>Takeaways</Typography>
            
            <Typography variant='h3' sx={globalStyles.heading3}>
                Growth through Process
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Leading this project end-to-end strengthened my ability to <b>navigate ambiguity</b>, synthesize research, and <b>translate insights into effective design solutions</b>. From surveys and competitive research to usability testing and affinity mapping, I owned the full UX process, resulting in a working, annotated prototype representing a full user journey.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>
                Letting Research Lead
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                User research drove the project’s direction. Initial assumptions about there being little need for <i>“just another hotel booking site”</i> were quickly challenged once I listened to and <b>observed users</b> interact with real platforms. Watching frustration firsthand clarified pain points, showed me where the clarity was breaking down, and <b>surfaced opportunities</b> that would have been invisible without research-led design.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>Design in Context</Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              In a real product environment, this work would continue through stakeholder reviews, technical discussions, and <b>iteration</b>. Designers don’t work in isolation. Regular touch points early and often with product managers, engineering, legal, and marketing are essential to <b>ensuring alignment</b>.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              Adjustments and compromises would be negotiated to <b>balance technical limitations</b> with key functionality. Creativity and problem-solving continue beyond delivery, with post-launch research, testing, and iterations <b>driving ongoing improvements</b>.
            </Typography>
            
          
          
            <Typography variant='h3' sx={globalStyles.heading3}>
                Looking Forward
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Freebird Hotels reinforced that meaningful design stems from understanding users, validating assumptions, and making informed decisions. The project sharpened my research and design skills, and strengthened my confidence in leading UX initiatives from problem identification to prototype delivery. I’m eager to apply these lessons to real-world challenges and continue refining my practice.
            </Typography>
        </Grid>
      </Grid>
  );
}
