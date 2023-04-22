import React, { useEffect } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userSignUpAction } from '../redux/actions/userAction';

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

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { success } = useSelector(state => state.signUp);
    const userInfo = localStorage.getItem('userInfo');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: 0

        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(userSignUpAction(values));
            actions.resetForm();
            if(userInfo) {
                navigate(-1);
            }
            navigate('/login');
        }
    })
  return (
    <>
        <Navbar />
        <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
            <Box component="form" onSubmit={formik.handleSubmit} className='form_style border-style' >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main', mb: 3}}>
                        <PersonAddIcon />
                    </Avatar>
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary',
                            },
                            fieldset: { borderColor: "rgb(231, 235, 240)" }
                        }}
                        fullWidth
                        id='firstName'
                        label='First Name'
                        name='firstName'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="First name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}

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
                        id='lastName'
                        label='Last Name'
                        name='lastName'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Last name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
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
                        id='email'
                        label='E-mail'
                        name='email'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="E-mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
                        id='password'
                        label='Password'
                        name='password'
                        type='password'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}

                    />
                    <FormControl sx={{ display: 'flex', alignItems: "center", justifyContent: "center", }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Create admin account?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                        >
                            <FormControlLabel  
                                control={<Radio />} 
                                label="Admin"
                                id='role'
                                name="role"
                                value= '1'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </RadioGroup>
                    </FormControl>
                    {
                        userInfo ? 
                        <Button fullWidth variant="contained" type='submit' >Add user</Button> :
                        <Button fullWidth variant="contained" type='submit' >Sign Up</Button>
                    }
                </Box>    
            </Box>
        </Box>
        <Footer />
    </>
  )
}

export default SignUp
