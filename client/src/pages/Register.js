import {useState, useEffect} from 'react'
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
  const [values, setValue] = useState(initialState)

  const {isLoading, showAlert, displayAlert, registerUser} = useAppContext()

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
      console.log('already a member')
    } else {
      registerUser(currentUser)
    }
  }

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