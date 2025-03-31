import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const mlTypes = [
  {
    title: 'Supervised Learning',
    description: 'The model learns from labeled data to make predictions or classifications.',
    examples: [
      'Classification (e.g., spam detection)',
      'Regression (e.g., house price prediction)',
    ],
    image: 'https://source.unsplash.com/random/400x300?supervised-learning',
  },
  {
    title: 'Unsupervised Learning',
    description: 'The model finds patterns in unlabeled data without predefined outcomes.',
    examples: [
      'Clustering (e.g., customer segmentation)',
      'Dimensionality Reduction',
    ],
    image: 'https://source.unsplash.com/random/400x300?unsupervised-learning',
  },
  {
    title: 'Reinforcement Learning',
    description: 'The model learns through trial and error to maximize rewards.',
    examples: [
      'Game AI',
      'Robotics',
      'Autonomous Systems',
    ],
    image: 'https://source.unsplash.com/random/400x300?reinforcement-learning',
  },
];

export default function Types() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Types of Machine Learning
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              Understanding different approaches to machine learning
            </Typography>
          </MotionPaper>
        </Grid>

        {mlTypes.map((type, index) => (
          <Grid item xs={12} md={4} key={type.title}>
            <MotionPaper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{ height: '100%' }}
            >
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={type.image}
                  alt={type.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {type.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {type.description}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Examples:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {type.examples.map((example) => (
                      <Typography component="li" key={example} variant="body2">
                        {example}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </MotionPaper>
          </Grid>
        ))}

        <Grid item xs={12}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            sx={{ p: 3 }}
          >
            <Typography variant="h6" gutterBottom>
              Choosing the Right Type
            </Typography>
            <Typography paragraph>
              The choice of ML type depends on several factors:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Data Availability
                </Typography>
                <Typography>
                  • Labeled vs. unlabeled data
                  • Data quality and quantity
                  • Data distribution
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Problem Type
                </Typography>
                <Typography>
                  • Classification vs. regression
                  • Pattern recognition
                  • Decision making
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Resources
                </Typography>
                <Typography>
                  • Computational power
                  • Time constraints
                  • Budget limitations
                </Typography>
              </Grid>
            </Grid>
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
}
