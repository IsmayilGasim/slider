// import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';

import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Carousel from 'nuka-carousel';
import './Sliderhider.scss';
import Slider from "react-slick";
//import  {Carousel}  from 'react-bootstrap';

    class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
            };
        }
        // componentDidMount() {
        //     fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
        //         .then(response => response.json())
        //         .then(data => this.setState({data}));
        // };




    // Category(){
    //     fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts/',
    //         {
    //             method:"GET"
    //         })
    //         .then(response =>{
    //             response.json()
    //             console.log(response);
    //         })
    //         .then(result =>{
    //             this.setState({categoryId:result.id});
    //             result.name=this.state.valueCategory;
    //             result.subCategory=this.state.valueSubCategory;
    //             console.log('y'+result)
    //         })
    // }



//         const CarouselWrapper = styled.div`
//   max-width: 1200px;
//   .carousel-control.left,
//   .carousel-control.right {
//     background: none;
//   }
// `;
//    componentDidMount()
//     {
//         fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts')
//             .then(response => response.json())
//             .then(content => this.setState({content: content}));
//         console.log("1");
//         console.log(this.content);
//     };
render() {

    // const {hits} = this.state;
    // console.log(hits);
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // if (wind
    // ow.screen.availWidth < 320) {
    //     settings.slidesToShow = 1;
    // }
    // if (window.screen.availWidth >= 320 && window.screen.availWidth < 480) {
    //     settings.slidesToShow = 2;
    // }
    // if (window.screen.availWidth >= 480 && window.screen.availWidth < 900) {
    //     settings.slidesToShow = 3;
    // }
    // if (window.screen.availWidth >= 900) {
    //     settings.slidesToShow = 4;
    // }

//
//        function  componentDidMount() {
//                 fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
//                     .then(response => response.json())
//                     .then(data => this.setState({data}));
//             };
// const listItem = this.state;
//     console.log(listItem);

    const listItem = [
        {
            imgUrl: "001.jpg",
            gender: 'Ted',
            age: 10,
            location: "Baku",
        },
        {
            imgUrl: "002.jpg",
            gender: 'Gogi',
            age: 9,
            location: "London",
        },
        {
            imgUrl: "003.jpg",
            gender: 'Rex',
            age: 10,
            location: "Baku",
        },
        {
            imgUrl: "004.jpg",
            gender: 'Nolan',
            age: 11,
            location: "Gabala",
        },
        {
            imgUrl: "005.jpg",
            gender: 'Leo',
            age: 12,
            location: "Ganja",
        },
        {
            imgUrl: "006.jpg",
            gender: 'Slide5',
            age: 2,
            location: "New-York",
        },
        {
            imgUrl: "007.jpg",
            gender: 'Slide6',
            age: 3,
            location: "Ankara",
        },
        {
            imgUrl: "008.jpg",
            gender: 'Slide7',
            age: 4,
            location: "Istanbul",
        },
        {
            imgUrl: "https://via.placeholder.com/400/ffffff/c0392b/&text=slide1",
            gender: 'Slide8',
            age: 5,
            location: "Baku",
        },
        {
            imgUrl: "https://via.placeholder.com/400/ffffff/c0392b/&text=slide1",
            gender: 'Slide9',
            age: 10,
            location: "Baku",
        },
        {
            imgUrl: "https://via.placeholder.com/400/ffffff/c0392b/&text=slide1",
            gender: 'Slide1',
            age: 10,
            location: "Baku",
        }

    ];
    // const getLosts = () => {
    //     fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({losts: json.filter((post) => post.statusId === "1" && post.speciesId == "1")});
    //         });
    // };
    // getLosts(this.props);
    const StyleDiv = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        justify-content:center;
       
     `;
    const StyleItems = styled.div`
             // width:76em;
             // height:40em;
             margin:0 auto;
             // background:transparent;
                          
        `;
    const StyleImg = styled.img`
                border-radius:50%;
                // width:10em;
                // height:10em;
                // margin:1em 5em 1em 5em;
                display:inline-block;
        `;
    const StyleP = styled.p`
                // margin:0;
        `;


    const s = listItem.map((item) => {
        console.log(item.image);
        return (
            <StyleDiv className="sliderPicture__items">
                <a href="http://localhost:3000/losts/"
                   className="a"
                >
                    <StyleImg src={item.imgUrl}
                              className="sliderPicture__items--img"/>
                </a>

                <StyleP className="sliderPicture__items--text" style={{color: "#31B0D5"}}>Name: <span
                    className="whiteText">{item.gender}</span></StyleP>
                <StyleP className="sliderPicture__items--text" style={{color: "#31B0D5"}}>Age: <span
                    className="whiteText">{item.age}</span></StyleP>
                <StyleP className="sliderPicture__items--text" style={{color: "#31B0D5"}}>Location: <span
                    className="whiteText">{item.location}</span></StyleP>
            </StyleDiv>

        );
    });
    const StyleDivImg = styled.div`
        // display:flex;
        // flex-direction:column;
        // align-items:center;
        // text-align:center;
        // justify-content:center;
     `;
    const styleButton = styled.button`
                width:1rem;
                height:1rem;
               background:yellow;
               font-size:2rem;
               cursor:pointer;
               margin:2rem;
        `;
    return (
        <StyleItems class="styleItems">
            <Slider
                {...settings}
                /* renderCenterLeftControls={({ previousSlide }) => (
                     <button onClick={previousSlide}
                            className="buttonNext"
                     >{'<'}</button>
                 )}
                 renderCenterRightControls={({ nextSlide }) => (
                     <button onClick={nextSlide}
                             class="buttonPrev"
                     >{'>'}</button>
                 )}*/

            >
                {
                    s
                }
            </Slider>

        </StyleItems>
    );
}
}




export default App;