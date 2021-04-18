import React from 'react';
import styled from 'styled-components';
import Visual from "../components/Main/Visual";
import PhotoListContainer from "../containers/PhotoListContainer";

const Main = () => {

    return (
        <Container>
            <Visual/>
            <PhotoListContainer/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Main;