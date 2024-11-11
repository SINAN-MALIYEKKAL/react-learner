import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './page/Index.jsx';
import Home from './page/Home.jsx';
import TVseries from './page/TVseries.jsx';
import Topimdb from './page/Topimdb.jsx';
import Watchscreen from './page/Movies/Watchscreen.jsx';
import Movies from './page/Movies.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Index/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/watchscreen/:id',
        element:<Watchscreen />
      },
      {
      path:'/tvseries',
      element:<TVseries/>
      },
      {
      path:'/movie',
      element:<Movies/>
      },
      {
       path:'/topimdb',
       element:<Topimdb/>
      }
    ]


  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
