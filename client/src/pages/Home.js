import React, { useEffect, useState } from 'react'
import { Box, Card, Container, ListItem, ListItemIcon, MenuItem, Pagination, Stack, Typography } from '@mui/material';
import MenuList from '@mui/material/MenuList'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { jobLoadAction } from '../redux/actions/jobAction';
import CardElement from '../components/CardElement';
import Footer from '../components/Footer';
import LoadingBox from '../components/LoadingBox';
import SelectComponent from '../components/SelectComponent';
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction';

const Home = () => {
  const { jobs, setUniqueLocation, pages, loading} = useSelector(state => state.loadJob);
  
  const {palette} = useTheme();
  const dispatch = useDispatch();

  const { keyword, location } = useParams()

  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');

  useEffect(() => {
    setTimeout(() => {
      dispatch(jobLoadAction(page, keyword, cat, location));
    }, 300)
  }, [page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);
  
  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  }

  return (
    <>
      <Box sx={{ bgcolor: "fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
            <Stack
              direction={{ xs: 'column', sm: 'row'}}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box sx={{ flex: 2, p:2}}>
                {/*filter by job category*/}
                <Card sx={{minWidth: 150, mb: 3, mt: 3, p: 2}}>
                  <Box xs={{ pd: 2}}>
                      <Typography component='h4' sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                        Filter job by category
                      </Typography>
                  </Box>
                  <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />
                </Card>
                {/*filter by location */}
                <Card sx={{minWidth: 150, mb: 3, mt: 3, p: 2}}>
                  <Box xs={{ pd: 2}}>
                      <Typography component='h4' sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                        Filter job by location
                      </Typography>
                      <MenuList>
                        {
                          setUniqueLocation && setUniqueLocation.map((location, i) => (
                            <MenuItem key={i}>
                                <ListItemIcon>
                                  <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
                                </ListItemIcon>
                                <Link to={`/search/location/${location}`}>{location}</Link>
                            </MenuItem>
                          ))
                        }
                      </MenuList>
                  </Box>
                </Card>
              </Box>
              <Box sx={{ flex: 5, p:2}}>
                {
                  loading ?
                    <LoadingBox /> :
                    jobs && jobs.length === 0 ?
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
                
                      jobs && jobs.map((job, i) => {
                        return <CardElement
                          key={i}
                          id={job._id}
                          jobTitle={job.title}
                          description={job.description}
                          category={job.jobType ? job.jobType.jobTypeName : 'No category'}
                          location={job.location}
                        />
                      })}
                <Stack spacing={2} >
                  <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                </Stack>
              </Box>

            </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home
