import {Container} from './style'
import cartbuttom from '../../assets/cart.png'
export function CartBottom(...props) {
    return (
        <Container {...props}>
            <img src={cartbuttom} alt="cart" />    
        </Container>
    )
}