import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Typography } from '@mui/material'
import {Link } from 'react-router-dom';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';

import { allUsersAction } from '../../redux/actions/userAction';
import { deleteUserAction } from '../../redux/actions/userAction';
import LoadingBox from '../../components/LoadingBox';

const UsersAdminDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(allUsersAction());
        }, 700);
    }, []);

    const deleteUserById = (e, id) => {
        dispatch(deleteUserAction(id));
        setTimeout(() => {
            dispatch(allUsersAction());
        }, 400)
    }
    
    const { users, loading } = useSelector(state => state.allUsers);
    let data = [];
    data = (users !== undefined && users.length > 0) ? users : []

    const columns = [

      {
          field: '_id',
          headerName: 'User ID',
          width: 150,
          editable: true,
      },

      {
          field: 'email',
          headerName: 'E_mail',
          width: 150,
      },

      {
          field: 'role',
          headerName: 'User status',
          width: 150,
          renderCell: (params) => (
              params.row.role === 1 ? "Admin" : "Regular user"
          )
      },

      {
          field: 'createdAt',
          headerName: 'Creation date',
          width: 150,
          renderCell: (params) => (
              moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
          )
      },

      {
          field: "Actions",
          width: 200,
          renderCell: (values) => (
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <Button onClick={(e) => deleteUserById(e, values.row._id)} variant="contained" color="error">Delete</ Button>
              </Box>
          )
      }
  ];

  return (
    <>
      <Box >

        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
            All users
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
            <Button variant='contained' color="success" startIcon={<AddIcon />}>
                <Link 
                    style={{ color: "white", textDecoration: "none" }} 
                    to={{pathname: '/register', state: { from: localStorage.pathname}}} 
                >Create user</Link>
            </Button>
        </Box>
            <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

                <Box sx={{ height: 400, width: '100%' }}>
                    {
                        loading ?
                        <LoadingBox /> :
                        users && users.length === 0 ?
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
                            getRowId={(row) => row._id}
                            rows={data}
                            columns={columns}
                            pageSize={3}
                            rowsPerPageOptions={[3]}
                            checkboxSelection
                            slots={{ toolbar: GridToolbar }}
                        />
                    }
                </Box>
            </Paper>
        </Box>
  </>
  )
}

export default UsersAdminDashboard
