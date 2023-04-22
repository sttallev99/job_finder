import React, { useEffect } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { createJobTypeAction, jobTypeLoadAction } from '../../redux/actions/jobTypeAction'

const validationSchema = yup.object({
    jobTypeName: yup
        .string('Enter jib type title')
        .required('Job type is required')
    });

const CreateJobType = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(jobTypeLoadAction())
    }, []);
    
    const { userInfo } = useSelector(state => state.signIn);

    const formik = useFormik({
        initialValues: {
            jobTypeName: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            values.user = userInfo.user._id;
            dispatch(createJobTypeAction(values));
            navigate('/admin/category');
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
                        Create new job type
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
                        id='jobTypeName'
                        label='Job type'
                        name='jobTypeName'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Title"
                        value={formik.values.jobTypeName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)}
                        helperText={formik.touched.jobTypeName && formik.errors.jobTypeName}
                    />
                    <br />
                    <Button type='submit' variant='contained'>Create</Button>
                </Box>    
            </Box>
        </Box>
        <Footer />
    </>
  )
}

export default CreateJobType
