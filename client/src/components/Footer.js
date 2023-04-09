import React from 'react'
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const { palette } = useTheme()
  return (
    <>
      <Box sx={{
        height: '70px',
        bgcolor: palette.secondary.midNightBlue,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box component='span' sx={{ color: palette.primary.main }}>All rights reserved! 2023 G.Stalev</Box>
      </Box>
    </>
  )
}

export default Footer
