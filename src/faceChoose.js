import React from "react";
import {useState} from "react";
import face001 from './images/faces/face0001.jpg';
import face002 from './images/faces/face0002.jpg';
import face003 from './images/faces/face0003.jpg';
import face004 from './images/faces/face0004.jpg';
import face005 from './images/faces/face0005.jpg';
import {Carousel} from "react-bootstrap";
import icon1 from "./images/icons/icons1.png";
import icon2 from "./images/icons/icons2.png";
import icon3 from "./images/icons/icons3.png";
import icon4 from "./images/icons/icons4.png";
import icon5 from "./images/icons/icons5.png";

export const faces = [face002, face001, face003, face004, face005]

class FaceChoose extends React.Component{
    constructor(props) {
        super(props);
        this.newface = null;
        this.changeface1 = this.changeface1.bind(this)
        this.changeface2 = this.changeface2.bind(this)
        this.changeface3 = this.changeface3.bind(this)
        this.changeface4 = this.changeface4.bind(this)
        this.changeface5 = this.changeface5.bind(this)
    }
    changeface1(){ this.newface(1) }
    changeface2(){ this.newface(2) }
    changeface3(){ this.newface(3) }
    changeface4(){ this.newface(4) }
    changeface5(){ this.newface(5) }
    render() {
        const funcParam = this.props.func;
        this.newface = funcParam;
        return<Carousel>
                <Carousel.Item>
                    <img src={icon1} id="icon1" onClick={this.changeface1}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={icon2} onClick={this.changeface2}/>
                    <img src={icon3} onClick={this.changeface3}/>
                    <img src={icon4} onClick={this.changeface4}/>
                    <img src={icon5} onClick={this.changeface5}/>
                </Carousel.Item>
            </Carousel>
    }
}

export default FaceChoose;