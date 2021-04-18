import React from 'react';
import styled from 'styled-components';
import {Button} from "../Button/Button.Styled";

const SignButtons = () => {

    return (
        <Container>
            <Button sort={'outline'}>Submit a photo</Button>
            <Bar/>
            <Button>Login</Button>
            <Button sort={'info'}>Join free</Button>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Bar = styled.div`
    width: 1px;
  background:#d1d1d1;
  margin: 0 20px 0 30px;
`;
export default SignButtons;