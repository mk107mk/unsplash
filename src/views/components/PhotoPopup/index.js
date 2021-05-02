import React from 'react';
import styled from 'styled-components';
import PhotoList from "../List/PhotoList";
import GridList from "../List/GridList";
import CollectionItem from "../Items/CollectionItem";
import {IconDown, IconHeart, IconInfo, IconPlus, IconShare} from "../../../icons";

const PhotoPopup = ({photoDetail, photoRelated}) => {
    return (
        <Container>
            <ContentContainer>
                <Header>
                    <TextNav>
                        <ProfileImg src={photoDetail.user.profile_image?.small} alt=""/>
                        <Text>
                            <p>{photoDetail.user.name}</p>
                            <p>{photoDetail.alt_description}</p>
                        </Text>
                    </TextNav>
                    <IconNav>
                        <Icon>
                            <IconHeart/>
                        </Icon>
                        <Icon>
                            <IconPlus/>
                        </Icon>
                        <ButtonIcon>
                            <Button>Download free</Button>
                            <ArrowButton><IconDown/></ArrowButton>
                        </ButtonIcon>
                    </IconNav>
                </Header>
                <MainImg>
                    <Img src={photoDetail?.urls.regular} alt=""/>
                </MainImg>
                <IconNav>
                    <Icon>
                        <IconShare/><a>share</a>
                    </Icon>
                    <Icon>
                        <IconInfo/><a>info</a>
                    </Icon>
                </IconNav>
                <h4>Realted photos</h4>
                <PhotoList photos={photoRelated?.results}/>
                <h4>Realted collection</h4>
                <GridList data={photoDetail.related_collections?.results}
                          renderItem={(item, index) => <CollectionItem key={index} item={item}/>
                          }/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
  border-radius: 5px;
  position: relative;
  background: #fff;
  max-width: 90%;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;

`;

const ContentContainer = styled.div`
  width: 98%;
  margin: 0 auto;

  h4{
    padding-top: 100px;
    font-size: 22px;
  }
`;
const Header = styled.div`
  padding: 9px 0;
  display: flex;
  align-items: center;
  position: sticky;
  top:0px;
  z-index: 2000;
  background: #fff;


`;
const TextNav = styled.div`
  min-width: 0;
  flex-grow: 1;
  flex-basis: 200px;
  margin-right: auto;
  padding: 4px;
  display: flex;
`;
const Text = styled.div`
  padding: 0 10px;

  p:nth-child(1) {
    font-size: 15px;
    padding: 2px 0;
    font-weight: bold;
  }

  p:nth-child(2) {
    font-size: 11px;
    color: #767676;
  }
`;
const IconNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

`;
const Icon = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 7px 11px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  a{
    opacity: .5;
    margin-left:5px;
    cursor: pointer;
  }
  svg {
    width: 15px;
    height: 15px;
    opacity: .5;
    transition: 0.3s;

  }

  &:hover {
    border: 1px solid #000;
    transition: 0.4s;

    a{
      opacity: 1;
    }
    svg {

      opacity: 1;

    }
  }
`;


const ButtonIcon = styled.div`
  margin: 0 5px;
  background: #3cb462;
  display: flex;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
`;
const Button = styled.button`
  border-style: none;
  background: #3cb462;
  color: #fff;
  padding: 0 11px;
  font-size: 14px;

`;
const ArrowButton = styled.div`
  border-left: 1px solid white;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;
    color: white;
    transition: 0.3s;

  }
`;
const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 50%;
`;

const MainImg = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 50%;
`;

export default PhotoPopup;