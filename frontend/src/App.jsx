import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'
import Clubs from './components/admin/Clubs'

import ClubCreate from './components/admin/ClubCreate'
 import ClubSetup from './components/admin/ClubSetup'




const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  // admin ke liye yha se start hoga
  
  {
    path:"/admin/clubs",
    element:<ProtectedRoute><Clubs/></ProtectedRoute>
  },

  {
    path:"/admin/clubs/create",
    element:<ProtectedRoute><ClubCreate/></ProtectedRoute>
},
{
  path:"/admin/clubs/:id",
  element:<ProtectedRoute><ClubSetup/></ProtectedRoute>
},
  

  {
    path:"/admin/jobs",
    element:<AdminJobs/> 
  },
  {
    path:"/admin/jobs/create",
    element:<PostJob/>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/>
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
