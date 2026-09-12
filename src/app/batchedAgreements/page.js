import React from "react";
import Image from "next/image";
import { Box, Grid, Paper, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GavelIcon from "@mui/icons-material/Gavel";
import CodeIcon from "@mui/icons-material/CreditCard";
import GroupsIcon from "@mui/icons-material/Groups";
import * as globalStyles from "../styles/globalStyleConsts";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";

import BatchedPaymentsHero from "../../../public/BatchedAgreementPayments/Case_Study_Hero.png";
import DesignJamBoard from "../../../public/BatchedAgreementPayments/artifact_31.png";
import DesignGoal from "../../../public/BatchedAgreementPayments/artifact_33.png";
import HowMightWe from "../../../public/BatchedAgreementPayments/artifact_32.png";
import FlowMap from "../../../public/BatchedAgreementPayments/artifact_28.png";
import PartialFailureState from "../../../public/BatchedAgreementPayments/artifact_07.png";
import FlowLeftSide from "../../../public/BatchedAgreementPayments/flow_leftside.png";
import FlowRightSide from "../../../public/BatchedAgreementPayments/flow_rightside.png";
import AgreementDetailsPanel from "../../../public/BatchedAgreementPayments/artifact_22.png";
import NewCardPayment from "../../../public/BatchedAgreementPayments/artifact_14.png";
import ExistingCardPayment from "../../../public/BatchedAgreementPayments/artifact_16.png";

const sectionSx = { maxWidth: 1120, width: "100%", mx: "auto", mt: 10, px: { xs: 3, md: 6 } };
const heroSx = { width: "100%", mt: { xs: "56px", lg: "64px" } };
const bodySx = { ...globalStyles.paragraph, maxWidth: 850, mx: "auto" };
const sectionHeadingSx = { ...globalStyles.heading2, maxWidth: 850, mx: "auto" };

function Figure({ src, alt, caption, wide = false, width = "100%", framePadding = { xs: 1, md: 2 } }) {
  return (
    <Box
      component="figure"
      sx={{
        m: 0,
        my: { xs: 4, md: 7 },
        width: wide ? { xs: "100%", md: "90vw" } : width,
        maxWidth: wide ? "1400px" : undefined,
        mx: wide ? "auto" : 0,
        position: wide ? "relative" : undefined,
        left: wide ? "50%" : undefined,
        transform: wide ? "translateX(-50%)" : undefined,
      }}
    >
      <Box sx={{ backgroundColor: "#f5f7fa", p: framePadding }}>
        <Image src={src} alt={alt} sizes="(max-width: 900px) 100vw, 1000px" style={{ width: "100%", height: "auto", display: "block" }} />
      </Box>
      <Typography component="figcaption" sx={{ ...globalStyles.paragraph, fontSize: 14, mt: 1.5, color: "text.secondary" }}>
        {caption}
      </Typography>
    </Box>
  );
}

function StackedWorkshopFigures() {
  return (
    <Box component="figure" sx={{ m: 0, my: { xs: 4, md: 7 } }}>
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "1.42", overflow: "visible" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, backgroundColor: "#f5f7fa", p: { xs: 1, md: 2 }, boxShadow: 2, transform: "rotate(-1deg)" }}>
          <Image src={DesignGoal} alt="Design goal workshop board asking how to bundle agreements into one initial payment transaction" sizes="(max-width: 900px) 78vw, 850px" style={{ width: "100%", height: "auto", display: "block" }} />
        </Box>
        <Box sx={{ position: "absolute", top: "29%", left: "25%", width: "72%", backgroundColor: "#f5f7fa", p: { xs: 1, md: 2 }, boxShadow: 5, transform: "rotate(1.5deg)" }}>
          <Image src={HowMightWe} alt="How Might We workshop board with ideas for accomplishing the batched payment goal" sizes="(max-width: 900px) 72vw, 780px" style={{ width: "100%", height: "auto", display: "block" }} />
        </Box>
      </Box>
    </Box>
  );
}

function Insight({ title, icon: Icon, children }) {
  return (
    <Paper elevation={0} sx={{ height: "100%", p: { xs: 2.5, md: 3 }, border: "1px solid #d9e1e8", borderRadius: 1 }}>
      {Icon ? (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
          <Icon aria-hidden="true" sx={{ color: "#546e7a", fontSize: { xs: 26, md: 30 }, mt: "2px" }} />
          <Typography component="h3" sx={{ ...globalStyles.heading5, mt: 0, mb: 1 }}>{title}</Typography>
        </Box>
      ) : (
        <Typography component="h3" sx={{ ...globalStyles.heading5, mt: 0 }}>{title}</Typography>
      )}
      <Typography sx={{ ...globalStyles.paragraphMed, mb: 0, mt: 2 }}>{children}</Typography>
    </Paper>
  );
}

