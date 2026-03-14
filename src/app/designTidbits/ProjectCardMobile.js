import { useState } from 'react';
import { Box, Paper, Typography, Collapse, IconButton } from '@mui/material';
import * as globalStyles from '../styles/globalStyleConsts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const ProjectCardMobile = ({
  thumbnail,
  expandedImages = [],
  imageHeight,
  title,
  impact,
  problem,
  solution,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: '100%',
          borderRadius: 2,
          cursor: 'pointer',
        }}
        onClick={handleToggle}
      >

        {/* Header Row */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>

          {/* Thumbnail (collapsed only) */}
          {!expanded && thumbnail && (
            <Box sx={{ flexShrink: 0 }}>
              <Image
                src={thumbnail}
                alt={`${title} Thumbnail`}
                width={90}
                style={{
                  height: 'auto',
                  borderRadius: 8,
                }}
              />
            </Box>
          )}

          {/* Title + Impact */}
          <Box sx={{ flexGrow: 1 }}>

            {/* Title + expand icon */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 1,
              }}
            >
              <Typography sx={{ ...globalStyles.heading6 }}>
                {title}
              </Typography>

              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle();
                }}
              >
                <ExpandMoreIcon
                  sx={{
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                    fontSize: 36,
                  }}
                />
              </IconButton>
            </Box>

          </Box>
        </Box>

        {/* Expanded content */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            {problem && (
              <Typography sx={globalStyles.paragraph}>{problem}</Typography>
            )}
            {solution && (
              <Typography sx={globalStyles.paragraph}>{solution}</Typography>
            )}
            {impact && (
              <Typography sx={globalStyles.paragraph}>{impact}</Typography>
            )}
          </Box>
        </Collapse>

        {/* Expanded images */}
        {expanded && expandedImages.length > 0 && (
          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {expandedImages.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`${title} Expanded Image ${idx + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 8,
                }}
              />
            ))}
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ProjectCardMobile;
