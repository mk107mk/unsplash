import React from 'react';
import styled from 'styled-components';
import {IconDownload, IconHeart, IconPlus} from "../../../icons";

const PhotoItem = ({id, urls, user, onClick}) => {
    console.log("@@id, @@urls, @@user, @@onClick",id, urls, user, onClick);
    return (
        <Container onClick={ () => onClick(id)}>
            <Thumb>
                <img src={urls.regular} alt=""/>
            </Thumb>
            <Desc>
                <Head>
                    <Icons>
                        <IconButton>
                            <IconHeart/>
                        </IconButton>
                        <IconButton>
                            <IconPlus/>
                        </IconButton>
                    </Icons>
                </Head>
                <Footer>
                    <Author>
                        <Avatar>
                            <img src={user.profile_image.medium} alt=""/>
                        </Avatar>
                        <Info>
                            <h3>{user.name}</h3>
                            <p></p>
                        </Info>
                    </Author>
                    <Icons>
                        <IconButton>
                            <IconDownload>

                            </IconDownload>
                        </IconButton>
                    </Icons>
                </Footer>
            </Desc>

        </Container>
    )
}

const Container = styled.div`
  position: relative;
  
  
`;

const Thumb = styled.div`

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`;

const Desc = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  opacity: 0;
  transition:opacity 0.4s;
  &:hover{
    opacity: 1;
    
  }
`;

const Head = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  
`;

const Icons = styled.div`
  display: flex;
`;


const IconButton = styled.div`
  width: 39px;
  height: 32px;
  display:flex;
  align-items: center;
  justify-content: center;
  background:#ffffff;
  margin-left: 6px;
  border-radius: 5px;
  cursor:pointer;
  opacity: 0.8;
  transition: 0.3s;
  &:hover{
    opacity: 1;
    svg{
      fill:#111;
    }
  }
  svg{
    width: 15px;
    fill: #797979;
    transition: 0.3s;
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  
`;

const Avatar = styled.div`
  margin-right: 10px;
  img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  color:#fff;
  
  h3{
    font-size: 15px;
  }
  p{
    font-size: 11px;
  }
`;
export default PhotoItem;