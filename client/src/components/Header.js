import React from 'react';
import { Box, styled } from '@mui/material';

import headerImage from '../images/job_finder_navbar.jpg'

const Header = () => {
    const StyleHeader = styled(Box)(({ theme })=>(
        {
          display: "flex",
          justifyContent: "center",
          minHeight: 400,
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
    ));

  return (
    <>
        <StyleHeader>

        </StyleHeader>
    </>
  )
}

export default Header
