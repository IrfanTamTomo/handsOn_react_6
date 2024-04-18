import Navbar from "../components/Navbar"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()
    const acces_token = localStorage.getItem("access_token")
    console.log("token",acces_token)
    const logout = () => {
        localStorage.removeItem("access_token")
        navigate("/login")
    }
    return(
        <div>
            <Navbar/>
            {
                acces_token ? <button onClick={logout}>Logout</button> : <Link to="/login"><h1>Login</h1></Link>
            }
            <h1>Home</h1>
        </div>
    )
}

export default Home