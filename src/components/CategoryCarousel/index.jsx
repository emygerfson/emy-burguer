// import {} from "./style"

import { api } from "../../services/api"

import { useState, useEffect } from "react"

export function CategoryCarousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get("/categories")
            setCategories(response.data)
            console.log(response)
        }
        loadCategories()
    }, [])

    return (
        <div>CategoryCarousel</div>
    )
}