import { Button, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
      <Button LinkComponent={Link} to='/books'
       sx={{margin:'30px', background:'orangered'}} variant='contained'>
      <Typography variant='h2'> View All Products</Typography>
      </Button>
      </Box>
    </div>
  )
}

export default Home
