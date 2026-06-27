import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import Header from '../Header';
import Image from 'next/image';
import ToDoListImage from '../../../public/Next_Up_Project.png';
import QualitativeAnswers from '../../../public/LM_Survey_Qual.png';
import CompetitorResearch from '../../../public/LM_Competitor_Research.png';
import AffinityDiagram from '../../../public/LM_Affinity_Diagram_Full.png';
import InformationArchitecture from '../../../public/LM_Information_Architecture.png';

import LMScreenTasksToday from '../../../public/LM_Screen_Tasks_Today.png';
import LMScreenTasksCardStructure from '../../../public/LM_Screen_Tasks_Card_Structure.png';
import LMScreenTasksSuggestions from '../../../public/LM_Screen_Tasks_Suggestions.png';

import LMScreenNotesConvert from '../../../public/LM_Screen_Notes_Convert.png';
import LMScreenNotesStructure from '../../../public/LM_Screen_Notes_Structure.png';

import LMScreenGoalsActive from '../../../public/LM_Screen_Goals_Active.png';
import LMScreenGoalMilestone from '../../../public/LM_Screen_Goals_Milestone.png';

import LMScreenRewardsInProgress from '../../../public/LM_Screens_Rewards_InProgress.png';
import LMScreenRewardsShop from '../../../public/LM_Screens_Rewards_Shop.png';

import KorkBoardHero from '../../../public/KorkBoard_Hero.png';

const QuoteBlock = ({ children }) => ( <Box component="blockquote" sx={{ display: 'flex', alignItems: 'stretch', m: 0, mb: 2, }} > <Box aria-hidden="true" sx={{ width: '3px', flexShrink: 0, backgroundColor: '#D3D3D3', mr: 2, }} /> <Typography sx={{ ...globalStyles.paragraph, mb: 0, fontStyle: 'italic', }} > {children} </Typography> </Box> );

