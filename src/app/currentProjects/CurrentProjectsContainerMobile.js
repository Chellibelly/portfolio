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
      <Box display="flex" alignItems="center" height="100vh" flexDirection="column" style={{marginBottom: "500px"}}>
        <Typography variant='h1' className="heading1" sx={{ margin: 3 }}>My current project in progress:</Typography>
        <Typography variant='h2' className="heading2" sx={{ ml: 3, mr: 3 }}>
            A Life Management application that's much, much more than a to-do list
        </Typography>
        <Image
          src={ToDoListImage}
          width={500}
          alt="An image of the UX process with the Analysis step highlighted"
        />
        <Typography variant='body1' className="paragraph" sx={{ margin: 3 }}>
          <b>Problem to Solve:</b> 
          As adults, we often end up with a mix of to-do lists, from tasks like "write a will" to "do the laundry," all cluttered together. Our goals usually get split across various lists, calendars, apps, or even just kept in our heads—sometimes forgotten until we’re reminded. These lists often lack the organization needed to help balance short-term chores with long-term goals Often, our goals are split between several physical lists, calendars, mobile apps, and even just kept track of mentally (or forgotten about until we're reminded of them). They lack the hierachy, organization, or cohesiveness needed to help us schedule and manage short term chores with our long term goals and responsibilities. <br/><br/>My goal is to find out how lists like these make people feel about their lives and levels of productivity and what would better help them keep organized, manage their deadlines, and keep track of their goals much more easily.<br/><br/><b>More to come!</b>
          <br/><br/><br/>
        </Typography>
      </Box>
    </div>
  );
};

export default CurrentProjectsContainerMobile;