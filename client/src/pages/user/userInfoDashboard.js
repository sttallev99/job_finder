import { useTheme } from '@emotion/react';
import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const UserInfoDashboard = () => {
    const { palette } = useTheme();
  return (
    <>
        <Box sx={{ maxWidth: '50%', margin: 'auto', pt: 10}}>
            <Card sx={{ minWidth: 275, bgcolor:palette.secondary.midNightBlue }}>
                <CardContent>
                    <Typography sx={{ fontSize: 16 }} color='#fafafa' gutterBottom>
                        Personal Info
                    </Typography>
                    <hr style={{ marginBottom: '30px'}} />
                    <Typography variant='h6' component='div' sx={{ color: '#fafafa'}}>
                        First name: Georgi
                    </Typography>
                    <Typography variant='h6' component='div' sx={{ color: '#fafafa'}}>
                        Last name: Stalev
                    </Typography>
                    <Typography variant='h6' component='div' sx={{ color: '#fafafa'}}>
                        E-mail: sttallev99@gmail.com
                    </Typography>
                    <Typography sx={{ mb: 1.5, color: 'gray', pt: 2}} color='text.secondary'>
                        Status: regular user
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </>
  )
}

export default UserInfoDashboard
