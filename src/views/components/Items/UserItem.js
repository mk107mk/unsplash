import React, {useState} from 'react';
import styled from 'styled-components';
import {IconFollow} from "../../../icons";

const UserItem = ({item}) => {

    const [hire, setHire] = useState(false);

    console.log("@@item", {item});
    return (
        <Container>
            <UserItemBox>
                <TitleBox>
                    <TitleNav>
                        <ProfileImg src={item.profile_image.medium} alt=""/>
                        <TextNav>
                            <h1>{item.name}</h1>
                            <p>@{item.instagram_username}</p>
                        </TextNav>
                    </TitleNav>
                    <IconNav>
                        <Icon>
                            <a><IconFollow/></a>
                        </Icon>
                        {item.for_hire &&
                        <HireButton><a>Hire</a></HireButton>
                        }
                    </IconNav>
                </TitleBox>
                <Thumb>
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
                </Thumb>
                <ProfileButton>View Profile</ProfileButton>
            </UserItemBox>
        </Container>
    )
}
const Container = styled.div`

`;
const UserItemBox = styled.div`
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  transition: border-color .1s ease-in-out;
  padding: 16px;
  display: grid;
  grid-auto-flow: row;
  align-content: space-between;
  gap: 16px;

  &:hover {
    border: 1px solid #000;
    transition: .4s;
  }
`;


const TitleBox = styled.div`
  display: flex;

`;
const TitleNav = styled.div`
  flex: 1;
  display: flex;

  h1 {
    font-size: 18px;
    line-height: 2;
  }

  p {
    color: #767676;
    font-size: 15px;

  }
`;
const TextNav = styled.div`
  flex: 1;
`;
const ProfileImg = styled.img`
  border: 1px solid transparent;
  border-radius: 50px;
  margin-right: 8px;
`;

const IconNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 18px;
    opacity: .5;
    transition: 0.3s;

  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  width: 42px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:hover {
    border: 1px solid #000;
    transition: .4s;
  }
`;
const HireButton = styled.button`

  background: #007fff;
  width: 50px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 10px;
  color: #fff;

`;
const Thumb = styled.div`
  position: relative;
  padding-top:21%;
  overflow: hidden;


`;
const ImageBox = styled.div`
  position: absolute;
  top: 0;
  bottom:0;
  left: 0;
  right: 0;
  display: flex;
  
`;
const Image = styled.div`
  background: #eee;
  margin-right: 8px;
  
`;

const ProfileButton = styled.div`
  color: #767676;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  padding: 0 12px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
    color: #000;
    transition: .4s;
  }
`;

export default UserItem;