import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import ProcessSolutionGraphic from '../../../public/Process_Solution.png';
import PrototypeGraphic from '../../../public/Prototype.png';

import DesignHotelInfo from '../../../public/Design_Hotel_Info.png';
import DesignPricingInfo from '../../../public/Design_Pricing_Info.png';
import DesignAccountInfo from '../../../public/Design_Account_Info.png';
import DesignLocationInfo from '../../../public/Design_Location_Info.png';
import DesignAdditional from '../../../public/Design_Additional_Catergories.png';

export default function LessonsLearned() {
  return (
      <Box>
        <Typography variant='h1' className='heading1'>Lessons Learned</Typography>
        <Typography variant='h2' className='heading2'>Lessons Learned</Typography>

        <Typography variant="body1" className='paragraph'>Understanding User Needs:  
            Deeply researching and understanding user needs is crucial. 
            Initial assumptions about user preferences may not always align with reality.
            (You might have learned the importance of user interviews or surveys in identifying actual pain points and preferences.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Iterative Design Process:  
            The iterative design process is essential for refining and improving the user experience.
            Feedback and testing help uncover issues that weren't apparent initially.
            (Reflect on how early prototypes led to unexpected insights and how subsequent iterations improved the design.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Balancing Aesthetics and Functionality:  
            Aesthetic design must complement functionality. Striking a balance between visual appeal and usability is key to creating an effective user experience.
            (Discuss any challenges you faced in maintaining this balance and how you addressed them.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Importance of Usability Testing:  
            Conducting usability tests with real users is invaluable. Observing users interact with your design can reveal issues and areas for improvement.
            (Share insights from any usability testing you conducted and how it influenced your design decisions.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Effective Communication and Collaboration:  
            Clear communication and collaboration with stakeholders, mentors, or team members are vital for a successful project. Feedback from others can provide new perspectives and enhance your design.
            (Mention how working with peers or receiving feedback helped refine your approach or overcome obstacles.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Time Management:  
            Managing time effectively is crucial in a project with multiple phases. Prioritizing tasks and setting realistic deadlines can lead to a more organized workflow.
            (Reflect on how you managed your time throughout the project and any strategies that worked or didn’t work for you.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Adapting to Constraints:  
            Design constraints (such as limited resources or technical limitations) can influence the final outcome. Learning to adapt and innovate within constraints is a valuable skill.
            (Describe any constraints you encountered and how you adapted your design to address them.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Learning from Mistakes:  
            Mistakes are an opportunity for growth. Identifying what went wrong and understanding why helps in avoiding similar issues in future projects.
            (Share a specific mistake you made and how you learned from it, along with the steps you took to correct or mitigate it.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Incorporating Feedback:  
            Constructive feedback is essential for growth. Being open to critique and using it to improve your design is an important aspect of the design process.
            (Reflect on how feedback from your peers or mentors helped shape your final design and what you learned from it.)
        </Typography>
        <Typography variant="body1" className='paragraph'>Understanding the Full UX Lifecycle:  
            The UX process involves multiple stages, from research to prototyping to testing. Gaining experience in each stage provides a comprehensive understanding of UX design.
            (Highlight your experiences with different stages of the UX process and how they contributed to your overall learning.)
        </Typography>
      </Box>
  );
}
