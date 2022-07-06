import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase/firebase';
import { MESSAGES } from '../util/messages';

export default function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const onLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      return navigate('/');
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <div className='App'>
      <Container
        spacing={2}
        maxWidth='sm'
        style={{ margin: '2rem auto', textAlign: 'center' }}
      >
        <h2>Login</h2>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          {MESSAGES.LOGIN_PAGE}
        </p>
        <Stack spacing={2} padding={4}>
          <TextField
            label='Email'
            name='email'
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </Stack>
        {errors && <Alert severity='error'>{errors}</Alert>}
        <Button variant='contained' onClick={onLogin}>
          {MESSAGES.LOGIN}
        </Button>
      </Container>
    </div>
  );
}
