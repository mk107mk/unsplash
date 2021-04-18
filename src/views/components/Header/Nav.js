import React from 'react';
import styled from 'styled-components';
import {IconThreeDots} from "../../../icons";

const Nav = () => {

    return (
        <Container>
            <NavItem>
                Brands
            </NavItem>
            <NavItem>
                Explore
            </NavItem>
            <NavItem>
                <IconThreeDots/>
            </NavItem>
        </Container>
    )
}

const Container = styled.nav`
  display: flex;
  padding: 0 36px;
  
`;

const NavItem = styled.div`
  padding: 20px 12px;
`;

export default Nav;
