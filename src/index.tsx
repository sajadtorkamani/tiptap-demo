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
    element: <div>Hello world!</div>,
  },
  {
    path: ROUTES.minimal,
    element: <Minimal />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
