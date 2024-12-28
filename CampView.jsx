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
          maxHeight: '400px', // Set the max height for the table
          overflowY: 'auto', // Enable vertical scrolling
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
