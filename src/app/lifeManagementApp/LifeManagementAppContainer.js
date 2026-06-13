"use client"; 

//TODO: build out suggestions screen and add it back in
//TODO: build out goal templates screen and add it back in

import React, {  } from 'react';
import { Box, Grid, Paper, Typography, List, ListItem } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import Header from '../Header';
import Image from 'next/image';
import QuoteContainer from '../hotelBookingApp/QuoteContainer';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import QualitativeAnswers from '../../../public/LM_Survey_Qual.png';
import CompetitorResearch from '../../../public/LM_Competitor_Research.png';
import InterviewPersonas from '../../../public/Interview_Users.png';
import AffinityDiagram from '../../../public/LM_Affinity_Diagram_Full.png';
import UserJourneys from '../../../public/LM_User_Journeys.png';
import InformationArchitecture from '../../../public/LM_Information_Architecture.png';

import LMWireframes from '../../../public/LM_Wireframes.png';

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

import KorkBoardHero from '../../../public/KorkBoard_Hero.png';

const LifeManagementAppContainer = () => {
  return (
    <div>
      <Header/>
      <Box
        sx={{
          maxWidth: '80%',
          margin: '0 auto',
          padding: 5,
          mt: 10
        }}
      >
        <Image
          src={KorkBoardHero}
          alt="KorkBoard Hero image"
          layout="responsive"
          style={{ objectFit: "cover", transition: "height 0.3s ease" }}
        />
        <Paper elevation={3} sx={{ p: 2, mt: 5, mb: 10 }}>
          <Typography variant='h1' sx={globalStyles.heading1}>Project Summary</Typography>
            <Typography variant='h2' sx={globalStyles.heading2}>
                KorkBoard TL;DR
            </Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}> 
              <b>Role:</b> Product designer and researcher<br/>
              <b>Project type:</b> Self-initiated concept<br/>
              <b>Research:</b> Survey, 3 interviews, analysis of 12 productivity tools, and 3 moderated usability tests<br/>
              <b>Deliverable:</b> High-fidelity interactive prototype
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Problem</Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}> 
              People often manage ideas, daily responsibilities, long-term goals, and important records across disconnected apps, planners, spreadsheets, and memory. This fragmentation makes it harder to preserve context and follow through over time.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Design Challenge</Typography>
             <Typography variant='body1' sx={globalStyles.paragraph}> 
              How might one connected system support capture, planning, action, and recall without introducing the complexity and cognitive load users already struggle with?
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Approach</Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}> 
              I led the project from exploratory research through information architecture, interaction design, high-fidelity prototyping, and moderated usability testing. Research findings shaped a connected system for notes, tasks, goals, and personalized rewards.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Results</Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}>
              Testing showed strong interest in low-friction idea capture, backlog and archive features, visible progress, and user-defined rewards. It also revealed that layered terminology, rigid hierarchy, and too many configuration options created unnecessary cognitive load, establishing clear priorities for the next iteration.
            </Typography>
        </Paper>
      
        <Typography variant='h1' sx={globalStyles.heading1}>A life full of lists, but no roadmap</Typography>
        <Box
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >     
          <Grid container justifyContent="center" justifyItems="center">     
             
              <Grid item xs={7} >
                  <Typography variant='body1' sx={globalStyles.paragraph}> 
                      <br/><br/>Adult responsibilities exist across different time horizons, from today’s chores and appointments to long-term goals, financial planning, healthcare, and household records. Yet the information needed to manage them is often scattered across calendars, notes, task apps, spreadsheets, paper planners, and memory.
                      <br/><br/>KorkBoard began with a simple question:
                      <br/><br/>How might one connected system support capture, planning, action, and recall without becoming another overwhelming productivity tool?
                  </Typography>
              </Grid>
               <Grid item xs={4}>
                <Box sx={globalStyles.graphic}>
                  <Image
                      src={ToDoListImage}
                      width="100%"
                      alt="An image of the UX process with the Analysis step highlighted"
                  />
                </Box>
              </Grid>
          </Grid> 
        </Box>
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
          <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Exploring How People Manage Everyday Life</Typography>
                <Typography sx={{ ...globalStyles.paragraph }}>
                  KorkBoard began with my own frustration after trying several productivity tools and still being unable to find one that connected everyday tasks, long-term goals, notes, and important records. To explore how others approached the same challenges, I surveyed 15 participants about what they tracked, which tools they used, and where those systems broke down.
                </Typography>
                <Typography sx={{ ...globalStyles.paragraph }}>
                  Participants largely relied on familiar, low-friction tools such as calendars, phone notes, paper planners, and memory. Few used a dedicated task-management app for daily lists, while nearly half had no system for tracking achievements or milestones. Many cited frusterations with existing apps, including difficult or inconsistent UI interactions, hierarchy and organization that didn't make sense to them, or the app just not being engagement enough to stick with for very long.
                </Typography>
                <Typography sx={{ ...globalStyles.paragraph }}>
                 Several participants explicitly mentioned ADHD or executive-function challenges, while others described difficulty with attention, motivation, procrastination, and digital distraction. This shifted the project beyond consolidating tools: the system also needed to help people preserve context, recover after interruptions, and stay engaged without introducing more complexity.
                </Typography>
                <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>A Targeted Look at Memory and Long-Term Recall</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            Because I was considering a searchable archive of completed activity, I conducted three follow-up interviews about how people retrieve past information such as appointment dates, receipts, and maintenance records. Participants relied on three different strategies: browsing physical records, reconstructing details through contextual memory, or searching digital sources such as email and online portals.
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            These patterns supported preserving completed activity as searchable history and informed flexible retrieval through keywords, dates, categories, and related details.
          </Typography>
          <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QualitativeAnswers}
              style={{ marginTop: 50, width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
        <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Exploring Existing Productivity Tools:<br/>What They get Right and Where They Fall Short</Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
            To understand how current products addressed the needs emerging from my survey, I reviewed 12 tools across calendars, spreadsheets, notes, task managers, project boards, and gamified productivity apps. I also analyzed public user reviews to identify recurring expectations, frustrations, and tradeoffs across categories.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
            Users reported that powerful tools like spreadsheets and modular note systems offer depth but can be overwhelming, while simpler apps lack structure for long-term planning. Gamification improves engagement for some users but alienates others seeking efficiency over play. Search and recall remained persistent pain points, with users struggling to locate important information. Color-coding, visuals, and a reliable reminder system were highlighted as important for many users. 
        </Typography>
        <Box sx={{ ...globalStyles.graphic, my: 4 }}>
          <Image
            src={CompetitorResearch}
            style={{ width: '100%', height: 'auto', marginTop: 50 }}
            alt={`Quantitative UX insight chart`}
          />
        </Box>
        </Box>
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
          <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
            Motivation & Focus
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            Many users are drawn to features that make productivity feel more like play. Positive reinforcement and progress visibility keep users engaged during low-energy or distracted states and interruptions. 
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
          <Typography variant="h3" sx={{ ...globalStyles.heading4, mt: 2 }}>
            Tasks
          </Typography>
          <Typography sx={globalStyles.paragraph}>Research showed that users often feel overwhelmed by long lists and struggle to balance immediate responsibilities with future planning. To address this, I built the “Tasks” section of the app. Tasks is the app’s home screen. It’s designed to help users focus on what matters today while keeping longer-term tasks visible and manageable.</Typography>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={3}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenTasksToday}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Three-Part Structure: Today, Backlog, Archive
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                Tasks is divided into three focused views, each serving a different purpose. The today tab is the default active tab, the daily checklist designed to bring today’s plan into focus. The Backlog acts as a holding area for tasks not yet scheduled for today, allowing users to pull them into their daily plan when ready and preventing cognitive overload while preserving visibility. The archive maintains a searchable history of completed tasks, reinforcing a sense of progress and supporting memory and recall.
              </Typography>
            </Grid>
          </Grid>
          {false && <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Suggestions Assistant
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                 Within the today tab, a “suggestions” feature offers low-friction guidance without being prescriptive. The decision to add the suggestions feature was born from users expressing the desire for reminders about important tasks but without being interruptive. 
                 <br/><br/>The app will suggest bringing in backlog items that were on previous daily lists but not completed, tasks which have been designated as low effort, and tasks which are approaching their user-defined due date. 
                 <br/><br/>If the user likes any of the suggestions, they can pull them into today’s task list with the click of a button.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenTasksSuggestions}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
          </Grid>}
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Task Card Design: Fully Optional Customization
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                Task cards were designed to balance simplicity with optional depth. Users can keep tasks lightweight or enrich them with metadata such as color-coding, categories, due dates, subtasks, or goal links. Visual markers and hierarchy help users quickly assess priority and effort without forcing structure on those who prefer minimal input. The key design decision was constraint with choice: advanced organization is available, but never required.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenTasksCardStructure}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenTasksArchive}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Planning Without Pressure
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                The Backlog supports flexible planning, including calendar-based organization, allowing users to preview workload without committing prematurely. This addresses a common research insight: users want visibility into future obligations without feeling locked into rigid schedules.
              </Typography>
            </Grid>
          </Grid>
      


          <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 2 }}>
            Notes
          </Typography>

          <Typography sx={globalStyles.paragraph}>
            Research revealed that many users struggle with focus and forgetfulness, juggling multiple priorities and busy schedules. Ideas can appear at any moment and disappear just as quickly. Traditional productivity apps often require too much structure, creating friction that discourages spontaneous capture.
          </Typography>

          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenNotesStructure}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Designed for Capture First, Organization Later
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                The Notes section was designed as a mental inbox. Whether during a meeting, a jog, or late at night, it allows users to quickly jot down ideas in the moment without worrying about categorization or immediate action. A subtle skeuomorphic notebook aesthetic reinforces familiarity and reduces the intimidation often associated with highly structured productivity systems.
              </Typography>
            </Grid>
          </Grid>



          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Simple, low-structure note-taking and editing
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                The notes editor incorporates flexibility and conventions that users are used to having in notes-focused apps without overcomplication. Users can freely jot ideas using typing or handwriting, reinforcing comfort and accessibility for different thinking styles. They can also attach media like voice recordings, photos, or PDFs to support details with visual and audio reminders.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenNotesEdit}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
          </Grid>



          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenNotesConvert}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Bridging Ideas to Action
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                Crucially, notes are not dead ends. Any note can be converted into a task with a single action, creating a seamless bridge between inspiration and execution. This connection supports the broader system goal: reducing friction between thinking, planning, and doing.
              </Typography>
            </Grid>
          </Grid>
        


          <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 2 }}>
            Goals
          </Typography>

          <Typography sx={globalStyles.paragraph}>
            Most productivity tools emphasize daily task completion but neglect long-term direction. Research participants expressed frustration with losing sight of larger ambitions and resorting to spreadsheets, planners, or abandoning goal tracking altogether due to overwhelm.
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            The Goals section addresses this by breaking ambitious objectives into actionable steps, connecting everyday tasks to broader milestones. This turns a standard to-do system into an actual life management tool.
          </Typography>


          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenGoalsActive}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Bringing Visibility to objectives and aspirations
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                The Goals section is split into active goals and archived goals. The Active goals tab displays all in-progress goals at a glance. Progress indicators provide visual momentum, helping users see advancement over time rather than relying on memory alone. The goal archive tab keeps record of all previously completed goals and their completion dates, providing a clean interface while preserving historical context.
              </Typography>
            </Grid>
          </Grid>



          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Progress Without Clutter
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                Users define the title, description, due date, attachments, and goal milestones. Milestones serve as building blocks for larger goals. For example, a goal like “Record an album” might include milestones such as “write music,” “record songs,” “design album cover,” and “distribute album.”
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenGoalsGoal}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
          </Grid>


          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenGoalMilestone}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                From Ambition to Actionable steps
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                Milestones create visible progress while preventing large ambitions from feeling paralyzing. Each milestone can connect directly to related tasks, ensuring that daily checklists contribute meaningfully to long-term outcomes. This hierarchy (Goal → Milestone → Task) creates alignment across the system, reinforcing purpose behind everyday actions.
              </Typography>
            </Grid>
          </Grid>



          <Typography variant="h4" sx={{ ...globalStyles.heading4, mt: 2 }}>
            Rewards
          </Typography>
          <Typography sx={globalStyles.paragraph}>
            Sustained motivation emerged as a critical challenge in research. Many users described strong initial momentum followed by drop-off, especially during periods of stress, distraction, or mental fatigue. While gamification can increase engagement, it can alienate audiences when overdesigned. The Rewards section introduces a lightweight motivational layer that supports follow-through through flexibility and personalization without turning productivity into a game.
          </Typography>



          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenRewardsInventory}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                The Challenge with motivation – it’s personal 
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                Designing this section was tricky because motivation is highly individual. Some users enjoy gamified elements, like earning points or upgrading an avatar, while others prefer simpler, real-world incentives. Forcing a single style of motivation would conflict with the app’s emphasis on flexibility.
              </Typography>
              <Typography sx={globalStyles.paragraph}>
                To balance this, the section allows users to define what motivates them, set meaningful incentives, and determine how rewards relate to personal achievement. Gamification is present, but subtle, supporting engagement without imposing rigid systems.
              </Typography>
            </Grid>
          </Grid>



          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={7}>
              <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                Flexible Reinforcement
              </Typography>
             <Typography sx={globalStyles.paragraph}>
               The Rewards section is divided into three tabs: In Progress, Shop, and Inventory. Users earn points by completing meaningful achievements such as finishing subtasks, progressing toward goals, or consistently engaging with the system. Progress indicators make effort visible, reinforcing momentum during low-energy periods. Rather than imposing a predefined reward model, users define what incentives matter to them and assign their own point values. 
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenRewardsInProgress}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
          </Grid>


          {false && <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenRewardsCreation}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
               <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
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
            </Grid>
          </Grid>}

        
    
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
              <Box sx={globalStyles.graphic}>
                <Image
                  src={LMScreenRewardsShop}
                  width={250}
                  alt="Image of screen: tasks - today"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
                <Typography sx={{ ...globalStyles.paragraph, fontStyle: "italic" }}>
                  Encouragement through prize redemption
                </Typography>
                 <Typography sx={globalStyles.paragraph}>
                  The shop is a virtual storefront where users spend points earned from achievements. Reward creation is open-ended and user defined, allowing the user to determine what incentivizes them and assign point values accordingly. Users who enjoy gamified reinforcement can lean into it, while those who prefer a straightforward productivity tool can largely ignore it. This approach preserves autonomy while supporting multiple motivational styles within a single framework.
                 </Typography>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h3" sx={{ ...globalStyles.heading1, mb: 3, mt: 5}}>Learning through User Testing my Design</Typography>

        <Typography sx={{ ...globalStyles.paragraph }}>
          After developing my screens designs and prototype, in order to really test out my research-informed assumptions in real time, I conducted moderated usability testing with three participants ranging from low to high experience with productivity tools: Debbie, a pen-and-paper organizer; Jenny, a neurodivergent user with some experience using digital scheduling apps; and Bella, an experienced productivity app power user and self-described gamer. The tests uncovered some very interesting insights.
        </Typography>



      <Typography variant="h4" sx={{ ...globalStyles.heading2, mt: 3 }}>Users Struggled with Terminology and Information Hierarchy</Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          While participants understood the app’s overall purpose, they consistently relied on their own mental models rather than the system’s definitions and organizational hierarchy. As a result, key terms like goals, milestones, tasks, subtasks, and achievements were often used interchangeably, reflecting how these concepts overlap in everyday language.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          The term “<i>milestone</i>” in particular caused confusion, with users misinterpreting it, replacing it with other terms, or feeling it added unnecessary complexity to the hierarchy.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          Overall, the layered terminology created friction rather than clarity. These findings informed the decision to simplify the hierarchy by removing “milestones” as a distinct concept.
        </Typography>
        <Grid container direction="row"  alignItems="stretch" sx={{ mb: 2 }}>
          <Grid item sx={{ width: 3, backgroundColor: "#D3D3D3", mr: 2 }}/>
          <Grid item xs={10}>
            <Typography sx={{ ...globalStyles.paragraph, mb: 0, fontStyle: "italic" }}>
              “I do like the sub-categories, or the milestones I mean.. You know, the subtasks.” 
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <video width={"90%"} height="auto" controls>
            <source src="/Usability_clips_TERMS_AND_HIERARCHY.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
          



        <Typography variant="h4" sx={{ ...globalStyles.heading2, mt: 5 }}>Users Valued the Support for Recall and Follow-Through</Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          Participants highly valued the app's emphasis on recall and follow-through. The ability to capture ideas, revisit them later, and gradually transform them into goals and tasks resonated strongly with users. Features like the progress tracking, backlogging, and archiving were viewed aa safeguards against forgetting unfinished work, helping users feel more confident that important ideas wouldn't slip through the cracks."
        </Typography>
        <Grid container direction="row"  alignItems="stretch" sx={{ mb: 2 }}>
          <Grid item sx={{ width: 3, backgroundColor: "#D3D3D3", mr: 2 }}/>
          <Grid item xs={10}>
            <Typography sx={{ ...globalStyles.paragraph, mb: 0, fontStyle: "italic" }}>
              “Taking [a brainstorm] into an actionable item.. I like that a lot”
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="stretch">
          <Grid
            item
            sx={{
              width: 3,
              backgroundColor: "#D3D3D3",
              mr: 2,
            }}
          />
          <Grid item xs={10}>
            <Typography sx={{ ...globalStyles.paragraph, mb: 0, fontStyle: "italic" }}>
              “I really like that there’s a backlog because I hate when I don’t have time to do a thing and it just sits in my list of tasks, and I can’t complete it but I also can’t get it out of there”
            </Typography>
          </Grid>
        </Grid>


        <Box sx={{ mt: 5 }}>
          <video width={"90%"} height="auto" controls>
            <source src="/Usability_clips_FOLLOWTHRU.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>



        <Typography variant="h4" sx={{ ...globalStyles.heading2, mt: 5 }}>Too Many Features and Options Increased Cognitive Load</Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          One of the primary design challenges was balancing flexibility with simplicity. While participants found many features valuable in isolation, several became overwhelmed by the number of layers, sorting systems, configuration options, and overlapping concepts throughout the app. This was especially apparent on task cards and task creation screens, where multiple indicators intended to aid decision-making instead created confusion. The findings reinforced the need to prioritize clarity and focus over feature completeness, including removing lower-value elements such as the “time required” attribute.
        </Typography>
        <Grid container direction="row"  alignItems="stretch" sx={{ mb: 2 }}>
          <Grid item sx={{ width: 3, backgroundColor: "#D3D3D3", mr: 2 }}/>
          <Grid item xs={10}>
            <Typography sx={{ ...globalStyles.paragraph, mb: 0, fontStyle: "italic" }}>
              “For me, it's too much. I’m going to get more distracted the more layers there are.” 
            </Typography>
          </Grid>
        </Grid>



        <Box sx={{ mt: 5 }}>
          <video width={"90%"} height="auto" controls>
            <source src="/Usability_clips_TASKS.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>


        <Typography variant="h4" sx={{ ...globalStyles.heading2, mt: 5 }}>The Rewards System Created Emotional Engagement and Motivation</Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          Users showed visible excitement when interacting with the rewards system, responding positively to earning points, tracking progress, and the ability to define their own rewards. The concept was immediately understood across all experience levels, including users who did not identify as gamers.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          This level of enthusiasm was unexpected and highlighted the motivational potential of lightweight gamification in a productivity context. The key takeaway is to continue developing and expanding upon the rewards system while ensuring it remains approachable and supportive.
        </Typography>
        <Grid container direction="row"  alignItems="stretch" sx={{ mb: 2 }}>
          <Grid item sx={{ width: 3, backgroundColor: "#D3D3D3", mr: 2 }}/>
          <Grid item xs={10}>
            <Typography sx={{ ...globalStyles.paragraph, mb: 0, fontStyle: "italic" }}>
              “I love a reward. I don’t do anything unless there’s a reward.” 
            </Typography>
          </Grid>
        </Grid>


        <Box sx={{ mt: 5 }}>
          <video width={"90%"} height="auto" controls>
            <source src="/Usability_clips_REWARDS.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      


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
            Usability testing later validated some of these decisions while surfacing key areas for refinement. Participants responded strongly to the rewards system, visual progress tracking, and the ability to convert ideas into actionable tasks. However, they also highlighted friction around terminology, overlapping hierarchy concepts, and feature density, particularly in task creation.
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            Moving forward, the next iteration of the design will focus on reducing cognitive load and clarifying system language by simplifying hierarchical relationships and removing or consolidating low-value attributes. 
          </Typography>
        </Box>











      
      </Box>
    </div>
  );
};

export default LifeManagementAppContainer;