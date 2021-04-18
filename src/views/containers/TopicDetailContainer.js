import React ,{useEffect} from 'react';
import styled from 'styled-components';
import {topicAction} from "../../redux/actionCreators";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

const TopicDetailContainer = ({match}) => {

   console.log("@@ match",{match});

    const slug = match.params.slug;

    console.log("@@ slug", slug);

    const {detail}= useSelector(state => state.topics);

    useEffect(()=> {
        getTopicBySlug();
    }, [slug])

    const getTopicBySlug = () =>{
        topicAction.getTopicBySlug(slug)
    }


    return (
        <Container>
            <h1>{detail.title}</h1>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(TopicDetailContainer);