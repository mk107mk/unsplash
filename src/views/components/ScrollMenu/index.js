import React, {useState, useRef}  from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import {IconAngleLeft, IconAngleRight} from "../../../icons";

const ScrollMenu = ({data=[], renderItem = () => {}}) => {

    const [scrollLeft,setScrollLeft] = useState(0);
    const [maxScroll,setMaxScroll] = useState(1);
    const TrackRef = useRef(null);


    const onScroll= (e) => {
        const scrollWidth = e.target.scrollWidth;
        const clientWidth = e.target.clientWidth;
        setScrollLeft(e.target.scrollLeft);
        setMaxScroll(scrollWidth-clientWidth);
    }

    const onClickLeft = () => {
        TrackRef.current.scrollLeft = Math.max(0,scrollLeft-300);
    }

    const onClickRight = () => {
        TrackRef.current.scrollLeft = Math.min(maxScroll ,scrollLeft+300);
    }

    return (
        <Container className={cn("ScrollMenu", {start: scrollLeft ===0, end: scrollLeft === maxScroll})}>
            <Track onScroll={onScroll}
                   ref={TrackRef}>
            {
                data.map((item,i) => renderItem(item, i))
            }
            </Track>
            {
                scrollLeft > 0 &&
                <ButtonLeft onClick={onClickLeft}>
                    <IconAngleLeft/>
                </ButtonLeft>
            }
            {
                scrollLeft < maxScroll &&
                <ButtonRight onClick={onClickRight}>
                    <IconAngleRight/>
                </ButtonRight>
            }
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  overflow:hidden;
  position:relative;
  
  &::before,
  &::after{
    content: "";
    position: absolute;
    top: 0; 
    bottom: 0;
    width: 200px;
    pointer-events: none; //클릭안되게
    transition:0.2s;
  }
  
  &::before{
    left: 0;
    background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);
  }
  &.start::before{
    opacity:0;
    
  }
  
  &::after{
    right: 0;
    background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);
  }
  &.end::after{
    opacity:0;

  }
`;

const Track = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const Button = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  cursor: pointer;
  svg{
    width: 22px;
    height: 22px;
  }
`;

const ButtonLeft = styled(Button)`
  left: 0;
`;

const ButtonRight = styled(Button)`
  right: 0;
`;

export default ScrollMenu;