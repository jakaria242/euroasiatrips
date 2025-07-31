import Header from './Header'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {


  return (
<>
      <Header/>
         <Navbar />
         <Outlet/>
      <Footer/>
</>

  )
}

export default MainLayout