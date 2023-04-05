import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componetn/About/About';
import Contact from './componetn/Contact/Contact';
import Header from './componetn/Header/Header';
import Home from './componetn/Home/Home';
import First from './componetn/First/First';
import Friendes from './componetn/Friendes/Friendes';
import FrendDeatail from './componetn/FriendDetail/FrendDeatail';
import Posts from './componetn/Posts/Posts';
import PostDetail from './componetn/PostDetail/PostDetail';


/* const router= createBrowserRouter([
  {
  path  :'/',
    element:<App></App>
  },
  {
    path:'/about',
  element:<About></About>
  },
  {
    path:'/contact',
  element: <Contact></Contact>
  }
]) */
const  router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'/friends',
        element:<Friendes></Friendes>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
     path:'friend/:friendId',
     element:<FrendDeatail></FrendDeatail>,
    loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
       },
       {
        path:'post/:postId',
        element:<PostDetail></PostDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
       }
       ,
       {
         path:'posts',
         element:<Posts></Posts>,
         loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
       },
         {
          path:'about',
          element:<About></About>
         },
         {
          path:'contact',
          element:<Contact></Contact>
         },
     {
      path:'*',
      element:<div>ay tui ke paros na re</div>
     }
        ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
 <React.StrictMode>

 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
