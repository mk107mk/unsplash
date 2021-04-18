import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const TopicsLnb = ({topics = []}) => {

    return (
        <Container>
            <NavLink to={'/'}>Editorial</NavLink>

            <TopicsMenu>
                {
                    topics.map((item , index) => (
                     <NavItem key={index}>
                         <NavLink to={`/topics/${item.slug}`}>{item.title}</NavLink>
                     </NavItem>


                    ))
                }
            </TopicsMenu>


            <NavLink to={'/topics'}>View all</NavLink>

        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;


const TopicsMenu = styled.div`
  display: flex;
  flex:1;
  overflow-x: auto;
`;

const NavItem = styled.div`
    
`;

const NavLink = styled(Link)`
  color:#767676;
  font-size: 14px;
  font-weight: 500;
  padding: 0 16px;
  height: 56px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;


export default TopicsLnb;