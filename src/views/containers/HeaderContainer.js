import React ,{useEffect} from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import TopicsLnb from "../components/Header/Lnb/TopicsLnb";
import {topicAction} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import SearchLnb from "../components/Header/Lnb/SearchLnb";

const HeaderContainer = () => {

    const {list} = useSelector(state => state.topics);

    useEffect( () =>{
        getTopics();
    }, [])


    const getTopics = () =>{
        topicAction.getTopics({
            per_page:20,
        })
    }

    return (
        <Container>
            <Header/>

            <Route path={'/Search/:category/:query'}>
                    <SearchLnb/>
            </Route>
            <Route exact path={['/','/topics','/topics/:slug']}>
                <TopicsLnb topics={list}/>
            </Route>

        </Container>
    )
}

const Container = styled.div`

`;

export default HeaderContainer;