import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    cursor: grab;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        p{
            
            font-size: 18px;
            color: #ff8c05;
            line-height: 20px;
            font-weight: 800;
            margin-top: 40px;
        }
        span{
            font-size: 22px;
            color: #363636;
            line-height: 20px;
            font-weight: 800;
        }
    }
`


export const CarImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`
    