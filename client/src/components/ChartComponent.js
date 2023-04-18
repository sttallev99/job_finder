import { useTheme } from '@mui/material';
import { Card, CardContent } from '@mui/material'
import React from 'react'

const ChartComponent = ({ children }) => {
    const { palette } = useTheme();
  return (
    <>
        <Card sx={{ bgcolor: palette.secondary.midNightBlue, width: '100%'}}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </>
  )
}

export default ChartComponent
