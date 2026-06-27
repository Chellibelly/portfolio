import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Button, Divider, Collapse } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AffinityGroupList from "./AffinityGroupsList";
import AffinityGroupListMobile from "./AffinityGroupListMobile";
import OpportunitiesGraphic from "../../../public/Desktop_Opportunities_Graphic_V2.png";
import * as globalStyles from "../styles/globalStyleConsts";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          display: "flex",
          mx: "auto",
          fontFamily: "Montserrat",
          fontWeight: 600,
          textTransform: "none",
          fontSize: "16px",
          backgroundColor: grey[200],
          color: "black",
          width: '100%',
          p: 2,
          "&:hover": { backgroundColor: blue[100] },
        }}
      >
        {expanded ? "SHOW MORE" : "SHOW LESS"}
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
  const [affinityDetailsExpanded, setAffinityDetailsExpanded] = useState(false);

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
        <Typography component="h2" sx={globalStyles.heading1}>
          Seeing the Forest for the Trees
        </Typography>
        <Typography component="p" sx={globalStyles.heading2}>
          The Analysis
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          By this point, I had survey responses, competitive findings, and usability notes, but I still did not have an answer to the question driving the project. What problem was I actually solving?
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          To make sense of the research, I created an affinity diagram using sticky notes and a whiteboard. I grouped related observations without forcing them into predefined categories, allowing patterns to emerge naturally and helping the missing “why” finally come into focus.
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
          From the groupings, <b>nine core areas of importance</b> had surfaced: hotel information (location, amenities, and reviews), room selection, date selection, pricing, accounts/memberships, filtering, extras/add-ons, look/feel, and navigation.
        </Typography>
      </Grid>

      <Grid
  container
  spacing={2}
  sx={{
    px: { xs: 2, md: 0 },
    mb: 3,
  }}
>
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        height: "100%",
        p: 3,
        backgroundColor: blue[50],
        borderRadius: 2,
      }}
    >
      <Typography
        component="h4"
        sx={{
          ...globalStyles.heading4,
          mt: 0,
        }}
      >
        Hotel Quality & Amenities
      </Typography>

      <Typography sx={{ ...globalStyles.paragraph, mb: 0 }}>
        Users needed clearer information about hotel quality, reviews,
        descriptions, and amenities. Icons alone were often too ambiguous to
        support confident comparisons.
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} md={6}>
    <Box
      sx={{
        height: "100%",
        p: 3,
        backgroundColor: blue[50],
        borderRadius: 2,
      }}
    >
      <Typography
        component="h4"
        sx={{
          ...globalStyles.heading4,
          mt: 0,
        }}
      >
        Hotel Location
      </Typography>

      <Typography sx={{ ...globalStyles.paragraph, mb: 0 }}>
        Users wanted to understand how each hotel related to the surrounding
        area, airports, activities, and other points of interest rather than
        relying on an address alone.
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} md={6}>
    <Box
      sx={{
        height: "100%",
        p: 3,
        backgroundColor: blue[50],
        borderRadius: 2,
      }}
    >
      <Typography
        component="h4"
        sx={{
          ...globalStyles.heading4,
          mt: 0,
        }}
      >
        Pricing & Rate Comparisons
      </Typography>

      <Typography sx={{ ...globalStyles.paragraph, mb: 0 }}>
        Rate options needed to be easier to find, compare, and understand,
        including what each price covered and how the total cost was
        calculated.
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} md={6}>
    <Box
      sx={{
        height: "100%",
        p: 3,
        backgroundColor: blue[50],
        borderRadius: 2,
      }}
    >
      <Typography
        component="h4"
        sx={{
          ...globalStyles.heading4,
          mt: 0,
        }}
      >
        Accounts & Membership Programs
      </Typography>

      <Typography sx={{ ...globalStyles.paragraph, mb: 0 }}>
        Users needed clearer distinctions between member benefits, rewards
        pricing, and optional account creation.
      </Typography>
    </Box>
  </Grid>
</Grid>

      <Grid item xs={12}>
        <Button
          onClick={() =>
            setAffinityDetailsExpanded((expanded) => !expanded)
          }
          aria-expanded={affinityDetailsExpanded}
          aria-controls="affinity-category-details"
          endIcon={
            <ExpandMoreIcon
              sx={{
                transform: affinityDetailsExpanded
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          }
          sx={{
            display: "flex",
            mx: "auto",
            mb: affinityDetailsExpanded ? 3 : 5,
            fontFamily: "Montserrat",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            backgroundColor: grey[200],
            color: "black",
            width: '100%',
            p: 2,
            "&:hover": { backgroundColor: blue[100] },
          }}
        >
          {affinityDetailsExpanded
            ? "HIDE ALL NINE AFFINITY CATEGORIES"
            : "VIEW ALL NINE AFFINITY CATEGORIES"}
        </Button>

        <Collapse
          in={affinityDetailsExpanded}
          timeout="auto"
          unmountOnExit
        >
          <Box
            id="affinity-category-details"
            sx={{ mb: { xs: 6, md: 8 } }}
          >
            {isDesktopOrLaptop ? (
              <AffinityGroupList />
            ) : (
              <AffinityGroupListMobile />
            )}
          </Box>
        </Collapse>
      </Grid>

      <Grid item xs={10} sx={{ mb: 5, mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          User Journey
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          I then mapped the <b>eight key stages</b> of the booking journey, from destination search to checkout, and layered in user goals, behaviors, pain points, mental models, and sentiments to create a <b>customer journey map</b>. This clarified the site’s flow and helped define each screen’s purpose and opportunities.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <ExpandableImage src={CustomerJourneyMapGraphic2} alt="Customer Journey Map 2" isDesktop={isDesktopOrLaptop} />
        <ExpandableImage src={CustomerJourneyMapGraphic1} alt="Customer Journey Map 1" isDesktop={isDesktopOrLaptop} />
      </Grid>

      <Grid item xs={10} sx={{ mb: 5, mt: 5 }}>
        <Typography variant="h3" sx={globalStyles.heading3}>
          The <i>"Why"</i>: Key Insights and Opportunities
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          Synthesizing the affinity diagram and customer journey map finally revealed the “why” I had been searching for. Across the research, the same pattern kept surfacing. Users could often complete the booking process, but they lacked the clarity needed to feel confident in their decisions.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
          Important details about <b>hotel quality, amenities, location, pricing, and membership benefits</b> were frequently missing, buried, or difficult to compare. Sites often assumed users understood labels, icons, rates, and programs that had never been clearly explained.
        </Typography>
        <Typography variant="body1" sx={globalStyles.paragraph}>
           The opportunity was not to reinvent hotel booking. It was to make the familiar experience more transparent by providing the right information at the right time and helping users make informed decisions with less uncertainty.
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
