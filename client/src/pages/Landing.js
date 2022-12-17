import { useNavigate } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>Tracking </span>App</h1>
                    <p>
                        I'm baby raclette schlitz pitchfork, lumbersexual affogato raw denim biodiesel seitan keffiyeh everyday carry tbh edison bulb paleo literally. Cloud bread sus la croix, leggings celiac williamsburg tumeric yr 3 wolf moon try-hard pug cliche.
                    </p>
                    <button onClick={() => navigate('/register')} className="btn btn-hero">
                        Login/Register
                    </button>
                </div>
                <img src={main} alt="mainLogo" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing
