import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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

const router = createBrowserRouter([
  {
    path: "/",
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
        element: <CreateEvent></CreateEvent>
      },
      {
        path: "/joined",
        element: <JoinEvents></JoinEvents>
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>
      }, 
      {
        path: "/manage-events",
        element: <ManageEvents></ManageEvents>
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvidor>
      <RouterProvider router={router} />
    </AuthProvidor>
  </StrictMode>,
)
