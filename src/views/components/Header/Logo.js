import React from 'react';
import styled from 'styled-components';
import {IconLogo} from "../../../icons";
import {useHistory} from "react-router-dom";

const Logo = ({withTitle= true}) => {

    const history = useHistory();

    return (
        <Container onClick={ () => history.push('/')}>
            <IconLogo/>

            {
                withTitle &&
                <Text>
                    <h1>Unsplash</h1>
                    <p>Photos for everyone</p>
                </Text>
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  
`;

const Text = styled.div`
  margin-left: 12px;
  h1{
    font-size: 15px;
    color:#111;
  }
  p{
    font-size: 13px;
    color:#111;
    margin-top: 4px;
  }
`;


export default Logo;