import React from 'react';
import { Box, Typography, Grid, Paper, Stepper, Step, StepLabel, StepContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import CodeIcon from '@mui/icons-material/Code';

const Introduction: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: 'What is Machine Learning?',
      description: `Machine Learning is a branch of artificial intelligence that focuses on building applications that learn from data and improve their accuracy over time. It enables computers to learn from data and make decisions without being explicitly programmed.`,
      icon: <PsychologyIcon />
    },
    {
      label: 'Key Components',
      description: `1. Data: The foundation of ML, including training data, validation data, and test data.
2. Features: Input variables used to make predictions
3. Model: The algorithm that learns patterns from the data
4. Training: The process of learning from data
5. Evaluation: Assessing model performance
6. Prediction: Making new predictions on unseen data`,
      icon: <DataObjectIcon />
    },
    {
      label: 'How it Works',
      description: `1. Data Collection: Gather relevant data
2. Data Preprocessing: Clean and prepare data
3. Feature Engineering: Extract meaningful features
4. Model Selection: Choose appropriate algorithm
5. Training: Fit the model to the data
6. Evaluation: Test model performance
7. Deployment: Use the model for predictions`,
      icon: <TimelineIcon />
    },
    {
      label: 'Key Concepts',
      description: `1. Supervised Learning: Learning from labeled data
2. Unsupervised Learning: Finding patterns in unlabeled data
3. Reinforcement Learning: Learning through interaction
4. Deep Learning: Neural networks with multiple layers
5. Transfer Learning: Applying knowledge from one task to another`,
      icon: <CodeIcon />
    }
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{ p: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          Introduction to Machine Learning
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Understanding the fundamentals of machine learning and its core concepts
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel icon={step.icon}>
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                      {step.description}
                    </Typography>
                    <Box sx={{ mb: 2, mt: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                          disabled={index === steps.length - 1}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Key Takeaways
              </Typography>
              <Typography paragraph>
                Machine Learning is transforming the way we solve problems by enabling computers to learn from data and make intelligent decisions.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Benefits:
              </Typography>
              <ul>
                <li>Automated decision-making</li>
                <li>Pattern recognition</li>
                <li>Scalable solutions</li>
                <li>Continuous improvement</li>
                <li>Real-world applications</li>
              </ul>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
