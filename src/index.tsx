import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ROUTES } from './constants'
import Minimal from './routes/Minimal'
import BasicExample from './routes/BasicExample'
import WithFormik from './routes/WithFormik'
import Layout from './components/Layout'

const routes = [
  {
    path: ROUTES.home,
    element: <div>Click on one of the example links.</div>,
  },
  { path: ROUTES.minimal, element: <Minimal /> },
  { path: ROUTES.basicExample, element: <BasicExample /> },
  { path: ROUTES.withFormik, element: <WithFormik /> },
]

const router = createBrowserRouter(
  routes.map((route) => ({
    path: route.path,
    element: <Layout>{route.element}</Layout>,
  }))
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
