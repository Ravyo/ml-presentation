import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const steps = [
  {
    label: 'What is Machine Learning?',
    description: `Machine Learning is a subset of artificial intelligence that focuses on building systems that can learn from and make decisions based on data. Instead of being explicitly programmed, these systems learn and improve from experience.`,
  },
  {
    label: 'Key Concepts',
    description: `The fundamental concepts of ML include:
    • Data: The foundation of ML
    • Features: Characteristics or attributes of the data
    • Labels: The target variable we want to predict
    • Model: The mathematical representation of the relationship between features and labels
    • Training: The process of learning from data
    • Testing: Evaluating the model's performance`,
  },
  {
    label: 'The Learning Process',
    description: `1. Data Collection: Gather relevant data
    2. Data Preprocessing: Clean and prepare the data
    3. Feature Engineering: Extract and select important features
    4. Model Selection: Choose appropriate algorithms
    5. Training: Fit the model to the data
    6. Evaluation: Assess model performance
    7. Deployment: Use the model for predictions`,
  },
];

export default function Introduction() {
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
              Introduction to Machine Learning
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              Understanding the fundamentals of ML and its importance in modern technology
            </Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Stepper activeStep={-1} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Typography variant="h6">{step.label}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Box sx={{ mb: 2 }}>
                      <Typography>{step.description}</Typography>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ p: 3 }}
          >
            <Typography variant="h6" gutterBottom>
              Real-World Applications
            </Typography>
            <Typography paragraph>
              Machine Learning is transforming various industries:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Healthcare
                </Typography>
                <Typography>
                  Disease diagnosis, drug discovery, and personalized treatment plans
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Finance
                </Typography>
                <Typography>
                  Fraud detection, risk assessment, and algorithmic trading
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Transportation
                </Typography>
                <Typography>
                  Autonomous vehicles, traffic prediction, and route optimization
                </Typography>
              </Grid>
            </Grid>
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
}
