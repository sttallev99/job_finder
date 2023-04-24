import React, { useEffect } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteJobAction, jobLoadAction } from '../../redux/actions/jobAction';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import LoadingBox from '../../components/LoadingBox';

const JobsAdminDashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(jobLoadAction());
        }, 700)
    }, []);

    const { jobs, loading } = useSelector(state => state.loadJob);
    let data = [];
    data = (jobs !== undefined && jobs.length > 0) ? jobs : [];

    const deleteJobClickHandler = (e, id) => {
        dispatch(deleteJobAction(id));
        setTimeout(() => {
            dispatch(jobLoadAction())
        }, 400);
    }

    const columns = [
        {
            field: 'id',
            headerName: 'Job ID',
            width: 150,
            editable: true
        },
        {
            field: 'title',
            headerName: 'Job name',
            width: 150
        },
        {
            field: 'jobtype',
            headerName: 'Category',
            width: 150,
            valueGetter: (data) => data.row.jobType.jobTypeName
        },
        {
            field: 'user',
            headerName: 'User',
            width: 150,
            valueGetter: (data) => data.row.user.firstName + ' ' + data.row.user.lastName
        },
        {
            field: 'available',
            headerName: 'available',
            width: 150,
            renderCell: (values => (
                values.row.available ? 'Yes' : 'No' 
            ))
        },
        {
            field: 'salary',
            headerName: 'Salary',
            type: Number,
            width: 150,
            renderCell: (values => (
                '$' + values.row.salary
            ))
        },
        {
            field: 'Action',
            width: 200,
            renderCell: (values) => (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px'}}>
                    <Button onClick={(e) => deleteJobClickHandler(e, values.row._id)} variant='contained' color='error'>Delete</Button>
                </Box>
            )
        }
    ];

  return (
      <Box >
          <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
              Jobs list
          </Typography>
          <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                <Button variant='contained' color="success" startIcon={<AddIcon />}> 
                    <Link style={{ color: "white", textDecoration: "none" }} to="/admin/job/create">Create Job</Link>
                </Button>
          </Box>
          <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

              <Box sx={{ height: 400, width: '100%' }}>
                {
                    loading ? 
                    <LoadingBox /> :
                    jobs && jobs.length === 0 ?
                    <Box
                        sx={{
                            minHeight: '500px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <h2>No results found!</h2>
                    </Box> :
                    <DataGrid
                        getRowId={(row) => row._id}
                        sx={{

                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'white',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) =>
                                    // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                    theme.palette.secondary.main
                            },
                            button: {
                                color: '#ffffff'
                            }

                        }}
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                }
              </Box>
          </Paper>
      </Box>
  )
}

export default JobsAdminDashboard
