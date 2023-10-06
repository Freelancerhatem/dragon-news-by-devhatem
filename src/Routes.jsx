
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Root from './Layouts/Root';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import News from './Pages/News/News';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<div className='flex justify-center mt-32 text-3xl font-bold'>This page is not available</div>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('../public/news.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Registration></Registration>
        },
        {
          path:'/:_id',
          element:<PrivateRoute><News></News></PrivateRoute>,
          loader:()=>fetch('../public/news.json')
        },

      ]
    },
  ]);

export default router;