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
        sx={{ p: 10 }}
      >
        <Image
           src={DesignTidbitsCollage}
           alt="Design Highlights Hero"
           style={{ display: 'block', margin: '0 auto 20px auto' }}
         />
        {/* Hero Image & Intro */}
        <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', mb: 6 }}>

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
          title="1) Accelerating Lead Conversion through Rapid Digital Customer Onboarding"
          problem="Leads from online channels were fragmented across systems, leaving store managers without a single view of follow-ups, spending potential, or order history. Managers spent extra time piecing together customer information, slowing conversions and frustrating customers unsure of next steps."
          solution="We designed and implemented a centralized tool listing each lead with channel, date, spending power, sales history, and notes. Clicking a lead surfaces contact info, interaction history, and order data, allowing managers to generate orders directly from the app. The design was informed by observing store workflows and interviewing managers to understand pain points."
          impact="By centralizing and bringing more visibility to lead data, managers acted faster with less fragmentation, the business achieved quicker conversions and higher conversion rates, and customers progressed smoothly through orders. This project reinforced the value of centralizing critical data and aligning interfaces to real user workflows."
        />
        <ProjectCard
          thumbnail={DigitalCheckoutOptionsAfter}
          expandedImages={[DigitalCheckoutOptionsBefore, DigitalCheckoutOptionsAfter]}
          title="2) Boosting Checkout Completion by Clarifying Access Options"
          problem=
          {<Typography sx={globalStyles.paragraph}>
            Store associates helped customers complete digital checkout by directing them to a website where the customer would enter a unique access code. However, the associate interface implied that the primary way to start the process was by texting a link to the customer. When texting failed due to system outages, customers having difficulty with SMS, or customers not owning smartphones, associates often believed they were unable to complete checkout. 
            <br/><br/>This misunderstanding stopped them in their tracks and led to regular support tickets from stores reporting they were unable to check out customers.
          </Typography>}
          solution="I reframed the task from “send a text” to “help the customer access the site” and introduced three clearly labeled, illustrated options: launch the checkout app, visit the website directly, or text a link. Observations and feedback informed which alternatives were most practical for associates."
          impact="Support tickets dropped from 1–2 per week to zero. Associates could complete checkouts even without SMS, and customers moved through the process confidently. This reinforced that clarifying choices and surfacing alternative paths reduces operational friction without backend changes."
        />
        <ProjectCard
          thumbnail={VerificationAfter}
          expandedImages={[VerificationBefore, VerificationAfter]}
          imageHeight={350}
          title="3) Reducing Errors in Customer Identity Verification"
          problem="Managers were required to complete a two-step process of customer identity verification. They often missed one step or approved requests incorrectly because instructions and confirmation controls were grouped together as one action."
          solution="I created a step-by-step flow that visually separated each verification task, included inline validation guidance, and split the action into multiple controls, with one concern per control. This approach was based on observing errors and identifying where users misunderstood or skipped steps."
          impact="The new flow improved compliance, reduced verification errors and fraud risk, and improved manager confidence during verification tasks, helping to protect both the business and our customers. This highlighted the value of breaking complex processes into clear, sequential steps and guiding user attention."
        />
        <ProjectCard
          thumbnail={SimplePayAfter}
          expandedImages={[SimplePayBefore, SimplePayAfter]}
          title="4) Improving Payment Plan Understanding Through Visual Autopay Design"
          problem="Dense paragraphs describing autopay schedules overwhelmed users, making it hard to anticipate draft dates or payment amounts. When unexpected amounts were drafted from customers’ accounts on dates they didn't expect, they were left confused, and subsequent steps had to be taken to update the schedule in another system."
          solution="I redesigned the interface into visually segmented sections supported by icons and simple graphics, clarifying each detail of the autopay schedule, including recurrence frequency, date of the first draft, total amount of payments, and amount of each payment."
          impact="Users could quickly scan and understand their plans, improving confidence and reducing scheduling corrections. The project reinforced that visual hierarchy and segmentation improve comprehension of complex information."
        />
        <ProjectCard
          thumbnail={ProtectionProgramsDetailsAfter}
          expandedImages={[ProtectionProgramsDetailsBefore, ProtectionProgramsDetailsAfter]}
          title="5) Increasing Protection Plan Adoption with Simple Feature Comparisons"
          problem="Two optional merchandise protection programs were offered with dense text and bulleted lists on the same screen. Some users struggled to compare benefits, leading to cognitive overload and opt-outs."
          solution="I designed a side-by-side comparison chart showing program benefits, including a “combo” column for enrolling in both. "
          impact="The visual layout enabled faster comprehension, helping users make informed decisions quickly, opting into the programs that fit their needs."
        />
        <ProjectCard
          thumbnail={SettingsManager}
          expandedImages={[SettingsManager]}
          imageHeight={500}
          title="6) Enabling Faster Feature Releases with Flexible Internal Flag Management"
          problem="Third-party feature flag tools were expensive and inflexible to our delivery goals. Grouping users and deploying features relied on manual, error-prone workflows and limited experimentation."
          solution="I designed a flexible web tool supporting dynamic segmentation, hierarchical feature organization, and streamlined bulk actions. Design decisions were informed by developer feedback and observing common workflow bottlenecks."
          impact="Teams gained full control over rollouts, could run experiments faster, and deployed features more efficiently. The project reinforced the importance of designing internal tools that align with actual workflows and reduce friction."
        />
        <ProjectCard
          thumbnail={CopyHero}
          expandedImages={[LocalizationManager]}
          title="7) Empowering Teams to Manage Content Without Developer Dependencies"
          problem="Updating multilingual content required developer effort, manual processes, and carried risks of inconsistency or errors."
          solution="I designed a system that manages content “keys” with translations in English, Spanish, and additional languages. Keys integrate directly into the website code for dynamic updates and support formatting and personalized messaging. Design choices were informed by interviews with content editors and developers to understand bottlenecks."
          impact="The tool streamlined localization workflows, reduced developer dependency, and improved accuracy and speed for content updates. This project highlighted the importance of designing systems that empower users while reducing operational dependencies."
        />
      </Grid>
    </Box>
  );
};

export default DesignTidbitsContainer;