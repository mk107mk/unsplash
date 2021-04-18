import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import SearchBox from "../SearchBox";
import SignButtons from "./SignButtons";
import Nav from "./Nav";

const Header = () => {

    return (
        <Container className={"Header"}>
            <Logo/>
            <SearchBox shape={"round"}/>
            <Nav/>
            <SignButtons/>
        </Container>
    )
}

const Container = styled.div`
  height: 62px;
  background: #fff;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;


export default Header;