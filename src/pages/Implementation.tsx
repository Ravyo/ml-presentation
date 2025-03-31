import React from 'react';
import { Box, Typography, Grid, Paper, Tabs, Tab, Typography as MuiTypography } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`implementation-tabpanel-${index}`}
      aria-labelledby={`implementation-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Implementation: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const codeExamples = {
    dataPreparation: `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# Load and prepare data
def prepare_data(file_path):
    # Read data
    df = pd.read_csv(file_path)
    
    # Handle missing values
    df = df.fillna(df.mean())
    
    # Feature scaling
    scaler = StandardScaler()
    X = scaler.fit_transform(df.drop('target', axis=1))
    y = df['target']
    
    return X, y`,

    modelTraining: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

def train_model(X, y):
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Initialize and train model
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X_train, y_train)
    
    # Evaluate model
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    return model, accuracy`,

    modelEvaluation: `from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

def evaluate_model(model, X_test, y_test):
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Generate classification report
    print(classification_report(y_test, y_pred))
    
    # Plot confusion matrix
    cm = confusion_matrix(y_test, y_pred)
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
    plt.title('Confusion Matrix')
    plt.ylabel('True Label')
    plt.xlabel('Predicted Label')
    plt.show()`
  };

  return (
    <Box sx={{ p: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          Implementation Guide
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Step-by-step guide to implementing machine learning solutions
        </Typography>
      </motion.div>

      <Paper elevation={3} sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab icon={<DataObjectIcon />} label="Data Preparation" />
          <Tab icon={<TimelineIcon />} label="Model Training" />
          <Tab icon={<AssessmentIcon />} label="Model Evaluation" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" gutterBottom>
              Data Preparation
            </Typography>
            <Typography paragraph>
              The first step in any machine learning project is preparing your data. This includes:
            </Typography>
            <ul>
              <li>Loading and exploring the data</li>
              <li>Handling missing values</li>
              <li>Feature scaling and normalization</li>
              <li>Feature engineering</li>
              <li>Data splitting</li>
            </ul>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                mt: 2,
                backgroundColor: '#f5f5f5',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap'
              }}
            >
              {codeExamples.dataPreparation}
            </Paper>
          </motion.div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" gutterBottom>
              Model Training
            </Typography>
            <Typography paragraph>
              Training your machine learning model involves:
            </Typography>
            <ul>
              <li>Selecting appropriate algorithms</li>
              <li>Setting hyperparameters</li>
              <li>Training the model</li>
              <li>Cross-validation</li>
              <li>Hyperparameter tuning</li>
            </ul>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                mt: 2,
                backgroundColor: '#f5f5f5',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap'
              }}
            >
              {codeExamples.modelTraining}
            </Paper>
          </motion.div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" gutterBottom>
              Model Evaluation
            </Typography>
            <Typography paragraph>
              Evaluating your model's performance is crucial:
            </Typography>
            <ul>
              <li>Accuracy metrics</li>
              <li>Confusion matrix</li>
              <li>ROC curves</li>
              <li>Cross-validation scores</li>
              <li>Model comparison</li>
            </ul>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                mt: 2,
                backgroundColor: '#f5f5f5',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap'
              }}
            >
              {codeExamples.modelEvaluation}
            </Paper>
          </motion.div>
        </TabPanel>
      </Paper>

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
            Best Practices
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Data Quality
              </Typography>
              <Typography>
                Ensure your data is clean, properly formatted, and representative of the problem domain.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Model Selection
              </Typography>
              <Typography>
                Choose models based on your specific problem, data characteristics, and requirements.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Evaluation
              </Typography>
              <Typography>
                Use appropriate metrics and validation techniques to assess model performance.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Implementation; 