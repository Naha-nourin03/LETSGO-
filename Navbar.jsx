import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import CampaignOutlined from '@mui/icons-material/CampaignOutlined';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const Navbar = () => {
  const location = useLocation();

  // Utility function to check the active route
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: '#fff', // Light background color
        boxShadow: '0px -1px 5px rgba(0,0,0,0.1)', // Subtle shadow
        padding: '6px 0', // Reduced overall padding
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '70px', // Slightly smaller toolbar height
        }}
      >
        {/* Home Button */}
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isActive('/home') ? 'row' : 'column',
              alignItems: 'center',
              backgroundColor: isActive('/home') ? '#000' : 'transparent',
              color: isActive('/home') ? '#fff' : '#000',
              padding: isActive('/home') ? '4px 12px' : '0', // Reduced padding for the active button
              borderRadius: isActive('/home') ? '20px' : '50%',
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: isActive('/home') ? 'transparent' : '#f0f0f0',
                color: isActive('/home') ? '#fff' : '#000',
                width: isActive('/home') ? 'auto' : '50px', // Reduced size of icon buttons
                height: '50px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: isActive('/home') ? 'transparent' : '#ddd',
                },
              }}
            >
              <HomeRoundedIcon fontSize="small" /> {/* Slightly smaller icon */}
            </IconButton>
            {isActive('/home') && (
              <Typography
                sx={{
                  marginLeft: '8px', // Smaller margin for label
                  fontSize: '12px', // Slightly smaller font size for label
                  color: '#fff',
                }}
              >
                Home
              </Typography>
            )}
          </Box>
        </Link>

        {/* Add Button */}
        <Link to="/add" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isActive('/add') ? 'row' : 'column',
              alignItems: 'center',
              backgroundColor: isActive('/add') ? '#000' : 'transparent',
              color: isActive('/add') ? '#fff' : '#000',
              padding: isActive('/add') ? '4px 12px' : '0', // Reduced padding for the active button
              borderRadius: isActive('/add') ? '20px' : '50%',
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: isActive('/add') ? 'transparent' : '#f0f0f0',
                color: isActive('/add') ? '#fff' : '#000',
                width: isActive('/add') ? 'auto' : '50px', // Reduced size of icon buttons
                height: '50px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: isActive('/add') ? 'transparent' : '#ddd',
                },
              }}
            >
              <AddCircleOutline fontSize="small" /> {/* Slightly smaller icon */}
            </IconButton>
            {isActive('/add') && (
              <Typography
                sx={{
                  marginLeft: '8px', // Smaller margin for label
                  fontSize: '12px', // Slightly smaller font size for label
                  color: '#fff',
                }}
              >
                Add
              </Typography>
            )}
          </Box>
        </Link>

        {/* Campaign Button */}
        <Link to="/camp" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isActive('/camp') ? 'row' : 'column',
              alignItems: 'center',
              backgroundColor: isActive('/camp') ? '#000' : 'transparent',
              color: isActive('/camp') ? '#fff' : '#000',
              padding: isActive('/camp') ? '4px 12px' : '0', // Reduced padding for the active button
              borderRadius: isActive('/camp') ? '20px' : '50%',
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: isActive('/camp') ? 'transparent' : '#f0f0f0',
                color: isActive('/camp') ? '#fff' : '#000',
                width: isActive('/camp') ? 'auto' : '50px', // Reduced size of icon buttons
                height: '50px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: isActive('/camp') ? 'transparent' : '#ddd',
                },
              }}
            >
              <CampaignOutlined fontSize="small" /> {/* Slightly smaller icon */}
            </IconButton>
            {isActive('/camp') && (
              <Typography
                sx={{
                  marginLeft: '8px', // Smaller margin for label
                  fontSize: '12px', // Slightly smaller font size for label
                  color: '#fff',
                }}
              >
                Campaign
              </Typography>
            )}
          </Box>
        </Link>

        {/* Info Button */}
        <Link to="/info" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isActive('/info') ? 'row' : 'column',
              alignItems: 'center',
              backgroundColor: isActive('/info') ? '#000' : 'transparent',
              color: isActive('/info') ? '#fff' : '#000',
              padding: isActive('/info') ? '4px 12px' : '0', // Reduced padding for the active button
              borderRadius: isActive('/info') ? '20px' : '50%',
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: isActive('/info') ? 'transparent' : '#f0f0f0',
                color: isActive('/info') ? '#fff' : '#000',
                width: isActive('/info') ? 'auto' : '50px', // Reduced size of icon buttons
                height: '50px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: isActive('/info') ? 'transparent' : '#ddd',
                },
              }}
            >
              <InfoOutlined fontSize="small" /> {/* Slightly smaller icon */}
            </IconButton>
            {isActive('/info') && (
              <Typography
                sx={{
                  marginLeft: '8px', // Smaller margin for label
                  fontSize: '12px', // Slightly smaller font size for label
                  color: '#fff',
                }}
              >
                Info
              </Typography>
            )}
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
