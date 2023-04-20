import React from 'react'
import * as yup from 'yup';
import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// const validationSchema = yup.object({
//     firstName: yup
//         .string('Enter your first name')
//         .required('First name is required'),
//     lastName: yup
//         .string('Enter your Last name')
//         .required('Last name is required'),
//     email: yup
//         .string('Enter your email')
//         .email('Enter a valid email')
//         .required('Email is required'),
//     password: yup
//         .string('Enter your password')
//         .password('Enter a valid password')
//         .required('Password is required'),
// });

const SignUp = () => {
  return (
    <>
        <Navbar />
        <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
            <Box component="form" className='form_style border-style' >
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
                        name='firstName'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Last name"
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
                    />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value='0' control={<Radio />} label="Regular user" checked/>
                            <FormControlLabel value='1' control={<Radio />} label="Admin" />
                        </RadioGroup>
                    </FormControl>

                    <Button fullWidth variant="contained" type='submit' >Sign Up</Button>
                </Box>    
            </Box>
        </Box>
        <Footer />
    </>
  )
}

export default SignUp
