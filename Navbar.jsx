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
        background: 'white',
        boxShadow: 'none', // Clean look
        padding: '6px 0',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '70px',
        }}
      >
        {/* Home Button */}
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isActive('/home') ? 'row' : 'column',
              alignItems: 'center',
              backgroundColor: isActive('/home') ? 'green' : 'transparent',
              color: isActive('/home') ? '#fff' : '#000',
              padding: isActive('/home') ?'21px 20px' : '0', // Increased padding for larger shape
              borderRadius: isActive('/home') ? '7px' : '80%', // Slightly larger border radius
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              disableRipple
              sx={{
                backgroundColor: 'transparent',
                color: isActive('/home') ? '#fff' : '#000',
                padding: '0',
                '&:hover': {
                  backgroundColor: isActive('/home') ? 'darkgreen' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <HomeRoundedIcon fontSize="small" />
            </IconButton>
            {isActive('/home') && (
              <Typography
                sx={{
                  marginLeft: '8px',
                  fontSize: '12px',
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
              backgroundColor: isActive('/add') ? 'green' : 'transparent',
              color: isActive('/add') ? '#fff' : '#000',
              padding: isActive('/add') ?'21px 20px' : '0', // Increased padding for larger shape
              borderRadius: isActive('/add') ? '7px' : '80%', // Slightly larger border radius
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              disableRipple
              sx={{
                backgroundColor: 'transparent',
                color: isActive('/add') ? '#fff' : '#000',
                padding: '0',
                '&:hover': {
                  backgroundColor: isActive('/add') ? 'darkgreen' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <AddCircleOutline fontSize="small" />
            </IconButton>
            {isActive('/add') && (
              <Typography
                sx={{
                  marginLeft: '8px',
                  fontSize: '12px',
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
              backgroundColor: isActive('/camp') ? 'green' : 'transparent',
              color: isActive('/camp') ? '#fff' : '#000',
              padding: isActive('/camp') ?'21px 20px' : '0',
              borderRadius: isActive('/camp') ? '7px' : '80%',
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              disableRipple
              sx={{
                backgroundColor: 'transparent',
                color: isActive('/camp') ? '#fff' : '#000',
                padding: '0',
                '&:hover': {
                  backgroundColor: isActive('/camp') ? 'darkgreen' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <CampaignOutlined fontSize="small" />
            </IconButton>
            {isActive('/camp') && (
              <Typography
                sx={{
                  marginLeft: '8px',
                  fontSize: '12px',
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
              backgroundColor: isActive('/info') ? 'green' : 'transparent',
              color: isActive('/info') ? '#fff' : '#000',
             padding: isActive('/info') ?'21px 20px' : '0',
             borderRadius: isActive('/info') ? '7px' : '80%',
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              disableRipple
              sx={{
                backgroundColor: 'transparent',
                color: isActive('/info') ? '#fff' : '#000',
                padding: '0',
                '&:hover': {
                  backgroundColor: isActive('/info') ? 'darkgreen' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <InfoOutlined fontSize="small" />
            </IconButton>
            {isActive('/info') && (
              <Typography
                sx={{
                  marginLeft: '8px',
                  fontSize: '12px',
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
