import React from 'react';
import styled from 'styled-components';

const UserItem = ({item}) => {
    console.log("@@item",{item});
    return (
        <Container>
            <h1>{item.name}</h1>
            <ImageBox>
            <Image>
            <img src={item.photos[0].urls.regular} alt=""/>
            </Image>

            <Image>
                <img src={item.photos[1].urls.regular} alt=""/>
            </Image>

            <Image>
                <img src={item.photos[2].urls.regular} alt=""/>
            </Image>
            </ImageBox>
        </Container>
    )
}

const Container = styled.div`

`;

const ImageBox = styled.div`
  display: flex;
  border:1px solid #000;
  
`;

const Image = styled.div`
    background:#eee;
  width: 100px;
  height: 100px;
`;

export default UserItem;