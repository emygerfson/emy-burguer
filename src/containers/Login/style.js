import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import BackgraundImage from '../../assets/backgraund.jpg';
import BackgraundImage2 from '../../assets/bacokgraund2.png';


export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw

`
export const LeftContainer = styled.div`
    background: url(${BackgraundImage});
    background-size: cover;
    background-position: center;
    
    height: 100%;
    width: 100%;
    max-width: 50%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url(${BackgraundImage2});
    background-color: #1e1e1e;
    background-size: cover;
    background-position: center;

    p{
        color: #fff;
        margin-top: 20px;
        a{
            color: #9758a6;
            cursor: pointer;
            text-decoration: underline;
        }
    }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    input{
        width: 100%;
        height: 52px;
        padding: 0 16px;
        border-radius: 5px;
    }
    label{
        font-weight: 600;
        font-size: 18px;
        color: #fff;
    }
    p{
        color: #cf3057;   
        font-size: 14px;
        line-height: 80%;
        font-weight: 600;
        height: 10px;     
    }
`
export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;

    span{
        color: #9758a6;
        font-family: "Road Rage", sans-serif;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`
export const Link = styled(LinkRouter)`
    text-decoration: none;
    color:#fff;
`


export default Container;