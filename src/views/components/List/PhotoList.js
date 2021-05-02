import React from 'react';
import styled from 'styled-components';
import PhotoItem from "../Items/PhotoItem";
import {ContentContainer} from "../Layout/Layout.Styled";
import {recomposeData} from "../../../lib/common";
import {photosAction} from "../../../redux/actionCreators";

const PhotoList = ({photos = []}) => {


    const photoGroups = recomposeData(photos);

    const onClick = (id) =>{
        photosAction.getPhotoById(id)
        photosAction.updateState({
            photoPopup: true
        })
    }

    return (
        <ContentContainer>
            <Container>
               <Groups>
                {
                    photoGroups.map((group, groupIndex) => (
                        <Group key={groupIndex}>
                            {
                                group.map((item,index) => (
                                    <Col key={index}>
                                        <PhotoItem {...item} onClick={onClick}/>
                                    </Col>
                                ))
                            }
                        </Group>
                    ))
                }
               </Groups>
            </Container>
        </ContentContainer>
    )
}

const Container = styled.div`
  padding-top: 50px;
`;

const Groups = styled.div`
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
`;

const Group = styled.div`
  width: 33.33%;
  padding: 0 10px;

`;

const Col = styled.div`
  margin-bottom: 20px;
`;

export default PhotoList;