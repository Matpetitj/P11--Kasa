import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  json,
  Outlet,
} from 'react-router-dom'
import './Utils/style-page/index.css'
import Home from './pages/Home/Home-index'
import Accommodation from './pages/Accommodation-Sheet/Accommodation-index'
import Header from './components/Header/Header'
import About from './pages/About/About-index'
import Error from './pages/Error/Error-index'
import Footer from './components/Footer/Footer-index'
import accommodations from './assets/Datas//logements.json'

function findAccommodationById({ params }) {
  const id = params.id
  console.log(params)
  const accommodation = accommodations.find((item) => {
    return item.id === id
  })
  if (accommodation === null) {
    throw new Response('Not Found', { status: 404 })
  } else {
    return json(accommodation, { status: 200 })
  }
}

const Layout = () => {
  return (
    <div className="global_style">
      <div style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: (
      <Layout>
        <Error />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'accommodation/:id',
        element: <Accommodation />,
        loader: findAccommodationById,
        // errorElement: <Error />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
    element: <Layout />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
