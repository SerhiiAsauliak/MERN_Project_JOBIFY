import Wrapper from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg'

const Error = () => {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={img} alt="not found" />
                <h3>Sorry. Page not found</h3>
                <p class="error__cta text-midnight-lighter">
                    We can't seem to find the page you're looking for
                </p>
                <Link to='/'>Go back</Link>
            </div>
        </Wrapper>
    )
}

export default Error