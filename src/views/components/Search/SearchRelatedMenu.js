import React from 'react';
import styled from 'styled-components';
import ScrollMenu from "../ScrollMenu";
import {ContentContainer} from "../Layout/Layout.Styled";

const SearchRelatedMenu = ({data}) => {

    return (
        <Container>
            <ScrollMenu data={data}
                    renderItem={(item, index) => (
                        <NavItem key={index}>
                            {item.title}
                        </NavItem>
                    )}
            />
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 22px;
`;

const NavItem = styled.div`
    width: 143px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid #aaa;
  color:#777;
  font-size: 14px;
  white-space: nowrap;
  flex-shrink: 0;
  border-radius: 4px;
  margin-left: 8px;
  &:first-child{
    margin-left: 0;
  }
`;

export default SearchRelatedMenu;