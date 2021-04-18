import React, {useEffect} from 'react';
import styled from 'styled-components';
import {searchAction} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../components/List/PhotoList";

const SearchContainer = ({match}) => {


    const query = match.params.query;
    const {photos} = useSelector(state => state.search);

    useEffect( () => {
      searchPhotos();
    }, [query])

    const searchPhotos = () =>{
        searchAction.searchPhotos({
            query,
            per_page: 5
        })
    }

    return (
        <Container>
            <PhotoList data={photos?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchContainer;