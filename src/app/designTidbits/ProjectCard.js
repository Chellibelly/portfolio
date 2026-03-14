import { useState } from 'react';
import { Box, Paper, Typography, Collapse, IconButton } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const ProjectCard = ({
  thumbnail,
  expandedImages = [], // array of two images to show when expanded
  imageHeight,
  title,
  role,
  scope,
  focus,
  impact,
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
                <Typography sx={{ ...globalStyles.heading4 }}>
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
                  <b><i>Impact</i></b>: {impact}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Collapsible details */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box>
              {problem &&  <Typography sx={globalStyles.paragraph}>{problem}</Typography>}
              {solution &&  <Typography sx={globalStyles.paragraph}>{solution}</Typography>}
              {impact && <Typography sx={globalStyles.paragraph}>{impact}</Typography> }
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