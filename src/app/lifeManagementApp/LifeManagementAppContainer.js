"use client"; 
import React, {  } from 'react';
import { Box, Grid, Paper, Typography, List, ListItem } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import Header from '../Header';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import QuantitativeAnswers1 from '../../../public/LM_Quantitative_Answers_1.png';
import QuantitativeAnswers2 from '../../../public/LM_Quantitative_Answers_2.png';
import QuantitativeAnswers3 from '../../../public/LM_Quantitative_Answers_3.png';
import QuantitativeAnswers4 from '../../../public/LM_Quantitative_Answers_4.png';

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
          <Typography sx={{ ...globalStyles.paragraph }}><b>Purpose:</b> Included multiple-choice and open-ended questions to capture both quantitative trends and personal context around task management, tools used, frustrations, and motivation challenges. Specifically the questions I asked were focused on answering the following questions:</Typography>
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
          <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QuantitativeAnswers4}
              style={{ width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
          <Typography sx={{ ...globalStyles.paragraph, mt: 5 }}><b>Results:</b>  Included multiple-choice and open-ended questions to capture both quantitative trends and personal context around task management, tools used, frustrations, and motivation challenges. Specifically the questions I asked were focused on answering the following questions:</Typography>
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
           <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QuantitativeAnswers4}
              style={{ width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
          <Typography variant="h3" sx={{ ...globalStyles.heading4, color: "blue", mt: 10 }}>2) Short Interviews (3 participants):</Typography>
            <b>Purpose:</b> To explore how people record, recall, and locate important life information — especially for events spaced far apart — I conducted short, semi-structured interviews with three participants with a predefined set of questions, followed with questions I came up with on the spot to find out more details about each of the participants initial answers. Each was asked a series of prompts designed to assess their memory, storage methods, and retrieval habits related to real-life milestone events.
            <br/><br/>Rather than asking participants to directly answer personal questions, I asked them to reflect on whether they knew the answers, and how they would go about finding them if not. Topics included:
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
          <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QuantitativeAnswers4}
              style={{ width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
          <Typography sx={{ ...globalStyles.paragraph, mt: 5 }}><b>Results:</b> 
            To explore how people record, recall, and locate important life information — especially for events spaced far apart — I conducted short, semi-structured interviews with three participants. Each was asked a series of prompts designed to assess their memory, storage methods, and retrieval habits related to real-life milestone events.
            <br/><br/>Rather than asking participants to directly answer personal questions, I asked them to reflect on whether they knew the answers, and how they would go about finding them if not. Topics included:

          </Typography>
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
           <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QuantitativeAnswers4}
              style={{ width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
          <Typography variant="h3" sx={{ ...globalStyles.heading4, color: "blue", mt: 10 }}>3) Competitor/Benchmark Research</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}><b>Purpose:</b> To understand the landscape of existing tools—and identify gaps my life‑management app could fill—I analyzed twelve popular apps across six categories. I selected these apps based on recommendations in online productivity forums, mentions from my survey respondents, and prominent features highlighted in app store reviews. The categories were:</Typography>
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
          <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QuantitativeAnswers4}
              style={{ width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
          <Typography sx={{ ...globalStyles.paragraph, mt: 5 }}><b>Results:</b></Typography>
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
           <Box sx={{ ...globalStyles.graphic, my: 4 }}>
            <Image
              src={QuantitativeAnswers4}
              style={{ width: '100%', height: 'auto' }}
              alt={`Quantitative UX insight chart`}
            />
          </Box>
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