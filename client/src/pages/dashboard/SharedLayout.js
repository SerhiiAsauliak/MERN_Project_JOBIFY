import { Outlet, Link } from "react-router-dom"
import Wrapper from './../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='/stats'>Stats</Link>
        <Link to='/all-job'>All Job</Link>
        <Link to='/add-job'>Add Job</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Outlet/>
    </Wrapper>
  )
}
export default SharedLayout