import React from 'react'
import { ROUTES } from '../constants'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="mx-auto max-w-4xl my-6">
    <nav className="d-flex mb-4">
      {Object.values(ROUTES).map((route) => (
        <Link
          key={route}
          to={route}
          className="text-blue-700 underline mb-3 mr-3"
        >
          {route}{' '}
        </Link>
      ))}
    </nav>

    {children}
  </div>
)

export default Layout
