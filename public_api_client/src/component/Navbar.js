import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../firebase/auth';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';

import { MESSAGES } from '../util/messages';

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar
          style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}
        >
          <Typography
            variant='h5'
            component='div'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'white',
                marginLeft: '2rem',
              }}
            >
              {MESSAGES.APP_NAME}
            </Link>
          </Typography>
          <Box alignItems='right' sx={{ flexGrow: 1, textAlign: 'right' }}>
            {currentUser ? (
              <Button
                onClick={onLogout}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: '2rem',
                }}
              >
                {MESSAGES.LOGOUT}
              </Button>
            ) : (
              <>
                <Link
                  to='/login'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginRight: '2rem',
                  }}
                >
                  {MESSAGES.LOGIN}
                </Link>
                <Link
                  to='/register'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginRight: '1rem',
                  }}
                >
                  {MESSAGES.REGISTER}
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
