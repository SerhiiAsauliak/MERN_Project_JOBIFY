import Wrapper from '../assets/wrappers/Navbar'
import { useAppContext } from '../context/appContext'
import {FaUserCircle, FaAlignLeft, FaCaretDown} from 'react-icons/fa'
import Logo from './Logo'
import { useState } from 'react'

const Navbar = () => {
  const {user, toggleSidebar, logoutUser} = useAppContext()
  const [showLogout, setShowLogout] = useState(false)

  return (
    <Wrapper>
     <div className='nav-center'>
        <button className='toggle-btn'
                type='button' 
                onClick={() => console.log('show sidebar')}>
          <FaAlignLeft onClick={toggleSidebar}/>
        </button>
        <div>
          <Logo/>
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button type='button'
                  className='btn' 
                  onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle/>
            {user?.name}
            <FaCaretDown/>
          </button>
         <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button'
                    className='dropdown-btn' 
                    onClick={logoutUser}>
              logout
            </button>
         </div>
        </div>
     </div>

    </Wrapper>
  )
}
export default Navbar 