"use client";
import * as React from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Stack,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  maxWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function PasswordModal({ open, handleClose }) {
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();     // Prevent default form submit
    setError(true);
    setPassword('');
  };

  const handleCloseModal = () => {
    setPassword('');
    setError(false);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="password-modal-title"
      aria-describedby="password-modal-description"
    >
      <Box sx={style}>
        {/* Close Button */}
        <IconButton
          onClick={handleCloseModal}
          sx={{ position: 'absolute', top: 8, right: 8 }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="center" mt={2}>
            <Typography id="password-modal-title" variant="h6" textAlign="center">
              Enter Password
            </Typography>

            <Typography
              id="password-modal-description"
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ px: 2 }}
            >
              Ask me for the password <b><i>or</i></b> check out my other projects (no password required!)
            </Typography>

            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: '80%' }}
              error={error}
              helperText={error ? "Incorrect password. Try again." : ''}
            />

            <Button
              variant="contained"
              type="submit" // Submit via Enter or click
              sx={{ width: '80%' }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}