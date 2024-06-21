import React from 'react';
import './ListOfJobs.css';
import { Container, Box, Typography, Button, Grid, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const jobs = [
  { title: 'Software Engineer', location: 'New York, NY', datePosted: '2024-06-15' },
  { title: 'Product Manager', location: 'San Francisco, CA', datePosted: '2024-06-10' },
  { title: 'UX Designer', location: 'Austin, TX', datePosted: '2024-06-12' },
  { title: 'Product Manager', location: 'San Francisco, CA', datePosted: '2024-06-10' },
  { title: 'UX Designer', location: 'Austin, TX', datePosted: '2024-06-12' },
  { title: 'Product Manager', location: 'San Francisco, CA', datePosted: '2024-06-10' },
  { title: 'UX Designer', location: 'Austin, TX', datePosted: '2024-06-12' },
  { title: 'Product Manager', location: 'San Francisco, CA', datePosted: '2024-06-10' },
  { title: 'UX Designer', location: 'Austin, TX', datePosted: '2024-06-12' }
];

const ListOfJobs = () => {
  return (
    <Container className="container">
      <h1 className="heading">Jobs Posted</h1>
      {jobs.map((job, index) => (
        <Box key={index} className="job-box">
          <Box>
            <Typography variant="h6" className="job-title">{job.title}</Typography>
            <Grid container alignItems="center" spacing={1} className="job-details">
              <Grid item className="icon">
                <LocationOnIcon color="action" />
              </Grid>
              <Grid item>
                <Typography variant="body2">{job.location}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box display="flex" alignItems="center" className="job-details">
            <IconButton className="icon">
              <CalendarTodayIcon color="action" />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              {job.datePosted}
            </Typography>
          </Box>
          <Button variant="contained" className="apply-button">
            Apply
          </Button>
        </Box>
      ))}
    </Container>
  );
};

export default ListOfJobs;
