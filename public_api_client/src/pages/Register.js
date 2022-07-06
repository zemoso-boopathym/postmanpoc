import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase/firebase';
import { MESSAGES } from '../util/messages';

export default function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onRegister = async () => {
    if (registerPassword !== confirmPassword) {
      setErrors('Passwords do not match!');
    } else {
      try {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        navigate('/');
      } catch (error) {
        setErrors(error.message);
      }
    }
  };

  return (
    <div className='App'>
      <Container
        spacing={2}
        maxWidth='sm'
        style={{ margin: '2rem auto', textAlign: 'center' }}
      >
        <h2>{MESSAGES.REGISTER}</h2>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          {MESSAGES.REGISTER_PAGE}
        </p>
        <Stack spacing={2} padding={4}>
          <TextField
            label='Email'
            name='email'
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <TextField
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Stack>
        {errors && <Alert severity='error'>{errors}</Alert>}
        <Button variant='contained' onClick={onRegister}>
          {MESSAGES.REGISTER}
        </Button>
      </Container>
    </div>
  );
}
