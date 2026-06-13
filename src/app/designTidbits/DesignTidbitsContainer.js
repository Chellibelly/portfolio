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
            Selected Product Design Work
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            This collection highlights professional product experiences I helped design across customer checkout, store operations, compliance, and internal tools. I partnered with stakeholders, designers, and developers to understand workflows, define problems, and shape solutions, oftentimes creating designs and implementing interfaces directly when no formal design handoff was available.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            These concise case studies show how I take ownership of usability problems, turn user and stakeholder feedback into practical design decisions, and simplify complex workflows within real business and technical constraints.
          </Typography>
        </Box>
        <ProjectCard
          thumbnail={DigitalCheckoutOptionsAfter}
          expandedImages={[DigitalCheckoutOptionsBefore, DigitalCheckoutOptionsAfter]}
          title="Keeping Checkout Moving When SMS Fails"
          blurbTitle="Impact"
          blurb="Support tickets related to starting digital checkout dropped from one or two per week to zero after associates were given clear alternatives to SMS."
          problem=
          {<Typography sx={globalStyles.paragraph}>
            Store associates helped customers begin digital checkout by directing them to a website where they entered a unique access code. However, the associate interface emphasized texting the customer a link, leading many associates to believe SMS was required.
            <br/><br/>When texts failed because of system outages, customer difficulty with SMS, or lack of a smartphone, associates often stopped the checkout process and contacted support.
          </Typography>}
          solution="I reframed the task from “send a text” to “help the customer access checkout” and introduced three clearly labeled, illustrated options: launch the checkout app, visit the website directly, or send a link by text. Store observations and associate feedback helped identify the access methods that would be most practical in real checkout situations."
          impact="After launch, support tickets related to sending the access code and starting digital checkout dropped from one or two per week to zero. Associates could continue helping customers when SMS was unavailable, removing a recurring barrier without requiring backend changes."
        />
        <ProjectCard
          thumbnail={SalesOrdersThumbnail}
          expandedImages={[SalesOrders, CustomerDetails]}
          imageHeight={225}
          title="Centralizing Lead Data to Speed Up Customer Follow-Up"
          blurbTitle="Impact"
          blurb="Centralized lead data helped managers act sooner and contributed to faster lead progression and higher conversion rates."
          problem="Leads from online channels were distributed across multiple systems, leaving store managers without a single view of follow-up history, purchasing capacity, or previous orders. To understand what had already happened and determine the next step, managers had to piece together information manually. This slowed follow-up and left customers uncertain about how to continue their orders."
          solution="I worked with product, design, and engineering to create a centralized lead-management tool shaped by store workflow observations and manager interviews. The interface helped managers evaluate, prioritize, and act on leads in one place by surfacing lead source, date, purchasing capacity, sales history, notes, contact details, prior interactions, and order information. Managers could then review the customer’s context and begin an order without switching systems."
          impact="Manager feedback indicated that the centralized workflow made leads easier to prioritize and reduced the effort required to move customers toward an order. Internal reporting also showed improved conversion rates after launch."
        />
        <ProjectCard
          thumbnail={SettingsManager}
          expandedImages={[SettingsManager]}
          imageHeight={500}
          title="Replacing Manual Feature Rollouts with a Flexible Internal Tool"
          blurbTitle="Impact"
          blurb="A purpose-built internal tool gave teams feature-management capabilities tailored to the company’s rollout and experimentation needs."
          problem="The company relied on a generic third-party feature-flagging tool that was costly and did not support the way our business organized stores. Teams needed to create their own overlapping groups (such as franchises, pilot stores, or stores using automatic decisioning) and assign features to those groups without being limited to a fixed segmentation model."
          solution="I designed an internal web tool informed by developer feedback and existing rollout workflows. The system allowed teams to define custom store groups, include the same store in multiple groups, organize related features hierarchically, and manage multiple configurations through bulk actions."
          impact="The tool gave teams a more flexible way to control feature access and rollouts using groupings that reflected real operational needs. It made complex configurations easier to organize and supported more targeted pilots and experiments than the generic external platform."
        />
        <ProjectCard
          thumbnail={CopyHero}
          expandedImages={[LocalizationManager]}
          title="Enabling Content Teams to Update Translations Without Code Changes"
          blurbTitle="Impact"
          blurb="Content teams could manage multilingual website copy directly, reducing the need for developer involvement in routine content updates."
          problem="Updating multilingual website content required developers to edit code and release changes, even for routine copy updates. This created unnecessary handoffs, slowed content changes, and increased the risk of inconsistent copy."
          solution="I designed a localization-management tool shaped by interviews with content editors and developers. The system allowed teams to create and manage content keys, maintain translations across English, Spanish, and additional languages, and support formatting and personalized messaging. These keys connected directly to the website so approved content changes could be reflected without editing the surrounding interface code."
          impact="The tool gave content teams greater control over multilingual text updates while reducing engineering involvement in routine copy changes. It also created a more consistent, centralized workflow for managing copy across the website."
        />
        <ProjectCard
          thumbnail={VerificationAfter}
          expandedImages={[VerificationBefore, VerificationAfter]}
          imageHeight={350}
          title="Reducing Missed Steps in Customer Identity Verification"
          blurbTitle="Impact"
          blurb="A clearer, sequential workflow helped managers complete both verification steps more consistently and reduced the risk of incorrect approvals."
          problem="Managers were required to complete two separate identity-verification checks before approving a customer request. Because the instructions and confirmation controls were grouped together, managers sometimes overlooked one of the checks or approved the request incorrectly."
          solution="I redesigned the process as a guided, step-by-step flow that visually separated each verification task, provided inline guidance, and assigned one decision to each control. Observed errors and points of confusion informed where the workflow needed stronger separation and clearer direction."
          impact="The new flow made each verification requirement more visible and reduced opportunities for managers to skip a step or approve a request unintentionally. Post-launch reporting showed fewer incomplete or incorrectly approved verifications, while manager feedback indicated greater confidence in completing the process."
        />
        <ProjectCard
          thumbnail={SimplePayAfter}
          expandedImages={[SimplePayBefore, SimplePayAfter]}
          title="Making Autopay Schedules Easier to Understand (unshipped concept)"
          blurbTitle="Design Goal"
          blurb="Make autopay dates, amounts, and frequency easier to understand before enrollment."
          problem="Autopay schedules were presented in dense paragraphs, making important details such as draft dates, payment frequency, and payment amounts difficult to identify. When customers misunderstood the schedule, unexpected drafts created confusion and required associates to correct the plan in a separate system."
          solution={<Typography sx={globalStyles.paragraph}>I independently redesigned the experience by reorganizing the information into visually distinct sections supported by icons and simple graphics. The new hierarchy highlighted payment frequency, first draft date, number of scheduled payments, and amount per payment so users could understand the plan without interpreting a dense block of text.<br/><br/>The design team responded positively to the concept, but the project was deprioritized before implementation because of organizational constraints. Although it has yet to be shipped, the work demonstrates how I translate dense financial information into a clearer, more scannable experience.</Typography>}
        />
        {/* hiding this because it's the least strong of all of the case studies */}
        {false && <ProjectCard
          thumbnail={ProtectionProgramsDetailsAfter}
          expandedImages={[ProtectionProgramsDetailsBefore, ProtectionProgramsDetailsAfter]}
          title="(concept) Helping Customers Compare Protection Programs"
          blurbTitle="Design Goal"
          blurb="Help customers understand the differences between two optional protection programs and choose the coverage that best fit their needs."
          problem="Customers were presented with two optional merchandise protection programs through dense descriptions and separate bulleted lists. Repeated customer feedback indicated that many struggled to understand how the programs differed, what each one covered, and why they might choose one or both."
          solution={<Typography sx={globalStyles.paragraph}>I independently redesigned the experience as a side-by-side comparison that aligned corresponding benefits across the two programs. I also introduced a combined option to show the coverage available when customers enrolled in both, making similarities, differences, and overlaps easier to evaluate.<br/><br/>The concept was positively received by the design team but was deprioritized before implementation because of organizational constraints. Although it has not yet shipped, the work demonstrates how I use customer feedback and comparative information design to simplify a complex purchase decision.</Typography>}
        />}
      </Grid>
    </Box>
  );
};

export default DesignTidbitsContainer;