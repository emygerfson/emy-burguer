import styled from "styled-components";

export const Conteiner = styled.div`
    .carousel-item{
        padding-right: 10px;
    }
    overflow-x: hidden;
    .react-multi-carousel-list{
        overflow: visible;
    }
`


export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-weight: 800;
    font-size: 40px;
    color: #61A120;
    margin: 70px;
    position: relative;
    text-align: center;
    &::after{
        content: "";
        width: 100px;
        height: 5px;
        background-color: #61A120;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
`



    