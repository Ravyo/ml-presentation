import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Introduction', path: '/introduction' },
    { name: 'Types', path: '/types' },
    { name: 'Applications', path: '/applications' },
    { name: 'Future', path: '/future' },
  ];

  return (
    <AppBar position="sticky" sx={{ background: 'rgba(10, 25, 41, 0.8)', backdropFilter: 'blur(8px)' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          ML Presentation
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={RouterLink}
              to={item.path}
              color="inherit"
              sx={{
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
