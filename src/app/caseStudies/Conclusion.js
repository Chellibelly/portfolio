import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import ProcessSolutionGraphic from '../../../public/Process_Solution.png';
import PrototypeGraphic from '../../../public/Prototype.png';

import DesignHotelInfo from '../../../public/Design_Hotel_Info.png';
import DesignPricingInfo from '../../../public/Design_Pricing_Info.png';
import DesignAccountInfo from '../../../public/Design_Account_Info.png';
import DesignLocationInfo from '../../../public/Design_Location_Info.png';
import DesignAdditional from '../../../public/Design_Additional_Catergories.png';

export default function Conclusion() {
  return (
      <Box>
        <Typography variant='h1' className='heading1'>The Solution (the prototype)</Typography>
        <Typography variant='h2' className='heading2'>The Conclusion</Typography>

        <Typography variant="body1" className='paragraph'>Enter an intro text here</Typography>

        <Image
          className='graphic'
          src={ProcessSolutionGraphic}
          width={900}
          alt="An image of the UX process with the Solution step highlighted"
        />

        <Typography variant="body1" className='paragraph'>Enter a text introducing the information designs here</Typography>

        <Image
          className='graphic'
          src={DesignHotelInfo}
          width="100%"
          alt="An image of screenshots taken from the website prototype"
        />
        <Image
          className='graphic'
          src={DesignLocationInfo}
          width="100%"
          alt="An image of screenshots taken from the website prototype"
        />
        <Image
          className='graphic'
          src={DesignPricingInfo}
          width="100%"
          alt="An image of screenshots taken from the website prototype"
        />
        <Image
          className='graphic'
          src={DesignAccountInfo}
          width="100%"
          alt="An image of screenshots taken from the website prototype"
        />

        <Typography variant="body1" className='paragraph'>Text introducing the extra stuff here</Typography>

        <Image
          className='graphic'
          src={DesignAdditional}
          width="100%"
          alt="An image of screenshots taken from the website prototype"
        />

        <Typography variant="body1" className='paragraph'>Text about all the screens</Typography>

        <Image
          className='graphic'
          src={PrototypeGraphic}
          width="100%"
          alt="An image of screenshots taken from the website prototype"
        />

        <Typography variant="body1" className='paragraph'>Concluding sentence or two here</Typography>
      </Box>
  );
}
