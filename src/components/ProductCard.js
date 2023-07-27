import React from 'react'
import styled from "styled-components";

function ProductCard({title, 
                    backgroundImg, 
                    price, 
                    description}) {
  return (
    <Container>
        <BackgroundImg>
            <img src={backgroundImg} />
        </BackgroundImg>
        <Content>
            <h2>{title}</h2>
            <p>{description}...</p>
            <h3>${price}</h3>
            <div>
                <button>Add to Cart</button>
            </div>
        </Content>
    </Container>
  )
}

export default ProductCard

const Container = styled.div`
    height: auto;
    max-width: 300px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border-radius: 5px;
    &:hover {
        transform: scale(1.05);
    }

    
`


const BackgroundImg = styled.div`
    width: 100%;
    height: 200px;
    padding: 30px;
    
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Content = styled.div`
    display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    h2 {
        font-size: 16px;
        font-family: "Roboto"
        color: #111;
        text-transform: uppercase;
        text-align: center;
        padding: 10px 20px;
    }

    h3 {
        font-size: 26px;
        font-family: "Roboto"
        color: #111;
        text-transform: uppercase;
        text-align: center;
        padding: 10px 20px;
    }

    p {
        font-size: 12px;
        font-family: "Roboto"
        color: #111;
        text-align: center;
        padding: 3px 20px;
        font-weight: 200;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 20px;

        p {
            font-size: 10px;
        }

        button {
            width: 150px;
            height: 30px;
            border-radius: 50px;
            background-color: #f18eb9;
            border: none;
            cursor: pointer;
            color: #fff;
        }
    }

`
