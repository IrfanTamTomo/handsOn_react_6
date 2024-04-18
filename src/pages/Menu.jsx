import Navbar from "../components/Navbar"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./Menu.css"
import Button from "../components/Button"
const Menu = () => {
    const [menu, setMenu] = useState([])
    const getMenu = () => {
        axios
        .get("https://api.mudoapi.tech/menus")
        .then((res) => {
            setMenu(res.data.data.Data)
            console.log(res.data.data.Data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMenu()
    }, [])
    return(
        <div>
            <Navbar/>
            <h1>Menu</h1>
            <hr></hr>
            <br></br>
            {menu.map((item) => (
                <div>
                    <h3>{item.name}</h3>
                    <img src={item.imageUrl} alt="" className="menu-image" />
                    <p>{item.priceFormatted}</p>
                    <Button id={item.id}/>
                    <br></br>
                    <hr></hr>
                </div>
            ))
            }

        </div>
    )
}

export default Menu