const ScreenDecisionRow = ({
  title,
  image,
  imageAlt,
  imageFirst = false,
  children,
}) => (
  <Grid
    container
    spacing={{ xs: 3, md: 6 }}
    alignItems="center"
    sx={{ py: { xs: 4, md: 6 } }}
  >
    <Grid
      item
      xs={12}
      md={7}
      order={{ xs: 1, md: imageFirst ? 2 : 1 }}
    >
      <Typography component="h4" sx={{ ...globalStyles.heading4, mt: 0, }} > {title} </Typography>
      <Typography sx={{ ...globalStyles.paragraph, mb: 0 }}>
        {children}
      </Typography>
    </Grid>

    <Grid
      item
      xs={12}
      md={4}
      order={{ xs: 2, md: imageFirst ? 1 : 2 }}
    >
      <Box sx={globalStyles.screenGraphic}>
        <Image
          src={image}
          alt={imageAlt}
          sizes="(max-width: 899px) 70vw, 280px"
          style={{
            width: "100%",
            maxWidth: 280,
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Box>
    </Grid>
  </Grid>
);

const LifeManagementAppContainer = () => {
  return (
    <div>
      <Header/>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1120px',
          mx: 'auto',
          px: { xs: 2.5, sm: 4, md: 6 },
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Typography component="h1" sx={{ position: 'absolute', width: '1px', height: '1px', p: 0, m: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0, }} > KorkBoard </Typography> <Image src={KorkBoardHero} alt="KorkBoard productivity app screens showing tasks, notes, goals, and rewards" priority sizes="(max-width: 1120px) 100vw, 1120px" style={{ width: '100%', height: 'auto', display: 'block', }} />
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            mt: { xs: 4, md: 6 },
            mb: 0,
          }}
        >
          <Typography component="h2" sx={globalStyles.heading1}>
            Project Summary
          </Typography>
            <Typography component="p" sx={globalStyles.heading2}>
              KorkBoard TL;DR
            </Typography>
            <Typography variant="body1" sx={globalStyles.paragraph}> <b>Role:</b> Product designer and researcher <br /> <b>Project type:</b> Self-initiated mobile app concept <br /> <b>Research:</b> Survey with 15 participants, 3 targeted interviews, analysis of 12 productivity tools, and 3 moderated usability tests <br /> <b>Deliverable:</b> High-fidelity interactive prototype <br /> <b>Status:</b> Tested concept with priorities identified for the next iteration </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Problem</Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}> 
              People often manage ideas, daily responsibilities, long-term goals, and important records across disconnected apps, planners, spreadsheets, and memory. This fragmentation makes it harder to preserve context and follow through over time.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Design Challenge</Typography>
             <Typography variant='body1' sx={globalStyles.paragraph}> 
              How might one connected system support capture, planning, action, and recall without introducing the complexity and cognitive load users already struggle with?
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Approach</Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}> 
              I led the project from exploratory research through information architecture, interaction design, high-fidelity prototyping, and moderated usability testing. Research findings shaped a connected system for notes, tasks, goals, and personalized rewards.
            </Typography>
            <Typography variant='h3' sx={globalStyles.heading3}>Results</Typography>
            <Typography variant='body1' sx={globalStyles.paragraph}>
              Testing showed strong interest in low-friction idea capture, backlog and archive features, visible progress, and user-defined rewards. It also revealed that layered terminology, rigid hierarchy, and too many configuration options created unnecessary cognitive load, establishing clear priorities for the next iteration.
            </Typography>
        </Paper>
      
        <Box component="section" sx={globalStyles.majorSection}> 
          <Typography component="h2" sx={globalStyles.heading1}> A Life Full of Lists, but No Roadmap </Typography> 
          <Typography component="p" sx={globalStyles.heading2}> Project Context </Typography>
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center" > 
            <Grid item xs={12} md={7}> 
              <Typography sx={globalStyles.paragraph}> Adult responsibilities exist across different time horizons, from today’s chores and appointments to long-term goals, financial planning, healthcare, and household records. Yet the information needed to manage them is often scattered across calendars, notes, task apps, spreadsheets, paper planners, and memory. </Typography> 
              <Typography sx={globalStyles.paragraph}> KorkBoard began with a simple question: </Typography> 
              <Typography sx={{ ...globalStyles.paragraph, fontWeight: 500, mb: 0, }} > How might one connected system support capture, planning, action, and recall without becoming another overwhelming productivity tool? </Typography> 
            </Grid> 
            <Grid item xs={12} md={4}> 
              <Box sx={globalStyles.screenGraphic}> 
                <Image src={ToDoListImage} alt="Person holding a checklist with both short-term tasks and long-term goals" sizes="(max-width: 899px) 80vw, 360px" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', }} /> 
              </Box> 
            </Grid> 
            </Grid> 
          </Box>
        <Box component="section" sx={globalStyles.majorSection}>
          <Typography component="h2" sx={globalStyles.heading1}>
            Understanding the Problem
          </Typography>
          <Typography component="p" sx={globalStyles.heading2}>
            Research & Key Insights
          </Typography>
          <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Exploring How People Manage Everyday Life</Typography>
                <Typography sx={{ ...globalStyles.paragraph }}>
                  KorkBoard began with my own frustration after trying several productivity tools and still being unable to find one that connected everyday tasks, long-term goals, notes, and important records. To explore how others approached the same challenges, I surveyed 15 participants about what they tracked, which tools they used, and where those systems broke down.
                </Typography>
                <Typography sx={{ ...globalStyles.paragraph }}>
                  Participants largely relied on familiar, low-friction tools such as calendars, phone notes, paper planners, and memory. Few used a dedicated task-management app for daily lists, while nearly half had no system for tracking achievements or milestones. Many cited frustrations with existing apps, including difficult or inconsistent interactions, organizational structures that did not match their mental models, or experiences that were not engaging enough to sustain long-term use.
                </Typography>
                <Typography sx={{ ...globalStyles.paragraph }}>
                 Several participants explicitly mentioned ADHD or executive-function challenges, while others described difficulty with attention, motivation, procrastination, and digital distraction. This shifted the project beyond consolidating tools: the system also needed to help people preserve context, recover after interruptions, and stay engaged without introducing more complexity.
                </Typography>
                <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>A Targeted Look at Memory and Long-Term Recall</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            Because I was considering a searchable archive of completed activity, I conducted three follow-up interviews about how people retrieve past information such as appointment dates, receipts, and maintenance records. Participants relied on three different strategies: browsing physical records, reconstructing details through contextual memory, or searching digital sources such as email and online portals.
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            These patterns supported preserving completed activity as searchable history and informed flexible retrieval through keywords, dates, categories, and related details.
          </Typography>
          <Box sx={globalStyles.researchGraphic}>
            <Image
              src={QualitativeAnswers}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt="Participant quotes about productivity habits, memory, and motivation"
            />
          </Box>
        <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Exploring Existing Productivity Tools: What They Get Right and Where They Fall Short</Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
            To understand how current products addressed the needs emerging from my survey, I reviewed 12 tools across calendars, spreadsheets, notes, task managers, project boards, and gamified productivity apps. I also analyzed public user reviews to identify recurring expectations, frustrations, and tradeoffs across categories.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
            Users reported that powerful tools like spreadsheets and modular note systems offer depth but can be overwhelming, while simpler apps lack structure for long-term planning. Gamification improves engagement for some users but alienates others seeking efficiency over play. Search and recall remained persistent pain points, with users struggling to locate important information. Color-coding, visuals, and a reliable reminder system were highlighted as important for many users. 
        </Typography>


