import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userProfileAction } from '../../redux/actions/userAction';
import CardElement from '../../components/CardElement';

const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

  return (
    <>
        <Box>
            <Typography variant='h4' sx={{color: '#fafafa'}}>Jobs History</Typography>
            <Box>
                {
                    user && user.jobHistory.map((history, i) => (
                        <CardElement 
                            key={i}
                            id={history._id}
                            jobTitle={history.title}
                            description={history.description}
                            category=''
                            location={history.location}
                        />
                    ))
                }
            </Box>
        </Box>
    </>
  )
}

export default UserJobsHistory
