import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteJobTypeAction, jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import moment from 'moment';
import { Box, Button, Paper, Typography, gridClasses } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox';

const CategAdminDashboard = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(jobTypeLoadAction());
        },500)
    }, []);
    
    const { jobType, loading } = useSelector(state => state.jobTypeAll);
    
    let data = [];
    data = (jobType !== undefined && jobType.length > 0) ? jobType : [];

    const deleteJobTypeClickHandler = (e, id) => {
        dispatch(deleteJobTypeAction(id));
        setTimeout(() => {
            dispatch(jobTypeLoadAction());
        },500)
    }

    const columns = [
        {
            field: '_id',
            headerName: 'Category ID',
            width: 150,
            editable: true
        },
        {
            field: 'jobTypeName',
            headerName: 'Category',
            width: 150
        },
        {
            field: 'createdAt',
            headerName: 'Create At',
            width: 150,
            renderCell: (params) => (
                moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
            )
        },
        {
            field: 'Actions',
            width: 200,
            renderCell: (values) => (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px'}}>
                    <Button onClick={(e) => deleteJobTypeClickHandler(e, values.row._id)} variant='contained' color='error'>
                        Delete
                    </Button>
                </Box>
            )
        }
    ]
  return (
    <Box >
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
        Jobs category
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
        <Link to='/admin/category/create'>
            <Button variant='contained' color="success" startIcon={<AddIcon />}> Create Category</Button>
        </Link>
        </Box>
        <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

        <Box sx={{ height: 400, width: '100%' }}>
            {
                loading ? 
                <LoadingBox /> :
                jobType && jobType.length === 0 ?
                    <>
                    <Box
                        sx={{
                            minHeight: '500px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <h2>No results found!</h2>
                    </Box>
                    </> :
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
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                        components={{ Toolbar: GridToolbarExport }}
                    />
            }
        </Box>
        </Paper>

    </Box>
  )
}

export default CategAdminDashboard
