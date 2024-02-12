import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './pages/_layout'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
])