<Box sx={globalStyles.researchGraphic}>
  <Image
    src={CompetitorResearch}
    style={{
      width: '100%',
      height: 'auto',
    }}
    alt="Comparison of strengths, limitations, and user feedback across six categories of productivity tools"
  />
</Box>


        </Box>




<Box component="section" sx={globalStyles.majorSection}>
  <Typography component="h2" sx={globalStyles.heading1}>
    Bridging the Gap
  </Typography>

  <Typography
    component="p"
    sx={globalStyles.heading2}
  >
    Research Synthesis
  </Typography>

  <Typography sx={globalStyles.paragraph}>
    To synthesize the research, I organized observations from the survey,
    targeted recall interviews, and competitive review into an affinity
    diagram. Recurring behaviors, frustrations, and product expectations
    clustered into four areas: Motivation &amp; Focus, Task Creation &amp;
    Management, Long-Term Planning &amp; Record Keeping, and Organization
    &amp; Prioritization. Examining the overlap between these categories
    revealed three broader findings that defined the central tensions
    KorkBoard needed to address.
  </Typography>



  <Box sx={globalStyles.researchGraphic}>
    <Image
      src={AffinityDiagram}
      style={{
        width: '100%',
        height: 'auto',
      }}
      alt="Affinity diagram grouping research observations into motivation, task management, long-term planning, and organization"
    />
    </Box>

    <Typography
    component="h3"
    sx={globalStyles.heading3}
  >
    Three Findings That Shaped the Product
  </Typography>

  <Typography
    component="h4"
    sx={{
      ...globalStyles.heading4,
      mt: 5,
      fontWeight: 600,
    }}
  >
    Flexibility Is Valuable, but Complexity Creates New Barriers
  </Typography>

  <Typography sx={globalStyles.paragraph}>
    Users wanted to organize information according to their own mental
    models. Search, sorting, categories, tags, color-coding, and explicit
    priority levels helped them distinguish information at a glance and
    decide what to act on first. At the same time, too much setup or
    hierarchy could make a productivity system feel like additional work,
    suggesting that advanced organization should remain optional.
  </Typography>

  <Typography
    component="h4"
    sx={{
      ...globalStyles.heading4,
      mt: 5,
      fontWeight: 600,
    }}
  >
    Long-Term Goals Need a Clearer Path to Daily Action
  </Typography>

  <Typography sx={globalStyles.paragraph}>
    Participants had more established systems for managing immediate
    responsibilities than for tracking long-term goals and achievements.
    Larger ambitions were easier to postpone, forget, or abandon when they
    were not broken into manageable steps or connected to everyday actions.
  </Typography>

  <Typography sx={globalStyles.paragraph}>
    Users expressed a desire to track goals in one place, translate them
    into smaller tasks, and see how daily effort contributed to something
    larger. Visible progress and a record of completed goals could make
    long-term planning feel more concrete and rewarding.
  </Typography>

  <Typography
    component="h4"
    sx={{
      ...globalStyles.heading4,
      mt: 5,
      fontWeight: 600,
    }}
  >
    Follow-Through Requires More Than Planning
  </Typography>

  <Typography sx={globalStyles.paragraph}>
    Participants described losing momentum during periods of distraction,
    low energy, procrastination, or mental fatigue. Planning alone did not
    guarantee that they would return to unfinished work, especially when
    incomplete tasks disappeared from view or continued cluttering the
    current day.
  </Typography>

  <Typography sx={globalStyles.paragraph}>
    Keeping unfinished work accessible, making progress visible, and
    offering positive reinforcement could help users regain momentum.
    Because motivation differed from person to person, the system needed
    to support multiple forms of encouragement rather than imposing a
    single gamified approach.
  </Typography>

 <Box sx={{ mt: { xs: 7, md: 9 } }}>
  <Typography
    component="h3"
    sx={{
      ...globalStyles.heading3,
      mt: 0,
    }}
  >
    Design Criteria
  </Typography>

  <Typography sx={{ ...globalStyles.paragraph, mb: 0 }}>
    These findings became the criteria for the initial design: keep
    organization flexible but lightweight, connect long-term goals to daily
    action, and help users return to unfinished work after attention or plans
    shifted. I used these priorities to shape the product’s information
    architecture and core interactions.
  </Typography>
