import React from "react";
import styled from "styled-components";
import SliderHider from "./Sliderhider";
import SliderPicture from "./Sliderpicture";

export default class extends React.Component{
render() {
    const StyleSlider = styled.div`
             background: linear-gradient(#31B0D5,#ffffff);
              margin: 0 auto;
              // padding-top:1rem;
              display:flex;
              // width:1300px;
              flex-direction: column;
              justify-content:center;
              text-align:center;
              align-items:center;
              
      `;
    const StyleButtonDiv = styled.div`
            display:flex;
            flex-direction:row;
    `;

    const StyleButton = styled.button`
            width:7em;
            height:1.3em;  
            font-size:2rem;
            font-family:sans-serif;
            text-transform:uppercase;
            cursor:pointer;
    `;
    return (

        <div className="slider">
            <SliderHider/>
            <SliderPicture
            />
        </div>
    );
}
}
//export default CommonSlide;