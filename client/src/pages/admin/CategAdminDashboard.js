import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import moment from 'moment';
import { Box, Button, Paper, Typography, gridClasses } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';

const CategAdminDashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);

    const { jobType, loading } = useSelector(state => state.jobTypeAll);
    let data = [];

    data = (jobType !== undefined && jobType.length > 0) ? jobType : [];
    console.log(data)

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
                    <Button variant='contained' color='error'>Delete</Button>
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
        <Button variant='contained' color="success" startIcon={<AddIcon />}> Create Category</Button>
        </Box>
        <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

        <Box sx={{ height: 400, width: '100%' }}>
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
        </Box>
        </Paper>

    </Box>
  )
}

export default CategAdminDashboard
