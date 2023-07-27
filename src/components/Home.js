import React from 'react'
import { styled } from 'styled-components'
import Section from "./Section"

function Home() {
  return (
    <HomeWrapper>
        <Container>
            <Wrap>
                <SubTitle>
                    <h4>Discover products</h4>
                    <h4>for a life well lived</h4>
                </SubTitle>
                <p>Enjoy a 40% discount when you sign up now</p>
                <button>Get Started</button>
            </Wrap>
            <Background>
                    <img src='../images/shopping.png' />
            </Background>
        </Container>
        <Section />
    </HomeWrapper>
  )
    
}

export default Home

const HomeWrapper = styled.div``

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 8vw;
    height: 90vh;
`
const Background = styled.div`
    height: 500px;
    width: 500px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;

    button {
        padding: 10px 15px;
        margin-top: 35px;
        background-color: #f18eb9;
        color: #fff;
        width: 200px;
        border: none;
        border-radius: 20px;
        text-transform: uppercase;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        cursor: pointer;

        &:hover {
            color: #393c41;
            background-color: rgb(249, 249, 249);
            border: 1px solid #f18eb9;
            transform: scale(1.05);
        }
    }
`

const SubTitle = styled.div`
    padding: 20px 0;
     h4 {
        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 30px;
        font-family: 'Roboto'

    }
`