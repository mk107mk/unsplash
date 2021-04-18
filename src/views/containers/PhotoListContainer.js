import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../components/List/PhotoList";
import { useSelector} from "react-redux";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import {photosAction} from "../../redux/actionCreators";


const PhotoListContainer = () => {


    const {list} = useSelector(state => state.photos);

    const getPhotos = () => {
        photosAction.getPhotos();
    }

    useEffect(() => {
        getPhotos();
    }, [])

    return (
        <Container>
                <PhotoList data={list}/>
        </Container>

    )
}

const Container = styled.div`

`;

export default PhotoListContainer;