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
  import React, { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  
  const CampView = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get('http://localhost:4007/view')
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        {/* Floating Button */}
        <Fab
          color="success"
          aria-label="add"
          onClick={() => navigate('/campadd')}
          title="Add Campaign"
          sx={{
            position: 'fixed', // Fix the button relative to the viewport
            bottom: '95px', // Position from the bottom
            right: '20px', // Position from the right
            zIndex: 1000, // Ensure it stays above other elements
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
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#4caf50',
          }}
        >
          Wanna Join A Campaign?
        </Typography>
  
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: '95%',
            margin: '20px auto',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
          }}
        >
          <Table
            sx={{
              tableLayout: 'auto', // Allow dynamic resizing of columns
              '& td, & th': {
                fontSize: { xs: '12px', sm: '14px' }, // Adjust font size for smaller screens
                wordWrap: 'break-word', // Ensure content wraps
                textAlign: 'center',
                padding: { xs: '4px', sm: '8px' }, // Reduce padding for smaller screens
              },
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: '#4caf50',
                  '& th': {
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: { xs: '14px', sm: '16px' },
                  },
                }}
              >
                <TableCell>Campaign Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((val, i) => (
                <TableRow key={i}>
                  <TableCell>{val.campaign}</TableCell>
                  <TableCell>{val.Location}</TableCell>
                  <TableCell>
                    <a href={val.link} target="_blank" rel="noopener noreferrer">
                      Open
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default CampView;
  
import AddIcon from '@mui/icons-material/Add';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CampView = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:4007/view')
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        Wanna Join A Campaign?
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: '95%',
          margin: '20px auto',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
          borderRadius: '16px',
          maxHeight: '400px', // Set maximum height for the container
          overflow: 'auto', // Enable scrolling
        }}
      >
        <Table stickyHeader> {/* Add stickyHeader for a fixed header */}
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: '#4caf50', // Green header background
                '& th': {
                  color: '#000', // Black text for the header
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
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val, i) => (
              <TableRow key={i}>
                <TableCell>{val.campaign}</TableCell>
                <TableCell>{val.Description}</TableCell>
                <TableCell>{val.Group}</TableCell>
                <TableCell>{val.Date}</TableCell>
                <TableCell>{val.Location}</TableCell>
                <TableCell>{val.link}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CampView;
