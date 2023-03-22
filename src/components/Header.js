import React from 'react'
import styled from 'styled-components';

const Header = () => {

  return (
    <Nav>
    <NavMenu>
        <Logo>
            LOGO
        </Logo>
        <a>
          {/* <img src="/images/home-icon.svg" alt=""/> */}
          <span>HOME</span>
        </a>
        <a >
          {/* <img src="/images/search-icon.svg" alt=""/> */}
          <span>SEARCH</span>
        </a>
        <a >
          {/* <img src="/images/watchlist-icon.svg" alt=""/> */}
          <span>ABOUT</span>
        </a>
        <Search>
            <span>Search</span>
            <IMG src="/images/search-icon.svg" alt="" />
        </Search>
    </NavMenu>
    </Nav>
  )
}

export default Header;

const Nav = styled.div`
    display:flex;
    positon: absolute;
    height: 60px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow: hidden;
`

const NavMenu = styled.div`
    display: flex;
    postiton: relative;
    color: white;
    gap: 80px;
    align-items: center;

`

const Logo = styled.div`
    padding: 15px 8px;
`

const Search = styled.div`
    height: 30px;
    width: 200px;
    display: flex;
    border-radius: 21px;
    margin-left: 450px;
    border: 2px solid  rgb(249,249,249,0.6);
    justify-content: center;
    align-items: center;

`

const IMG = styled.img`
    height: 30px;
    width: 30px;
    margin-left: 80px;
`