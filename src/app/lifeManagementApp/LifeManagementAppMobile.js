"use client"; 

//TODO: build out suggestions screen and add it back in
//TODO: build out goal templates screen and add it back in

import React, { useRef, useState, useEffect } from 'react';
import { Box, Grid, Paper, List, ListItem, Select, Typography, MenuItem } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import Image from 'next/image';
import QuoteContainer from '../hotelBookingApp/QuoteContainer';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import QualitativeAnswers from '../../../public/LM_Survey_Qual_Mobile.png';
import CompetitorResearch from '../../../public/LM_Competitor_Research_Mobile.png';
import InterviewPersonas from '../../../public/Interview_Personas_Mobile.png';
import AffinityDiagram from '../../../public/LM_Affinity_Diagram_Mobile.png';
import UserJourneys from '../../../public/LM_User_Journeys_Mobile.png';
import InformationArchitecture from '../../../public/LM_Information_Architecture_Mobile.png';

import LMWireframes from '../../../public/LM_Wireframes_Mobile.png';

import LifeManagementHero from '../../../public/Life_Management_Hero.png';
import LMScreenTasksToday from '../../../public/LM_Screen_Tasks_Today.png';
import LMScreenTasksArchive from '../../../public/LM_Screen_Tasks_Archive.png';
import LMScreenTasksBacklog from '../../../public/LM_Screen_Tasks_Backlog.png';
import LMScreenTasksCardStructure from '../../../public/LM_Screen_Tasks_Card_Structure.png';
import LMScreenTasksSuggestions from '../../../public/LM_Screen_Tasks_Suggestions.png';

import LMScreenNotesConvert from '../../../public/LM_Screen_Notes_Convert.png';
import LMScreenNotesEdit from '../../../public/LM_Screen_Notes_Edit.png';
import LMScreenNotesStructure from '../../../public/LM_Screen_Notes_Structure.png';

import LMScreenGoalsActive from '../../../public/LM_Screen_Goals_Active.png';
import LMScreenGoalsGoal from '../../../public/LM_Screen_Goals_Goal.png';
import LMScreenGoalMilestone from '../../../public/LM_Screen_Goals_Milestone.png';

import LMScreenRewardsCreation from '../../../public/LM_Screens_Rewards_Creation.png';
import LMScreenRewardsInProgress from '../../../public/LM_Screens_Rewards_InProgress.png';
import LMScreenRewardsInventory from '../../../public/LM_Screens_Rewards_Inventory.png';
import LMScreenRewardsShop from '../../../public/LM_Screens_Rewards_Shop.png';
import HeaderMobile from '../HeaderMobile';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DrawIcon from '@mui/icons-material/Draw';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import StickyNote2SharpIcon from '@mui/icons-material/StickyNote2Sharp';
import SchoolIcon from '@mui/icons-material/School';

const imageStyle = {
  margin: "auto"
};

const screenFeatureTitle = {
  ...globalStyles.paragraph, 
  fontStyle: "italic",
  fontWeight: "bold"
};

const showCaseScreens = {
  marginTop: 5,
  marginBottom: 5
};

