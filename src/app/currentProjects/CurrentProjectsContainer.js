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
                <Typography variant='h1' className="heading1">My current project in progress:</Typography>
                <Typography variant='h2' className="heading2">
                    A Life Management application that's much, much more than a to-do list
                </Typography>
                <Typography variant='body1' className="paragraph">
                    <b>Problem to Solve:</b> As adults, we often end up with a mix of to-do lists, from tasks like "write a will" to "do the laundry," all cluttered together. Our goals usually get split across various lists, calendars, apps, or even just kept in our heads—sometimes forgotten until we’re reminded. These lists often lack the organization needed to help balance short-term chores with long-term goals <br/><br/>My goal is to understand how lists like these make people feel about their lives and levels of productivity and how we can make it easier to stay organized, manage deadlines, and track goals.<br/><br/><b>More to come!</b>
                </Typography>
            </Grid>
        </Grid> 
      </Box>
    </div>
  );
};

export default CurrentProjectsContainer;