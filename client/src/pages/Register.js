import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './../components/Logo';
import Wrapper from '../assets/wrappers/RegisterPage'
import { Alert, FormRow } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValue] = useState(initialState)

  const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext()

  const toggleMember = () => {
    setValue({...values, isMember: !values.isMember})
  }
  
  const handleChange = (e) => {
    setValue({...values, [e.target.name]: e.target.value});
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, isMember} = values
    if(!password || !email || (!isMember && !name)) {
      displayAlert()
      return 
    }
    
    const currentUser = {name, email, password}
    if(isMember){
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }
  
  useEffect(() => {
    if(user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])
  
  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
          <Logo/>
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
          {showAlert && <Alert/>}
          {!values.isMember && (<FormRow 
            type='text' 
            name='name' 
            value={values.name} 
            handleChange={handleChange}
          />)}
          <FormRow 
            type='email' 
            name='email' 
            value={values.email} 
            handleChange={handleChange}
          />
          <FormRow 
            type='password' 
            name='password' 
            value={values.password} 
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
          <p>
            {values.isMember ? 'Not a member yet?' : 'Already member?'}
            <button type='button'
                    disabled={isLoading}
                    onClick={toggleMember}
                    className='member-btn'>
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
    </Wrapper>
  )
}
export default Register