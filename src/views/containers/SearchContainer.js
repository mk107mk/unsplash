import React, {useEffect} from 'react';
import styled from 'styled-components';
import {searchAction} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../components/List/PhotoList";
import SearchRelatedMenu from "../components/Search/SearchRelatedMenu";
import GridList from "../components/List/GridList";
import CollectionItem from "../components/Items/CollectionItem";
import UserItem from "../components/Items/UserItem";

const SearchContainer = ({match}) => {


    const query = match.params.query;
    const category = match.params.category;
    const {photos,collections, users, related_searches} = useSelector(state => state.search);

    useEffect( () => {
      searchPhotos();
    }, [query])

    const searchPhotos = () =>{
        searchAction.searchPhotos({
            query,
            per_page: 5
        })
    }

    const RenderList = () => {
        switch(category){
            default: {
                return <PhotoList data={photos?.results}/>
            }
            case 'collections':{
                return <GridList  data={collections?.results} renderItem={(item,index) => <CollectionItem key={index} item={item}/>
                }/>
            }
            case 'users':{
                return <GridList data={users?.results} renderItem={(item,index) => <UserItem key={index} item={item}/>
                }/>
                }


        }
    }

    return (
        <Container>
            <SearchRelatedMenu data={related_searches} />
            <RenderList/>
        </Container>
    )
}

const Container = styled.div`

`;


export default SearchContainer;