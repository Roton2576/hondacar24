import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import RattingSliderSingle from '../RattingSliderSingle/RattingSliderSingle';

const RattingSlider = () => {
  const [ ratting, setRatting ] = useState([]);

  useEffect(() => {
    fetch('https://agile-oasis-71318.herokuapp.com/ratting')
    .then(res => res.json())
    .then(data => setRatting(data))
  },[]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom component="div" sx={{pt:5, fontWeight: 600}}>
          Rating Area
      </Typography>
      <Grid container spacing={2} sx={{pb: 4}}>
          {
            ratting.map(rating => <RattingSliderSingle
              key={ rating._id }
              rating={ rating }
            ></RattingSliderSingle>)
          }
      </Grid>
    </Container>
  )
}

export default RattingSlider
