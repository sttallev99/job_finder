import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ProSidebarProvider } from 'react-pro-sidebar';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { theme } from './theme';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './components/UserRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import SingleJob from './pages/SingleJob';
import UsersAdminDashboard from './pages/admin/UsersAdminDashboard';
import JobsAdminDashboard from './pages/admin/JobsAdminDashboard';
import CategAdminDashboard from './pages/admin/CategAdminDashboard';
import SignUp from './pages/SignUp';
import CreateJob from './pages/admin/CreateJob';
import CreateJobType from './pages/admin/CreateJobType';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHisotryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const UsersAdminDashboardHOC = Layout(UsersAdminDashboard);
const JobsAdminDashboardHOC = Layout(JobsAdminDashboard);
const CategAdminDashboardHOC = Layout(CategAdminDashboard);

const App = () => {

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home /> }/>
              <Route path='/search/location/:location' element={<Home /> }/>
              <Route path='/search/:keyword' element={<Home /> }/>
              <Route path='/login' element={<LogIn /> }/>
              <Route path='/register' element={<SignUp /> }/>
              <Route path='/job/:id' element={<SingleJob /> }/>
              <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>}/>
              <Route path='/admin/users' element={<AdminRoute><UsersAdminDashboardHOC /></AdminRoute>}/>
              <Route path='/admin/jobs' element={<AdminRoute><JobsAdminDashboardHOC /></AdminRoute>}/>
              <Route path='/admin/job/create' element={<AdminRoute><CreateJob /></AdminRoute>}/>
              <Route path='/admin/category' element={<AdminRoute><CategAdminDashboardHOC /></AdminRoute>}/>
              <Route path='/admin/category/create' element={<AdminRoute><CreateJobType /></AdminRoute>}/>
              <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute> } />
              <Route path='/user/jobs' element={<UserRoute><UserJobsHisotryHOC /></UserRoute> } />
              <Route path='/user/info' element={<UserRoute><UserInfoDashboardHOC /></UserRoute> } />
              <Route path='*' element={<NotFound /> }/>
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>    
    </>
  )
}

export default App;