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
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <VillaIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Hotel Information
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Location
                </Typography>
                <Box sx={{ listStyleType: 'disc' }}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>
                        Include smart search suggestions and recent searches. Results should prioritize specific locations, landmarks, and nearby attractions. Allow users to toggle between list and map views, with clear hotel placement on the map.
                    </Typography>
                </Box>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Amenities
                </Typography>
                <Box sx={{ listStyleType: 'disc'}}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>Amenities should be clearly displayed at every step (hotel, room, rate, summary). Use icons, but also label them for clarity. For example, a "parking" icon needs more detail (what exactly are we saying about parking?). Filters should be easy to find on the search page.</Typography>
                </Box>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Reviews
                </Typography>
                <Box sx={{ listStyleType: 'disc' }}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>Many users see ratings as a key factor in trusting a hotel or booking site. A simple, visible 5-star rating system, like TripAdvisor, should be prominent on each hotel result.</Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <BedIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Room Selection
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                   Show room photos, clear default pricing, and key amenities at a glance for easy comparison. Place additional details in expandable sections.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <CalendarMonthIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Date Selection
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Users prefer a single calendar picker for selecting dates. It should be something familiar, fast, intuitive, and easy to use, with an option to clear dates easily.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <DollarSign sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Pricing
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Make all rate options easy to find and compare. Clearly label member/rewards pricing. Include descriptions of what each rate covers and provide itemized breakdowns whenever possible. No hidden fees.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <AccountCircleIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Account
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Sign-in should be optional and clearly communicated. Highlight membership perks and visually separate rewards offers from other content.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <FilterAltIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Filtering
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Filters should be easy to find, apply, and clear. Clearly distinguish between hotel amenities, room features, and nearby activities and points of interest.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <AddCircleOutlineIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Extras & Add-ons
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Reactions to add-ons showed they can be divisive. Offer add-ons as clearly optional and non-disruptive. Avoid making them feel mandatory or interruptive.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <AutoAwesomeIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Look & Feel
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Emphasize branding and logos to support loyalty. Use bold, high-quality imagery throughout the booking process to showcase quality and inspire users.
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sx={{ padding: 3, backgroundColor: blue[50] }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18, marginBottom: "20px" }}>
                    <MenuIcon sx={{ fontSize: 80, color: blue[700] }}/><br/>
                    Navigation
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                    Follow a conventional booking flow with a visible progress bar. Save selections between steps, keep stay details visible where possible, and use large, consistent call-to-action buttons.
                </Typography>
            </Grid>
        </Grid>
      </Box>
  );
}