</Box>
</Box>















































        <Box component="section" sx={globalStyles.majorSection}>
          <Typography component="h2" sx={globalStyles.heading1}>
            Designing for Flexibility & Follow-Through
          </Typography>
          <Typography component="p" sx={globalStyles.heading2}>
            Information architecture and high-fidelity screen design
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>Using the three design criteria established through research, I shaped a system connecting quick capture, daily action, long-term progress, and personalized motivation. I translated the information architecture into a high-fidelity interactive prototype for usability testing.</Typography>
          <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Information Architecture</Typography>
          <Typography sx={globalStyles.paragraph}> I organized the app around four primary areas: Notes, Tasks, Goals, and Rewards, all accessible through a persistent bottom navigation bar. Each area supports a distinct need while remaining connected to the larger system: notes can become tasks, tasks can contribute to goals, completed activity can be preserved as searchable history, and progress can support personalized rewards. </Typography>


            <Box sx={globalStyles.researchGraphic}>
            <Image
              src={InformationArchitecture}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt="KorkBoard information architecture showing the Notes, Tasks, Goals, and Rewards sections"
            />
          </Box>
          

          <Typography variant="h3" sx={{ ...globalStyles.heading3 }}>Key Screen & Interaction Decisions</Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
            With the product structure defined, I moved into screen design. I focused on four connected needs: keeping the current day manageable, making ideas easy to capture, linking daily action to long-term goals, and supporting motivation in a way users could personalize.
          </Typography>
          
          <ScreenDecisionRow
            title="Keeping Today Focused Without Losing Unfinished Work"
            image={LMScreenTasksToday}
            imageAlt="KorkBoard Today screen showing the daily task list"
          >
            Tasks serves as KorkBoard’s home screen and is divided into Today, Backlog, and Archive. Today provides a focused daily checklist. The Backlog holds work that is unfinished, unscheduled, or simply not a priority for the current day, separating “not today” from “forgotten.” Completed tasks move into a searchable Archive so past activity can remain useful for progress tracking and recall.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="Daily Suggestions Help Users Decide How to Plan Their Day"
            image={LMScreenTasksSuggestions}
            imageAlt="KorkBoard Daily Suggestions screen"
            imageFirst
          >
            Daily Suggestions helps users return to relevant work without adding another stream of notifications. It can surface an unfinished task from a previous day, an item approaching its due date, or a low-effort task that may be easier to complete during a low-energy period. Users can add a suggestion to Today with one action or ignore it.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="Fully Optional Customization With Task Creation"
            image={LMScreenTasksCardStructure}
            imageAlt="KorkBoard task creation screen showing optional task details"
          >
            Task creation begins with the essentials while allowing optional details such as priority, due dates, color-coding, categories, subtasks, and goal links. This was intended to support different organizational styles without requiring the same level of structure for every task.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="A Low-Friction Place to Capture Ideas"
            image={LMScreenNotesStructure}
            imageAlt="KorkBoard Notes home screen"
            imageFirst
          >
            Research showed that participants often relied on familiar, low-friction tools such as phone notes and paper notebooks to quickly capture ideas. KorkBoard’s Notes section was designed as a mental inbox where users could record an idea before deciding how to organize or act on it. The notebook-inspired visual treatment uses familiar cues, while the initial screen keeps capture lightweight and avoids requiring details upfront.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="Bridging Ideas to Action"
            image={LMScreenNotesConvert}
            imageAlt="KorkBoard screen for converting a note into a task"
          >
            Crucially, notes are not dead ends. Any note can be converted into a task with a single action, creating a seamless bridge between inspiration and execution. This connection supports the broader system goal: reducing friction between thinking, planning, and doing.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="Bringing Visibility to Objectives and Aspirations"
            image={LMScreenGoalsActive}
            imageAlt="KorkBoard Goals overview showing active goals and progress"
            imageFirst
          >
            The Goals section explored how everyday tasks could remain connected to larger ambitions. The overview shows active goals and visible progress, helping users see movement that might otherwise be difficult to remember. Completed goals remain available as part of the user’s longer-term history.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="Connecting Daily Action to Long-Term Goals"
            image={LMScreenGoalMilestone}
            imageAlt="KorkBoard goal milestone screen showing related tasks"
          >
            The initial design used a Goal → Milestone → Task hierarchy. Larger ambitions could be divided into stages, with each milestone linked to smaller tasks that appeared in the user’s daily workflow. This hierarchy was intended to make abstract goals more actionable and show how everyday effort contributed to long-term progress.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="Making Progress Visible and Trackable"
            image={LMScreenRewardsInProgress}
            imageAlt="KorkBoard Rewards home screen showing achievement progress"
            imageFirst
          >
            The Rewards home screen shows progress toward each achievement the user creates, making effort and momentum visible over time. Achievement creation required balancing personalization with automatic tracking. Completely open-ended achievements would be difficult for the system to measure, while fully predefined options would limit users to behaviors the app prescribed. Structured templates allow users to combine actions, quantities, and categories to create personalized achievements while keeping progress measurable.
          </ScreenDecisionRow>

          <ScreenDecisionRow
            title="Letting Users Define What Motivates Them"
            image={LMScreenRewardsShop}
            imageAlt="KorkBoard Rewards Shop showing user-defined rewards"
          >
            Instead of prescribing badges or generic prizes, the Shop allows users to create rewards that feel meaningful to them and assign their own point values. This gives users control over what they are working toward, whether that is a purchase, an experience, time for a hobby, or another personally motivating incentive.
          </ScreenDecisionRow>
        </Box>

        <Box component="section" sx={globalStyles.majorSection}>
          <Typography component="h2" sx={globalStyles.heading1}>
            Evaluating the Design
          </Typography>

          <Typography component="p" sx={globalStyles.heading2}>
            Moderated Usability Testing
          </Typography>

        <Typography sx={{ ...globalStyles.paragraph }}>
          After translating the screen designs into a high-fidelity interactive prototype, I conducted moderated usability tests with three participants representing different levels of experience with productivity tools: Debbie, a pen-and-paper organizer; Jenny, a neurodivergent participant who used digital scheduling tools; and Bella, an experienced productivity-app user and self-described gamer.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          The sessions evaluated whether participants could understand the product structure, complete core workflows, and make sense of the terminology and level of customization.
        </Typography>



        <Typography
          component="h3"
          sx={{ ...globalStyles.heading3, mt: 7 }}
        >
          Users Struggled with Terminology and Information Hierarchy
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          While participants understood the app’s overall purpose, they consistently relied on their own mental models rather than the system’s definitions and organizational hierarchy. As a result, key terms like goals, milestones, tasks, subtasks, and achievements were often used interchangeably, reflecting how these concepts overlap in everyday language.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          The term “<i>milestone</i>” in particular caused confusion, with users misinterpreting it, replacing it with other terms, or feeling it added unnecessary complexity to the hierarchy.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          Overall, the layered terminology created friction rather than clarity. These findings informed the decision to simplify the hierarchy by removing “milestones” as a distinct concept.
        </Typography>
        <QuoteBlock> “I do like the sub-categories, or the milestones I mean... You know, the subtasks.” </QuoteBlock>


        {/* Terminology and hierarchy */} <Box sx={globalStyles.usabilityMedia}> <video controls preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', }} > <source src="/Usability_clips_TERMS_AND_HIERARCHY.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> <Typography sx={{ ...globalStyles.paragraphMed, mt: 1.5, mb: 0, color: 'text.secondary', }} > Clip: Participant confusion around terminology and the Goal → Milestone → Task hierarchy. </Typography> </Box>
          



        <Typography
          component="h3"
          sx={{ ...globalStyles.heading3, mt: 7 }}
        >
          Users Valued the Support for Recall and Follow-Through
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          Participants valued the app’s emphasis on recall and follow-through. The ability to capture ideas, revisit them later, and gradually transform them into goals and tasks resonated strongly. Features such as progress tracking, the Backlog, and the Archive were viewed as safeguards against forgetting unfinished work, helping participants feel more confident that important ideas would not slip through the cracks.
        </Typography>

        <QuoteBlock> “Taking [a brainstorm] into an actionable item.. I like that a lot” </QuoteBlock>

        <QuoteBlock> “I really like that there’s a backlog because I hate when I don’t have time to do a thing and it just sits in my list of tasks, and I can’t complete it but I also can’t get it out of there” </QuoteBlock>


       {/* Recall and follow-through */} <Box sx={globalStyles.usabilityMedia}> <video controls preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', }} > <source src="/Usability_clips_FOLLOWTHRU.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> <Typography sx={{ ...globalStyles.paragraphMed, mt: 1.5, mb: 0, color: 'text.secondary', }} > Clip: Participants responding positively to the Backlog, Archive, and note-to-task workflow. </Typography> </Box>



        <Typography
          component="h3"
          sx={{ ...globalStyles.heading3, mt: 7 }}
        >
          Too Many Features and Options Increased Cognitive Load
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          One of the primary design challenges was balancing flexibility with simplicity. While participants found many features valuable in isolation, several became overwhelmed by the number of layers, sorting systems, configuration options, and overlapping concepts throughout the app. This was especially apparent on task cards and task creation screens, where multiple indicators intended to aid decision-making instead created confusion. The findings reinforced the need to prioritize clarity and focus over feature completeness, including removing lower-value elements such as the “time required” attribute.
        </Typography>
        <QuoteBlock> “For me, it's too much. I’m going to get more distracted the more layers there are.”  </QuoteBlock>


     {/* Task complexity */} <Box sx={globalStyles.usabilityMedia}> <video controls preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', }} > <source src="/Usability_clips_TASKS.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> <Typography sx={{ ...globalStyles.paragraphMed, mt: 1.5, mb: 0, color: 'text.secondary', }} > Clip: Participant feedback on feature density and the number of task options. </Typography> </Box>


        <Typography
          component="h3"
          sx={{ ...globalStyles.heading3, mt: 7 }}
        >
          The Rewards System Created Emotional Engagement and Motivation
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          Users showed visible excitement when interacting with the rewards system, responding positively to earning points, tracking progress, and the ability to define their own rewards. All three participants understood the concept, including users who did not identify as gamers.
        </Typography>
        <Typography sx={{ ...globalStyles.paragraph }}>
          This level of enthusiasm was unexpected and highlighted the motivational potential of lightweight gamification in a productivity context. The key takeaway is to retain and refine the rewards system while ensuring it remains approachable and supportive.
        </Typography>

        <QuoteBlock> “I love a reward. I don’t do anything unless there’s a reward.”  </QuoteBlock>

       {/* Rewards */} <Box sx={globalStyles.usabilityMedia}> <video controls preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', }} > <source src="/Usability_clips_REWARDS.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> <Typography sx={{ ...globalStyles.paragraphMed, mt: 1.5, mb: 0, color: 'text.secondary', }} > Clip: Participant reactions to visible progress and user-defined rewards. </Typography> </Box>
      


        </Box>

        <Box component="section" sx={globalStyles.majorSection}>
          <Typography component="h2" sx={globalStyles.heading1}>
            Final Thoughts and Next Steps
          </Typography>
          <Typography component="p" sx={globalStyles.heading2}>
            Learning to truly understand an audience
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
           At the start of this project, I assumed people struggled with memory, focus, and follow-through in similar ways. Research challenged that assumption. Participants described different barriers, including attention, executive-function challenges, procrastination, low motivation, and difficulty maintaining systems that required too much setup.
          </Typography>
          <Typography sx={{ ...globalStyles.paragraph }}>
           This shifted the project away from designing for one “ideal” productivity workflow. Instead, I focused on flexible organization, clearer visual cues, and multiple forms of motivation while recognizing that every additional option carried a cognitive cost.
          </Typography>
          <Typography sx={globalStyles.paragraph}> Usability testing validated the value of the Backlog and Archive, the note-to-task workflow, visible progress, and user-defined rewards. It also revealed friction around terminology, overlapping hierarchy concepts, and feature density, particularly during task creation. </Typography> 
          <Typography component="h3" sx={globalStyles.heading3}> Next Iteration Priorities </Typography> 
          <Typography sx={{ ...globalStyles.paragraph, mb: 0 }}> The next iteration will remove milestones as a distinct layer, simplify task creation, reduce competing visual indicators, and clarify terminology across the system. These revisions are based on the usability findings and have not yet been retested. </Typography>
        </Box>











      
      </Box>
    </div>
  );
};

export default LifeManagementAppContainer;