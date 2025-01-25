"use client"; 
import React, {  } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import Header from "../Header";
import Image from 'next/image';

const CurrentProjectsContainer = () => {
  return (
    <div>
      <Header/>
      <Box container sx={{ display: "flex", justifyContent: "center", backgroundColor: 'white', position: "fixed", top: "10%"}}>
         <Grid container justifyContent="center" justifyItems="center">
            <Grid item xs={4} sx={{ marginRight: 8 }}>
                <Image
                    className='graphic'
                    src={ToDoListImage}
                    width="100%"
                    alt="An image of the UX process with the Analysis step highlighted"
                />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: 6}}>
                <Typography variant='h1' className="heading1">A Project in Progress</Typography>
                <Typography variant='h2' className="heading2">
                  A Life Management Application
                </Typography>
                <Typography variant='body1' className="paragraph">
                    <b>Problem to Solve:</b> {" "}
                    As adults, we have ever-growing to-do lists comprised of tasks spanning from "do the laundry” to “schedule dentist appointment” to “write a will.” Our goals are split across various lists, notebooks, calendars, and apps.
                    <br/><br/>
                    My goal is to understand how people feel about the way they manage their goals and productivity. My mission if to design a way to make it easier to stay organized, manage deadlines, and track goals and milestones.
                    <br/><br/>
                    <b>More to come!</b>
                </Typography>
            </Grid>
        </Grid> 
      </Box>
    </div>
  );
};

export default CurrentProjectsContainer;