export default function BatchedAgreementsPage() {
  return (
    <Box sx={{ backgroundColor: "#fff", pb: 10 }}>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Header />
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <HeaderMobile />
      </Box>
      <Box sx={heroSx}>
        <Image
          src={BatchedPaymentsHero}
          alt="Batched Payments case study hero"
          priority
          sizes="(max-width: 900px) 100vw, 1000px"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>

      <Paper elevation={0} sx={{ ...sectionSx, width: '100%', mt: 5, py: { xs: 3, md: 4 }, backgroundColor: "#eef5fb" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}><Typography sx={globalStyles.heading4}>Role</Typography><Typography sx={bodySx}>Product Designer / UX Engineer</Typography></Grid>
          <Grid item xs={12} sm={6} md={4}><Typography sx={globalStyles.heading4}>Scope</Typography><Typography sx={bodySx}>Design-jam facilitation, research, interaction design, prototyping, and implementation</Typography></Grid>
          <Grid item xs={12} sm={6} md={4}><Typography sx={globalStyles.heading4}>Deliverable</Typography><Typography sx={bodySx}>Production shipped functional software in use by real users</Typography></Grid>
        </Grid>
      </Paper>

      <Box sx={{ ...sectionSx, mt: { xs: 7, md: 10 } }}>
        <Typography component="h2" sx={sectionHeadingSx}>Understanding the problem</Typography>
        <Typography sx={bodySx}>
          A friction surfaced through direct feedback from store associates. They reached out to describe how frustrating it was to collect initial payments for multiple customer agreements through a process designed to handle one agreement at a time.
        </Typography>
        <Typography sx={bodySx}>
          Associates often needed to process two to five agreements in a single customer interaction. Each agreement could take roughly two to five minutes, requiring repeated card entry and other repetitive steps. The friction was visible to the people doing the work and their customers alike, and their feedback established the opportunity: reduce repetition without making payment scope, amounts, authorization, or outcomes harder to understand.
        </Typography>
      </Box>

      <Box sx={{ ...sectionSx }}>
        <Typography component="h2" sx={sectionHeadingSx}>Finding a direction together</Typography>
        <Typography sx={bodySx}>
          To gather different ideas through various perspectives and get alignment on how to solve the problem and where the solution should live, I personally facilitated a cross-functional design jam. I owned the session structure, aligned the team - three developers, three designers, two product managers, and a delivery manager - on the design goal, and guided them through a "How Might We..." exercise, Crazy 8s, and dot voting.
        </Typography>
        <Typography sx={bodySx}>
          Interestingly enough, the direction that everyone agreed with the most - to build this from an existing app that the stores use to manage orders - came not from any of the three designers in the jam, but actually from a software developer who formally worked as a store manager. This real-world perspective helped lead to a solution that was both technically feasible and user-friendly. 
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <StackedWorkshopFigures />
          </Grid>
          <Grid item xs={12} md={6}>
            <Figure src={DesignJamBoard} alt="Design jam board showing Crazy 8s sketches, participant concepts, and dot voting" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ ...sectionSx, mt: { xs: 7, md: 10 } }}>
        <Typography component="h2" sx={sectionHeadingSx}>Initial Design Concept</Typography>
        <Typography sx={bodySx}>
          Drawing from the design-jam ideas and my own knowledge of interaction design principles, I developed an initial concept for a batched-payment modal. The modal brought the full task into one place: associates could choose a payment type to apply across all selected agreement payments, review a list of agreements and their relevant details, and enter the amount to collect for each agreement.
        </Typography>
        <Typography sx={{ ...bodySx, mb: 10 }}>
          A summary at the bottom kept the selected agreements, entered amounts, and total payment visible before submission. The modal ended with two clear actions: cancel the workflow or take payment. This structure created a single, understandable entry point while keeping the scope and amount of each individual agreement explicit.
        </Typography>
        <Figure
          src={FlowMap}
          alt="initial design concept"
        />
      </Box>

      <Box sx={{ ...sectionSx }}>
        <Typography component="h2" sx={sectionHeadingSx}>Getting Feedback from Users and Stakeholders</Typography>
        <Typography sx={{ ...bodySx, mb: 10 }}>
          I presented the initial concept to the UX director, product manager, payment-processing backend team, and two general managers who represented the store-user perspective. The direction was consistently well received, supported, and approved, but each group surfaced a different risk or opportunity that shaped the next iteration.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Insight icon={DesignServicesIcon} title="UX direction and system parity">
              The UX director wanted stronger alignment with the company design system and parity with related payment tools. {<><br/><br/></>} He shared internal examples that informed the next visual layout and interaction pass.
            </Insight>
          </Grid>
          <Grid item xs={12} md={6}>
            <Insight icon={GavelIcon} title="Product and legal requirements">
              The product manager flagged a card-on-file authorization concern.{<><br/><br/></>} He proposed requiring managers to confirm permission with the customer and enter the card’s expiration date, obtained from the customer.
            </Insight>
          </Grid>
          <Grid item xs={12} md={6}>
            <Insight icon={CodeIcon} title="Payment-processing constraint">
              The backend team clarified that payments could be batched in the UI but would still process individually. {<><br/><br/></>} Because any payment could succeed or fail, results needed to show each outcome and make failed payments easy to retry with existing inputs preserved.
            </Insight>
          </Grid>
          <Grid item xs={12} md={6}>
            <Insight icon={GroupsIcon} title="Store-user clarity">
              The general managers were enthralled with the concept as whole but found the agreement details overwhelming and wanted them hidden until needed. {<><br/><br/></>} Additionally, I had assumed users would understand that leaving an amount at $0.00 would exclude that agreement from payment, but their feedback showed that interaction was not clear.
            </Insight>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ ...sectionSx, mt: { xs: 7, md: 10 }, mb: -5 }}>
        <Typography component="h2" sx={sectionHeadingSx}>How Feedback Shaped the Design</Typography>
        <Typography sx={bodySx}>
          The stakeholder feedback led to a more structured, system-aligned payment experience. I moved the concept from a modal to a full-page layout, using patterns from related internal tools: agreement selections on the left, payment summaries on the right, and card-based amount and payment-option inputs.
        </Typography>
        <Typography sx={bodySx}>
          I also incorporated requirements and usability findings directly into the interaction design. Use of credit cards on file now require the manager to enter the card's expirations date before payment, failed transactions are clearly separated from successful ones in a partial-failure state, and entered values are preserved for retry. To reduce clutter, agreement details were moved behind contextual info controls, while checkboxes give users an explicit way to include or remove agreements from the payment batch.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}><Figure src={ExistingCardPayment} alt="Design showing an existing card selected" /></Grid>
          <Grid item xs={12} md={6}><Figure src={AgreementDetailsPanel} alt="Design showing agreement details modal" /></Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: { xs: 3, md: -15 } }}>
           <Grid item xs={12} md={6}><Figure src={NewCardPayment} alt="Design showing a new card entry" /></Grid>
          <Grid item xs={12} md={6}><Figure src={PartialFailureState} alt="Design showing a partial success partial failure payment result" /></Grid>
        </Grid>
      </Box>

      <Box sx={{ ...sectionSx, mt: { xs: 7, md: 10 } }}>
        <Typography component="h2" sx={sectionHeadingSx}>Gaining Alignment with the Development Team</Typography>
        <Typography sx={bodySx}>
          Before development, I presented the team with an annotated workflow covering the happy path, edge cases, interactions, error states, and possible payment outcomes. This helped validate the interaction logic and gave developers a clear view of how the experience should behave across different scenarios.
        </Typography>
        <Typography sx={{ ...bodySx, mb: 10 }}>
          The team aligned with the direction and identified no major technical concerns. I worked with them to answer implementation questions and refine details as needed. Because I also work in development as a UX engineer and had the bandwidth, I implemented the solution myself with the team’s support.
        </Typography>
        <Box
          sx={{
            width: { xs: "100%", md: "90vw" },
            maxWidth: "1400px",
            mx: "auto",
            position: { xs: "static", md: "relative" },
            left: { xs: "auto", md: "50%" },
            transform: { xs: "none", md: "translateX(-50%)" },
          }}
        >
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Figure src={FlowLeftSide} alt="Left side of the full batched payment workflow" framePadding={{ xs: 0.5, md: 1 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Figure src={FlowRightSide} alt="Right side of the full batched payment workflow" framePadding={{ xs: 0.5, md: 1 }} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ ...sectionSx, mt: { xs: 7, md: 10 } }}>
        <Typography component="h2" sx={sectionHeadingSx}>Rollout and Impact</Typography>
        <Typography sx={bodySx}>
          The feature was built, tested, and deployed in about a week and a half, then piloted in seven stores. After monitoring usage for a week without significant issues, we gradually rolled it out to more than 1,000 stores over the following weeks.
        </Typography>
        <Typography sx={bodySx}>
          Users found the flow intuitive and said it reduced both the time and the risk of mistakes when processing multiple agreement payments. It proved especially useful for refinanced agreements, where customers often needed payments processed across several agreements at once, a use case I had not realized was so common during the initial design work.
        </Typography>
        <Typography sx={bodySx}>
          By staying involved from concept through rollout, I was able to turn stakeholder feedback into a solution that was practical to build, intuitive to use, and valuable at scale.
        </Typography>
      </Box>
    </Box>
  );
}
