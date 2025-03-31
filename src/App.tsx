import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Types from './pages/Types';
import Implementation from './pages/Implementation';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            ml: { sm: '240px' },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Introduction />} />
            <Route path="/types" element={<Types />} />
            <Route path="/implementation" element={<Implementation />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
