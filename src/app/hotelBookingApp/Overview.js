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
                As the focus of my diploma program with the UX Design Institute, I led a solo project to design the mobile experience for a hotel booking website. My assignment was to create a working prototype that supported the end-to-end booking flow, from searching for hotels to completing a reservation. 
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                The project gave me a structured opportunity to practice the full UX lifecycle in depth. I got to conduct my own research, analysis, journey-mapping, usability testing, wireframing, interaction design, prototyping and more.
            </Typography>
            
            <Typography variant='h3' sx={globalStyles.heading3}>
                Project Goal (Problem) & Approach
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                I started the project without a predefined problem statement other than “design a hotel booking experience.” However, through user surveys, competitive analysis, and affinity mapping, a clear problem emerged: people often feel uncertain and frustrated when booking hotels because critical information like pricing details, amenity inclusions, and location are totally unclear or inconsistently presented.
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                This discovery reframed my approach and unlocked an opportunity. Rather than simply redesigning screens, I focused on reducing confusion and helping users make confident decisions by prioritizing transparency throughout the booking journey.
            </Typography>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Key Insights
            </Typography>
            <List sx={{ listStyleType: 'disc', marginLeft: 3 }}>
              <ListItem sx={{ display: 'list-item', marginBottom: -2 }}>
                <Typography variant='body1' sx={{ ...globalStyles.paragraph, fontFamily: "Montserrat" }}>
                  <b>General Hotel Info:</b> For ease of use and a good comprehension of hotel location, users value smart search suggestions, recent searches, and results centered on specific locations, landmarks, and nearby attractions. Many highlight the importance of toggling between a “list view” and a “map view.”
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginBottom: -2 }}>
                <Typography variant='body1' sx={{ ...globalStyles.paragraph, fontFamily: "Montserrat" }}>
                  <b>Amenities:</b> Across hotel selection, room choice, rate comparison, and summaries, users rely on clear labeling with icons and explanatory text to understand what’s actually included in their stays.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginBottom: -2 }}>
                <Typography variant='body1' sx={{ ...globalStyles.paragraph, fontFamily: "Montserrat" }}>
                  <b>Reviews:</b> Users frequently use reviews to guide their decisions. A visible rating system is consistently cited as critical for understanding quality. A lack of rating system makes users feel uncertain about what they’re booking.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginBottom: -2 }}>
                <Typography variant='body1' sx={{ ...globalStyles.paragraph, fontFamily: "Montserrat" }}>
                  <b>Room Options/Rates:</b> Users need need clear default pricing and concise summaries of inclusions. They expect multiple rate options, membership pricing, and itemized charges to be easy to find and compare, without hidden fees.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginBottom: -2 }}>
                <Typography variant='body1' sx={{ ...globalStyles.paragraph, fontFamily: "Montserrat" }}>
                  <b>Booking Flow:</b> Users favor a single, intuitive calendar picker for dates, predictable step order, and visible selections. Optional add-ons are acceptable, but only when clearly communicated and presented in a way that doesn’t signal “we’re trying to get more money out of you.”
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', marginBottom: -2 }}>
                <Typography variant='body1' sx={{ ...globalStyles.paragraph, fontFamily: "Montserrat" }}>
                  <b>Accounts/Memberships:</b> Users prefer that account creation and sign-in are completely options, and they want account specifics and membership perks explained and rewards clearly distinguishable.
                </Typography>
              </ListItem>
            </List>

            <Typography variant='h3' sx={globalStyles.heading3}>
                Outcome and Reflections
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                The project culminated in a fully annotated, high-fidelity prototype built in Figma. The prototype covered the end-to-end booking experience with screens and interactions designed to balance existing conventions with transparency and features that aligned with user goals.  
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Working on Menagerie Hotels taught me the value of leaving my biases at the door and letting research guide design. I started with the goal of creating a hotel booking prototype, but it wasn’t until I dug into surveys, interviews, and the affinity diagram that the focus on clarity and transparency really came through. 
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}>
                Along the way, I sharpened my skills in research, analysis, wireframing, interaction design, and prototyping. I listened closely, asked questions, questioned assumptions, and let evidence drive my decisions. Even as a school project, it gave me a clear sense of what leading an end-to-end UX process feels like and left me more confident tackling real-world problems with empathy and clarity.
            </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
