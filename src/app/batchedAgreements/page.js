"use client"; 
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts'

const BatchedAgreementsPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // or a loading spinner if needed
  }


  return (
    <Box sx={{ p: 10 }}>
      <Typography variant='h1' sx={{ ...globalStyles.heading1, mb: 10 }}>
         Batched Agreement Payments
      </Typography>
      <Typography variant='h2' sx={globalStyles.heading2}>
        Problem / User Need: 
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Store associates needed a faster more streamlined way to take initial payments on multiple customer orders / agreements. Existing process was a grueling one-at-a-time process that took 2-5 minutes per agreement, when customers often had 2 – 5 agreements needing initial payments. Causing frustration for customer when having to enter the same card details multiple times or spilt cash transactions up
      </Typography>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>



      <Typography variant='h2' sx={globalStyles.heading2}>
        Design-jam process 
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        The goal of the design jam was mostly to figure out where this new feature would live – would it be in an existing application or new one? If existing which one? And depending on which one, what constraints and trade-off would that introduce?
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        To explore possible directions, I facilitated a design jam with cross-functional team members. During the session, participants used a Crazy 8s exercise to quickly sketch different ways the multi-agreement payment workflow could work. The goal was to generate a range of ideas before narrowing too quickly on one solution.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        After the sketching exercise, the team dot-voted on the concepts that seemed most promising. The highest-voted direction came from a developer’s sketch, which proposed a clearer way to group multiple agreement payments into one user-initiated flow. Although the sketch was rough, the team aligned around the general direction because it addressed the core user need: reducing repetitive agreement-by-agreement payment steps while keeping the workflow understandable.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        I used that selected concept as the starting point for further design exploration. From there, I refined the flow, adapted it to the design system, reviewed it with designers and product partners, incorporated legal and payment-processing constraints, and iterated based on store-user feedback.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        The design jam helped identify a strong initial direction. My work was then to validate, refine, constrain, and evolve that direction into a usable production-ready workflow.
      </Typography>
      <List component="ol"  sx={{ listStyleType: 'decimal', pl: 4 }}>
        <ListItem component="li" sx={{ display: 'list-item' }}>
            <Typography variant='body1' sx={globalStyles.paragraph}>
                Alignment on problem definition
            </Typography>
        </ListItem>
        <ListItem component="li" sx={{ display: 'list-item' }}>
            <Typography variant='body1' sx={{ ...globalStyles.paragraph, mt: -3 }}>
                How might we
            </Typography>
        </ListItem>
        <ListItem component="li" sx={{ display: 'list-item' }}>
            <Typography variant='body1' sx={{ ...globalStyles.paragraph, mt: -3 }}>
                Crazy 8’s
            </Typography>
        </ListItem>
        <ListItem component="li" sx={{ display: 'list-item' }}>
            <Typography variant='body1' sx={{ ...globalStyles.paragraph, mt: -3 }}>
                Dot voting
            </Typography>
        </ListItem>
      </List>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>


      <Typography variant='h2' sx={globalStyles.heading2}>
        Timeline
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        received store feedback, discussed the problem and potential solutions, held a design jam, had a technical feasibility meeting with the payments team, initial design POC presented to UX team (it varied too much from the design system), updated based on UX feedback (good but needed more realistic data and real-world scenarios), presented to users (see user feedback below), presented to stakeholders (mentioned a concern we quelled with the user feedback and also the legal constraint), compared and matched a feature to other payment taking software (UX advised that I focus on happy path, with alternate paths added below, instead of mixing and matching designs), presented to the development team, answered dev questions, piloted in 7 stores, monitored use, expanded, interviewed for feedback
      </Typography>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>


      <Typography variant='h2' sx={globalStyles.heading2}>
        Constraints
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        The solution needed to align with the existing design system and reuse established patterns where possible so the experience felt consistent with the broader product and could be implemented efficiently. The feature had to support multiple agreements at once without making the payment flow confusing, risky, or overwhelming. The workflow needed to simplify multi-agreement payments while still making it clear which agreements were included, what amount was being paid, and what action the store user was about to take. Because the feature involved taking payments, the design needed to prioritize clarity, confirmation, and error prevention around selected agreements, payment amounts, totals, and payment method. The design had to improve the user-facing workflow while fitting into existing product, payment, and operational structures.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Legal and Payment Authorization Constraint (Because we were putting it in order hub)
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Because this workflow allowed store associates to process payments while obtaining customer permission outside of the shared in-person software flow, the design needed to include additional safeguards around consent, privacy, and payment authorization.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Legal guidance shaped the final interaction pattern, requiring the experience to verify customer authorization without exposing unnecessary stored payment details to the associate. This added complexity to the flow, but it also strengthened the design by making authorization clearer and reducing risk during card-on-file payments.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Payment Processing / API Constraint (Technical Constraint: Batch Action vs. Separate Transactions)
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}></Typography>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>



      <Typography variant='h2' sx={globalStyles.heading2}>
        Payment Processing / API Constraint
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        An important technical constraint emerged during cross-functional conversations with the Payments team. The original design direction assumed that multiple agreement payments could be batched into a single transaction. However, the Payments team clarified that each agreement payment would need to remain a separate backend transaction, even if the store user initiated them through one button click in the interface.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        This changed the design direction. Because the payments would run as a series of individual transactions, the team needed to account for partial success, failure, and recovery states. If one transaction failed due to insufficient funds or another payment issue, the remaining transactions would not run. This prevented the system from continuing to attempt additional charges after a failure, reducing the risk of customer confusion or potential financial harm.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        To support this behavior, the design included a result modal that clearly communicated what happened after the payment attempt. The modal showed which transactions completed successfully, which transaction failed, and which remaining transactions did not run. From there, the store user could close the modal and either retry the unsuccessful agreements with a different payment method or exit the flow.
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        This constraint pushed the design beyond a simple “batch payment” action and required clearer status communication, error handling, and recovery paths. 
      </Typography>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>


      <Typography variant='h2' sx={globalStyles.heading2}>
        User Feedback: (2 users interviewed): 
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Users didn’t really care to see which agreements succeeded if they all did, they didn’t care which failed if they all failed, and didn’t care what wasn’t attempted. They really just wanted to know what succeeded and what didn’t so they could change the payment type and try again. A “try again” button on the modal itself was useless because they said usually they would change payment type if it failed. Agreement status would be useful for context and visibility (“I can’t tell if they are closed or not”), agreed Order Hub was the best place for this feature, would like to manually enter amounts rather than them being defaulted, “I don’t see friend referral or coupon options” (both mentioned this would be useful), both were excited to see this feature and said they would use this, understood the required amounts and input math because he’s used to it in QP and POS, don’t really need to know all of these details most of the time but sometimes do, expected the CTA to go back and try again with a different payment method
      </Typography>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>


      <Typography variant='h2' sx={globalStyles.heading2}>
        Handoff
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Ensured happy path with adding edge cases, interactions, states, and errors off to the side of the main path
      </Typography>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>



      <Typography variant='h2' sx={globalStyles.heading2}>
        Results
      </Typography>
      <Typography variant='body1' sx={globalStyles.paragraph}>
        Cut down time spent processing payments by 60% on average, reduced need to try again later, kept customer engagement
      </Typography>
      <Box sx={{ mt: 5, mb: 5 }}>
        <hr/>
      </Box>


    </Box>
  );
};

export default BatchedAgreementsPage;