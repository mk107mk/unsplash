import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import ScrollMenu from "../../ScrollMenu";

const TopicsLnb = ({topics = []}) => {


    console.log("@@topics",topics);
    return (
        <Container>
            <NavLink to={'/'}>Editorial</NavLink>
            <ScrollMenu data={topics}
                        renderItem ={(item, index) => (
                            <NavItem key={index}>
                                <NavLink to={`/topics/${item.slug}`}>{item.title}</NavLink>
                            </NavItem>

                        )}
            />

            <NavLink to={'/topics'}>View all</NavLink>

        </Container>
    )
}

const Container = styled.div`
  display: flex;
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