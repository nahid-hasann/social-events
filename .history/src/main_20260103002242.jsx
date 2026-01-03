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
        path: "/events",
        element: <UpCommingEvent></UpCommingEvent>
      },
      {
        path: "/create-event",
        element: <PrivateRout><CreateEvent></CreateEvent></PrivateRout>
      },
      {
        path: "/joined",
        element: <PrivateRout><JoinEvents></JoinEvents></PrivateRout>
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>
      }, 
      {
        path: "/manage-events",
        element: <PrivateRout><ManageEvents></ManageEvents></PrivateRout>
      }

    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'user-home', 
        element: <div>User Home / Charts here</div> 
      },
      {
        path: 'add-event',
        element: <div>Add Event Page</div>
      },
      {
        path: 'my-events',
        element: <div>My Events List</div>
      },
      
      {
        path: 'all-users',
        element: <div>All Users List</div>
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
