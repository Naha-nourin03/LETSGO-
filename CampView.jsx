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
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  
  const CampView = () => {
    var[user,setuser]=useState([])
    var navigate = useNavigate()
    axios.get("http://localhost:4007/view")
        .then((res) => {
        console.log(res)
        setuser(res.data)
      })
      .catch((err) => console.log(err));
  
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
                 {user.map((val,i) => {
                      return (
               <TableRow>
                <TableCell>{val.campaign}</TableCell>
                <TableCell>{val.Description}</TableCell>
                <TableCell>{val.Group}</TableCell>
                <TableCell>{val.Date}</TableCell>
                <TableCell>{val.Location} </TableCell>
                {/* <TableCell>{val.JobType} </TableCell> */}
               </TableRow>
                 )
                })}
               </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default CampView;
  
