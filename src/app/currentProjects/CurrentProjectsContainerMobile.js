"use client"; 
import React, {  } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import HeaderMobile from "../HeaderMobile";
import Image from 'next/image';

const CurrentProjectsContainerMobile = () => {
  return (
    <div>
      <HeaderMobile/>
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
                <Typography variant='h1' className="heading1">My current project in progress:</Typography>
                <Typography variant='h2' className="heading2">
                    A Life Management application that's much, much more than a to-do list
                </Typography>
                <Typography variant='body1' className="paragraph">
                    <b>Problem to Solve:</b> As adults, we tend to keep lists similar to the one you see on the left where items like "write a will" and "do the laundry" are very different types of tasks, but both get lumped into our ever-growing list of things to do. Often, our goals are split between several physical lists, calendars, mobile apps, and even just kept track of mentally (or forgotten about until we're reminded of them). They lack the hierachy, organization, or cohesiveness needed to help us schedule and manage short term chores with our long term goals and responsibilities. <br/><br/>My goal is to find out how lists like these make people feel about their lives and levels of productivity and what would better help them keep organized, manage their deadlines, and keep track of their goals much more easily.<br/><br/><b>More to come!</b>
                </Typography>
            </Grid>
        </Grid> 
      </Box>
    </div>
  );
};

export default CurrentProjectsContainerMobile;