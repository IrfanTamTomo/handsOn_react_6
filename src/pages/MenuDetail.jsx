import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const MenuDetail = () => {
    const [menu, setMenu] = useState({})
    //cara mendapatkan id
    const { id } = useParams()

    const getMenu = () => {
        axios
        .get(`https://api.mudoapi.tech/menu/${id}`)
        .then((res) => {
            setMenu(res?.data?.data)
            console.log(res.data.data)
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
            <h1>Menu Detail</h1>
            <h3>{menu?.name}</h3>
            <p>{menu?.description}</p>
        </div>
    )
}

export default MenuDetail
