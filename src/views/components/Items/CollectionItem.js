import React from 'react';
import styled from 'styled-components';

const CollectionItem = ({item}) => {

    return (
        <Container>
           <Thumb>
               <Inner>
               <Left>
                   <Image>
                       {
                           item.preview_photos &&
                           <img src={item.preview_photos[0].urls.regular} alt=""/>
                       }

                   </Image>
               </Left>
               <Right>
                   <Top>
                       {
                           item.preview_photos &&
                           <img src={item.preview_photos[1].urls.regular} alt=""/>
                       }
                   </Top>
                   <Bottom>
                       {
                           item.preview_photos &&
                           <img src={item.preview_photos[2].urls.regular} alt=""/>
                       }
                   </Bottom>
               </Right>
               </Inner>
           </Thumb>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  display: flex;
`;

const Inner = styled.div`
    
`;
const Left = styled.div`
    width: 70%;
`;

const Right = styled.div`
    width: 30%;
`;

const Top = styled.div`
    
`;  

const Bottom = styled.div`
    
`;

const Image = styled.div`
    background:#eee;
`;

const Desc = styled.div`
    
`;
export default CollectionItem;