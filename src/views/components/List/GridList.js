import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../Layout/Layout.Styled";

const GridList = ({data = [], renderItem}) => {

    return (
        <Container>
            <ContentContainer>
            <Row>
                {
                    data.map((item, index) => (
                        <Col>
                            {renderItem(item, index)}
                        </Col>
                    ))
                }
            </Row>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const Col = styled.div`
  padding: 15px;
  width: 33.33%;
`;

export default GridList;