import { Typography, Box, Grid } from '@mui/material';
import { grey, blue } from '@mui/material/colors';

export default function QuoteContainer({quote, author, width}) {
  return (
      <Grid container justifyContent="center" justifyItems="center">
        <Grid item sx={{ width: 8, backgroundColor: grey[300] }}/>
        <Grid item sx={{ padding: width === "small" ? 2 : 5 }} xs={10}>
            <Typography sx={{ fontStyle: "italic", fontSize: width === "small" ? 20 : 26 }}>
                <span>"</span>
                <span>{quote}</span>
                <span>"</span>
            </Typography>
            <Typography sx={{ color: grey[700], fontStyle: "italic", fontSize: width === "small" ? 18: 20 }}>
                - {author}
            </Typography>
        </Grid>
      </Grid>
  );
}
