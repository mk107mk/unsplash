import React, {useEffect} from 'react';
import styled from 'styled-components';
import {searchAction} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../components/List/PhotoList";
import SearchRelatedMenu from "../components/Search/SearchRelatedMenu";
import GridList from "../components/List/GridList";
import CollectionItem from "../components/Items/CollectionItem";
import UserItem from "../components/Items/UserItem";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const SearchContainer = ({match}) => {


    const query = match.params.query;
    const category = match.params.category;
    const {photos, collections, users, related_searches} = useSelector(state => state.search);

    useEffect(() => {
        searchPhotos();
    }, [query])

    const searchPhotos = () => {
        searchAction.searchPhotos({
            query,
            per_page: 5
        })
    }

    const RenderList = () => {
        switch (category) {
            default: {
                return <PhotoList photos={photos?.results}/>
            }
            case 'collections': {
                return <GridList data={collections?.results}
                                 renderItem={(item, index) => <CollectionItem key={index} item={item}/>
                                 }/>
            }
            case 'users': {
                return <GridList data={users?.results} renderItem={(item, index) => <UserItem key={index} item={item}/>
                }/>
            }


        }
    }

    return (
        <Container>
            <ContentContainer>
            <Title>
                {query}
            </Title>
            <SearchRelatedMenu data={related_searches}/>
                </ContentContainer>
            <RenderList/>
        </Container>
    )
}

const Container = styled.div`
 
`;

const Title = styled.div`
  font-size: 46px;
  color: #111;
  font-weight: bold;
  text-transform: uppercase;
  padding: 60px 0 30px;
`;

export default SearchContainer;