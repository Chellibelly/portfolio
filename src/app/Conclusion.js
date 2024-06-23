import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import ProcessSolutionGraphic from '../../public/Process_Solution.png';
import PrototypeGraphic from '../../public/Prototype.png';

export default function Conclusion() {
  return (
      <Box>
        <Typography variant='h1' className='heading1'>The Solution (the prototype)</Typography>
        <Typography variant='h2' className='heading2'>The Conclusion</Typography>

        <Image
          className='graphic'
          src={ProcessSolutionGraphic}
          width="100%"
          alt="Picture of the author"
        />

        <Image
          className='graphic'
          src={PrototypeGraphic}
          width="100%"
          alt="Picture of the author"
        />
      </Box>
  );
}
