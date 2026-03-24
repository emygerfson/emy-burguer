import {ButtomStyled} from "./style";
import PropTypes from "prop-types";
export function Buttom({children, ...props}) {
    return <ButtomStyled {...props}>{children}</ButtomStyled>
}

Buttom.propTypes = {
    children: PropTypes.string,
};
