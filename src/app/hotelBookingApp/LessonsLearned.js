import { Typography, Box, Grid, Link} from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';

export default function LessonsLearned() {
  return (
    <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10} sx={{ marginBottom: 10 }}>
            <Typography variant='h1' sx={globalStyles.heading1}>A Reflection on the Experience</Typography>
            <Typography variant='h2' sx={globalStyles.heading2}>Takeaways</Typography>
            
            <Typography variant='h3' sx={globalStyles.heading3}>
                Growing as a Designer through Practice and Process
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Leading this project end to end strengthened my confidence in navigating ambiguity, synthesizing research, and turning insights into design decisions. Even as a school project, it gave me a realistic sense of what it takes to own a UX process. I practiced a variety of skills and tools essential for effective user research, analysis, and design. 
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                I wrote and administered a qual/quant survey, conducted benchmark research to establish baselines, and led usability tests. I effectively analyzed feedback by whiteboarding an affinity diagram and mapped sentiments and journeys. I designed wireframes and web screens, ultimately culminating in a working, annotated Figma prototype.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Letting Research Lead
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                This project reinforced how critical user research is to meaningful design. My initial assumptions about there being little need for “just another hotel booking site” shifted once I started listening to real users. Observing frustration firsthand, especially during usability testing, deepened my empathy and clarified just where clarity was breaking down.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>Iteration, Stakeholders and the Bottom-line</Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              In a real product environment, this work would continue through stakeholder reviews, technical discussions, and iteration. Designers don’t work in isolation. Regular touch points early and often with product managers, engineering, legal, and marketing are essential to ensuring alignment.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              Adjustments and compromises would be negotiated to balance technical limitations with key functionality. Creativity and problem-solving continue beyond delivery, with post-launch research, testing, and iterations driving ongoing improvements.
            </Typography>
            
          
          
            <Typography variant='h3' sx={globalStyles.heading3}>
                Final thoughts
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Menagerie Hotels gave me hands-on experience leading a full UX process, from discovery through delivery. It challenged my assumptions, sharpened my research skills, and reinforced the importance of designing with empathy and clarity.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                I’m excited to continue growing as a UX designer and applying these lessons to real-world products.
            </Typography>
        </Grid>
      </Grid>
  );
}
