import React from 'react';
import styled from 'styled-components';

const Tags = ({tags}) => {

    return (
        <Container>
            {
                tags.map((item, index) => <Tag key={index}> {item.title}</Tag>)
            }
        </Container>
    )
}


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.div`
    font-size: 14px;
  height: 26px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background:#eee;
  text-transform: capitalize;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
`;

export default Tags;