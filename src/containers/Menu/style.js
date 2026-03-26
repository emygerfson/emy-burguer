import styled from "styled-components";
import Menu from "../../assets/menu.jpg"
import Background from "../../assets/bacokgraund2.png"
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f1f1f1;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Background});

    background-size: cover;
    background-position: center;
  

`
export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;

    background-image: url(${Menu});
    background-size: cover;
    background-position: center;
    height: 320px;
    h1{
        color: #fff;
        font-size: 40px;
        font-family: "Road Rage", sans-serif;
        position: absolute;
        left: 20%;
        top: 10%;
        
    }
    span{
        color: #fff;
        font-size: 40px;
        font-family: "Road Rage", sans-serif;
        position: absolute;
        left: 20%;
        top: 40%;
    }
`
export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: #9758a6;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;

`


export const ProdutcConteiner = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    margin: 50px auto;
    max-width: 1200px;

`