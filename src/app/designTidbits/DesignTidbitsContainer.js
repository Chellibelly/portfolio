"use client"; 
import React, {  } from 'react';
import * as globalStyles from '../styles/globalStyleConsts';
import { Box, Grid, Paper, Typography } from '@mui/material';
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
import Header from '../Header';

const padText = {
  mt: 5, 
  pl: 30, 
  pr: 30
}

const DesignTidbitsContainer = () => {
  return (
    <Box>
      <Header/>
      <Grid container sx={{ height: "90vh", p: 10 }}>
        <Box sx={padText}>
          <Typography sx={{...globalStyles.heading1, mb: 5}}>
            Career Tidbits: Real UX Projects with Real Impact
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Welcome to a glimpse of some of the meaningful work I’ve done beyond full case studies. These projects showcase how I solve real-world challenges across a variety of contexts — from building powerful internal tools for developers to simplifying complex customer experiences through thoughtful design.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Here, you’ll find concise stories highlighting key problems, my approach to solving them, and the impact these solutions had. Whether it’s improving efficiency behind the scenes or creating clarity for users on the front lines, these tidbits reveal the practical and varied ways I bring user-centered thinking to life.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Feel free to dive in and explore the projects that catch your eye — and if you want to see deeper dives, check out my full case studies linked below.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Box sx={padText}>
            <Typography sx={globalStyles.heading2}>
              Providing Clarity Through Visual Redesigns
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              In several projects, I tackled complex and wordy content that was causing confusion and cognitive overload for both customers and store associates. These areas included critical information about autopay options, customer verification, and protection programs. The existing text-heavy layouts made it difficult for users to quickly grasp the essentials, leading to mistakes, frustration, and reduced confidence in decision-making. My goal was to redesign these sections with clear, visually engaging layouts that break down information into digestible parts and guide users step-by-step.
            </Typography>
          </Box>
          
      
      
          <Box sx={padText}>
            <Typography sx={{...globalStyles.heading4, mt: 5}}>
              Autopay Specifics and Options
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The autopay system was previously explained through dense paragraphs filled with dates, numbers, and fine print, which overwhelmed users and hid important details. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              I restructured this into a visually segmented interface with clearly separated sections, supported by icons and simple graphics to illustrate each payment option and its effects. This redesign helped users scan and understand their choices faster, reducing support calls and boosting confidence in autopay enrollment.
            </Typography>
          </Box>

          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
            <Grid item xs={4} sx={{mr: 5 }}>
              <Image
                src={SimplePayBefore}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
            <Grid item xs={4}>
              <Image
                src={SimplePayAfter}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
          </Grid>
          



          <Box sx={padText}>
            <Typography sx={{...globalStyles.heading4, mt: 10}}>
              Customer Verification
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Within the Order Hub, customer verification involved a multi-step process requiring store managers to collect and validate various documents. The original interface lumped all the requirements and instructions into lengthy paragraphs, which led to users missing steps or making incorrect approval decisions.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              I transformed this process into a clear, step-by-step flow, visually separating each verification task with concise action points, examples of acceptable documents, and inline validation statuses. This clarity improved compliance and reduced errors significantly.
            </Typography>
          </Box>
         


          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
            <Grid item xs={4} sx={{mr: 5 }}>
              <Image
                src={VerificationBefore}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
            <Grid item xs={5}>
              <Image
                src={VerificationAfter}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
          </Grid>
          


          <Box sx={padText}>
            <Typography sx={{...globalStyles.heading4, mt: 10}}>
              Club vs AP Comparison Chart
            </Typography>
            <Typography sx={{...globalStyles.paragraph}}>
              Two optional protection programs were described with long, text-heavy blocks that users struggled to compare and differentiate. To address this, I designed a side-by-side comparison chart with program names on one axis and program perks on the other. Checkmarks and X’s visually indicated which perks each program included, with an added “combo” column to highlight the benefits of enrolling in both. This graphical representation made it easier for users to understand their options and make informed choices quickly.
            </Typography>      
          </Box>

          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
            <Grid item xs={5} sx={{mr: 5 }}>
              <Image
                src={ProtectionProgramsDetailsBefore}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
            <Grid item xs={5}>
              <Image
                src={ProtectionProgramsDetailsAfter}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
            <Grid item xs={5} sx={{mr: 5 }}>
              <Image
                src={ProtectionProgramsOptOutAfter}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
            <Grid item xs={5}>
              <Image
                src={ProtectionProgramsOptOutBefore}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
            </Grid>
          </Grid>


        </Box>
        {false && <Box sx={{ mt: 5 }}>
          <Box sx={padText}>     
            <Typography sx={globalStyles.heading2}>Leads Hub</Typography>
            <Typography sx={globalStyles.paragraph}>
              Leads Hub is a crucial internal web application designed to help retail store managers and sales associates streamline the process of closing lease-to-own deals for furniture customers. Prior to its development, managers struggled with fragmented customer information spread across multiple systems, making follow-ups inconsistent and deal tracking inefficient. This often resulted in lost sales opportunities and frustrated staff, who lacked a centralized, easy-to-navigate interface to manage leads and customer histories effectively.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              My involvement included collaborating closely with UX designers and developers to build and refine this platform, ensuring the user experience matched the real-world workflows of store personnel. The dashboard consolidates all customer data — including lease applications from various channels, customer notes, payment balances, special programs, and purchase histories — into a clear, filterable interface. Managers can quickly access relevant information, communicate internally, quote additional merchandise, and monitor deal statuses without toggling between disparate tools. Features like real-time updates and intuitive filtering significantly reduce cognitive load and enable faster decision-making.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Since its rollout, Leads Hub has improved deal closure rates and customer follow-up consistency, helping managers prioritize leads and provide more personalized service. Initial metrics suggest a 20% increase in deal closure efficiency and a 15% reduction in customer follow-up delays, with user satisfaction scores climbing steadily as feedback cycles continue. The system’s scalability supports growing sales volume and ongoing feature enhancements.
            </Typography>
          </Box>
          <Typography sx={{...globalStyles.paragraph, color: "red"}}>
            [Image placeholder: Dashboard overview and key interface elements]
            <br/>
            [Image placeholder: Workflow diagrams or user flow maps]
          </Typography>
        </Box>}
        <Box sx={{ mt: 5 }}>
          <Box sx={padText}>
            <Typography sx={globalStyles.heading2}>Settings Manager — Internal Feature Flag & Grouping Tool</Typography>
            <Typography sx={globalStyles.paragraph}>
              Settings Manager is an internal web application that I designed from the ground up, starting with hand sketches and evolving through close collaboration with developers to create a powerful tool tailored specifically for our teams’ needs. The goal was to address major pain points in managing feature flags and running experiments that we experienced with existing third-party solutions like LaunchDarkly. These platforms were too rigid and costly, lacking the customization required to handle complex user segmentation and evolving business rules.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Before Settings Manager, developers and product teams faced a fragmented and inefficient workflow. Grouping users for feature rollouts was manual and error-prone, and targeting features to dynamic segments was difficult or impossible within the constraints of off-the-shelf tools. We needed a system that could handle nuanced group definitions — such as grouping stores by region, ownership type, or other arbitrary traits — and enable bulk actions for efficient feature deployment. My design focused on building an intuitive hierarchy of features, from basic flag management to flexible group creation and streamlined rollout controls, all while providing clear visibility into active experiments and status updates.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              By owning this project end-to-end, I ensured the tool was both technically feasible and user-friendly for our internal developer audience. The result has been significant efficiency gains, with rollout targeting times reportedly reduced from hours to minutes, along with considerable cost savings by replacing expensive third-party licenses. This scalable solution supports ongoing growth and increasingly complex use cases, enabling our teams to run more experiments and deliver features faster. I continue to work with users to gather feedback and improve the tool further.
            </Typography>
            
          </Box>
          
              <Image
                src={SettingsManager}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
         

          
        </Box>
        <Box sx={{ mt: 5 }}>
          <Box sx={padText}>
            <Typography sx={globalStyles.heading2}>
              Localization Manager — In-House Multilingual Copy Management Tool
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Localization Manager was developed to address a critical challenge: supporting multilingual content on our websites while maintaining strict legal compliance and avoiding unreliable machine translations. Before this tool existed, updating copy in multiple languages required significant developer time, cumbersome manual processes, and risked inconsistencies across sites. This slowed down content updates and made scaling to new languages difficult.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              I led the design of this in-house web application to empower developers, product managers, and marketing teams to manage multilingual copy efficiently. The system allows users to define “keys” representing pieces of copy, which can be loaded with translations in English, Spanish, or any future languages needed. These keys are then integrated into the website code, updating dynamically without additional developer effort. To support rich content, the tool also handles simple markup such as italics and bullet points, as well as data injection variables for personalized messages (e.g., “Thank you, [name]! Your total is $[total].”).
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              This tool not only streamlined the localization process but also ensured compliance with legal requirements that prohibited the use of AI translators. It significantly reduced dependency on engineering for content updates and enabled faster, more accurate translation management across multiple languages. Early adoption metrics indicate a 40% reduction in content update turnaround time and a 25% decrease in translation errors reported by users.
            </Typography>
          </Box>
          <Image
                src={LocalizationManager}
                alt="Life Management App Hero"
                style={{ margin: "auto", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
          <br/>
          <br/>
          <br/>
        </Box>
      </Grid>
    </Box>
  );
};

export default DesignTidbitsContainer;