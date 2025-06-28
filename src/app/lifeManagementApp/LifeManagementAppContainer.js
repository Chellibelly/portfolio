"use client"; 
import React, {  } from 'react';
import { Box, Grid, Paper, Typography, List, ListItem } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import Header from '../Header';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import QualitativeAnswers from '../../../public/LM_Survey_Qual.png';
import QuantitativeAnswers4 from '../../../public/LM_Quantitative_Answers_4.png';
import CompetitorResearch from '../../../public/LM_Competitor_Research.png';
import InterviewPersonas from '../../../public/Interview_Personas.png';

import Image from 'next/image';

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
                      As adults, our responsibilities span a wide spectrum from everyday tasks like “do the laundry” to long-term priorities like “write a will.” Our to-dos, goals, and milestones are often fragmented across notebooks, sticky notes, apps, and calendar events. 
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
        <Box>
          <Typography sx={globalStyles.heading1}>
            Analysis
          </Typography>
        </Box>
        <Box>
          <Typography sx={globalStyles.heading1}>
            Design
          </Typography>
        </Box>
        <Box>
          <Typography sx={globalStyles.heading1}>
            Conclusion
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LifeManagementAppContainer;