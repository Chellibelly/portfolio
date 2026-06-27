import { Typography, Box, Grid, Link} from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';

export default function LessonsLearned() {
  return (
    <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10} sx={{ marginBottom: 10 }}>
            <Typography component="h2" sx={globalStyles.heading1}>A Reflection on the Experience</Typography>
            <Typography component="p" sx={globalStyles.heading2}>Takeaways</Typography>
            
            <Typography variant='h3' sx={globalStyles.heading3}>
                Growth through Process
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Leading this project end to end strengthened my ability to navigate ambiguity, synthesize research, and translate insights into effective design decisions. From surveys and competitive research to usability testing and affinity mapping, I owned the full UX process and delivered a working, annotated prototype representing the complete booking journey.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>
                Letting Research Lead
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                User research drove the project’s direction. My initial assumption that there might be little need for “just another hotel booking site” was challenged once I listened to users and observed them interacting with existing platforms. Watching their frustration firsthand revealed where information was breaking down and surfaced opportunities that would have remained invisible if I had moved directly into design.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Completing the Brief
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                The project concluded with a fully annotated, end-to-end prototype that fulfilled the diploma assignment. In a real product environment, the next step would be usability testing with the Freebird Hotels prototype before development. Within the scope of this project, however, the prototype was the intended final deliverable and completed the journey from an undefined “why” to a research-informed solution.
            </Typography>
        </Grid>
      </Grid>
  );
}
