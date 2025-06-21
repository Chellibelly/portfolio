"use client"; 
import React, {  } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
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
      <Box sx={{ p: 5 }}>
        <Box
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
          <Grid container justifyContent="center" justifyItems="center">
              <Grid item xs={4} sx={{ marginRight: 8 }}>
                <Box sx={globalStyles.graphic}>
                  <Image
                      src={ToDoListImage}
                      width="100%"
                      alt="An image of the UX process with the Analysis step highlighted"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 6}}>
                  <Typography variant='h1' sx={globalStyles.heading1}>Problem</Typography>
                  <Typography variant='h2' sx={globalStyles.heading2}>
                    A Life Management Application
                  </Typography>
                  <Typography variant='body1' sx={globalStyles.paragraph}>
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
        <Box>
          <Typography sx={globalStyles.heading1}>
            Research
          </Typography>
          <Box sx={globalStyles.graphic}>
            <Image
                src={QuantitativeAnswers1}
                width="100%"
                alt="An image of the UX process with the Analysis step highlighted"
            />
          </Box>
          <Box sx={globalStyles.graphic}>
            <Image
                src={QuantitativeAnswers2}
                width="100%"
                alt="An image of the UX process with the Analysis step highlighted"
            />
          </Box>
          <Box sx={globalStyles.graphic}>
            <Image
                src={QuantitativeAnswers3}
                width="100%"
                alt="An image of the UX process with the Analysis step highlighted"
            />
          </Box>
            <Box sx={globalStyles.graphic}>
              <Image
                  src={QuantitativeAnswers4}
                  width="100%"
                  alt="An image of the UX process with the Analysis step highlighted"
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