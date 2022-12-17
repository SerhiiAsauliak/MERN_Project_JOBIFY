import { Outlet, Link } from "react-router-dom"
import Wrapper from './../../assets/wrappers/SharedLayout';
import {SmallSidebar, BigSidebar, Navbar} from '../../components'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet/>
          </div>
        </div> 
      </main>
      {/* <nav>
        <Link to='/stats'>Stats</Link>
        <Link to='/all-job'>All Job</Link>
        <Link to='/add-job'>Add Job</Link>
        <Link to='/profile'>Profile</Link>
      </nav> */}
    </Wrapper>
  )
}
export default SharedLayout