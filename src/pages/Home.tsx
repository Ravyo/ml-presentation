import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import TimelineIcon from '@mui/icons-material/Timeline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'Understanding ML',
      description: 'Learn the fundamentals of machine learning and its core concepts.',
      path: '/introduction'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Implementation',
      description: 'Explore practical examples and code implementations of ML algorithms.',
      path: '/implementation'
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      title: 'Types of ML',
      description: 'Discover different types of machine learning and their applications.',
      path: '/types'
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      title: 'Future Trends',
      description: 'Explore the latest trends and future developments in machine learning.',
      path: '/future'
    }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Machine Learning Presentation
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          A comprehensive guide to understanding and implementing machine learning concepts
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
                onClick={() => navigate(feature.path)}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {feature.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 'auto' }}
                >
                  Learn More
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 6,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: 'white'
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Why Learn Machine Learning?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                High Demand
              </Typography>
              <Typography>
                Machine learning skills are in high demand across industries, offering excellent career opportunities.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Innovation
              </Typography>
              <Typography>
                ML drives innovation in AI, enabling solutions to complex problems and creating new possibilities.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Future-Proof
              </Typography>
              <Typography>
                Understanding ML is crucial for staying relevant in the rapidly evolving tech landscape.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Home;
