"use client"; 
import React, {  } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import HeaderMobile from '../HeaderMobile';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import Image from 'next/image';
import * as globalStyles from '../styles/globalStyleConsts';

const LifeManagementAppMobile = () => {
  return (
    <div>
      <HeaderMobile/>
      <Box display="flex" alignItems="center" height="100vh" flexDirection="column" style={{marginBottom: "380px", marginTop: 50}}>
        <Typography variant='h1' sx={{ ...globalStyles.heading1, margin: 3 }}>A Project in Progress</Typography>
        <Typography variant='h2' sx={{ ...globalStyles.heading2, ml: 3, mr: 3 }}>
          A Life Management Application
        </Typography>
        <Image
          src={ToDoListImage}
          width={500}
          alt="An image of the UX process with the Analysis step highlighted"
        />
        <Typography variant='body1' sx={{ ...globalStyles.paragraph, margin: 3 }}>
          <b>Problem to Solve:</b>{" "}As adults, we have ever-growing to-do lists comprised of tasks spanning from "do the laundry” to “schedule dentist appointment” to “write a will.” Our goals are split across various lists, notebooks, calendars, and apps.
          <br/><br/>
          My goal is to find out how lists like these make people feel about their lives and levels of productivity and what would better help them keep organized, manage their deadlines, and keep track of their goals much more easily.
          <br/><br/>
          <b>More to come!</b>
        </Typography>
      </Box>
    </div>
  );
};

export default LifeManagementAppMobile;