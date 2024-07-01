import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const SignIn = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Sign In</Typography>
      <form>
        <TextField label="Username" required fullWidth margin="normal" />
        <TextField label="Password" type="password" required fullWidth margin="normal" />
        <Button variant="contained" color="primary">Sign In</Button>
      </form>
    </Container>
  );
};

export default SignIn;
