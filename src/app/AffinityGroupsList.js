import { Typography, Box, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function AffinityGroupsList() {

  const categoryLabel = {
    textAlign: "center", 
    fontSize: 20, 
    fontFamily: "Montserrat", 
    fontWeight: "bold", 
    marginTop: "12px"
  };

  return (
      <Box sx={{ width: "100%", backgroundColor: grey[200] }}>
        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Hotel information
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>
                    Location
                </Typography>
                <Box sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <Typography>
                        Smart search suggestions and recent searches are a must-have. Most users are searching by a specific location in mind, so search results should focus on location, landmarks, and places of interest. The search results page needs to give the option for the user to toggle between and list view and a map view. The map view should help the user understand where each hotel is relative to the area in a highly visible way.
                    </Typography>
                </Box>
                <Typography>
                    <Typography>
                        Amenities
                    </Typography>
                    <Box sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                        <Typography>Amenities should be shown clearly at each step in the process, including when selecting a hotel, when selecting a room, when selecting a rate, and in summaries. Amenities should include icons, but they should also be labelled in text for clarity. For example a "parking" icon isn't enough. What specifically are we trying to say about parking? Amenity filtering should be easily discoverable on hotel search page.</Typography>
                    </Box>
                </Typography>
                <Typography>
                    <Typography>
                        Reviews
                    </Typography>
                    <Box sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                        <Typography>Importance of reviews came up time and time throughout research. Many users consider one of the most important factor when trusting a hotel booking website or specific hotel quality. A simple 5-star reputable rating system such as TripAdvisor ratings should be present and prominent on each hotel result.</Typography>
                    </Box>
                </Typography>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Room Selection
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>Room options should include pictures and clear standard default prices that user can easily see as they scroll so they can compare as they scroll up and down the page. Top room amenities should be listed for each room, but should not take up too much real-estate on the screen as to compromise the users ability to scroll and compare prices. Instead, if more detail exists, it should be included under an obvious expandable section under each room description.</Typography>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Date Selection
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>Users wanted a single calendar picker for selecting their date range. It would need to be familiar, fast, intuitive, and easy to use with an option to clear dates easily.</Typography>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Pricing
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>User should be easily able to find other rate options for any given room. Any member or rewards-specific pricing should be clearly labelled as so and visually seperated from other rates. All rates should have descriptions explainly exactly what they include. Rates should be organized and easy comparable. As often as possible, a clear itemized breakdown of charges should be displayed prominently. There should be no hidden fees or "gotchas."</Typography>            
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Account
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Box>
                    <Typography>
                        Account creation/sign-in should not be mandatory, should be very obvious to the user that it's optional, and should be easy to opt-out. However, account membership should be fully explained to the user so that they understand what it is, what it includes, and why it might be beneficial to them. Rewards perks and offers should be easy to find, but visually seperated.
                    </Typography>
                </Box>              
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Filtering
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>Filtering would need to be easy to find, set, and clear. The amenities would need to be clearly labelled to avoid misinterpretation. They would need to include features of the hotel itself (i.e. pool and fitness center), features of the hotel room (i.e. in-room safe, microwave), and features of the area - including activites and points of interest</Typography>             
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Extras & Add-ons
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>Reactions to add-ons shed light on their divisiveness. Some users liked to have the option through the website to add on special amenities, but others saw it more as interuptive marketing. Another got confused when it seemed like it was mandatory. With all of this in mind, add-ons should be offered, but clearly optional and not interuptive.</Typography>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Look & Feel
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>Many users mentioned brand loyalty, so logo and branding should be present and pervasive. Imagery proved very important as well in enticing users and giving them a glimpse of quality and theme. Beautiful vacation photography and hotel imagery should be present and bold throughout the booking process, from the homepage through to the booking summary.</Typography>                 
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Navigation
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <Typography>For the most part, conventional order of steps for booking a hotel need to followed. Additionally, a progress bar indicating the steps that have completed, the current step, and steps remaining should be present throughout the process. Selections should be saved between steps so that backtracking doesn't require re-work. Stay details selected so far should be present on screen as much as possible so the user doesn't have to rely on memory. Call to action buttons should be large and look consistent across screens.</Typography>
            </Grid>
        </Grid>
      </Box>
  );
}
