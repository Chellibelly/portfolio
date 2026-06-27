import { Paper, Typography, Grid } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';

export default function Overview() {
  return (
    <Paper elevation={3} sx={{  paddingBottom: 5 }}>
    <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10} sx={{ mt: 5 }}>
            <Typography
            component="h1"
            sx={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                p: 0,
                m: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0,
            }}
            >
            Freebird Hotels
            </Typography>
            <Typography component="h2" sx={globalStyles.heading1}>Project Summary</Typography>
            <Typography component="p" sx={globalStyles.heading2}>Freebird Hotels TL;DR</Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Project Context & Scope
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                I completed this project as part of the UX Design Institute diploma program, leading a solo effort to design a full hotel booking experience, from research through a working, high-fidelity prototype.
            </Typography>
            
            <Typography variant='h3' sx={globalStyles.heading3}>
                Challenge
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                The brief defined the “what” (build a booking site) but not the “why.” I chose to focus my goal on finding a meaningful problem to solve before designing any screens.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Key Insights
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                The research revealed the “why”: users lacked clarity around the critical information they needed to make a confident booking decision. They struggled to understand location, amenities, pricing, and membership benefits, often feeling unsure about what was included or how options compared. The opportunity wasn’t to reinvent booking, but to remove ambiguity and support confident decisions.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Outcome
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
              I delivered a fully annotated Figma prototype covering the end-to-end booking flow, with clear pricing summaries, full hotel descriptions, labeled amenities, intuitive date selection, and straightforward account and membership flows.
            </Typography>
           
            <Typography variant='h3' sx={globalStyles.heading3}>
                Takeaways
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                This project reinforced that research drives design, as observing users clarified pain points that assumptions alone would have missed. It showed that process matters. Structure, flow, and clarity outweigh aesthetics. Finally, owning the project end-to-end strengthened my confidence and ability to translate research into actionable design decisions.
            </Typography>
          
        </Grid>
      </Grid>
    </Paper>
  );
}
