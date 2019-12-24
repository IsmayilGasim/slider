import React from 'react';
import './Sliderhider.scss';
import styled from 'styled-components'

function SliderHeader(){
    const StyleLine = styled.div`
        // width:38em;
        // height:0.07em;
        background-color:#565657;
    `;
    const StyleImg = styled.img`
        // width:5rem;
        // height:5rem;
        // // background-color:yellow;
        // margin-top:1rem;
    `;
    const StyleTitle = styled.h1`
        // font-size:2rem;
        font-family:'Lato',sans-serif;
    `;
    const StyleHeader = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        // font-size:2rem;

    `;
    const StyleSub = styled.p`
        // font-size:1rem;
        text-align:center;
        // margin-top:0.5rem;
    `;

    return(
            <div className="slider__header">
                <img src="logo-circle.png" className="slider__header--logo"/>
                <p className="slider__header--title"><span style={{color:"#F7941D",fontWeight:"bolder",textShadow:"1px 1px"}}>Adopt</span> a new best friend</p>
                <div className="slider__header--line"></div>
                <p className="slider__header--subtitle" >You are the answer to providing homeless
                    pets a second chance.Adopt and offer deserving pets a bright future</p>
            </div>
    )
}
export default SliderHeader;