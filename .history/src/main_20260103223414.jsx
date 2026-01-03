import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Pages/Home.jsx';
import MainLayout from './component/layout/MainLayout.jsx';
import Login from './component/Pages/Login.jsx';
import Register from './component/Pages/Register.jsx';
import UpCommingEvent from './component/Pages/UpCommingEvent.jsx';
import AuthProvidor from './AuthProvidor.jsx';
import CreateEvent from './component/Pages/CreateEvent.jsx';
import JoinEvents from './component/Pages/JoinEvents.jsx';
import EventDetails from './component/Pages/EventDetails.jsx';
import ManageEvents from './component/Pages/ManageEvents.jsx';
import { BiError } from 'react-icons/bi';
import Errorr from './component/Pages/Errorr.jsx';
import PrivateRout from './PrivateRout.jsx';
import Dashboard from './component/layout/Dashboard.jsx';
import UserHome from './component/UserHome.jsx';
import ManageUsers from './component/ManageUsers.jsx';
import AdminHome from './component/AdminHome.jsx';
import AllEvents from './component/AllEvents.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorr></Errorr>,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        
      }
      {
        path: "/events",
        element: <UpCommingEvent></UpCommingEvent>
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>
      },

    ],
  },


  {
    path: 'dashboard',
    element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
    children: [
      {
        path: 'admin-home',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'user-home',
        element: <UserHome></UserHome>
      },
      {
        path: 'add-event',
        element: <CreateEvent></CreateEvent>
      },
      {
        path: 'my-events',
        element: <ManageEvents></ManageEvents>
      },
      {
        path: 'joined-events',
        element: <JoinEvents></JoinEvents>
      },
      // Admin Routes
      {
        path: 'all-users',
        element: <ManageUsers></ManageUsers> 
      },
      
      {
        path: 'admin-home',
        element: <div>Admin Home Page</div>
      },
      {
        path: 'all-events',
        element: <AllEvents></AllEvents>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvidor>
      <RouterProvider router={router} />
    </AuthProvidor>
  </StrictMode>,
)
