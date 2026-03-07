"use client"; 
import React, {  } from 'react';
import * as globalStyles from '../styles/globalStyleConsts';
import { Box, Grid, Paper, Typography, Link } from '@mui/material';
import Image from 'next/image';
import SimplePayBefore from '../../../public/Simple_Pay_Before.png';
import SimplePayAfter from '../../../public/Simple_Pay_After.png';
import VerificationBefore from '../../../public/Verification_Before.png';
import VerificationAfter from '../../../public/Verification_After.png';
import ProtectionProgramsDetailsBefore from '../../../public/Protection_Programs_Details_Before.png';
import ProtectionProgramsDetailsAfter from '../../../public/Protection_Programs_Details_After.png';
import ProtectionProgramsOptOutBefore from '../../../public/Protection_Opt_Out_Before.png';
import ProtectionProgramsOptOutAfter from '../../../public/Protection_Opt_Out_After.png';
import SettingsManager from '../../../public/Settings_Manager.png';
import LocalizationManager from '../../../public/Localization_Manager.png';
import CopyHero from '../../../public/Copy_Hero_Thumbnail.png';
import DesignTidbitsCollage from '../../../public/Design_Tidbits_Collage.png';
import DigitalCheckoutOptionsBefore from '../../../public/Digital_Checkout_Options_Before.png';
import DigitalCheckoutOptionsAfter from '../../../public/Digital_Checkout_Options_After.png';
import DigitalCheckoutOptions from '../../../public/Digital_Checkout_Options.png';
import SalesOrders from '../../../public/Sales_Orders.png';
import SalesOrdersThumbnail from '../../../public/Sales_Orders_Small.png';
import CustomerDetails from '../../../public/Customer_Details.png';

import Header from '../Header';
import ProjectCard from './ProjectCard';

const padText = {
  pl: 20, 
  pr: 20
}

