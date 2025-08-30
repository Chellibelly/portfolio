import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Button, Divider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AffinityGroupList from "./AffinityGroupsList";
import AffinityGroupListMobile from "./AffinityGroupListMobile";
import QuoteContainer from "./QuoteContainer";
import * as globalStyles from "../styles/globalStyleConsts";

// Graphics
import AffinityDiagramGraphic from "../../../public/Affinity_Diagram.jpg";
import CustomerJourneyMapGraphic1 from "../../../public/Customer_Journey_Map_1.png";
import CustomerJourneyMapGraphic2 from "../../../public/Customer_Journey_Map_2.png";

import CategoryHotelGraphic from "../../../public/Category_Hotel.png";
import CategoryAccountGraphic from "../../../public/Category_Account.png";
import CategoryPricingGraphic from "../../../public/Category_Pricing.png";
import CategoryLocationGraphic from "../../../public/Category_Location.png";

import CategoryHotelOpportunityGraphic from "../../../public/Category_Hotel_Opportunity.png";
import CategoryAccountOpportunityGraphic from "../../../public/Category_Account_Opportunity.png";
import CategoryPricingOpportunityGraphic from "../../../public/Category_Pricing_Opportunity.png";
import CategoryLocationOpportunityGraphic from "../../../public/Category_Location_Opportunity.png";

// ------------------- Reusable Components -------------------

// Expandable image component for journey maps
const ExpandableImage = ({ src, alt, isDesktop }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(!expanded);

  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          height: expanded ? "auto" : isDesktop ? "700px" : "400px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          style={{ objectFit: "cover", transition: "height 0.3s ease" }}
        />
      </Box>
      <Button
        onClick={toggle}
        variant="contained"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: grey[200],
          color: "black",
          borderRadius: 0,
          "&:hover": { backgroundColor: blue[100] },
        }}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
};

