import { Link } from "react-router-dom"
const Button = (props) => {
    return (
        <div style={{textAlign:"center"}}>
            <Link to={`/menu/${props.id}`}>
                <button style={{width:"850px", padding:"10px", backgroundColor:"blue", color:"white", borderRadius:"20px"}}>Detail</button>
            </Link>
            
        </div>
    )
}

export default Button