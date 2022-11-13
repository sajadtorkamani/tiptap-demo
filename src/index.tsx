import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ROUTES } from './constants'
import Minimal from './routes/Minimal'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: (
      <Layout>
        <div>Hello world!</div>,
      </Layout>
    ),
  },
  {
    path: ROUTES.minimal,
    element: (
      <Layout>
        <Minimal />
      </Layout>
    ),
  },
])

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
