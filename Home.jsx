import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: '16px', // Rounded corners
          overflow: 'hidden', // To keep media and content aligned
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Hover effects
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image="/static/images/cards/contemplative-reptile.jpg" // Replace with your actual image path
          alt="Card image"
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: '#333', // Darker text for better contrast
              marginBottom: '8px',
            }}
          >
            Place Name
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.6 }}
          >
            This is a brief description of the place. Add relevant details to
            make it engaging and informative.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
