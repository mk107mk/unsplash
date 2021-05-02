import React from 'react';
import styled from 'styled-components';
import PhotoPopup from "../components/PhotoPopup";
import {photosAction} from "../../redux/actionCreators";
import {useSelector} from "react-redux";

const PopupContainer = () => {

    const {photoDetail, photoRelated}= useSelector(state => state.photos)
    console.log("@@state");

    const onClose = () =>{
        photosAction.updateState({
            photoPopup: false
        })
    }

    return (
        <Container>
            <Screen onClick={onClose}/>
           <PhotoPopup
                photoDetail={photoDetail}
                        photoRelated={photoRelated}/>
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 1500;
  padding-top:30px;

`;

const Screen = styled.div`
    position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:rgba(0,0,0,0.6);
`;

export default PopupContainer;