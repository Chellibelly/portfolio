"use client"; 

//TODO: build out suggestions screen and add it back in
//TODO: build out goal templates screen and add it back in

import React, { useRef, useState, useEffect } from 'react';
import { Box, Grid, Select, Typography, MenuItem } from '@mui/material';
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
      { id: "lessons_section", label: "Lessons Learned" },
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
              <br/><br/>As adults, our responsibilities stretch from everyday chores like laundry to big life priorities like writing a will. Our to-dos, goals, and milestones often live scattered across notebooks, sticky notes, apps, and calendar events.
              <br/><br/>I wanted to create something more unified: a tool not just for daily productivity, but for managing life as a whole. My initial mission was to design a life management app that makes it easier to stay organized, manage deadlines, and track progress toward personal goals and milestones.
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
              Finding the Disconnect
            </Typography>
            <Typography variant="h2" sx={{ ...globalStyles.heading2 }}>
              Research & Revelations
            </Typography>    
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Justifing My Idea with a Survey</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              I began my research with a survey to gather both quantitative and qualitative data. I put the survey together using Google Forms, and ended up with 15 respondents. I focused my survey questions on answering the dominating questions I had that led me to want to take on this project in the first place.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              How do people organize their daily lists and long-term goals?
              What types of tasks do they consider most important to track?
              What tools do people use to manage these things, and what do they like about them?
              What frustrations or limitations do have they experienced with existing productivity tools?
              What factors commonly derail them from staying productive?
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Survey responses revealed a wealth of early insights. For one, most participants used a mix of apps, paper planners, and calendars. No single tool covered their full range of needs.
              However, respondents expressed a desire for a holistic system to track all aspects of life in one place.
              Customization and simplicity are top priorities. Tools like Google Calendar and Notes were praised for cross-device sync, but criticized for being clunky, limited in features, or unavailable offline. 
              Finally, distractions and executive dysfunction, often linked to ADHD and depression, emerged as major obstacles, with many describing struggles with motivation, focus, and mental fatigue.
            </Typography>
            <Box sx={{ ...globalStyles.graphic, my: 4 }}>
              <Image
                src={QualitativeAnswers}
                style={{ marginTop: 50, width: '100%', height: 'auto' }}
                alt={`Quantitative UX insight chart`}
              />
            </Box>
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Learning About Recall through User Interviews</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              To explore how people record, recall, and locate important life information, I conducted short, semi-structured interviews with three participants with a predefined set of questions, followed with questions I came up with on the spot to find out more details about each of the participants initial answers. Each was asked a series of prompts designed to assess their memory, storage methods, and retrieval habits related to real-life milestone events.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Rather than asking participants to directly answer personal questions, I asked them to reflect on whether they knew the answers, and how they would go about finding them if not.
              I asked them how they would go about finding information about their last doctor's appointment, car maintenance, the date their last signed their lease, and their pet's most recent vet visit what it was for (e.g. what meds might have been prescribed?).
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              The interviews revealed a lot. digital search is most people’s go-to when they can’t recall details. Email inboxes, digital portals (like Kaiser or a vet app), and calendar histories were common sources.
              Memory often relies on associations and life events like job changes, moves, or emotional memories (“I remember because it was right before my first day at work”).
              Paper record-keeping is common. One person kept a binder organized by topic, but had to flip through stacked documents to find what she was looking for. 
              Finally, long-term memory was variable, with most feeling confident recalling general timeframes, but not specific dates.
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
                To understand the landscape of existing tools and identify gaps that my life‑management app could fill, I analyzed twelve popular apps across six categories. I selected these apps based on recommendations in online productivity forums and mentions from my survey respondents. 
                The categories of apps I looked into included calendar apps like Google Calendar, Spreadsheets like Excel and Google Sheets, Note-taking apps like Evernote and Notion, to-do lists like Todoist, Kanban boards like Trello and Asana, and gamified habit trackers like Habitica and Finch.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              From user voices, I identified multiple patterns. 
              Most tools excel at one slice of life‑management (scheduling, notes, tasks, or motivation) but none seems to offer end‑to‑end coverage.
              Reviewers repeatedly call for better integration between events, tasks, and milestones. They want “one source of truth,” color‑coding, and reliable reminders across contexts.
              Power users love spreadsheets and note-taking apps for flexibility, but novices are overwhelmed; conversely, lightweight apps lack depth.
              Gamification boosts engagement, but can alienate users who just want to get to meet their needs quickly.
              Search and recall are pain points. Calendar and Notes apps promise search, but users still struggle with inconsistent notifications or buried lists.      
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
              After completing surveys, interviews, and competitive research, clear patterns began to emerge. While people use a variety of tools to manage their day-to-day responsibilities, very few had a cohesive system that supported both short-term task execution and long-term life management. Fragmentation, motivation challenges, memory reliance, and tool limitations consistently showed up across the data.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              I uncovered several key themes. 
              Systems are fragmented. Users juggle between apps, paper, and memory—resulting in gaps, forgetfulness, and task overload.
              Even when people do appreciate the strengths of individual tools, often they feel those tools lack critical features—like prioritization, record-keeping, or integration.
              Many users rely heavily on memory, emotion, or inbox searches to recall important dates—suggesting a need for better passive record-keeping.
              Especially among users with ADHD or executive dysfunction, there was a desire for systems that offer emotional support, structure, or gamified motivation.
              People want tools that work the way their brain works—not rigid templates or overwhelming interfaces.
            </Typography>

            <Typography sx={{ ...globalStyles.paragraph }}>
              These themes guided my next step: mapping out an affinity diagram to cluster similar needs, pain points, and desires. This helped me identify high-priority focus areas and begin shaping design directions rooted in real user struggles.
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
              Many users are drawn to features that make productivity feel more like play. 
              Positive reinforcement, from check marks to streaks, keeps users engaged.
              Some users seek affirmation, encouragement, or mental health-friendly experiences.
              Several respondents noted challenges tied to ADHD, executive dysfunction, or memory.
              Social media, interruptions, and unstructured time often derail progress.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Access
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Log-in requirements and app switching are major sources of frustration.
              Users want the ability to move, export, or back up their data with ease.
              Some workflows require teamwork or shared lists, especially for families.
              Tools that sync across desktop and mobile win user loyalty.
              Popular apps often work best when connected with calendars, reminders, or other tools.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Task Creation & Management
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Users want to break larger goals into digestible pieces. 
              Flexibility around deadlines and routines is key.
              Time-based and contextual nudges help prevent forgetfulness.
              Users like visual cues, percentages, or milestones.
              Some people prefer tactile or familiar metaphors, like binders, calendars, or notebooks.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Long-Term Planning & Record Keeping
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Users need structure for mid- and long-term objectives.
              People want a way to preserve what's been done—not just delete it.
              Time-based and contextual nudges help prevent forgetfulness.
              Some users want to write about their process, not just track it.
              Visual formats help users make sense of time and progress.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
              Organization & Prioritization
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Visual markers like colors, labels, tags, and icons help users make quick mental connections.
              The ability to flag or rank importance was a recurring need.
              Users crave clarity and structure in how tasks are grouped. Folders and hierarchy were mentioned as common needs.
              Tools should make it easy to find and manipulate entries. Well-built features for searching, sorting, and filtering are appreciate and help users meet their goals.
              One size doesn’t fit all; users want customization and flexible interfaces that match their mental models.
            </Typography>
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Understanding Common User Journeys</Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
              From the affinity diagram’s detailed themes, I pulled together the main user goals and actions. Laying these out as a user journey helps highlight what users expect, where they get stuck, and where we can make things better. The table below breaks down these key actions with user thoughts and ideas for features that can improve their experience.
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
            <Typography sx={{ ...globalStyles.paragraph }}>With a clearer understanding of where existing tools fall short, I began designing an experience that better supports real user needs — especially for those who struggle with motivation, mental load, or staying on top of daily tasks. I focused on reducing friction, surfacing what matters most, and creating moments of encouragement and clarity. The design process was guided by real user feedback, mental models, and emotional needs uncovered during research, resulting in a solution that feels supportive, flexible, and genuinely helpful.</Typography>
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Information Architecture</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>To support users in staying focused, feeling in control, and making meaningful progress, I designed an information architecture that emphasizes quick access, clear categories, and flexible navigation. The structure needed to accommodate both short-term actions and long-term planning without overwhelming users — especially those struggling with distractions, executive dysfunction, or complex routines.</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>I structured the app around five primary sections accessible via a persistent bottom navigation bar: Notes, Tasks, Goals, Rewards, and Settings. Each section serves a distinct purpose but is designed to flow seamlessly into the others—helping users move from brainstorming to execution to reflection, without losing momentum. The navigation is intentionally minimal to reduce cognitive overload while still offering the flexibility needed for varied workflows and attention styles.</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>Below is the app’s information architecture, organized into five main sections. This structure directly supports users’ needs for focus, flexibility, and follow-through by clearly separating key flows and allowing easy navigation between capturing ideas, managing tasks, tracking goals, and earning rewards.</Typography>
            <Image
                src={InformationArchitecture}
                style={{ width: '100%', height: 'auto', marginTop: 20 }}
                alt={`Quantitative UX insight chart`}
              />
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Early Wireframes</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              Before diving into visual design, I sketched out rough wireframes to test layout ideas, explore information hierarchy based on the information architecture, and ensure that the app’s navigation would stay simple and cognitively light for users who struggle with focus. These wireframes helped me spot early issues—like an overwhelming task layout and unclear affordances in goal-tracking, and gave me a foundation to test structure before committing to visual polish.
            </Typography>
            <Image
                src={LMWireframes}
                style={{ width: '100%', height: 'auto', marginTop: 70 }}
                alt={`Quantitative UX insight chart`}
              />
            <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Section Features</Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              This design phase brought the insights from user research to life through carefully considered structures, interactions, and features. Rather than chasing novelty, I focused on solving real usability pain points — especially around organization, memory support, and task overwhelm. Each section of the app reflects user goals and habits uncovered through research, balancing flexibility with structure, and depth with simplicity. While the visual design supports clarity and calm, it’s the thoughtful functionality that turns this tool into something people can actually rely on.
            </Typography>
            <Typography variant="h3" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Tasks
            </Typography>
            <Typography sx={globalStyles.paragraph}>The Tasks section of the app is what the user sees when they open it. It consists of three tabs: Today, Backlog, and Archive. Each tab has a specific purpose and features that support that purpose. Let's explore them.</Typography>       
            <Typography sx={screenFeatureTitle}>
              Today tab
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The today tab is the default active tab and is designed to bring today’s plan into focus for the user, isolating what’s relevant for now and reducing overload. It’s the daily checklist composed of tasks and subtasks. 
              <br /><br />
              These tasks can be ordered and filtered according the user’s preferences from the top of the screen, and new tasks can be easily added. 
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenTasksToday}
                width="100%"
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
                    width="100%"
                    alt="Image of screen: tasks - today"
                  />
                </Box>
              </Box>
             }

            <Typography sx={screenFeatureTitle}>
              Task Card Structure
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Features displayed on each task card were selected carefully based on user feedback and needs. Many users complained about other apps not allowing them to break down large tasks into smaller parts in a visually structured way or designate priority and weight. I wanted to include everything users found most useful when interacting with tasks without cluttering up the UI. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Optional subtasks can be added to any goal and are indented to maintain visual hierarchy while reinforcing parent-child relationships. Priority and effort indicators to help users make decisions based on their time and energy levels. Users can give meaning to tasks by adding icons, due dates (with options to repeat on a schedule), categories (displayed as colored labels), and linked goals. Everything is optional but accessible for full flexibility and organizational support.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenTasksCardStructure}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              The Backlog
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Backlog tab is a unique way to keep a list of tasks available to pull in to today’s to-do list whenever the user is ready to tackle them. It acts as a holding area for all tasks not currently scheduled. This differs from most to-do apps that most often do not include a concept of tasks to do outside of what’s accomplishable today or on a specifically designated day. Those types of apps might be good for people who keep on top of their tasks easily and accomplish everything they set out to do every day, but for many users, that just isn’t realistic. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The backlog was built for flexibility too. Users can filter the backlog by priority, category, and whether a task has a due date, or switch to a calendar view to visually scan when tasks are due. Tons of users described calendars as extremely important to them, so it was imperative for me to include a calendar view. Including the calendar in the backlog is meant to help users check their task due dates at a glance and plan ahead to determine which tasks are best to pull in every day. 
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenTasksBacklog}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Archive
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Archive tab gives users a way to find and reflect on what’s been completed and when. Users can sort and search through completed tasks in either a list or folder-like category view, mirroring mental models familiar from physical file systems. This both reinforces a sense of progress and accomplishment, and aids memory and recall. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              As an example, maybe a user has a feeling their dog might be overdo for a vaccine but can’t remember when the last they were vaccinated. Rather than having to call up the vet or scanning through thousands of emails in hopes of finding a receipt, they may be able to simply search the archive for a task with associated keywords to find the completed date of the last time they were in for their vaccines. 
            </Typography>
             <Box sx={showCaseScreens}>
              <Image
                src={LMScreenTasksArchive}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
            <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Notes
            </Typography>
            <Typography sx={screenFeatureTitle}>
              Purpose
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              My research revealed that for many users have challenges with focus and forgetfulness, often juggling multiple priorities and busy schedules. Ideas about tasks and chores can arrive to busy minds at any (and often inconvenient) time and can disappear just as easily. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              It seems that many productivity or task-list apps don’t quite have a great parking space for these quick fleeting thoughts. Instead, these apps are often built with too much structure, which slows or discourages capturing thoughts in the moment without the mental shift and focus to immediately create them as something actionable.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              That being said, the opportunity was there to provide a designated space for these sporadic thoughts, I designed what you could describe as a sort of mental inbox or brain dump. This is what became the “Notes” section of my app. The Notes section was designed to offer a fast, low-friction way to capture thoughts in the moment, without the cognitive overhead of deciding where they belong or how they’ll be used. Whether a user is in a meeting, on a jog, or lying awake at night, they can jot down an idea quickly and sort it out later.
            </Typography>
           
            <Typography sx={screenFeatureTitle}>
              Structure
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Users can either view their notes by their own defined folder or can search through all of their notes with search text, ordering, toggling, and filtering options. Like in other areas of the app, I kept in mind how important colors are to users and included the option to defined each folder the user with a unique color. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Research also showed that many users like the ability to “pin” important things that they want easy access to, so I added a pin and unpin feature to each note. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              A fun detail I added was to display the notes on top of a background meant to look like a spiral notebook to add in a little skeuomorphism to reinforce the comfort and familiarity many users expressed they enjoy when writing their tasks down in physical notebooks and scratchpads.  
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenNotesStructure}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Creating & Editing Notes
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              There was a lot of flexibility designed into creating and editing notes in order to support user needs and incorporate the most important conventions users are used to having in notes-focused apps like OneNote and (other notes app) without turning the tool into a full-blown, complicated note-taking suite.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Users can choose between keyboard typing mode or handwriting mode (another nod to analog comfort and neurodivergent preferences). To support light formatting, users can toggle basic styles: bullets, bold, italics, and underline. They can also attach supporting media like voice recordings, photos, or PDFs. 
            </Typography>
             <Box sx={showCaseScreens}>
              <Image
                src={LMScreenNotesEdit}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Converting notes to tasks
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Although they certainly aren’t obligated to do so, the idea behind notes is to park ideas to be turned into tasks later, so the mechanism to do so is displayed prominently from both the note editing modal and in each note card when viewing a list, so notes can be seamlessly converted into tasks, giving users a clear path from inspiration to execution.
            </Typography>
             <Box sx={showCaseScreens}>
              <Image
                src={LMScreenNotesConvert}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
            <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Goals
            </Typography>
            <Typography sx={screenFeatureTitle}>
              Purpose
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Users expressed frustration that most apps focused only on short-term to-dos. They wanted a way to keep long-term aspirations visible and manageable, and to understand how their daily actions contributed to bigger progress. Many turned to Google Sheets or physical planners as workarounds. Others just don’t use any kind of tools for long-term tracking because they aren’t sure what to use or they find goal-tracking overwhelming. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Goals section was designed to help users support their ambitions by bringing overwhelming long-term aspirations into focus, breaking them down into actionable steps, and giving more purpose and direction to each daily checklist task item by connecting them to broader milestones. This is more than the day-to-day task lists that most productivity apps are. It’s the bigger picture that turns a to-do app into a life management tool.
            </Typography>
           
            <Typography sx={screenFeatureTitle}>
              Goals Overview
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Goals section is broken into an active goals tab and an archived goals tab. Active tab, users see an at-a-glance list of all goals currently in progress. Each goal card includes a user-selected icon and title for quick visual recognition, a progress bar and written milestone count (e.g. “3/5 milestones completed”), and an optional due date. Users can sort their goals by progress or upcoming due date, helping them prioritize what matters most.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The goal archive tab keeps record of all previously completed goal and completion date. By separating active and completed goals, the interface stays clean while also serving as a record-keeping space, something several users noted they lacked in other tools.
            </Typography>
              <Box sx={showCaseScreens}>
              <Image
                src={LMScreenGoalsActive}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Creating and Managing Goals
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Consistent with other sections of the app, there’s flexibility in goal creation. The user defines the title, description, due date, any relevant media files to attach, and goal milestones. 
              <br/><br/>Milestones function as building blocks of the larger goal. For example, a goal like "Record an album" might include milestones such as “write music,” “record and mix songs,” “create album cover,” and “list for distribution.”
            </Typography>   
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenGoalsGoal}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>  
           
            <Typography sx={screenFeatureTitle}>
              Milestones
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              When a user clicks on a milestone or clicks the button to create a new one, they are taken to a seperate screen dedicated to milestone details. 
              <br/><br/>Each milestone can have its own title, due date and details, including a short description and media files.  Under each milestone, the user can add a list of related tasks, sort them, move them to the task backlog, or mark them complete.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenGoalMilestone}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
            <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 5 }}>
              Rewards
            </Typography>
            <Typography sx={screenFeatureTitle}>
              Purpose
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              As revealed by research, the backbone behind any good productivity tool is the ability to keep the user engaged and motivated. When users lose that motivation, not only do they struggle to accomplish their goals, but they will likely also decrease use of or altogether abandon the tool. Grounded in research findings that highlighted how gamification and rewards boost user engagement, especially for neurodivergent users, this section was born.
            </Typography>
           
            <Typography sx={screenFeatureTitle}>
              The Dilemma with motivation – it’s personal 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Believe it or not, I found this to be one of the most difficult sections of the app to design because I wanted something that would work well for all users. Many express that they really enjoy gamification for encouraging follow-through, but not all users are interested in a full-blown “game.” Even within the realm of gamification, not everyone is motivated by the same types of rewards.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Some users might find it fun to gain experience points and spend them to upgrade or decorate an avatar, but the idea of designing a cutesy mascot or leveling up an avatar doesn’t appeal to everyone. And forcing users into a single style of motivation felt counter to the flexibility I was aiming for throughout the app.
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Supported by my research analysis, I ultimately decided to bring just a touch of gamification to this section, while giving users a lot of freedom and customization. They define what motivates them, what kinds of incentives feel meaningful, and what those rewards are worth to them personally.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenRewardsInventory}
                width="100%"
                alt="Image of screen: tasks - today"
              />
            </Box>
           
            <Typography sx={screenFeatureTitle}>
              Structure
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Rewards section is broken into three tabs: In Progress, Shop, and Inventory. In-progress is the “home” section of this section. It shows the list of active achievements the user is working toward. 
              <br/><br/>These achievements are framed around meaningful milestones like “complete 10 subtasks”, “complete 5 goals”, “turn 5 notes into tasks”, or “complete tasks from 5 different categories.” Each in-progress item includes a progress bar with visual and written tracking (e.g., 3/10 milestones complete) and the number of rewards points it grants upon completion. 
              <br/><br/>This area also includes a dropdown menu to sort achievements by progress or reward value to help users visualize their momentum and choose what to work toward next.
            </Typography>
            <Box sx={showCaseScreens}>
              <Image
                src={LMScreenRewardsInProgress}
                width="100%"
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
                    width="100%"
                    alt="Image of screen: tasks - today"
                  />
                </Box>
              </Box>
            }
            <Typography sx={screenFeatureTitle}>
              The Point Shop
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              The Shop tab is a virtual storefront of rewards users can spend their points on. Rewards are displayed as shop items in a list, each with its own description, point cost, and button to redeem. Above the list, the user can see their point wallet balance and tap a button to add a new reward. 
            </Typography>
            <Typography sx={globalStyles.paragraph}>
              Like the achievements in progress, these rewards are user-defined. However, in contrast to the creating an achievement in progress, reward creation is full open-ended. Users decide the reward and assign a point cost based on what that reward is worth to them personally. 
              <br/><br/>This freedom allows users to tap into whatever motivates them most. It can be a coffee outing, a couple hours of guilt-free video gaming, a Friday night pizza delivery, a trip to the beach, you name it – it’s completely up to the user based on their personal incentives.
            </Typography>
             <Box sx={showCaseScreens}>
              <Image
                src={LMScreenRewardsShop}
                width="100%"
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
             When I first started this project, I assumed everyone struggled with memory, focus, and getting things done. But the deeper I got into research, the more I realized that not all struggles are created equal. Neurodivergent users, especially those dealing with ADHD, anxiety, or executive dysfunction, weren’t just having a harder time. In fact, they were being let down by tools that didn’t work for how their brains operate.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
             That shifted everything for me. Instead of trying to build something for the masses, I focused on designing for the folks who needed the most support, and honestly, that made the work better. I added more flexibility, more cues for memory and focus, and more room for users to work the way they actually work, not how some ideal productivity model says they “should.”
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph }}>
              I’m proud of where this ended up, but I’m not done yet. My next goal is to build a clickable prototype and get it in front of real users through usability testing sessions to see how well it holds up. I want to validate whether the app truly supports autonomy, reduces friction, and motivates sustained engagement. 
              Designing this case study reminded me what UX is all about. It’s about staying curious, listening closely, and being willing to rethink everything when the people you’re designing for show you a better direction.
            </Typography>
          </Box>
        </section>
      </Box>
    </div>
  );
};

export default LifeManagementAppMobile;