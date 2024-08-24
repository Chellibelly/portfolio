import { Typography, Box, Grid, Link} from '@mui/material';

export default function LessonsLearned() {
  return (
    <Grid container justifyItems="center" justifyContent="center">
        <Grid item xs={10} sx={{ marginBottom: 10 }}>
            <Typography variant='h1' className='heading1'>A Reflection on the Experience</Typography>
            <Typography variant='h2' className='heading2'>Lessons Learned</Typography>

            <Typography variant='h3' className='heading3'>
                Technical skills through the UX lifecycle
            </Typography>
            <Typography variant="body1" className='paragraph'>
                Throughout this project, I picked up and practiced a variety of skills and programs imperative to conducting effective user research, analysis, and design. I wrote, administered, and collected responses to a survey consisting of both qualitative and quantitative questions. I conducted benchmark research on a handful of products to establish baselines. I led, recorded, and took notes on usability tests using Zoom and screen mirroring technology. 
            </Typography>
            <Typography variant="body1" className='paragraph'>
                I analyzed important feedback through whiteboarding an affinity diagram. I created customer personas and mapped sentiments and journeys using Miro. Finally, I designed wireframes and web screens in low, medium, and high fidelity through both physical and digital mediums – paper, pencils, Miro, Photoshop, and Figma – culminating in a working annotated prototype in Figma.
            </Typography>
            <Typography variant='h3' className='heading3'>
                The importance of user research and expecting the unexpected
            </Typography>
            <Typography variant="body1" className='paragraph'>
                Without the research that I conducted, there is no way I would have been able to come up with designs that fully realized user goals and needs. Learning about past frustrations users have had with similar software revealed so much about potential opportunities and eventually led to my “eureka moment” about where I needed to put most of focus while designing. 
            </Typography>
            <Typography variant="body1" className='paragraph'>
                I had to be flexible and let the research guide me, putting my own opinions aside, disproving my assumptions multiple time. I had to watch people struggle and hold my tongue because experiencing the struggle was so important to building empathy and making discoveries. Those discoveries were the heart of this entire project. I learned firsthand that without listening, witnessing, and appreciating user sentiment and testaments, designing functional software that actually solves a problem for both the business and the customer is simply not possible, full stop.
            </Typography>
            <Typography variant='h3' className='heading3'>
                Final thoughts
            </Typography>
            <Typography variant="body1" className='paragraph'>
                Thank you for reading about my story on this case study. I am so grateful that I had this opportunity and experience. It was more interesting and enjoyable than I even imagined it would be, and I learned so many new things. My UX journey does not stop here. It can’t. This field is so important to me and so important to the field of technology. I have a lot to learn, and I’m just getting started. 
            </Typography>
            <Typography variant="body1" className='paragraph'>
                If you'd like to learn more about me, check out my <Link href="/about">about me</Link> page or <Link href="/resume">my resume</Link>. You can also see what project(s) I'm currently working on <Link href="/currentProjects">here</Link>.
            </Typography>
        </Grid>
      </Grid>
  );
}
