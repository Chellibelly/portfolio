import { useState } from 'react';
import { Box, Paper, Typography, Collapse, IconButton } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { blue, grey } from '@mui/material/colors';

const ProjectCard = ({
  thumbnail,
  expandedImages = [], // array of two images to show when expanded
  imageHeight,
  title,
  role,
  scope,
  focus,
  impact,
  blurbTitle,
  blurb,
  problem,
  solution,
  result,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: '100%',
          maxWidth: 1000,
          borderRadius: 2,
          cursor: 'pointer',
        }}
        onClick={handleToggle}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          

          {/* Card header: thumbnail (collapsed) + title/metadata */}
          <Box sx={{ display: 'flex', alignItems: expanded ? 'flex-start' : 'center', gap: 4 }}>
            {/* Thumbnail (only when collapsed) */}
            {!expanded && thumbnail && (
              <Box sx={{ flexShrink: 0 }}>
                <Image
                  src={thumbnail}
                  alt={`${title} Thumbnail`}
                  width={200}
                  height={200}
                  style={{ borderRadius: 8, objectFit: 'cover' }}
                />
              </Box>
            )}

            {/* Title + metadata */}
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ ...globalStyles.heading4, color: grey[800], fontWeight: "bold" }}>
                  {title}
                </Typography>
                <IconButton
                  size="large"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle();
                  }}
                >
                  <ExpandMoreIcon
                    sx={{
                      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                      fontSize: 60,
                    }}
                  />
                </IconButton>
              </Box>

              {!expanded && (
                <Typography sx={{ ...globalStyles.paragraph, fontSize: 18 }}>
                  <b><i>{blurbTitle}</i></b>: {blurb}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Collapsible details */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box>
              {problem &&  
              <Box sx={{ mb: 5 }}>
                <Typography sx={globalStyles.heading5}><b>Challenge</b></Typography>
                <Typography sx={globalStyles.paragraph}>{problem}</Typography>
              </Box>}
              {solution && 
              <Box sx={{ mb: 5 }}>
                <Typography sx={globalStyles.heading5}><b>Design Response</b></Typography>
                <Typography sx={globalStyles.paragraph}>{solution}</Typography>
              </Box>}
              {impact && 
              <Box>
                <Typography sx={globalStyles.heading5}><b>Outcome</b></Typography>
                <Typography sx={globalStyles.paragraph}>{impact}</Typography>
              </Box>}
            </Box>
          </Collapse>

         {/* Expanded Images (only when expanded) */}
            {expanded && expandedImages.length > 0 && (
                <Box sx={{ mt: 5, mb: 5, display: 'flex', gap: 2, justifyContent: 'center' }}>
                {expandedImages.map((img, idx) => (
                    <Box key={idx} sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src={img}
                        alt={`${title} Expanded Image ${idx + 1}`}
                        height={imageHeight}
                    />
                    </Box>
                ))}
                </Box>
            )}

        </Box>
      </Paper>
    </Box>
  );
};

export default ProjectCard;