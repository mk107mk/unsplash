import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";

const SearchLnb = ({location}) => {

    const query= location.pathname.split('/').pop();

    return (
        <Container>
            <Nav>
                <NavLink to={`/search/photos/${query}`}>
                    photos
                </NavLink>
                <NavLink to={`/search/collections/${query}`}>
                    collections
                </NavLink>
                <NavLink to={`/search/users/${query}`}>
                    users
                </NavLink>

            </Nav>
           <Fitter>

           </Fitter>
        </Container>
    )
}

const Container = styled.div`

`;

const Nav = styled.div`
  display: flex;
  
`;

const Fitter = styled.div`
    
`;

const NavLink = styled(Link)`
  display: flex;
  padding: 20px;
`;

export default withRouter(SearchLnb);