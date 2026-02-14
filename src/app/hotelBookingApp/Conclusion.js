import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
export default function Conclusion() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // or a loading spinner if needed
  }

  const handleToggle = () => {
    setFullDesignExpanded(!fullDesignExpanded);
  };

  return (
      <Grid container justifyItems="center" justifyContent="center">
        
      </Grid>
  );
}
