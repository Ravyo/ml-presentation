import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';

const Applications = () => {
  const applications = [
    {
      title: 'Healthcare',
      description: 'ML is revolutionizing healthcare through disease diagnosis, drug discovery, and personalized treatment plans.',
      examples: [
        'Medical image analysis',
        'Predictive analytics for patient outcomes',
        'Drug development optimization',
      ],
      color: '#2196f3',
    },
    {
      title: 'Finance',
      description: 'Financial institutions use ML for fraud detection, risk assessment, and algorithmic trading.',
      examples: [
        'Fraud detection systems',
        'Credit scoring',
        'Market prediction',
      ],
      color: '#4caf50',
    },
    {
      title: 'Transportation',
      description: 'ML powers autonomous vehicles, traffic prediction, and route optimization.',
      examples: [
        'Self-driving cars',
        'Traffic flow optimization',
        'Predictive maintenance',
      ],
      color: '#f44336',
    },
    {
      title: 'E-commerce',
      description: 'Online retailers use ML for personalized recommendations and inventory management.',
      examples: [
        'Product recommendations',
        'Customer segmentation',
        'Price optimization',
      ],
      color: '#9c27b0',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Real-World Applications
          </Typography>

          <Grid container spacing={4}>
            {applications.map((app, index) => (
              <Grid item xs={12} md={6} key={app.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: `linear-gradient(45deg, ${app.color} 30%, ${app.color}80 90%)`,
                      color: 'white',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h4" sx={{ mb: 2 }}>
                        {app.title}
                      </Typography>
                      <Typography paragraph>{app.description}</Typography>
                      <Box sx={{ mt: 3 }}>
                        {app.examples.map((example) => (
                          <Box
                            key={example}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <IconButton
                              size="small"
                              sx={{
                                color: 'white',
                                mr: 1,
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.1)',
                                },
                              }}
                            >
                              <ArrowForward />
                            </IconButton>
                            <Typography>{example}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
              Impact and Benefits
            </Typography>
            <Card sx={{ p: 4, bgcolor: 'background.paper' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Efficiency
                  </Typography>
                  <Typography paragraph>
                    • Automated processes
                    <br />
                    • Reduced manual work
                    <br />
                    • Faster decision-making
                    <br />
                    • Resource optimization
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Accuracy
                  </Typography>
                  <Typography paragraph>
                    • Improved predictions
                    <br />
                    • Reduced errors
                    <br />
                    • Consistent results
                    <br />
                    • Better insights
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Innovation
                  </Typography>
                  <Typography paragraph>
                    • New possibilities
                    <br />
                    • Creative solutions
                    <br />
                    • Competitive advantage
                    <br />
                    • Future growth
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Applications;
