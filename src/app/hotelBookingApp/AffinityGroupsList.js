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

export default function AffinityGroupsList() {

  return (
      <Box sx={{ width: "100%", borderRadius: 3 }}>
        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 2, backgroundColor: blue[100], borderTopLeftRadius: 10, textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", fontSize: 18 }}>
                    <VillaIcon sx={{ fontSize: 80 }}/><br/>
                    Hotel<br/>
                    Information
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50], borderTopRightRadius: 10 }}>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Location
                </Typography>
                <Box sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>
                        Smart search suggestions and recent searches are a must. Most users are looking for a specific place, so results should focus on locations, landmarks, and nearby attractions. The search results page should let users switch between list and map views, with the map clearly showing where each hotel is in the area.
                    </Typography>
                </Box>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Amenities
                </Typography>
                <Box sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>Amenities should be clear at every step, including when choosing a hotel, room, rate, and in summaries. Use icons, but also label them for clarity. For example, a "parking" icon needs more detail. What exactly are we saying about parking? Amenity filters should be easy to find on the hotel search page.</Typography>
                </Box>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold", marginBottom: 1 }}>
                    Reviews
                </Typography>
                <Box sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <Typography sx={{ fontFamily: "Montserrat", marginBottom: 2 }}>Reviews came up again and again in the research. Many users see them as a key factor in trusting a hotel or booking site. A simple, visible 5-star rating system, like TripAdvisor, should be prominent on each hotel result.</Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 3, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <BedIcon sx={{ fontSize: 80 }}/><br/>
                    Room Selection
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>Room options should show pictures and clear default prices that are easy to spot as users scroll. Top room amenities should be listed without taking up too much space, so users can still compare prices. Any extra details should be in an expandable section under each room description.</Typography>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 2, paddingBottom: 2, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <CalendarMonthIcon sx={{ fontSize: 80 }}/><br/>
                    Date Selection
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>Users prefer a single calendar picker for selecting dates. It should be something familiar, fast, intuitive, and easy to use, with an option to clear dates easily.</Typography>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 3, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <DollarSign sx={{ fontSize: 80 }}/><br/>
                    Pricing
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>Users should easily find other rate options for any room. Member or rewards pricing should be clearly labeled and separated from other rates. Each rate should include a description of what's included. Rates should be easy to compare, and whenever possible, an itemized breakdown of charges should be clearly shown. No hidden fees or "gotchas".</Typography>            
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 3, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <AccountCircleIcon sx={{ fontSize: 80 }}/><br/>
                    Account
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Box>
                    <Typography sx={{ fontFamily: "Montserrat" }}>
                    Account creation or sign-in should be optional and clearly communicated as such, with an easy opt-out. However, membership perks should be explained (what they include and why they’re beneficial). Rewards offers should be easy to find and visually separate from other content.
                    </Typography>
                </Box>              
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 3, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <FilterAltIcon sx={{ fontSize: 80 }}/><br/>  
                    Filtering
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>Filtering should be easy to find, set, and clear. Amenities need to be clearly labeled to avoid confusion, including hotel features (like a pool or fitness center), room features (like an in-room safe or microwave), and nearby activities or points of interest.</Typography>             
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 3, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <AddCircleOutlineIcon sx={{ fontSize: 80 }}/><br/>  
                    Extras & Add-ons
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>Reactions to add-ons showed they can be divisive. Some users liked the option to add special amenities, but others felt it was interruptive marketing. One even got confused when it seemed mandatory. So, add-ons should be offered, but clearly optional and not disruptive.</Typography>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 3, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <AutoAwesomeIcon sx={{ fontSize: 80 }}/><br/>  
                    Look & Feel
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>Many users mentioned brand loyalty, so logos and branding should be prominent. Imagery is also key. Beautiful vacation and hotel photos should be bold and present throughout the booking process, from the homepage to the booking summary, to entice users and showcase quality.</Typography>                 
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%", marginTop: "7px" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%", paddingTop: 3, backgroundColor: blue[100], textAlign: "center", margin: "auto", fontWeight: "bold", fontFamily: "Montserrat", color: grey[900], fontSize: 18 }}>
                    <MenuIcon sx={{ fontSize: 80 }}/><br/> 
                    Navigation
                </Typography>
            </Grid>
            <Grid item xs={0.1}/>
            <Grid item xs={9.9} sx={{ padding: 4, backgroundColor: blue[50] }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>The booking process should follow a conventional order of steps. A progress bar showing completed, current, and remaining steps should be visible throughout. Selections should be saved between steps to avoid rework when backtracking. Stay details should be visible on screen to avoid relying on memory, and call-to-action buttons should be large and consistent across all screens.</Typography>
            </Grid>
        </Grid>
      </Box>
  );
}
