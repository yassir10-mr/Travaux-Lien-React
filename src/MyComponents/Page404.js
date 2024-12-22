import { Link } from 'react-router-dom'
export default function Page404() {
    return (
        <div>
            <div className="ErrWrapper">
                <div className="ErrWr2">
                    <div><img src="/robot.png" alt="" /></div>
                    <div className='paraNF'>
                        <h1>OOPS! 404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <p>The page you are looking for doesn't exist try different page or click the button below to go back home</p>
                        <Link to='/'><button>Go Back Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}