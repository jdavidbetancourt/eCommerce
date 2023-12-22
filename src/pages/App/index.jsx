// Primero importar lo referente a react, despues las páginas y de último el CSS
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import './App.css'


// Colocamos todas nuestras diferentes rutas dentro del arrow function llamado AppRoutes
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/mens-clothing', element: <Home /> },
    { path: '/womens-clothing', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelry', element: <Home /> },
    { path: '/other', element: <Home /> },
    { path: 'my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
    
  ])

  return routes
}
// Aquí metemos en nuestro BrowseRouter la función que contiene el Home en AppRoutes

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App
