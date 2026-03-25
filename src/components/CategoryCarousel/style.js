import styled from "styled-components";

export const Conteiner = styled.div`
    .carousel-item{
        padding-right: 10px;
    }
`


export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-weight: 800;
    font-size: 40px;
    color: #9758a6;
    margin-bottom: 20px;
    position: relative;
    text-align: center;
    &::after{
        content: "";
        width: 100px;
        height: 5px;
        background-color: #9758a6;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
`


export const ConteinerItem = styled.div`
  background-image: url('${props => props.$imageUrl}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 80%;
  height: 250px;
  padding: 20px 10px;
  border-radius: 10px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  p{
      color: #000;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      background-color: #c3c3c3;
      border-radius: 10px;
      padding: 3px 5px;
  }
`
    