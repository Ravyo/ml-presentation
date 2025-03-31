import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const codeExamples = [
  {
    title: 'Data Preprocessing',
    code: `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# Load data
data = pd.read_csv('dataset.csv')

# Handle missing values
data = data.fillna(data.mean())

# Feature scaling
scaler = StandardScaler()
X = scaler.fit_transform(data.drop('target', axis=1))
y = data['target']`,
  },
  {
    title: 'Model Training',
    code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)`,
  },
  {
    title: 'Model Evaluation',
    code: `from sklearn.metrics import accuracy_score, classification_report

# Calculate accuracy
accuracy = accuracy_score(y_test, predictions)
print(f'Accuracy: {accuracy:.2f}')

# Detailed classification report
print(classification_report(y_test, predictions))`,
  },
];

export default function Implementation() {
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
              Implementing Machine Learning Models
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              A practical guide to building and deploying ML models
            </Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ p: 3 }}
          >
            <Typography variant="h6" gutterBottom>
              Development Environment Setup
            </Typography>
            <Typography paragraph>
              Before implementing ML models, you need to set up your development environment:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li">Python 3.8+</Typography>
              <Typography component="li">Required libraries: NumPy, Pandas, Scikit-learn</Typography>
              <Typography component="li">Jupyter Notebook or IDE</Typography>
              <Typography component="li">Version control (Git)</Typography>
            </Box>
          </MotionPaper>
        </Grid>

        {codeExamples.map((example, index) => (
          <Grid item xs={12} key={example.title}>
            <MotionPaper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              sx={{ p: 3 }}
            >
              <Typography variant="h6" gutterBottom>
                {example.title}
              </Typography>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'grey.900',
                  color: 'grey.100',
                  fontFamily: 'monospace',
                  overflow: 'auto',
                }}
              >
                <Typography
                  component="pre"
                  sx={{
                    m: 0,
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'monospace',
                  }}
                >
                  {example.code}
                </Typography>
              </Paper>
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
              Best Practices
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Data Management
                </Typography>
                <Typography>
                  • Clean and preprocess data thoroughly
                  • Handle missing values appropriately
                  • Feature engineering and selection
                  • Data versioning
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Model Development
                </Typography>
                <Typography>
                  • Start with simple models
                  • Use cross-validation
                  • Regularize to prevent overfitting
                  • Document your process
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Deployment
                </Typography>
                <Typography>
                  • Model versioning
                  • Performance monitoring
                  • Regular retraining
                  • A/B testing
                </Typography>
              </Grid>
            </Grid>
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
} 