import React from 'react';
import styled from 'styled-components';
import PhotoItem from "../Items/PhotoItem";
import {ContentContainer} from "../Layout/Layout.Styled";

const PhotoList = ({data = []}) => {

    return (
        <ContentContainer>
            <Container>
                {
                    data.map((item, index) => (
                        <Col key={index}>
                            <PhotoItem {...item}/>
                        </Col>

                    ))
                }
            </Container>
        </ContentContainer>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px;
`;

export default PhotoList;