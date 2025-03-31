import React from 'react';
import { Box, Typography, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import CodeIcon from '@mui/icons-material/Code';

const Types: React.FC = () => {
  const mlTypes = [
    {
      title: 'Supervised Learning',
      icon: <SchoolIcon />,
      description: 'Learning from labeled data to make predictions',
      examples: [
        'Classification',
        'Regression',
        'Time Series Prediction'
      ],
      algorithms: [
        'Linear Regression',
        'Logistic Regression',
        'Decision Trees',
        'Random Forests',
        'Support Vector Machines',
        'Neural Networks'
      ]
    },
    {
      title: 'Unsupervised Learning',
      icon: <GroupIcon />,
      description: 'Finding patterns in unlabeled data',
      examples: [
        'Clustering',
        'Dimensionality Reduction',
        'Anomaly Detection'
      ],
      algorithms: [
        'K-Means Clustering',
        'Hierarchical Clustering',
        'Principal Component Analysis',
        'DBSCAN',
        'Gaussian Mixture Models'
      ]
    },
    {
      title: 'Reinforcement Learning',
      icon: <PsychologyIcon />,
      description: 'Learning through interaction with an environment',
      examples: [
        'Game Playing',
        'Robotics',
        'Resource Management'
      ],
      algorithms: [
        'Q-Learning',
        'Deep Q-Network',
        'Policy Gradient',
        'Actor-Critic',
        'Monte Carlo Methods'
      ]
    },
    {
      title: 'Deep Learning',
      icon: <TimelineIcon />,
      description: 'Neural networks with multiple layers',
      examples: [
        'Image Recognition',
        'Natural Language Processing',
        'Speech Recognition'
      ],
      algorithms: [
        'Convolutional Neural Networks',
        'Recurrent Neural Networks',
        'Transformers',
        'Autoencoders',
        'Generative Adversarial Networks'
      ]
    },
    {
      title: 'Transfer Learning',
      icon: <CodeIcon />,
      description: 'Applying knowledge from one task to another',
      examples: [
        'Image Classification',
        'Text Classification',
        'Domain Adaptation'
      ],
      algorithms: [
        'Fine-tuning',
        'Feature Extraction',
        'Domain Adaptation',
        'Multi-task Learning'
      ]
    }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          Types of Machine Learning
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Explore different approaches to machine learning and their applications
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        {mlTypes.map((type, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                elevation={3}
                sx={{
                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {type.icon}
                    <Typography variant="h6">{type.title}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>
                    {type.description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Examples:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {type.examples.map((example, idx) => (
                      <Chip
                        key={idx}
                        label={example}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Common Algorithms:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {type.algorithms.map((algorithm, idx) => (
                      <Chip
                        key={idx}
                        label={algorithm}
                        color="secondary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 4,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: 'white'
          }}
        >
          <Typography variant="h5" gutterBottom align="center">
            Choosing the Right Type
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Data Availability
              </Typography>
              <Typography>
                Consider the type and amount of data available for training your model.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Problem Type
              </Typography>
              <Typography>
                Match the ML type to your specific problem (classification, regression, clustering, etc.).
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <Typography>
                Consider computational resources, time constraints, and expertise required.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Types;