// Reusable component for Opportunity sections
const OpportunitySection = ({
  title,
  graphicOther,
  graphicOpportunity,
  otherList,
  opportunityList,
  isDesktop,
  titleFontSize = 26,
}) => {
  const categoryLabel = {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    marginTop: "12px",
  };

  return (
    <>
      <Grid container direction="row" justifyContent="flex-start" sx={{ mt: 5 }}>
        {isDesktop && (
          <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mr: 1 }}>
            <Typography sx={{ ...categoryLabel, color: blue[700], fontSize: titleFontSize }}>{title}</Typography>
          </Grid>
        )}

        <Grid item xs={isDesktop ? 4 : 6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src={graphicOther} alt={`${title} - The Other Guys`} width={isDesktop ? 200 : 160} />
          <Typography sx={{ ...categoryLabel }}>The Other Guys</Typography>
          {otherList.map((item, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CloseIcon sx={{ color: "red", mr: 1 }} />
              <Typography sx={globalStyles.paragraph}>{item}</Typography>
            </Box>
          ))}
        </Grid>

        <Grid item xs={isDesktop ? 4 : 6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src={graphicOpportunity} alt={`${title} - Opportunities`} width={isDesktop ? 200 : 160} />
          <Typography sx={{ ...categoryLabel }}>Opportunities</Typography>
          {opportunityList.map((item, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green", mr: 1 }} />
              <Typography sx={globalStyles.paragraph}>{item}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%", mt: 2 }} />
    </>
  );
};

// ------------------- Main Analysis Component -------------------

export default function Analysis() {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1224px)");
    const updateMatch = () => setIsDesktopOrLaptop(mediaQuery.matches);
    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Typography variant="h1" sx={globalStyles.heading1}>
          The Forest Through the Trees
        </Typography>
        <Typography variant="h2" sx={globalStyles.heading2}>
          The Analysis
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          One of my favorite methaphors has to do with “seeing the forest through the trees.” More or less, this means being able to draw the larger meaning, or bigger picture, out of the parts. I definitely had a bunch of trees - piles of research notes. Through analysis, I was hoping to make sense out of it all.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          For some direction, I revisited my goal: creating a desirable product. When I first set that goal, I wasn’t sure what a desirable hotel booking site looked like. But now, with my research in hand, I hoped I could finally figure it out.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          I was excited to dig into the data, but I couldn’t help wondering: was there a real need for this? What problem were we solving, and how would this website stand up to competitors?
        </Typography>
      </Grid>

      <QuoteContainer quote="People don't want to buy a quarter-inch drill. They want a quarter-inch hole!" author="Theodore Levitt" />

      <Grid item xs={10} sx={{ mb: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          Building an Affinity Diagram
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          To make sense of all my research, I created an affinity diagram. I wrote key points from surveys, benchmarks, interviews, and usability tests on sticky notes and began grouping related ideas.categories based on commonalities. This way, natural groupings emerged, helping me focus on what's important without letting my own opinions influence the process. Essentially, it allowed the data to speak for itself.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          The whiteboard quickly became a colorful mess, but moving notes around revealed natural patterns. I named each group and added subgroups where needed. By the end, I had a clear picture of the main themes and priorities, letting the data speak for itself.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Box sx={globalStyles.graphic}>
          <Image
            src={AffinityDiagramGraphic}
            width="100%"
            alt="An image of a whiteboard with a collection of categorized sticky notes"
          />
        </Box>
      </Grid>

      <Grid item xs={10} sx={{ mb: 5, mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          Areas of Importance Exposed
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          I ended up with nine categories: filtering, account, look & feel, hotel info, extras, room selection, navigation, date selection, and pricing.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          The groupings seemed to line up with what users had emphasized as most important. The Hotel Information category had the most sticky notes. Users often felt the info about hotels wasn’t clear enough. Within that group, three key themes kept coming up: location, amenities, and reviews.
        </Typography>
      </Grid>

      <Box>{isDesktopOrLaptop ? <AffinityGroupList /> : <AffinityGroupListMobile />}</Box>

      <Grid item xs={10} sx={{ mb: 5, mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          A User Journey Taking Shape
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          At this point, it felt crucial to define the key stages of the booking journey, which I had started to visualize through the research and affinity diagram. There were about eight major steps: home page (destination selection), date selection, hotel search, hotel selection, room selection, rate selection, add-ons, and booking completion (payment & contact details).
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          With my focus areas from the affinity diagram and the journey steps defined, it was time to organize everything. I added user goals, behaviors, and sentiments to create a customer journey map. This helped me get a clearer picture of the website’s information architecture and guided the design by identifying key screen purposes, opportunities, and guidelines.
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <ExpandableImage src={CustomerJourneyMapGraphic2} alt="Customer Journey Map 2" isDesktop={isDesktopOrLaptop} />
        <ExpandableImage src={CustomerJourneyMapGraphic1} alt="Customer Journey Map 1" isDesktop={isDesktopOrLaptop} />
      </Grid>

      <Grid item xs={10} sx={{ mb: 5, mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          The Eureka Moment
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          The glaring bottom line made evident from the affinity diagram and customer journey map was clear: the main issue was a lack of (or at least confusing) information, often assuming users knew things they didn’t. This was a consistent problem across every site I researched and was highlighted by every user interviewed and surveyed.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          At this point, my goal became much clearer. While there might not have been a glaring problem to fix, there was an opportunity to improve. A desirable hotel booking site would follow industry standards but do so with complete transparency, providing users with all the information they need at every step.
        </Typography>
      </Grid>

      <QuoteContainer quote="Good research is not about finding what you expect to find; it’s about finding what’s actually there." author="Albert Szent-Györgyi" />

      <Grid item xs={10} sx={{ mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          Opportunities
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          My analysis thus far revealed that the key areas of transparency I needed to focus on fell into four main categories: hotel quality and amenities, hotel location and its relation to places of interest, pricing and rate comparisons, and account and membership programs.
        </Typography>
      </Grid>

      <OpportunitySection
        title="Hotel Quality & Amenities"
        graphicOther={CategoryHotelOpportunityGraphic}
        graphicOpportunity={CategoryHotelGraphic}
        otherList={[
          "Unknown hotel quality",
          "Limited hotel descriptions",
          "Ambiguous amenity icons, labels, and descriptions",
        ]}
        opportunityList={[
          "Hotel quality rating prominently displayed",
          "Detailed hotel description",
          "Clear amenity icons, labels, and descriptions",
        ]}
        isDesktop={isDesktopOrLaptop}
      />

      <OpportunitySection
        title="Hotel Location & Relation to Places of Interest"
        graphicOther={CategoryLocationOpportunityGraphic}
        graphicOpportunity={CategoryLocationGraphic}
        otherList={[
          "Unexpected search results",
          "Unclear relation to the area, airports, or places of interest",
        ]}
        opportunityList={[
          "Search results based on location-only for simplicity",
          "Intuitive map view options for search results, providing clear relationships to the area",
          "Emphasizes when close to airports or points of interest",
        ]}
        isDesktop={isDesktopOrLaptop}
      />

      <OpportunitySection
        title="Pricing & Rate Comparisons"
        graphicOther={CategoryPricingOpportunityGraphic}
        graphicOpportunity={CategoryPricingGraphic}
        otherList={[
          "Unclear inclusions and limited descriptions of special rates",
          "Ambiguity between member and non-member rates",
          "Lack of pricing breakdowns and hidden fees",
        ]}
        opportunityList={[
          "Clearly describes what is included in special rates",
          "Member and non-member rates clearly labeled and separated",
          "Pricing breakdowns prominently displayed",
        ]}
        isDesktop={isDesktopOrLaptop}
      />

      <OpportunitySection
        title="Account & Membership Programs"
        graphicOther={CategoryAccountOpportunityGraphic}
        graphicOpportunity={CategoryAccountGraphic}
        otherList={[
          "Unintuitive membership opt-outs",
          "Unexplained perks or membership inclusions",
          "Insufficient distinction between member and non-member options",
        ]}
        opportunityList={[
          "Clear opt-out of membership programs",
          "Fully explained perks and membership inclusions",
          "Plenty of delineation between member and non-member options",
        ]}
        isDesktop={isDesktopOrLaptop}
      />
    </Grid>
  );
}
