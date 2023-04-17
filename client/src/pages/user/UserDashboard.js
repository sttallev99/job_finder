import { Box, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';
import StatComponent from '../../components/StatComponent';

const UserDashboard = () => {
  const { user } = useSelector(state => state.userProfile);

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponent
            value= {user && moment(user.createdAt).format('YYYY / MM / DD')}
            icon={<CalendarMonthIcon sx={{ color: '#fafafa', fontSize: 30 }} />}
            description= 'Member since'
            money=''
          />
          <StatComponent
            value= {user && user.jobHistory.length}
            icon={<WorkIcon sx={{ color: '#fafafa', fontSize: 30 }} />}
            description= 'Number of jobs submitted'
            money=''
          />
        </Stack>
      </Box>
    </>
  )
}

export default UserDashboard
