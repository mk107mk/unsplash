import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {Link, withRouter} from "react-router-dom";
import {IconCollections, IconPhotos, IconUsers} from "../../../../icons";

const SearchLnb = ({location, match}) => {

    const query= location.pathname.split('/').pop();
    const category = match.params.category;


    return (
        <Container>
            <Nav>
                <NavLink to={`/search/photos/${query}`} className = {cn({isActive: category==='photos'})}>
                    <IconPhotos/>
                    photos
                </NavLink>
                <NavLink to={`/search/collections/${query}`}  className = {cn({isActive: category==='collections'})}>
                    <IconCollections/>
                    collections
                </NavLink>
                <NavLink to={`/search/users/${query}`} className = {cn({isActive: category==='users'})}>
                    <IconUsers/>
                    users
                </NavLink>

            </Nav>
           <Filter>

           </Filter>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: inset 0 -1px 0 #ddd;
`;

const Nav = styled.div`
  display: flex;
  
`;


const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 17px;
  height: 56px;
  font-size: 15px;
  color:#767676;
  text-transform: capitalize;
  font-weight: 500;
  cursor:pointer;
  transition: 0.3s;
  border-bottom:2px solid transparent;
  
  &.isActive,
  &:hover{
    color:#111;
    svg{
      opacity: 1;
    }
  }
  
  &.isActive{
    border-bottom: 2px solid #111;
  }
  
  svg{
    width: 18px;
    margin-right: 8px;
    opacity: .3;
    transition: 0.3s;
  }
`;

const Filter = styled.div`
    
`;

export default withRouter(SearchLnb);