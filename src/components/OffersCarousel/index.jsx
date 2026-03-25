import {Conteiner,Title} from "./style"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { CardProduct } from "../CardProduct"

import { api } from "../../services/api"

import { useState, useEffect } from "react"

export function OffersCarousel() {

    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get("/products")
            const onlyOffers = response.data.filter(product => product.offer === true)

            setOffers(onlyOffers)
            console.log(response)
        }
        loadProducts()
    }, [])

    const  responsive  =  { 
        superLargeDesktop : { 
        // o nome pode ser qualquer um, depende de você. 
            breakpoint : {  max : 4000 ,  min : 3000  } , 
            items : 5 
        } , 
        desktop : { 
            breakpoint : {  max : 3000 ,  min : 1280  } , 
            items : 3 
        } , 
        tablet : { 
            breakpoint : {  max : 1280 ,  min : 690  } , 
            items : 2 
        } , 
        mobile : { 
            breakpoint : {  max : 690 ,  min : 0  } , 
            items : 1 
        } 
    } ; 


    return (
        <Conteiner>
            <Title>Ofertas do dia</Title>
            <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                partialVisible={false}
                itemClass="carousel-item"
            >
                {offers.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
                                        
                      
            </Carousel>
        </Conteiner>
    )
}