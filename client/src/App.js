import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { theme } from './theme';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './components/UserRoute';

const App = () => {

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/search/location/:location' element={<Home /> }/>
            <Route path='/search/:keyword' element={<Home /> }/>
            <Route path='/login' element={<LogIn /> }/>
            <Route path='/user/dashboard' element={<UserRoute><UserDashboard /></UserRoute> } />
            <Route path='*' element={<NotFound /> }/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>    
    </>
  )
}

export default App;