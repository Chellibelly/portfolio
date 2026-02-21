import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Button, Divider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AffinityGroupList from "./AffinityGroupsList";
import AffinityGroupListMobile from "./AffinityGroupListMobile";
import OpportunitiesGraphic from "../../../public/Desktop_Opportunities_Graphic.png";
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
          <Typography sx={{ ...categoryLabel }}>Current Experience</Typography>
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
          At this stage, I had piles of research notes. In an effort to make sense of all of the research, I started with sticky notes and a whiteboard. I wanted to allow <b>natural patterns</b> and insights to emerge and the most important <b>areas of focus</b> to materialize, so I developed an <b>affinity diagram</b>.
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
          Affinity Diagram Insights
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          When the sticky notes were all placed and grouped, <b>nine core areas of importance</b> had surfaced: hotel information (location, amenities, and reviews), room selection, date selection, pricing, accounts/memberships, filtering, extras/add-ons, look/feel, and navigation.
        </Typography>
      </Grid>

      <Box>{isDesktopOrLaptop ? <AffinityGroupList /> : <AffinityGroupListMobile />}</Box>

      <Grid item xs={10} sx={{ mb: 5, mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          User Journey
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          I then mapped the <b>eight key stages</b> of the booking journey, from destination search to checkout, and layered in user goals, behaviors, pain points, mental models, and sentiments to create a <b>customer journey map</b>. This clarified the site’s information architecture and helped define each screen’s purpose and opportunities.
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <ExpandableImage src={CustomerJourneyMapGraphic2} alt="Customer Journey Map 2" isDesktop={isDesktopOrLaptop} />
        <ExpandableImage src={CustomerJourneyMapGraphic1} alt="Customer Journey Map 1" isDesktop={isDesktopOrLaptop} />
      </Grid>

      <Grid item xs={10} sx={{ mb: 5, mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          The <i>"Why"</i>: Key Insights and Opportunities
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          Synthesizing the affinity diagram and journey map revealed the <i>"why"</i> that I had been looking for through a clear, consistent theme. Users were <b>missing critical information</b> throughout the booking flow. Many sites assumed prior knowledge, leaving people unsure about location, amenities, pricing, and what was actually included. What followed was <b>frustration and often loss of customer loyalty</b>.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          The goal wasn’t to reinvent hotel booking, but to capitalize on an <b>opportunity to remove ambiguity</b>. A desirable experience would follow conventions but do so with transparency at every step, helping users feel informed and confident in their decisions.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
            The key areas of transparency I needed to focus on fell into four main categories: hotel quality and amenities, hotel location and its relation to places of interest, pricing and rate comparisons, and account and membership programs.
        </Typography>
      </Grid>
      {isDesktopOrLaptop &&
      <Grid item xs={12}>
        <Box sx={globalStyles.graphic}>
          <Image
            src={OpportunitiesGraphic}
            width="100%"
            alt="An image of a list of design opportunites"
          />
        </Box>
      </Grid>}

      {!isDesktopOrLaptop && <OpportunitySection
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
      />}

      {!isDesktopOrLaptop && <OpportunitySection
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
      />}

      {!isDesktopOrLaptop && <OpportunitySection
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
      />}

      {!isDesktopOrLaptop && <OpportunitySection
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
      />}


    </Grid>
  );
}