const LifeManagementAppMobile = () => {
    const sectionRefs = useRef({});
    const [currentSection, setCurrentSection] = useState("introduction_section");
    const [isSelecting, setIsSelecting] = useState(false);
  
    const sections = [
      { id: "introduction_section", label: "Part 1/5 - Overview" },
      { id: "research_section", label: "Part 2/5 - Research" },
      { id: "analysis_section", label: "Part 3/5 - Analysis" },
      { id: "design_section", label: "Part 4/5 - Design" },
      { id: "lessons_section", label: "Takeaways" },
    ];
  
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id); // Update the current section when it is in view
        }
      });
    };
  
    useEffect(() => {
      // Create two separate observers for short and long sections
      const shortSectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.4, // 50% visibility for short sections
      });
  
      const longSectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.02, // 10% visibility for long sections
      });
  
      // Function to determine if a section is long or short
      const isLongSection = (section) => section.clientHeight > 750; // You can adjust the threshold here
  
      // Observe each section with the appropriate observer
      sections.forEach(section => {
        const sectionElement = sectionRefs.current[section.id];
        if (sectionElement) {
          if (isLongSection(sectionElement)) {
            longSectionObserver.observe(sectionElement); // Use the long section observer
          } else {
            shortSectionObserver.observe(sectionElement); // Use the short section observer
          }
        }
      });
  
      // Cleanup observers on unmount
      return () => {
        shortSectionObserver.disconnect();
        longSectionObserver.disconnect();
      };
    }, [sections]);
  
    const scrollToSectionWithOffset = (sectionId) => {
      const sectionElement = sectionRefs.current[sectionId];
      const headerHeight = 120; // Height of your header
      const offsetTop = sectionElement?.offsetTop - headerHeight;
  
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    };

    const handleChangeSection = (event) => {
      const sectionId = event.target.value;
      setIsSelecting(true);
      setCurrentSection(sectionId);
      scrollToSectionWithOffset(sectionId);

      setTimeout(() => {
        setIsSelecting(false);
      }, 300);
  };

    const getIcon = (section) => {
      switch(section) {
        case "introduction_section":
          return <PsychologyAltIcon/>;
        case "research_section":
          return <StickyNote2SharpIcon/>;
        case "analysis_section":
          return <LightbulbIcon/>;
        case "design_section":
          return <PhoneAndroidIcon/>;
        case "lessons_section":
          return <SchoolIcon/>;
        default:
          // code block
      }
    }
  

  return (
    <div>
      <HeaderMobile/>
      <Box sx={{ position: 'sticky', top: 55, zIndex: 50, backgroundColor: 'white', boxShadow: 2 }}>
        <Select
          value={currentSection}
          onChange={handleChangeSection}
          fullWidth
          variant="filled"
        >
          {sections.map(section => (
            <MenuItem key={section.id} value={section.id}>
              <Grid container direction="row" sx={{ mt: -1}}>
                <Grid item sx={{ mr: 1 }}>
                  {getIcon(section.id)}
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
                    {section.label}
                  </Typography>
                </Grid>
              </Grid>
            </MenuItem>
          ))}
        </Select>
      </Box>
        <Image
          src={LifeManagementHero}
          width="100%"
          alt="Life Management App Hero"
          style={{ ...imageStyle, marginTop: 60 }}
        />
      <Box
        sx={{
          maxWidth: '90%',
          margin: '0 auto',
          mt: 5
        }}
      >
        <section
            id="introduction_section"
            ref={(el) => sectionRefs.current["introduction_section"] = el}
        >

        <Paper elevation={3} sx={{ p: 2, mt: 5, mb: 5 }}>
          <Typography variant='h1' sx={globalStyles.heading1}>Project Summary</Typography>
            <Typography variant='h2' sx={globalStyles.heading2}>
                KorkBoard TL;DR
            </Typography>
             <Typography variant='body1' sx={globalStyles.paragraph}> 
              <b>Context & Problem:</b> KorkBoard is a self-initiated exploration of how people might organize their lives within a single visual workspace. Most productivity tools specialize in either note-taking, short-term task management, goal tracking, or record-keeping. This separation fragments mental workflows and weakens momentum, leading to inconsistent follow-through.
            </Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}> 
                <b>Challenge:</b> The primary challenge was balancing flexibility and structure within a unified productivity system. The design needed to support non-linear workflows, reduce cognitive load, and foster motivation all while resisting feature creep or overwhelming the user.
            </Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}>
              <b>Process:</b> Led end-to-end research and design, beginning with surveys, interviews, and competitive analysis. Insights informed the development of a flexible, non-linear information architecture and high-fidelity prototype, which was evaluated and refined through usability testing.
            </Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}> 
                <b>Insights:</b>
                <List sx={{ listStyleType: 'disc', ml: 5 }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    Users often rely on a mix of apps, planners, notebooks, and spreadsheets because no single tool supports the full spectrum of thinking, planning, and execution. Many users express desire for a cohesive system.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Visual scaffolding (color cues, spatial organization, adaptable layouts) and flexibility are essential, but complexity in customization quickly becomes overwhelming, especially for neurodivergent users or those experiencing executive dysfunction or mental fatigue.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Motivation isn’t one size fits all, and tools should support many types of motivators. Effective systems must support multiple paths to reinforcement rather than a single incentive model.
                  </ListItem>
                </List>
             </Typography>
             <Typography variant='body1' sx={globalStyles.paragraph}> 
                <b>Outcomes:</b> Delivered a high-fidelity, interactive prototype that unifies note-taking, task management, and long-term planning within a single visual system. Usability testing validated the balance between flexibility and structure, with users responding positively to visual cues and reward-based motivation.
             </Typography>
             <Typography variant='body1' sx={globalStyles.paragraph}> 
                <b>Takeaways:</b> Designing for a clearly defined audience produces stronger systems than designing for “everyone.” Supporting non-linear thinkers requires embedding structure subtly rather than imposing rigid frameworks. Most importantly, true flexibility depends on intentional constraint. Without guardrails, freedom quickly becomes chaos.
             </Typography>
        </Paper>

          <Typography variant='h1' sx={globalStyles.heading1}>A life full of lists, but no roadmap</Typography>
          <Typography variant='h2' sx={globalStyles.heading2}>
            Project Overview
          </Typography>
          <Box>
            <QuoteContainer
              quote="I wish that one app stored all of the data/goals in one place — financial, budget, calendar, chores, etc."
              author="Survey Respondent"
              width="small"
            />
          </Box>
          <Typography variant='body1' sx={globalStyles.paragraph}> 
              <br/><br/>Adult responsibilities range from everyday chores like laundry to long-term priorities like financial planning or healthcare management. Yet the information needed to manage these responsibilities is often scattered across notebooks, apps, calendars, and mental reminders.
              <br/><br/>KorkBoard began as an exploration into how a single system might better support both day-to-day execution and long-term life management within one cohesive workspace, addressing issues of staying organized, managing deadlines, and tracking progress toward personal goals in one “life management app.”
          </Typography>
          <Box sx={globalStyles.graphic}>
            <Image
                src={ToDoListImage}
                width="100%"
                alt="An image of the UX process with the Analysis step highlighted"
            />
          </Box>
        </section>
        <section
            id="research_section"
            ref={(el) => sectionRefs.current["research_section"] = el}
        >
          <Box
            sx={{
              margin: '0 auto',
              textAlign: 'left',
              mt: 10,
            }}
          >
            <Typography sx={globalStyles.heading1}>
              Understanding the Problem
            </Typography>
            <Typography variant="h2" sx={{ ...globalStyles.heading2 }}>
              Research & Key Insights
            </Typography>    
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Testing the Initial Hypothesis</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              To understand how people manage daily responsibilities alongside long-term goals, I conducted a mixed-method survey exploring organization habits, tool usage, and productivity challenges. 
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Participants relied on a combination of apps, planners, calendars, and memory, with no single system supporting their full range of needs. Many expressed a desire for a unified workspace connecting planning, execution, and long-term tracking.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Customization and simplicity emerged as competing priorities. While tools like Google Calendar and Notes were valued for accessibility, users reported clunkiness, limited features, and difficulty maintaining momentum. Distraction, mental fatigue, and executive dysfunction frequently disrupted follow-through, with most users describing struggles with motivation and focus.
            </Typography>
            <Box sx={{ ...globalStyles.graphic, my: 4 }}>
              <Image
                src={QualitativeAnswers}
                style={{ marginTop: 50, width: '100%', height: 'auto' }}
                alt={`Quantitative UX insight chart`}
              />
            </Box>
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Understanding Memory & Recall Through Interviews</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              To better understand how people store and retrieve important life information, I conducted interviews with three participants where I asked how they would locate real-world information such as medical appointments, lease dates, or maintenance records. 
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              One participant relied heavily on digital search when details couldn’t be recalled, most commonly looking through emails, online portals, and calendar histories. Another explained that for her, recall was often tied to life events or emotional anchors. The third maintained physical records in a binder, but admitted retrieving information was often slow or cumbersome.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Overall, participants felt confident remembering general timeframes but struggled with precise details, highlighting an opportunity for passive record-keeping and searchable history within a life-management system.
            </Typography>
            <Box sx={{ ...globalStyles.graphic, my: 4 }}>
             <Image
               src={InterviewPersonas}
               style={{ width: '100%', height: 'auto', marginTop: 50 }}
               alt={`Quantitative UX insight chart`}
             />
            </Box>
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Exploring Existing Apps and Reviews</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
               To understand how current productivity tools support life management, I analyzed twelve popular apps spanning calendars, note-taking tools, task managers, spreadsheets, and productivity apps, and habit trackers.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Reviews revealed that most tools excel at a single function (scheduling, notes, tasks, or motivation) but none support true end-to-end life management. Users repeatedly expressed a desire for one “source of truth” connecting events, tasks, and long-term goals.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Powerful tools like spreadsheets and modular note systems offer depth but overwhelm casual users, while simpler apps lack structure for long-term planning. Gamification improves engagement for some users but alienates others seeking efficiency over play. Search and recall remained persistent pain points, with users struggling to locate important information. Color-coding, visuals, and a reliable reminder system were highlighted as important for most users.
            </Typography>
            <Box sx={{ ...globalStyles.graphic, my: 4 }}>
              <Image
                src={CompetitorResearch}
                style={{ width: '100%', height: 'auto', marginTop: 50 }}
                alt={`Quantitative UX insight chart`}
              />
            </Box>
          </Box>
        </section>
        <section
            id="analysis_section"
            ref={(el) => sectionRefs.current["analysis_section"] = el}
        >
          <Box sx={{ mt: 10 }}>
            <Typography sx={globalStyles.heading1}>
              Bridging the Gap
            </Typography>
            <Typography variant="h2" sx={{ ...globalStyles.heading2 }}>
              Analysis & Insights
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Across methods, recurring challenges emerged: fragmented workflows, reliance on memory for recall (often resulting in forgetfulness), motivation drop-off due to task overload or lack of rewarding/gamified systems, and tools that either lacked flexibility or introduced overwhelming complexity. Additionally, especially among users with ADHD or executive dysfunction, there was a strong desire for tools that support non-linear thinking and frequent distractions without sacrificing structure.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Affinity mapping helped translate these patterns into five core focus areas, shown below, which became the foundation for KorkBoard’s design approach.
            </Typography>
            <Box sx={{ ...globalStyles.graphic, my: 4 }}>
              <Image
                src={AffinityDiagram}
                style={{ width: '100%', height: 'auto', marginTop: 50 }}
                alt={`Quantitative UX insight chart`}
              />
            </Box>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
              After organizing over 100 sticky notes, five primary categories emerged—each capturing a key dimension of life management struggles and needs. These were further refined into 25 subgroups, delving into user motivations, UI organization and structure, task management, record-keeping, and access:
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Motivation & Focus
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Many users are drawn to features that make productivity feel more like play. Positive reinforcement and progress visibility keep users engaged during low-energy or distracted states and interruptions. 
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Access
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Log-in requirements and app switching are major sources of frustration. Seamless cross-device access, minimal login friction, and integrations reduce disruption.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Task Creation & Management
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Users want to break larger goals into digestible pieces. Flexible scheduling and visual cues like percentages and milestones are key. Many users enjoy metaphors involving real-world trackers like calendars or notebooks.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Long-Term Planning & Record Keeping
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Users need persistent histories that preserve progress and support recall beyond daily task completion. Time-based and contextual nudges help prevent forgetfulness. Visual formats help users make sense of time and progress.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Organization & Prioritization
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Searching, sorting, and filtering allow users to quickly locate tasks and records. Visual markers like colors, labels, and icons help users to categorize at a glance. The ability to group, tag, flag as important, and organize in folders promotes user-defined organization and information hierarchy, enabling them to align tools with their mental models. 
            </Typography>
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Understanding Common User Journeys</Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
              These focus areas informed the definition of core user journeys, clarifying how users move between capturing ideas, planning work, executing tasks, and reflecting on progress.
             </Typography>
             <Box sx={{ ...globalStyles.graphic, my: 4 }}>
              <Image
                src={UserJourneys}
                style={{ width: '100%', height: 'auto', marginTop: 50 }}
                alt={`Quantitative UX insight chart`}
              />
            </Box>
          </Box>
        </section>
        <section
            id="design_section"
            ref={(el) => sectionRefs.current["design_section"] = el}
        >
          <Box sx={{ mt: 10 }}>
            <Typography sx={globalStyles.heading1}>
              Designing for Flexibility & Follow-Through
            </Typography>
            <Typography variant="h2" sx={{ ...globalStyles.heading2, mt: 2 }}>
              Information architecture, wireframes, and high-fidelity screen design
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>With a clearer understanding of where existing tools fall short, I began designing an experience that better supports real user needs, particularly for those struggling with motivation, mental load, and distractions. I focused on reducing friction, surfacing what matters most, and creating moments of encouragement and clarity. The result was a unified life-manager that feels supportive, flexible, and genuinely helpful for those who need it most.</Typography>
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Information Architecture</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>To help users stay focused, feel in control, and make meaningful progress, I designed an information architecture emphasizing quick access, clear categories, and flexible navigation.</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>Below is the app’s information architecture, organized into four primary sections, accessible via a persistent bottom navigation bar: Notes, Tasks, Goals, and Rewards. Each section serves a distinct purpose but flows seamlessly into the others, helping users move from capturing ideas, to creating tasks, to bigger picture goal management without losing momentum. The minimal navigation reduces cognitive overload while still supporting varied workflows and attention styles.</Typography>
            <Image
                src={InformationArchitecture}
                style={{ width: '100%', height: 'auto', marginTop: 20 }}
                alt={`Quantitative UX insight chart`}
              />
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Early Wireframes</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Before moving into visual design, I created rough wireframes to test layout ideas and explore the information hierarchy defined in the architecture. The goal was to ensure navigation remained simple and cognitively light.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              These early wireframes helped surface issues such as overwhelming task layouts and unclear affordances in goal tracking, providing a foundation to refine structure before committing to high-fidelity visuals.
            </Typography>
            <Image
                src={LMWireframes}
                style={{ width: '100%', height: 'auto', marginTop: 70 }}
                alt={`Quantitative UX insight chart`}
              />
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Section Features</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              This phase brought research insights to life through considered structures, interactions, and features. The focus was on addressing real usability pain points, especially around organization, memory support, and motivation. Each section of the app reflects user goals and habits uncovered in research, balancing flexibility with structure and depth with simplicity. The visual design supports clarity and calm, but the functionality ensures users can rely on the tool to get things done.
            </Typography>
            <Typography variant="h3" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Tasks
            </Typography>
            <Typography sx={globalStyles.paragraph}>Research showed that users often feel overwhelmed by long lists and struggle to balance immediate responsibilities with future planning. To address this, I built the “Tasks” section of the app. Tasks is the app’s home screen. It’s designed to help users focus on what matters today while keeping longer-term tasks visible and manageable.</Typography>
            <Typography sx={screenFeatureTitle}>
              Three-Part Structure: Today, Backlog, Archive
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Tasks is divided into three focused views, each serving a different purpose. The today tab is the default active tab, the daily checklist designed to bring today’s plan into focus. The Backlog acts as a holding area for tasks not yet scheduled for today, allowing users to pull them into their daily plan when ready and preventing cognitive overload while preserving visibility. The archive maintains a searchable history of completed tasks, reinforcing a sense of progress and supporting memory and recall.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenTasksToday}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>   
            
            {false && 
              <Box>
                <Typography sx={screenFeatureTitle}>
                  Suggestions Assistant
                </Typography>
                <Typography sx={globalStyles.paragraph}>
                   Within the today tab, a “suggestions” feature offers low-friction guidance without being prescriptive. The decision to add the suggestions feature was born from users expressing the desire for reminders about important tasks but without being interruptive. 
                   <br/><br/>The app will suggest bringing in backlog items that were on previous daily lists but not completed, tasks which have been designated as low effort, and tasks which are approaching their user-defined due date. 
                   <br/><br/>If the user likes any of the suggestions, they can pull them into today’s task list with the click of a button.
                </Typography>
                <Box sx={globalStyles.graphic}>
                  <Image
                    src={LMScreenTasksSuggestions}
                    style={{ padding: 50 }}
                    alt="Image of screen: tasks - today"
                  />
                </Box>
              </Box>
             }

            <Typography sx={screenFeatureTitle}>
              Task Card Design: Fully Optional Customization
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Task cards were designed to balance simplicity with optional depth. Users can keep tasks lightweight or enrich them with metadata such as color-coding, categories, due dates, subtasks, or goal links. Visual markers and hierarchy help users quickly assess priority and effort without forcing structure on those who prefer minimal input. The key design decision was constraint with choice: advanced organization is available, but never required.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenTasksCardStructure}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Planning Without Pressure
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Backlog supports flexible planning, including calendar-based organization, allowing users to preview workload without committing prematurely. This addresses a common research insight: users want visibility into future obligations without feeling locked into rigid schedules.
            </Typography>
          
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenTasksArchive}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
           
          
            <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Notes
            </Typography>

            <Typography sx={globalStyles.paragraph}>
              Research revealed that many users struggle with focus and forgetfulness, juggling multiple priorities and busy schedules. Ideas can appear at any moment and disappear just as quickly. Traditional productivity apps often require too much structure, creating friction that discourages spontaneous capture.
            </Typography>
           
            <Typography sx={screenFeatureTitle}>
              Designed for Capture First, Organization Later
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Notes section was designed as a mental inbox. Whether during a meeting, a jog, or late at night, it allows users to quickly jot down ideas in the moment without worrying about categorization or immediate action. A subtle skeuomorphic notebook aesthetic reinforces familiarity and reduces the intimidation often associated with highly structured productivity systems.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenNotesStructure}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Simple, low-structure note-taking and editing
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The notes editor incorporates flexibility and conventions that users are used to having in notes-focused apps without overcomplication. Users can freely jot ideas using typing or handwriting, reinforcing comfort and accessibility for different thinking styles. They can also attach media like voice recordings, photos, or PDFs to support details with visual and audio reminders.
            </Typography>
          
             <Box sx={showCaseScreens}>
              <Image
                src={LMScreenNotesEdit}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Bridging Ideas to Action
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Crucially, notes are not dead ends. Any note can be converted into a task with a single action, creating a seamless bridge between inspiration and execution. This connection supports the broader system goal: reducing friction between thinking, planning, and doing.
            </Typography>
             <Box sx={showCaseScreens}>
              <Image
                src={LMScreenNotesConvert}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
            <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Goals
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Most productivity tools emphasize daily task completion but neglect long-term direction. Research participants expressed frustration with losing sight of larger ambitions and resorting to spreadsheets, planners, or abandoning goal tracking altogether due to overwhelm.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Goals section addresses this by breaking ambitious objectives into actionable steps, connecting everyday tasks to broader milestones. This turns a standard to-do system into an actual life management tool.
            </Typography>

            <Typography sx={screenFeatureTitle}>
              Bringing Visibility to objectives and aspirations
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Goals section is split into active goals and archived goals. The Active goals tab displays all in-progress goals at a glance. Progress indicators provide visual momentum, helping users see advancement over time rather than relying on memory alone. The goal archive tab keeps record of all previously completed goals and their completion dates, providing a clean interface while preserving historical context.
            </Typography>
              <Box sx={showCaseScreens}>
              <Image
                src={LMScreenGoalsActive}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Progress Without Clutter
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Users define the title, description, due date, attachments, and goal milestones. Milestones serve as building blocks for larger goals. For example, a goal like “Record an album” might include milestones such as “write music,” “record songs,” “design album cover,” and “distribute album.”
            </Typography>   
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenGoalsGoal}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>  
           
            <Typography sx={screenFeatureTitle}>
              From Ambition to Actionable steps
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Milestones create visible progress while preventing large ambitions from feeling paralyzing. Each milestone can connect directly to related tasks, ensuring that daily checklists contribute meaningfully to long-term outcomes. This hierarchy (Goal → Milestone → Task) creates alignment across the system, reinforcing purpose behind everyday actions.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenGoalMilestone}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
            <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Rewards
            </Typography> 
            <Typography sx={globalStyles.paragraph}>
              Sustained motivation emerged as a critical challenge in research. Many users described strong initial momentum followed by drop-off, especially during periods of stress, distraction, or mental fatigue. While gamification can increase engagement, it can alienate audiences when overdesigned. The Rewards section introduces a lightweight motivational layer that supports follow-through through flexibility and personalization without turning productivity into a game.
            </Typography>
           
            <Typography sx={screenFeatureTitle}>
              The Challenge with motivation – it’s personal 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Designing this section was tricky because motivation is highly individual. Some users enjoy gamified elements, like earning points or upgrading an avatar, while others prefer simpler, real-world incentives. Forcing a single style of motivation would conflict with the app’s emphasis on flexibility.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              To balance this, the section allows users to define what motivates them, set meaningful incentives, and determine how rewards relate to personal achievement. Gamification is present, but subtle, supporting engagement without imposing rigid systems.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenRewardsInventory}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Flexible Reinforcement
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Rewards section is divided into three tabs: In Progress, Shop, and Inventory. Users earn points by completing meaningful achievements such as finishing subtasks, progressing toward goals, or consistently engaging with the system. Progress indicators make effort visible, reinforcing momentum during low-energy periods. Rather than imposing a predefined reward model, users define what incentives matter to them and assign their own point values. 
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenRewardsInProgress}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
            {false && 
              <Box>
                 <Typography sx={screenFeatureTitle}>
                  “In-progress” achievement creation – a design trade-off
                </Typography>
                <Typography sx={globalStyles.paragraph}>
                  When creating a new achievement the user wants to work toward, I wanted to include flexibility depending on the user’s needs. For example, maybe a particular user wants to be better about returning to their notes and turning them into tasks or maybe they have been putting off their “school” related tasks and wants to be motivated to get more of those done. 
                </Typography>
                <Typography sx={globalStyles.paragraph}>
                  They should be able to get rewards to motivate them to do those specific things. However, in the spirit of helping the user track these and removing a bit of the “honor” system some users expressed encourage them to “cheat,” I wanted the app to be able to track the progress toward these things automatically. 
                </Typography>
                <Typography sx={globalStyles.paragraph}>
                  The compromise I came up with was to include flexible templates that both the user and app could understand – the idea being that when creating each one, the user could select from a variety of predefined drop-down options to build it. For example, users can define: Complete [10] [Subtasks]Complete [5] [Tasks] in category [Fitness]Turn [3] notes into tasks. This allows for creative goal-setting while ensuring trackability.
                </Typography>
                <Box sx={showCaseScreens}>
                  <Image
                    src={LMScreenRewardsCreation}
                    style={{ padding: 50 }}
                    alt="Image of screen: tasks - today"
                  />
                </Box>
              </Box>
            }
            <Typography sx={screenFeatureTitle}>
              Encouragement through prize redemption
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The shop is a virtual storefront where users spend points earned from achievements. Reward creation is open-ended and user defined, allowing the user to determine what incentivizes them and assign point values accordingly. Users who enjoy gamified reinforcement can lean into it, while those who prefer a straightforward productivity tool can largely ignore it. This approach preserves autonomy while supporting multiple motivational styles within a single framework.
            </Typography>    
             <Box sx={showCaseScreens}>
              <Image
                src={LMScreenRewardsShop}
                style={{ padding: 50 }}
                alt="Image of screen: tasks - today"
              />
            </Box>
          </Box>
        </section>
        <section
            id="lessons_section"
            ref={(el) => sectionRefs.current["lessons_section"] = el}
        >
          <Box sx={{ mt: 10 }}>
            <Typography sx={globalStyles.heading1}>
              Final Thoughts and Next Steps
            </Typography>
            <Typography variant="h2" sx={{ ...globalStyles.heading2, mt: 2 }}>
              Learning to truly understand an audience
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
             At the start of this project, I assumed most people struggled with memory, focus, and follow-through in similar ways. Research quickly challenged that assumption. Neurodivergent users, particularly those navigating ADHD, anxiety, or executive dysfunction, weren’t simply “less productive.” They were underserved by systems that didn’t align with how they think and process information.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
             That insight reframed the entire project. Rather than designing for a generalized audience, I focused on supporting users who need more flexibility, clearer visual scaffolding, and multiple paths to motivation. Designing for this edge case strengthened the system as a whole. Structure became more intentional, flexibility more constrained, and every feature had to justify its cognitive cost.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Next, I plan to move beyond prototype validation into moderated usability testing to evaluate whether the system truly reduces friction, supports autonomy, and sustains engagement over time. This project reinforced a core belief. UX isn't about designing features the way you want your users to use them. Rather, it’s about understanding behavior deeply enough to design systems that genuinely fit the people using them.
            </Typography>
          </Box>
        </section>
      </Box>
    </div>
  );
};

export default LifeManagementAppMobile;