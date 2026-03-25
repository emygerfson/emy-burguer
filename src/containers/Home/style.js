import styled from "styled-components";
import BannerHome from "../../assets/home.jpg"
import Background from "../../assets/bacokgraund2.png"

export const Banner = styled.div`
    background-image: url(${BannerHome});
    background-size: cover;
    background-position: center;
    height: 320px;
    h1{
        color: #fff;
        font-size: 40px;
        font-family: "Road Rage", sans-serif;
        position: absolute;
        right: 20%;
        top: 10%;
        
    }
`   
export const Conteiner = styled.section`
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Background});
    background-size: cover;
    background-position: center;
    /* height: 100vh; */
`
export const Content = styled.div`
    padding-bottom: 20px;
`