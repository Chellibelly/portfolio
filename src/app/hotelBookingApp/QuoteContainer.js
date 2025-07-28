import { Typography, Box, Grid } from '@mui/material';
import { grey, blue } from '@mui/material/colors';

export default function QuoteContainer({quote, author, width}) {

  return (
      <Grid container justifyContent="center" justifyItems="center">
        <Grid item sx={{ width: 10, backgroundColor: grey[300] }}/>
        <Grid item sx={{ padding: 5 }} xs={10}>
            <Typography sx={{ fontStyle: "italic", fontSize: 26 }}>
                <span>"</span>
                <span>{quote}</span>
                <span>"</span>
            </Typography>
            <Typography sx={{ color: grey[700], fontStyle: "italic", fontSize: 20 }}>
                - {author}
            </Typography>
        </Grid>
      </Grid>
  );
}
