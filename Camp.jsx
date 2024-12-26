import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Box } from '@mui/material';

const Camp = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = (event) => {
    setSelectedType(event.target.value);
    console.log("Selected Type:", event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        fontFamily: 'Roboto, sans-serif',
        padding: '20px',
        maxWidth: '900px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#333', marginBottom: '30px' }}
      >
        Campaign Details
      </Typography>

      <section style={{ marginBottom: '40px' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '20px' }}
        >
          General Information
        </Typography>
        <TextField label="Title of Campaign" variant="outlined" name="campaign" fullWidth margin="normal" />
        <TextField label="Description" variant="outlined" name="Description" multiline rows={4} fullWidth margin="normal" />
        <TextField label="Link" variant="outlined" name="Link" type="link" fullWidth margin="normal" />
        <TextField label="City/State/Country" variant="outlined" name="Location" fullWidth margin="normal" />
        <TextField label="Name of Organization/Individual" variant="outlined" name="Group" fullWidth margin="normal" />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Date" variant="outlined" name="Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
          <TextField label="Time" variant="outlined" name="Time" type="time" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />

          </Grid>
        </Grid>
        <TextField label="Duration" variant="outlined" name="Duration" fullWidth margin="normal" />
        <TextField label="Number of Volunteers Needed" variant="outlined" name="volunteers" fullWidth margin="normal" />
        <TextField label="Requirements" variant="outlined" name="Requirements" fullWidth margin="normal" />
      </section>

     
      <section style={{ marginBottom: '40px' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '20px' }}
        >
          Contact Information
        </Typography>
        <TextField label="Name" variant="outlined" name="Name" fullWidth margin="normal" />
        <TextField label="Phone Number" variant="outlined" name="Phone" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" name="email" fullWidth margin="normal" />
      </section>

      <section style={{ marginBottom: '20px' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '20px' }}
        >
          Upload Image
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: '#1976d2', color: '#fff', marginBottom: '20px' }}
        >
          Choose Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>

        {imagePreview && (
          <Box textAlign="center" sx={{ marginTop: '20px' }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', color: '#555', marginBottom: '10px' }}
            >
              Image Preview:
            </Typography>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '8px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Box>
        )}
      </section>

      <Grid container justifyContent="center" sx={{ marginTop: '10px', marginBottom: '40px' }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ padding: '10px 30px', backgroundColor: '#1976d2', color: '#fff' }}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
};

export default Camp;
