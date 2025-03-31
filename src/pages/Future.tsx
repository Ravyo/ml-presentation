import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ScienceIcon from '@mui/icons-material/Science';

const Future: React.FC = () => {
  const trends = [
    {
      title: 'Advanced Neural Networks',
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      description: 'The development of more sophisticated neural network architectures continues to push the boundaries of what\'s possible in machine learning.',
      developments: [
        'Transformer models and attention mechanisms',
        'Neural architecture search',
        'Few-shot and zero-shot learning',
        'Self-supervised learning'
      ],
      image: 'https://source.unsplash.com/random/800x400?neural-network'
    },
    {
      title: 'AI Ethics and Responsible Development',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      description: 'As AI systems become more powerful, the importance of ethical considerations and responsible development practices grows.',
      developments: [
        'Fairness and bias mitigation',
        'Transparency and explainability',
        'Privacy and data protection',
        'AI governance and regulation'
      ],
      image: 'https://source.unsplash.com/random/800x400?ethics'
    },
    {
      title: 'Edge Computing and IoT',
      icon: <DevicesIcon sx={{ fontSize: 40 }} />,
      description: 'The integration of machine learning with edge computing and Internet of Things devices is creating new possibilities for real-time AI applications.',
      developments: [
        'TinyML and model optimization',
        'Edge AI hardware acceleration',
        'Distributed learning systems',
        'Real-time inference'
      ],
      image: 'https://source.unsplash.com/random/800x400?iot'
    },
    {
      title: 'Multimodal AI',
      icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
      description: 'The combination of different types of data (text, images, audio, video) is leading to more comprehensive and powerful AI systems.',
      developments: [
        'Cross-modal learning',
        'Multimodal transformers',
        'Audio-visual learning',
        'Language-vision models'
      ],
      image: 'https://source.unsplash.com/random/800x400?multimodal'
    },
    {
      title: 'Quantum Machine Learning',
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      description: 'The intersection of quantum computing and machine learning promises to solve complex problems that are currently intractable.',
      developments: [
        'Quantum neural networks',
        'Quantum optimization',
        'Quantum feature maps',
        'Quantum kernel methods'
      ],
      image: 'https://source.unsplash.com/random/800x400?quantum'
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
          Future of Machine Learning
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Exploring the cutting-edge developments and potential applications
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {trends.map((trend, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ display: 'flex', height: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image={trend.image}
                  alt={trend.title}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                      {trend.icon}
                    </Box>
                    <Typography variant="h5" component="h2">
                      {trend.title}
                    </Typography>
                  </Box>
                  <Typography paragraph>
                    {trend.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {trend.developments.map((development, idx) => (
                      <Chip
                        key={idx}
                        label={development}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
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
            Impact on Society
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Healthcare
              </Typography>
              <Typography>
                Advanced ML models will revolutionize disease diagnosis, drug discovery, and personalized treatment plans.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Environment
              </Typography>
              <Typography>
                ML will help address climate change through better prediction models and optimization of resource usage.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography>
                Personalized learning experiences and adaptive educational systems will transform how we learn.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Future;
