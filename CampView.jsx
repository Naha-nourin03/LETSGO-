import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Fab,
  } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  
  const CampView = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        {/* Floating Button with Hover Message */}
        <Fab
          color="success"
          aria-label="add"
          onClick={() => navigate('/campadd')}
          title="Add Campaign" // This message appears on hover
          sx={{
            position: 'absolute',
            top: '640px',
            right: '20px',
            zIndex: 10,
            backgroundColor: '#4caf50',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#388e3c',
            },
          }}
        >
          <AddIcon />
        </Fab>
  
        {/* Main Content */}
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#4caf50', // Green color for heading
          }}
        >
          Campaign
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: '95%',
            margin: '20px auto',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: '#4caf50', // Green header background
                  '& th': {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    textAlign: 'center',
                  },
                }}
              >
                <TableCell>Campaign Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Organization/Individual</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow
                  key={i}
                  sx={{
                    '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' },
                    '&:nth-of-type(even)': { backgroundColor: '#fff' },
                    '&:hover': { backgroundColor: '#e8f5e9' }, // Light green hover effect
                    '& td': {
                      fontSize: '16px',
                      textAlign: 'center',
                      padding: '16px',
                    },
                  }}
                >
                  <TableCell>Campaign {i + 1}</TableCell>
                  <TableCell>
                    A detailed description for Campaign {i + 1}, highlighting key
                    features and goals.
                  </TableCell>
                  <TableCell>Organization {i + 1}</TableCell>
                  <TableCell>2024-12-31</TableCell>
                  <TableCell>City {i + 1}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default CampView;
  