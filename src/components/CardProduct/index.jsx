import {Container,CarImage} from "./style"
import { CartBottom } from "../CartBottom"
import PropType from "prop-types"

// Use { product } para extrair o objeto de dentro das props
export function CardProduct({ product }) { 
    console.log(product);
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(product.price / 100);
    
    return (
        <Container>
          {/* Agora product.url e product.name funcionarão corretamente */}
          <CarImage src={product.url} alt={product.name}/>  
          <div>
            <p>{product.name}</p>
            <span>{formattedPrice}</span>
          </div>
          <CartBottom>Adicionar ao carrinho</CartBottom>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropType.object
}