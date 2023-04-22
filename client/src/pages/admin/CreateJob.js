import React, { useEffect } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import DomainAddIcon from '@mui/icons-material/DomainAdd';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction'
import { useTheme } from '@emotion/react';

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .required('First name is required'),
    lastName: yup
        .string('Enter your Last name')
        .required('Last name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required')
    });

const CreateJob = () => {
    const [type, setType] = React.useState('');
    const { palette } = useTheme();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(jobTypeLoadAction())
    }, []);
    
    const { jobType } =  useSelector(state => state.jobTypeAll);

    const handleChange = (event) => {
      setType(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            role: 0
        },
        onSubmit: values => {
            values.jobType = type;
            alert(JSON.stringify(values, null, 2));
        }
    })
  return (
    <>
        <Navbar />
        <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
            <Box component="form" onSubmit={formik.handleSubmit} className='form_style border-style' >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main', mb: 3}}>
                        <DomainAddIcon />
                    </Avatar>
                    <Typography component='h3' sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                        Create new job
                    </Typography>
                    <br />
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary',
                            },
                            fieldset: { borderColor: "rgb(231, 235, 240)" }
                        }}
                        fullWidth
                        id='title'
                        label='Title'
                        name='title'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary',
                            },
                            fieldset: { borderColor: "rgb(231, 235, 240)" }
                        }}
                        fullWidth
                        id='description'
                        label='Description'
                        name='description'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Description"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}

                    />
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary',
                            },
                            fieldset: { borderColor: "rgb(231, 235, 240)" }
                        }}
                        fullWidth
                        id='salary'
                        label='Salary'
                        name='salary'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="E-mail"
                        value={formik.values.salary}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.salary && Boolean(formik.errors.salary)}
                        helperText={formik.touched.salary && formik.errors.salary}
                    />
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary',
                            },
                            fieldset: { borderColor: "rgb(231, 235, 240)" }
                        }}
                        fullWidth
                        id='location'
                        label='Location'
                        name='location'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Location"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.location && Boolean(formik.errors.location)}
                        helperText={formik.touched.location && formik.errors.location}

                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Job type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={handleChange}
                        >
                            {jobType && jobType.map(type => <MenuItem value={type._id}>{type.jobTypeName}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <br />
                    <Button type='submit' variant='contained'>Create</Button>
                </Box>    
            </Box>
        </Box>
        <Footer />
    </>
  )
}

export default CreateJob
