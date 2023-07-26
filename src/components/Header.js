import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <Container>
      <h1>Strada</h1>
      <Menu>
        <ul>
          <li><a href='#'>Sale</a></li>
          <li><a href='#'>New</a></li>
          <li><a href='#'>Popular</a></li>
          <li><a href='#'>Explore</a></li>
        </ul>
      </Menu>
      <RightMenu>
        <SearchWrapper>
          <input type='text' placeholder='Search Product' />
          <CustomSearchIcon />
        </SearchWrapper>
        <Wrap>
          <CustomPersonIcon />
          <p>Account</p>
        </Wrap>
        <Wrap>
          <CustomCartIcon />
          <p>Cart</p>
        </Wrap>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  h1 {
    font-family: 'Montserrat Alternates', sans-serif;
    margin-left: 8vw;
    font-size: 16px;
  }
`

const Menu = styled.div`

  ul {
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      
      a {
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
        color: rgb(159, 159, 159);
        padding: 0 16px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        &:hover {
          color: #111;

        }
      }
    }
  }
`

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 8vw;
`

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(209, 209, 209, 0.7);
  padding: 4px 8px;
  border-radius: 20px;

  input {
    padding: 8px 15px;
    border: none;
    background-color: transparent;
    color: #111;
    outline: none;
  }
`

const CustomSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  font-size: 24px !important;
  padding: 0 2px;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
  padding: 0 10px;

  p {
    font-size: 14px;
    padding: 0 4px;
    cursor: pointer;
  }
`

const CustomPersonIcon = styled(PersonIcon)`
  font-size: 24px !important;
`

const CustomCartIcon = styled(ShoppingCartIcon)`
  font-size: 24px !important;
`
