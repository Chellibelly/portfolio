import { Typography, Box, Grid } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import VillaIcon from '@mui/icons-material/Villa';
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DollarSign from '@mui/icons-material/MonetizationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuIcon from '@mui/icons-material/Menu';

export default function AffinityGroupsListMobile() {

  return (
      <Box sx={{  borderRadius: 3 }}>
        <Grid container>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <VillaIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Hotel Information
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Locations
                </Typography>
                <Box sx={{ listStyleType: 'disc' }}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>
                        Smart search suggestions and recent searches are a must. Most users are looking for a specific place, so results should focus on locations, landmarks, and nearby attractions. The search results page should let users switch between list and map views, with the map clearly showing where each hotel is in the area.
                    </Typography>
                </Box>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Amenities
                </Typography>
                <Box sx={{ listStyleType: 'disc'}}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>Amenities should be clear at every step (when choosing a hotel, room, rate, and in summaries). Use icons, but also label them for clarity. For example, a "parking" icon needs more detail. What exactly are we saying about parking? Amenity filters should be easy to find on the hotel search page.</Typography>
                </Box>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Reviews
                </Typography>
                <Box sx={{ listStyleType: 'disc' }}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>Reviews came up again and again in the research. Many users see them as a key factor in trusting a hotel or booking site. A simple, visible 5-star rating system, like TripAdvisor, should be prominent on each hotel result.</Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <BedIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Room Selection
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Room options should show pictures and clear default prices that are easy to spot as users scroll. Top room amenities should be listed without taking up too much space, so users can still compare prices. Any extra details should be in an expandable section under each room description.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <CalendarMonthIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Date Selection
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Users prefer a single calendar picker for selecting dates. It should be something familiar, fast, intuitive, and easy to use, with an option to clear dates easily.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <DollarSign sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Pricing
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Users should easily find other rate options for any room. Member or rewards pricing should be clearly labeled and separated from other rates. Each rate should include a description of what's included. Rates should be easy to compare, and whenever possible, an itemized breakdown of charges should be clearly shown. No hidden fees or "gotchas".
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <AccountCircleIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Account
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Account creation or sign-in should be optional and clearly communicated as such, with an easy opt-out. However, membership perks should be explained (what they include and why they’re beneficial). Rewards offers should be easy to find and visually separate from other content.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <FilterAltIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Filtering
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Filtering should be easy to find, set, and clear. Amenities need to be clearly labeled to avoid confusion, including hotel features (like a pool or fitness center), room features (like an in-room safe or microwave), and nearby activities or points of interest.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <AddCircleOutlineIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Extras & Add-ons
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Reactions to add-ons showed they can be divisive. Some users liked the option to add special amenities, but others felt it was interruptive marketing. One even got confused when it seemed mandatory. So, add-ons should be offered, but clearly optional and not disruptive.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <AutoAwesomeIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Look & Feel
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Many users mentioned brand loyalty, so logos and branding should be prominent. Imagery is also key. Beautiful vacation and hotel photos should be bold and present throughout the booking process, from the homepage to the booking summary, to entice users and showcase quality.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 5, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "30px" }}>
                    <MenuIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Navigation
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    The booking process should follow a conventional order of steps. A progress bar showing completed, current, and remaining steps should be visible throughout. Selections should be saved between steps to avoid rework when backtracking. Stay details should be visible on screen to avoid relying on memory, and call-to-action buttons should be large and consistent across all screens.
                </Typography>
            </Grid>
        </Grid>
      </Box>
  );
}