const DesignTidbitsContainer = () => {
  return (
    <Box>
      <Header/>
      <Grid
        container
        direction="column"
        alignItems="center"  // centers horizontally
        sx={{ minHeight: "90vh", p: 10 }}
      >
        <Image
           src={DesignTidbitsCollage}
           alt="Design Highlights Hero"
           style={{ display: 'block', margin: '0 auto 20px auto' }}
         />
        {/* Hero Image & Intro */}
        <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mb: 6 }}>

          <Typography sx={{ ...globalStyles.heading1}}>
            Career Highlights:
          </Typography>
          <Typography sx={{ ...globalStyles.heading2, mb: 5 }}>
            <b>Real</b> UX Projects with <b>Real</b> Impact
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Welcome to a selection of professional projects highlighting how I solve real-world product challenges through user-centered design. These short case studies demonstrate my approach to simplifying complex experiences, improving internal tools, and reducing operational friction. Each example highlights the problem, the design approach I took, and the impact the solution had for users and the business.
          </Typography>
        </Box>
        <ProjectCard
          thumbnail={SalesOrdersThumbnail}
          expandedImages={[SalesOrders, CustomerDetails]}
          imageHeight={225}
          title="1) Converting Leads to Sales through Rapid Digital Customer Onboarding"
          problem="Banding together with a team of developers and UXers, I helped design a digital tool, giving store managers a single view of all customer inquiries and leads generated from various application channels. Previously, leads were fragmented across systems with no unified visibility or filtering, making it difficult to track follow-ups, spending potential, and sales activity."
          solution="The tool’s homepage lists each lead along with generation channel, creation date, spending power, sales history, and notes. Clicking a lead reveals contact details, interaction history, and order data. Managers can generate orders directly from the app."
          impact="By centralizing and bringing more visibility to lead data, managers could work faster with less fragmentation, the business saw quicker conversions and higher conversion rates, and customers were guided seamlessly through the ordering process."
        />
        <ProjectCard
          thumbnail={DigitalCheckoutOptionsAfter}
          expandedImages={[DigitalCheckoutOptionsBefore, DigitalCheckoutOptionsAfter]}
          title="2) Boosting Digital Checkouts by Clarifying Access Options"
          problem=
          {<Typography sx={globalStyles.paragraph}>
            Store associates helped customers complete digital checkout by directing them to a website where the customer would enter a unique access code. However, the associate interface implied that the primary way to start the process was by texting a link to the customer. When texting failed due to system outages, customers having difficulty with SMS, or customers not owning smartphones, associates often believed they were unable to complete checkout. 
            <br/><br/>This misunderstanding stopped them in their tracks and led to regular support tickets from stores reporting they were unable to check out customers.
          </Typography>}
          solution="I reframed the task from “send a text” to “help the customer access the site” and introduced three clearly labeled, illustrated options: launch the checkout app, visit the website directly, or text a link."
          impact="Support tickets dropped from 1–2 per week to zero, as associates understood they could complete checkouts even when SMS was unavailable, eliminating a recurring operational issue without backend changes."
        />
        <ProjectCard
          thumbnail={VerificationAfter}
          expandedImages={[VerificationBefore, VerificationAfter]}
          imageHeight={350}
          title="3) Improving Accuracy in Customer Identity Verification"
          problem="Managers were required to complete a two-step process of customer identity verification. They often missed one step or approved requests incorrectly because instructions and confirmation controls were grouped together as one action."
          solution="I created a step-by-step flow that visually separated each verification task, included inline validation guidance, and split the action into multiple controls, with one concern per control."
          impact="The new flow improved compliance and significantly reduced verification errors and fraud risk, protecting both the business and our customers."
        />
        <ProjectCard
          thumbnail={SimplePayAfter}
          expandedImages={[SimplePayBefore, SimplePayAfter]}
          title="4) Reducing Extra Steps by Demystifying Autopay Plans"
          problem="Autopay plans explained through dense paragraphs with various dates, frequencies, and dollar amounts, made it difficult for users to understand the details of how much money would be taken and when. When unexpected amounts were drafted from their accounts on dates they didn't expect, they were left confused, and subsequent steps had to be taken to update the schedule in another system."
          solution="I redesigned the interface into visually segmented sections supported by icons and simple graphics, clarifying each detail of the autopay schedule, including recurrence frequency, date of the first draft, total amount of payments, and amount of each payment."
          impact="Users could quickly scan and evaluate their plan, improving confidence and reducing the need for autopay scheduling corrections in other systems."
        />
        <ProjectCard
          thumbnail={ProtectionProgramsDetailsAfter}
          expandedImages={[ProtectionProgramsDetailsBefore, ProtectionProgramsDetailsAfter]}
          title="5) Increasing Program Adoption through Feature Clarity and Simple Comparisons"
          problem="The business offered two distinct, optional merchandise protection programs. The programs were offered at the same time on the same web screen and described in bulleted lists. Some customers struggled to compare and contrast the two and understand the differences between them, often leading to cognitive overload and program opt-outs"
          solution="I designed a side-by-side comparison chart showing benefits across programs with checkmarks/X’s and a “combo” column for enrolling in both."
          impact="The visual layout enabled faster comprehension, helping users make informed decisions quickly, opting into the programs that fit their needs."
        />
        <ProjectCard
          thumbnail={SettingsManager}
          expandedImages={[SettingsManager]}
          imageHeight={500}
          title="6) Fast, Flexible, and Customizable In-house Feature-Flagging"
          problem="Existing third-party feature flag tools were expensive and inflexible to the goals of the development teams. Grouping users and managing rollouts relied on manual, error-prone workflows."
          solution="I designed a flexible web tool that supports feature flagging through dynamic segmentation, hierarchical feature organization, and streamlined bulk actions for feature deployment."
          impact="Teams had total control over their feature rollouts, and could run experiments and deploy features faster with much more flexibility."
        />
        <ProjectCard
          thumbnail={CopyHero}
          expandedImages={[LocalizationManager]}
          title="7) Reducing Developer Dependence via Content Accessibility"
          problem="Updating multilingual content required developer effort, manual processes, and carried risks of inconsistency or inaccurate translations."
          solution="I designed a system that manages content “keys” with translations in English, Spanish, and other languages. These integrate directly into the website code for dynamic updates and support formatting and personalized messaging."
          impact="The tool streamlined localization workflows, reduced developer dependency, and improved accuracy and speed for content updates across languages."
        />
      </Grid>
    </Box>
  );
};

export default DesignTidbitsContainer;