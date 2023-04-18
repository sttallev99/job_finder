import React from 'react';
import StatComponent from '../../components/StatComponent';
import { Box, Stack, Typography } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from 'react-google-charts';
import { data, options } from './data/data';
import ChartComponent from '../../components/ChartComponent';

const AdminDashboard = () => {
  return (
    <>
        <Box>
          <Typography variant='h4' sx={{ color: 'white', pb: 3}}>
            Dashboard
          </Typography>
          <Stack
            direction={{ sx: 'column', sm: 'row' }}
            spacing={{ sx: 1, sm: 2, md: 4 }}
          >
            <StatComponent
              value='534234'
              icon={<SupervisorAccountIcon sx={{ color: '#fafafa', fontSize: 30}} />}
              description='Administrator'
              money=''
            />
            <StatComponent
              value='450'
              icon={<WorkIcon sx={{ color: '#fafafa', fontSize: 30}} />}
              description='Jobs'
              money=''
            />
            <StatComponent
              value='450'
              icon={<CategoryIcon sx={{ color: '#fafafa', fontSize: 30}} />}
              description='Jobs categories'
              money=''
            />
          </Stack>

          <Stack 
            direction={{ sx: 'column', sm: 'row', }} sx={{ mt: 3}}
            spacing={{ sx: 1, sm: 2, md: 4 }}
          >
            <ChartComponent>
              <Chart
                chartType='Bar'
                data={data}
                options={options}
                width='100'
                height='300px'
                legendToggle
              />
            </ChartComponent>

          </Stack>
        </Box>
    </>
  )
}

export default AdminDashboard
