import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const AddSp = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [adventureLevel, setAdventureLevel] = useState(5);
  const [familyFriendly, setFamilyFriendly] = useState(5);
  const [riskLevel, setRiskLevel] = useState(5);
  const [bestTime, setBestTime] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSliderChange = (setter) => (event, newValue) => {
    setter(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        // background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/1600x900/?nature,scenery)',
        backgroundSize: 'cover',
        padding: 3,
      }}
    >
      <Box
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 4,
          boxShadow: 3,
          padding: 4,
          width: '100%',
          maxWidth: 900,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#fff', marginBottom: 4 }}
        >
          Add a New Place
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Place Name"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 1,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Place Location"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 1,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Location Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 1,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography component="legend" sx={{ fontWeight: 'bold', marginBottom: 1, color: '#fff' }}>
              Upload Image
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: '#1976d2',
                color: '#fff',
                '&:hover': { backgroundColor: '#155fa0' },
              }}
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
              <Box
                sx={{
                  marginTop: 2,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    maxWidth: '100%',
                    maxHeight: 200,
                    borderRadius: 4,
                    border: '1px solid #ddd',
                  }}
                />
              </Box>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontWeight: 'bold', color: '#fff', marginBottom: 1 }}>
              Adventure Level
            </Typography>
            <Slider
              value={adventureLevel}
              onChange={handleSliderChange(setAdventureLevel)}
              step={1}
              marks
              min={1}
              max={10}
              sx={{ color: '#66bb6a' }}
            />
            <Box display="flex" justifyContent="space-between" sx={{ color: '#fff', fontSize: '0.9rem' }}>
              <span>1</span>
              <span>10</span>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontWeight: 'bold', color: '#fff', marginBottom: 1 }}>
              Family Friendly
            </Typography>
            <Slider
              value={familyFriendly}
              onChange={handleSliderChange(setFamilyFriendly)}
              step={1}
              marks
              min={1}
              max={10}
              sx={{ color: '#66bb6a' }}
            />
            <Box display="flex" justifyContent="space-between" sx={{ color: '#fff', fontSize: '0.9rem' }}>
              <span>1</span>
              <span>10</span>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontWeight: 'bold', color: '#fff', marginBottom: 1 }}>
              Risk Level
            </Typography>
            <Slider
              value={riskLevel}
              onChange={handleSliderChange(setRiskLevel)}
              step={1}
              marks
              min={1}
              max={10}
              sx={{ color: '#66bb6a' }}
            />
            <Box display="flex" justifyContent="space-between" sx={{ color: '#fff', fontSize: '0.9rem' }}>
              <span>1</span>
              <span>10</span>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 1 }}>
              <InputLabel
                id="best-time-label"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: 1,
                  fontSize: '1.2rem',
                  position: 'relative',
                  top: '-8px',
                }}
              >
                Best Time
              </InputLabel>
              <Select
                labelId="best-time-label"
                value={bestTime}
                onChange={(event) => setBestTime(event.target.value)}
                displayEmpty
                sx={{
                  '.MuiSelect-outlined': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  },
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#1976d2',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#155fa0',
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select Best Time
                </MenuItem>
                <MenuItem value="Morning">Morning</MenuItem>
                <MenuItem value="Noon">Noon</MenuItem>
                <MenuItem value="Evening">Evening</MenuItem>
                <MenuItem value="Any Time">Any Time</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                padding: 1.5,
                backgroundColor: '#1976d2',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff',
                '&:hover': { backgroundColor: '#155fa0' },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddSp;
