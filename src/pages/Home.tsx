import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4, textAlign: 'center' }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to Machine Learning
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              A comprehensive guide to understanding and implementing ML concepts
            </Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <MotionPaper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ p: 3, height: '100%' }}
          >
            <Typography variant="h6" gutterBottom>
              What is Machine Learning?
            </Typography>
            <Typography>
              Machine Learning is a branch of artificial intelligence that focuses on building
              applications that learn from data and improve their accuracy over time.
            </Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ p: 3, height: '100%' }}
          >
            <Typography variant="h6" gutterBottom>
              Why Machine Learning?
            </Typography>
            <Typography>
              ML enables computers to learn from data and make decisions without being
              explicitly programmed, making it powerful for solving complex problems.
            </Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <MotionPaper
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            sx={{ p: 3, height: '100%' }}
          >
            <Typography variant="h6" gutterBottom>
              Applications
            </Typography>
            <Typography>
              From recommendation systems to autonomous vehicles, ML is transforming
              industries and creating new possibilities.
            </Typography>
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
}
