import { Typography, Box, Grid, List, ListItem } from '@mui/material';
import AffinityGroupList from './AffinityGroupsList';
import Image from 'next/image';
import AffinityDiagramGraphic from '../../public/Affinity_Diagram.jpg';
import WhiteboardPostItsGraphic from '../../public/Whiteboard_PostIts.jpg';
import CustomerJourneyMapGraphic1 from '../../public/Customer_Journey_Map_1.png';
import CustomerJourneyMapGraphic2 from '../../public/Customer_Journey_Map_2.png';
import ProcessAnalysisGraphic from '../../public/Process_Analysis.png';
import CategoryHotelGraphic from '../../public/Category_Hotel.png';
import CategoryAccountGraphic from '../../public/Category_Account.png';
import CategoryPricingGraphic from '../../public/Category_Pricing.png';
import CategoryLocationGraphic from '../../public/Category_Location.png';


export default function AffinityGroupsList() {

  const categoryLabel = {
    textAlign: "center", 
    fontSize: 20, 
    fontFamily: "Montserrat", 
    fontWeight: "bold", 
    marginTop: "12px"
  };

  return (
      <Box sx={{ width: "100%" }}>
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
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>As the user types, suggested destinations matching the search criteria are offered</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User uses the interactable map to compare hotel result locations to find one that matches his goals</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Destination search field provides recent searches as options</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User is overwhelmed by too many hotel results and tries to narrow them down with more specific terms</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Many survey respondants say proximity to activies in the area is the most important thing to them when looking for a hotel</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User said specific hotel names as search results did not help him understand which options aligned with his goals</Typography>
                    </ListItem>
                </List>
                <Typography>
                    <Typography>
                        Amenities
                    </Typography>
                    <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography>When asked if there was anything he looked for that he couldn't find, user mentions more information on the hotel itself</Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography>User loved when hotel and room amenities were listed clearly in written words with a good amount of detail</Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography>Hotel amenities listed as icons, not sure exactly what the parking icon means</Typography>
                        </ListItem>
                    </List>
                </Typography>
                <Typography>
                    <Typography>
                        Reviews
                    </Typography>
                    <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography>When asked if there was anything he expected to see but didn't, user mentioned he would have liked to see hotel ratings</Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography>User typically searches for hotels with the best value which have the best reviews</Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography>User remarks that the first thing he's drawn to when comparing hotel results is the TripAdvisor rating</Typography>
                        </ListItem>
                    </List>
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
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>After selecting a hotel, the first thing the user notices on the hotel details page is hotel images, and he scrolls through them</Typography>
                    </ListItem>           
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>When deciding on a room, user scrolls through each option, comparing them at a glance before selecting one</Typography>
                    </ListItem>        
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Room amenities listed and clear</Typography>
                    </ListItem>      
                </List>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Date Selection
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User is disappointed to not to have any option to select flexible dates</Typography>
                    </ListItem>      
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Button for reseting calendar date selections</Typography>
                    </ListItem>       
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Single calendar widget for selecting dates, simple to interact with</Typography>
                    </ListItem>        
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User progresses through calendar months and remarks "it's a bit slow getting to the month of June"</Typography>
                    </ListItem>              
                </List>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Pricing
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User mentions that he was confused why some rates were higher than others, the reasoning was not clear</Typography>
                    </ListItem>          
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User isn't sure what effect the special promo deal he selected actually had on the total price</Typography>
                    </ListItem>              
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Users have mentioned selecting specific hotel booking site because they can easily compare prices from them</Typography>
                    </ListItem>  
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Clear breakdown of pricing shown in checkout</Typography>
                    </ListItem>  
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Most survey respondants mentioned struggles related to pricing: hidden fees, rate comparisons, lack of an explanation for price differences</Typography>
                    </ListItem>  
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>On the room selection step, user expands "View More Rates" control looking for options with free cancellation</Typography>
                    </ListItem>  
                </List>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Account
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>When presented with a pop-up prompting the user to create an account he mistakenly assumes it's mandatory</Typography>
                    </ListItem>    
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Many survey respondants mentioned account sign-up not being easy or not being able to easily opt out of sign-up</Typography>
                    </ListItem>   
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Account login/sign-up available in site header on homepage</Typography>
                    </ListItem>     
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User had option to sign-in, sign-up, or continue as a guest when checking out</Typography>
                    </ListItem>                     
                </List>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Filtering
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Many survey respondants said they spend the majority of their efforts filtering hotel amenities and browsing search results</Typography>
                    </ListItem>       
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Button for reseting search result filters</Typography>
                    </ListItem>                
                </List>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Extras & Add-ons
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User said having the option to add things like roses from the site was nice to have if staying somewhere nice</Typography>
                    </ListItem>          
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User voices that he isn't fond of hotel add-on screen because it gives him the impression that they are "trying to get more money out of me"</Typography>
                    </ListItem>        
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>When add-ons where blended into the flow too much, the user got confused that she had done something wrong</Typography>
                    </ListItem>    
                </List>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Look & Feel
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>When viewing the search criteria screen with moving vacation destination imagery, user said "that's immediately put me in the holiday mood"</Typography>
                    </ListItem>             
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Obvious company branding and logo present</Typography>
                    </ListItem>            
                </List>
            </Grid>
        </Grid>

        <Grid container direction="row" sx={{ width: "100%" }}>
            <Grid item xs={2}>
                <Typography sx={{ padding: "10px", height: "100%" }}>
                    Navigation
                </Typography>
            </Grid>
            <Grid item xs={10} sx={{ padding: "10px" }}>
                <List sx={{ listStyleType: 'disc', marginLeft: 5 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Progress bar and current step in the process is present</Typography>
                    </ListItem>            
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>CTA buttons are large and have good color contrast with background</Typography>
                    </ListItem>   
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Users expect to be asked for their destination, dates, and guest number early on in the flow</Typography>
                    </ListItem> 
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>When user backtracked one screen, all of her search criteria and filters got reset and she had to set it all over again</Typography>
                    </ListItem>     
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>On homepage, booking component is present above the fold</Typography>
                    </ListItem>         
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Destination search sticks at the top of the screen when scrolling homepage</Typography>
                    </ListItem>   
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>When user gets confused by search results, he backtracks, scrolls around the homepage, and examines options under the hamburger menu</Typography>
                    </ListItem>   
                    <Typography>
                        Member Rewards
                    </Typography>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Multiple survey respondants said they choose sites where they belong to a rewards program</Typography>
                    </ListItem> 
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>User felt that the member vs non-member rates weren't seperated from each other well-enough not to confuse them</Typography>
                    </ListItem> 
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography>Information on what the honors/members program is present on the page</Typography>
                    </ListItem> 
                </List>
            </Grid>
        </Grid>
      </Box>
  );
}
