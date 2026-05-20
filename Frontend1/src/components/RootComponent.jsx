import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootComponent() {
  return (
    <div>
      <Header/>
      <div className="w-full mb-24">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default RootComponent