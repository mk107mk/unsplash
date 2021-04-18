import React ,{useEffect} from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import TopicsLnb from "../components/Header/Lnb/TopicsLnb";
import {topicAction} from "../../redux/actionCreators";
import {useSelector} from "react-redux";

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
            <TopicsLnb topics={list}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default HeaderContainer;