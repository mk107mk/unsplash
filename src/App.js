import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./styled/GlobalStyle";
import {Route, Switch} from 'react-router-dom';
import Main from "./views/pages/Main";
import Header from "./views/components/Header";
import Search from "./views/pages/Search";
import HeaderContainer from "./views/containers/HeaderContainer";
import TopicDetail from "./views/pages/TopicDetail";
import Topics from "./views/pages/Topics";
import PopupContainer from "./views/containers/PopupContainer";
import {useSelector} from "react-redux";


const App = () => {

    const {photoPopup}= useSelector( state=> state.photos);

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Switch>
                <Route exact path={"/"} component={Main}/>
                <Route path={"/search/:category/:query"} component={Search}/>
                <Route exact path={"/topics"} component={Topics}/>
                <Route path={"/topics/:slug"} component={TopicDetail}/>



            </Switch>
            {
                photoPopup &&
                <PopupContainer/>
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default App;