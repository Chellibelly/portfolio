"use client"; 
import React, {  } from 'react';
import { Box, Grid, Paper, Typography, List, ListItem } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import Header from '../Header';
import Image from 'next/image';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import QualitativeAnswers from '../../../public/LM_Survey_Qual.png';
import CompetitorResearch from '../../../public/LM_Competitor_Research.png';
import InterviewPersonas from '../../../public/Interview_Personas.png';
import AffinityDiagram from '../../../public/LM_Affinity_Diagram_Full.jpg';
import UserJourneys from '../../../public/LM_User_Journeys.png';
import InformationArchitecture from '../../../public/LM_Information_Architecture.png';

const LifeManagementAppContainer = () => {
  return (
    <div>
      <Header/>
      <Box
        sx={{
          maxWidth: '80%',
          margin: '0 auto',
          padding: 5,
          mt: 5
        }}
      >
        <Box
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
          <Grid container justifyContent="center" justifyItems="center">
              <Grid item xs={4} sx={{ marginRight: 8, mt: 10 }}>
                <Box sx={globalStyles.graphic}>
                  <Image
                      src={ToDoListImage}
                      width="100%"
                      alt="An image of the UX process with the Analysis step highlighted"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 6}}>
                  <Typography variant='h1' sx={globalStyles.heading1}>A life full of lists, but no roadmap</Typography>
                  <Typography variant='h2' sx={globalStyles.heading2}>
                    Project Overview
                  </Typography>
                  <Typography variant='body1' sx={globalStyles.paragraph}>
                      “I wish that one app stored all of the data/goals in one place — financial, budget, calendar, chores, etc.” – Survey Respondent
                      <br/><br/>As adults, our responsibilities stretch from everyday chores like laundry to big life priorities like writing a will. Our to-dos, goals, and milestones often live scattered across notebooks, sticky notes, apps, and calendar events.
                      <br/><br/>I wanted to create something more unified: a tool not just for daily productivity, but for managing life as a whole. My initial mission was to design a life management app that makes it easier to stay organized, manage deadlines, and track progress toward personal goals and milestones.
                      <br/><br/>But through user research, a clearer theme began to emerge: many people, especially those with ADHD, anxiety, or executive dysfunction, struggled not because they lacked goals, but because they lacked systems that supported memory, focus, and follow-through. That insight shifted the direction of the project. What emerged was a flexible system that motivates daily productivity, memory support, and long-term goal tracking and record-keeping.
                  </Typography>
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
            The Disconnect: Why Existing Tools<br/> are Falling Short
          </Typography>
          <Typography variant="h2" sx={{ ...globalStyles.heading2, mt: 2 }}>
            Research & Revelations
          </Typography>
          <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Research Methods</Typography>
          <Typography variant="h3" sx={{ ...globalStyles.heading4, color: "blue" }}>1) Survey (Google Forms, 15 respondents):</Typography>
          
          
          
          
























          
          
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={5}>
              <Typography sx={{ ...globalStyles.paragraph }}><b>Purpose:</b></Typography>
                <Typography sx={{ ...globalStyles.paragraph }}>Included multiple-choice and open-ended questions to capture both quantitative trends and personal context around task management, tools used, frustrations, and motivation challenges. Specifically the questions I asked were focused on answering the following questions:</Typography>
                <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        How do people currently organize their daily to-do lists, long-term goals, and personal achievements or milestones?
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        Which types of tasks, activities, or responsibilities do people consider most important to track?
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        What tools or apps are people currently using to manage their tasks and goals, and what do they like about them?
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        What frustrations or limitations do users experience with existing productivity tools?
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        What factors most commonly derail users from staying productive or keeping up with their to-do lists?
                    </Typography>
                  </ListItem>
              </List>
            </Grid>
            <Grid xs={6}>
              <Typography sx={{ ...globalStyles.paragraph }}><b>Insights:</b>  </Typography>    
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                        Fragmentation is the norm:
                    </Typography>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        Most participants used a mix of digital apps, paper planners, and calendars. No single tool captured the full scope of daily, long-term, and milestone-based organization.
                    </Typography>
               
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                        Long-term goals are often untracked:
                    </Typography>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        While 80% tracked short-term tasks like appointments and chores, only 27% actively tracked long-term goals like financial planning or legal paperwork. 47% said they had no system at all for logging achievements or milestones.
                    </Typography>
                 
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                        Distractions and executive dysfunction are major barriers:
                    </Typography>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        A recurring theme in open responses was the impact of ADHD, depression, and executive dysfunction — users described being easily derailed by distractions, low motivation, or mental fatigue.
                    </Typography>
                 
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                        People want more than just task lists:
                    </Typography>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        Respondents craved tools that support memory and focus, integrate seamlessly across devices, and offer emotional reinforcement. Several wished for a more holistic system to track all aspects of life in one place — not just tasks, but goals, habits, and achievements.
                    </Typography>
                 
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                        Customization and simplicity matter:
                    </Typography>
                    <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                        Many users liked tools like Google Calendar and Notes because of their ease and cross-device sync — but found them clunky when managing many lists or deeply organizing content. Several expressed frustration with cluttered UIs, app limitations, or lack of offline access.
                    </Typography>   
            </Grid>
          </Grid>
          <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QualitativeAnswers}
              style={{ marginTop: 50, width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>





































      <Typography variant="h3" sx={{ ...globalStyles.heading4, color: "blue", mt: 10 }}>2) Short Interviews (3 participants):</Typography>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={5}>
          <Typography sx={{ ...globalStyles.paragraph }}>
            <b>Purpose:</b>
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            To explore how people record, recall, and locate important life information — especially for events spaced far apart — I conducted short, semi-structured interviews with three participants with a predefined set of questions, followed with questions I came up with on the spot to find out more details about each of the participants initial answers. Each was asked a series of prompts designed to assess their memory, storage methods, and retrieval habits related to real-life milestone events.
            <br/><br/>Rather than asking participants to directly answer personal questions, I asked them to reflect on whether they knew the answers, and how they would go about finding them if not. Topics included:
          </Typography>
            <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Their last surgery, major dental procedure, or doctor's appointment
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Their last car or appliance maintenance
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    The date they last signed a lease or mortgage
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Their pet's most recent vet visit and any treatments or prescriptions
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{ ...globalStyles.paragraph }}><b>Insights:</b> </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Digital search is the default fallback
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Digital search is the default fallback for most participants who don’t remember details offhand. Email inboxes, digital portals (like Kaiser or a vet app), and calendar histories were common sources.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                People rely on associations and life events
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                People rely on associations and life events to mentally timestamp milestones — like job changes, moves, or emotional memories (“I remember because it was right before my first day at work”).
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Paper record-keeping is still alive and well
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Paper record-keeping is still alive and well, though often unstructured. One participant kept a binder organized by topic, but admitted finding documents required flipping through loosely stacked records.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Long-term memory was variable
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Long-term memory was variable, with most participants confident they'd remember rough months or years, but not exact dates.
            </Typography>
          </Grid>
           <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={InterviewPersonas}
              style={{ width: '100%', height: 'auto', marginTop: 50 }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
      </Grid>






































        <Typography variant="h3" sx={{ ...globalStyles.heading4, color: "blue", mt: 10 }}>3) Competitor/Benchmark Research</Typography>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={5}>
          <Typography sx={{ ...globalStyles.paragraph }}><b>Purpose:</b></Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>To understand the landscape of existing tools—and identify gaps my life‑management app could fill—I analyzed twelve popular apps across six categories. I selected these apps based on recommendations in online productivity forums, mentions from my survey respondents, and prominent features highlighted in app store reviews. The categories were:</Typography>
             <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Calendar (Google Calendar)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Spreadsheets (Excel, Google Sheets)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Notes (Evernote, Apple Notes, OneNote, Notion)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    To‑Do Lists (Todoist)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Kanban (Trello, Asana)
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                    Gamified Habit Trackers (Habitica, Finch)
                </Typography>
              </ListItem>
          </List>
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{ ...globalStyles.paragraph }}><b>Insights:</b></Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Fragmented feature sets
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Every tool excels at one slice of life‑management (scheduling, data viz, notes, tasks, boards, or motivation) but none offer end‑to‑end coverage.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Heavy vs. light trade‑off
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Power users love spreadsheets and Notion for flexibility, but novices are overwhelmed; conversely, lightweight apps (Notes, Google Calendar) lack depth.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Motivation needs vs. friction
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Gamification (Habitica) boosts engagement, yet can alienate users who just want a quick list. Many users asked for “some gamification, not a whole game.”
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Search & recall pain points
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Calendar and Notes apps promise search, but users still struggle with inconsistent notifications or buried lists—echoing your interview findings.
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0, fontWeight: "bold" }}>
                Consistency & context
            </Typography>
            <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                Reviewers repeatedly call for better integration between events, tasks, and milestones. They want “one source of truth,” color‑coding, and reliable reminders across contexts.
            </Typography>
          </Grid>
           <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={CompetitorResearch}
              style={{ width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
</Grid>













































        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={globalStyles.heading1}>
            Bridging the Gap: Mapping Needs <br/>to Opportunities
          </Typography>
          <Typography variant="h2" sx={{ ...globalStyles.heading2, mt: 2 }}>
            Research & Revelations
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            After completing surveys, interviews, and competitive research, clear patterns began to emerge. While people use a variety of tools to manage their day-to-day responsibilities, very few had a cohesive system that supported both short-term task execution and long-term life management. Fragmentation, motivation challenges, memory reliance, and tool limitations consistently showed up across the data.
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            Key themes I uncovered included:
          </Typography>
          <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Fragmented systems:</b> Users juggle between apps, paper, and memory—resulting in gaps, forgetfulness, and task overload.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Tool overload vs. under-support:</b> People appreciate the strengths of individual tools (like reminders or calendars), but often feel those tools lack critical features—like prioritization, record-keeping, or integration.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Memory as a system:</b> Many users rely heavily on memory, emotion, or inbox searches to recall important dates—suggesting a need for better passive record-keeping.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Motivation & follow-through struggles:</b> Especially among users with ADHD or executive dysfunction, there was a desire for systems that offer emotional support, structure, or gamified motivation.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Customization & flexibility matter:</b> People want tools that work the way their brain works—not rigid templates or overwhelming interfaces.
              </Typography>
            </ListItem>
          </List>
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
            1. Motivation & Focus
          </Typography>
          <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Gamification –</b> Users are drawn to features that make productivity feel more like play.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Reward Systems –</b> Positive reinforcement, from check marks to streaks, keeps users engaged.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Emotional Support –</b> Some users seek affirmation, encouragement, or mental health-friendly experiences.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Neurodivergence –</b> Several respondents noted challenges tied to ADHD, executive dysfunction, or memory.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Distractions –</b> Social media, interruptions, and unstructured time often derail progress.
              </Typography>
            </ListItem>
          </List>
          <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
            2. Access, Sharing & Integration
          </Typography>
          <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Sign-In Friction –</b> Log-in requirements and app switching are major sources of frustration.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Data Portability –</b> Users want the ability to move, export, or back up their data with ease.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Collaboration –</b> Some workflows require teamwork or shared lists, especially for families.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Cross-Device Sync –</b> Tools that sync across desktop and mobile win user loyalty.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>App Integrations –</b> Popular apps often work best when connected with calendars, reminders, or other tools.
              </Typography>
            </ListItem>
          </List>
          <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
            3. Task Creation & Management
          </Typography>
          <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Subtasks –</b> Users want to break larger goals into digestible pieces.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Scheduling & Repeating Tasks –</b> Flexibility around deadlines and routines is key.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Reminders & Notifications –</b> Time-based and contextual nudges help prevent forgetfulness.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Progress and Completion Tracking –</b> Users like visual cues, percentages, or milestones.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Analog/Skeuomorphic Desires –</b> Some people prefer tactile or familiar metaphors, like binders, calendars, or notebooks.
              </Typography>
            </ListItem>
          </List>
          <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
            4. Long-Term Planning & Record Keeping
          </Typography>
          <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Planning Goals –</b> Users need structure for mid- and long-term objectives.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Archiving –</b> People want a way to preserve what's been done—not just delete it.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Reminders & Notifications –</b> Time-based and contextual nudges help prevent forgetfulness.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Journaling & Reflections –</b> Some users want to write about their process, not just track it.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Data Visualizations & Calendars –</b> Visual formats (timelines, graphs) help users make sense of time and progress.
              </Typography>
            </ListItem>
          </List>
          <Typography sx={{ ...globalStyles.paragraph, mt: 3, mb: 0, fontWeight: "bold" }}>
            5. Organization & Prioritization
          </Typography>
          <List sx={{ listStyleType: 'disc', marginLeft: 10 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Colors, Labels, Tags, & Icons –</b> Visual markers help users make quick mental connections.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Priority –</b> The ability to flag or rank importance was a recurring need.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Folders & Hierarchy –</b> Users crave clarity and structure in how tasks are grouped.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Search, Sorting, and Filters –</b> Tools should make it easy to find and manipulate entries.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography sx={{ ...globalStyles.paragraph, mt: 0, mb: 0 }}>
                  <b>Customization –</b> One size doesn’t fit all; users want flexible interfaces that match their mental models.
              </Typography>
            </ListItem>
          </List>
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














































        <Box>
          <Typography sx={globalStyles.heading1}>
            Designing for Flexibility & Follow-Through
          </Typography>
          <Typography variant="h2" sx={{ ...globalStyles.heading2, mt: 2 }}>
            Information architecture, wireframes, and high-fidelity screen design
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>With a clearer understanding of where existing tools fall short, I began designing an experience that better supports real user needs — especially for those who struggle with motivation, mental load, or staying on top of daily tasks. I focused on reducing friction, surfacing what matters most, and creating moments of encouragement and clarity. The design process was guided by real user feedback, mental models, and emotional needs uncovered during research, resulting in a solution that feels supportive, flexible, and genuinely helpful.</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>Information Architecture</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>To support users in staying focused, feeling in control, and making meaningful progress, I designed an information architecture that emphasizes quick access, clear categories, and flexible navigation. The structure needed to accommodate both short-term actions and long-term planning without overwhelming users — especially those struggling with distractions, executive dysfunction, or complex routines.</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>I structured the app around five primary sections accessible via a persistent bottom navigation bar: Notes, Tasks, Goals, Rewards, and Settings. Each section serves a distinct purpose but is designed to flow seamlessly into the others—helping users move from brainstorming to execution to reflection, without losing momentum. The navigation is intentionally minimal to reduce cognitive overload while still offering the flexibility needed for varied workflows and attention styles.</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>Below is the app’s information architecture, organized into five main sections. This structure directly supports users’ needs for focus, flexibility, and follow-through by clearly separating key flows and allowing easy navigation between capturing ideas, managing tasks, tracking goals, and earning rewards.</Typography>
          <Image
              src={InformationArchitecture}
              style={{ width: '100%', height: 'auto', marginTop: 20 }}
              alt={`Quantitative UX insight chart`}
            />
          <Typography sx={{ ...globalStyles.paragraph }}>
            This design phase brought the insights from user research to life through carefully considered structures, interactions, and features. Rather than chasing novelty, I focused on solving real usability pain points — especially around organization, memory support, and task overwhelm. Each section of the app reflects user goals and habits uncovered through research, balancing flexibility with structure, and depth with simplicity. While the visual design supports clarity and calm, it’s the thoughtful functionality that turns this tool into something people can actually rely on.
          </Typography>
        </Box>
        <Box>
          <Typography sx={globalStyles.heading1}>
            Looking Ahead
          </Typography>
          <Typography variant="h2" sx={{ ...globalStyles.heading2, mt: 2 }}>
            Next Steps & Iteration
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            This case study reflects the full end-to-end process of research, analysis, design, and rationale — and I’m proud of how far the project has come. The next step is to build a working prototype and conduct usability testing to validate assumptions, uncover friction points, and continue refining the experience.
            Longer-term, I'd like to explore:
            Onboarding and personalization flows to support different user types (e.g., students, creatives, neurodivergent users)
            Data syncing and privacy considerations
            Expanded reward mechanics to sustain motivation over time
            For now, this project represents a thoughtful and research-driven approach to solving real-life planning challenges — and a strong foundation for future iteration.
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            This case study represents the first full design cycle of my life management app — from early research through to detailed screen design. While the current version thoughtfully addresses many user needs around focus, flexibility, and follow-through, no product is ever truly finished. I view this as a strong foundation to build from, not an endpoint.
            Looking ahead, my next priority is to create an interactive prototype of the app using Figma or a similar tool. This will allow for usability testing with real users, especially those who identified as neurodivergent during my initial research. I’m particularly interested in testing how intuitive the task creation flow is, whether users feel supported in connecting daily tasks to larger goals, and how motivating the rewards system truly is in practice.
            Based on those learnings, I plan to refine key flows, polish interactions, and explore areas where the interface can better support memory, clarity, and autonomy. Longer term, I’d love to partner with a developer or continue into low-code tools to bring the app to life and further test its impact.
          </Typography>
        </Box>

































        <Box>
          <Typography sx={globalStyles.heading1}>
            Lessons Learned
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            - Narrowing the target audience sharpened the design focus. Initially, I aimed to build an all-encompassing life management app for everyone, but research revealed that neurodivergent users and those with executive dysfunction had unique needs that were often unmet by existing solutions. Focusing on supporting memory, motivation, and flexibility for these users gave the app clearer purpose and more meaningful features.
            - Skeuomorphic elements and analog cues can be comforting and motivating. Including touches like the spiral notebook background in Notes was inspired by user preferences for tactile, familiar interfaces that help with memory and focus. This reinforced that sometimes blending digital with analog-like design can improve usability, especially for neurodivergent users.
            - Feature complexity must be balanced with ease of use. The Tasks section, while feature-rich to support prioritization, effort estimation, and subtasks, had to stay intuitive enough to avoid overwhelming users who might already struggle with focus or executive function.
            - Flexibility in workflows is crucial. Allowing users to move tasks between Today and Backlog, customize categories and labels, and tie tasks to long-term goals emerged as critical for helping users stay on track without feeling locked into rigid systems.
            - User research is an ongoing process, not a one-time step. The iterative discovery process revealed nuances in user needs and frustrations that guided feature prioritization and design decisions. I’m committed to continuing user testing and iteration to refine the app’s usability and impact.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LifeManagementAppContainer;