import React from "react";
import { Grid, Typography, List, ListItem, Divider, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { blue } from "@mui/material/colors";
import * as globalStyles from "../styles/globalStyleConsts";

// Reusable component for each Opportunity Category
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

        {/* The Other Guys */}
        <Grid item xs={isDesktop ? 4 : 6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src={graphicOther} alt={`${title} - The Other Guys`} width={isDesktop ? 200 : 160} />
          <Typography sx={{ ...categoryLabel }}>The Other Guys</Typography>
          <List>
            {otherList.map((item, idx) => (
              <ListItem key={idx} sx={{ display: "flex", alignItems: "center" }}>
                <CloseIcon sx={{ color: "red", mr: 1 }} />
                <Typography sx={globalStyles.paragraph}>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Opportunities */}
        <Grid item xs={isDesktop ? 4 : 6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src={graphicOpportunity} alt={`${title} - Opportunities`} width={isDesktop ? 200 : 160} />
          <Typography sx={{ ...categoryLabel }}>Opportunities</Typography>
          <List>
            {opportunityList.map((item, idx) => (
              <ListItem key={idx} sx={{ display: "flex", alignItems: "center" }}>
                <CheckIcon sx={{ color: "green", mr: 1 }} />
                <Typography sx={globalStyles.paragraph}>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%", mt: 2 }} />
    </>
  );
};

export default OpportunitySection;