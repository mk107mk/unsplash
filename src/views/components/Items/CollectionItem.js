import React from 'react';
import styled from 'styled-components';
import Tags from "../Tags";

const CollectionItem = ({item}) => {
    console.log({item});
    return (
        <Container>
            <Thumb>
                <Inner>
                    <Left>
                        <Image>
                            {
                                item.preview_photos && item.preview_photos[0] &&
                                <img src={item.preview_photos[0].urls.regular} alt=""/>
                            }
                        </Image>
                    </Left>
                    <Right>
                        <Top>
                            <Image>
                                {
                                    item.preview_photos && item.preview_photos[1] &&
                                    <img src={item.preview_photos[1].urls.regular} alt=""/>
                                }
                            </Image>
                        </Top>
                        <Bottom>
                            <Image>
                                {
                                    item.preview_photos && item.preview_photos[2] &&
                                    <img src={item.preview_photos[2].urls.regular} alt=""/>
                                }
                            </Image>
                        </Bottom>
                    </Right>
                </Inner>
            </Thumb>
            <Desc>
                <h3>{item.title}</h3>
                <p>{item.total_photos} photos . Curated by {item.user.username}</p>
                <Tags tags={item.tags}/>
            </Desc>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  position: relative;
  padding-bottom: 70%;
  border-radius: 9px;
  overflow: hidden;
`;


const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;

`;
const Left = styled.div`
  width: 70%;
  height: 100%;
  padding-right: 2px;
`;

const Right = styled.div`
  width: 30%;

`;

const Top = styled.div`
  height: 50%;
  padding-bottom: 1px;
`;

const Bottom = styled.div`
  height: 50%;
  padding-top: 1px;
`;

const Image = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  padding: 16px 0;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color:#111;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #767676;
    line-height: 1.5;
    margin-bottom: 10px;
    
  }
;

`;
export default CollectionItem;