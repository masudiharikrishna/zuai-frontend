import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () =>{
    return(
        <nav className="header">
            <h1><span className="z-letter">Z</span>u<span className="ai-letter">AI</span></h1>
            <ul>
                <li><a className="link-word" href="/">BlogList</a></li>
                <li><a className="link-word" href="/new-post">NewPost</a></li>
            </ul>
            <div>
            <button className="btn btn-success mr-5">Login</button>
            <button className="btn btn-primary mr-5">Register</button>
            </div>
        </nav>
    )
}
export default Header