import React, {useState, useEffect} from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import {Tooltip, OverlayTrigger} from "react-bootstrap";
import blush1 from './images/icons/blushcolor1.png'
import blush2 from './images/icons/blushcolor2.png'
import blush3 from './images/icons/blushcolor3.png'
import blush4 from './images/icons/blushcolor4.png'
import "./styles.css"
import mask2 from "./images/overlay/overlayBLUSH2.png";
import logo1 from "./images/overlay/overlayBLUSH1.png";
import mask3 from "./images/overlay/overlayBLUSH3.png";
import mask4 from "./images/overlay/overlayBLUSH4.png";
import choose_color from "./images/icons/colorchoose.png";
import settings from "./images/icons/settings.png";
import about from "./images/icons/about.png";
import add from "./images/icons/add.png";
import choose from "./images/icons/choose.png";
import language from "./images/icons/language.png";
import fade from "./images/icons/blushfade.png"

const MyComponent = () => {

    const [ value, setValue ] = useState(50);

    useEffect(()=>{
        let try1 = document.getElementById("or")
        let a0;
        a0 = parseFloat(try1.style.opacity)
        if(0<= a0 <= 1)
            a0 = value/100
        console.log(a0)
        try1.style.opacity = a0.toString()
    })

    return (
        <RangeSlider
            value={value}
            onChange={changeEvent => setValue(changeEvent.target.value)}
            tooltip="auto"
            className="slider"
            tooltipPlacement = "bottom"
            size = "lg"
        />
    );

};

function renderTooltip(props) {
    if (document.getElementById("or").alt === "en")
    return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Settings
        </Tooltip>
    );
    else return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Параметры
        </Tooltip>
    );
}
function renderLang(props) {
    if (document.getElementById("or").alt === "en")
        return (
            <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
                Change language
                <div>into russian</div>
            </Tooltip>
        );
    else return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Сменить язык
            <div>на английский</div>
        </Tooltip>
    );
}
function renderAbout(props) {
    if (document.getElementById("or").alt === "en")
        return (
            <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
                About
            </Tooltip>
        );
    else return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Справка
        </Tooltip>
    );
}
function renderAdd(props) {
    if (document.getElementById("or").alt === "en")
        return (
            <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
                Load image <div>from device</div>
            </Tooltip>
        );
    else return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Загрузить изображе-<div>ние с устройства</div>
        </Tooltip>
    );
}
function renderChoose(props) {
    if (document.getElementById("or").alt === "en")
        return (
            <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
                Select existing<div>image</div>
            </Tooltip>
        );
    else return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Выбрать существу-<div>ющее изображение</div>
        </Tooltip>
    );
}
function renderColor(props) {
    if (document.getElementById("or").alt === "en")
        return (
            <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
                Choose<div>color</div>
            </Tooltip>
        );
    else return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Сменить<div>цвет</div>
        </Tooltip>
    );
}
function renderFade(props) {
    if (document.getElementById("or").alt === "en")
        return (
            <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
                Transparency
            </Tooltip>
        );
    else return (
        <Tooltip id="button-tooltip" {...props} bsPrefix="tooltip1">
            Прозрачность
        </Tooltip>
    );
}

class IconsClick  extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            language: 'RU'
        }
        //this.ClickPopUp = this.ClickPopUp.bind(this);
    }
    ClickMask2(){
        let try1 = document.getElementById("or")
        try1.src=mask2
    }
    ClickMask1(){
        let try1 = document.getElementById("or")
        try1.src=logo1
    }
    ClickMask3(){
        let try1 = document.getElementById("or")
        try1.src=mask3
    }
    ClickMask4(){
        let try1 = document.getElementById("or")
        try1.src=mask4
    }
    ChangeLang(){
        if (document.getElementById("or").alt === "en")
        document.getElementById("or").alt = "ru"
        else
            document.getElementById("or").alt = "en"
    }
    //<img height='80' src={add} onChange={this.changeImage.bind(this)} id="add"/>
    render() {
        return<nav className="Navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                        <img className="MyIMG" height='80' src={settings} alt="fe" ref="mask2" id="mask2"/>
                        </OverlayTrigger>
                        <ul className="NavBottom1">
                            <li className="nav-item">
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderAbout}
                                >
                                <label htmlFor="AboutModal" className="upload-container"/>
                                </OverlayTrigger>
                                <img className="MyIMG"  height='80' src={about} id="about" alt=""/>
                            </li>
                            <li className="nav-item">
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderAdd}
                                >
                                <label htmlFor="file-input" className="upload-container"/>
                                </OverlayTrigger>
                                <img className="MyIMG"  height='80' src={add} alt="add1"/>
                            </li>
                            <li className="nav-item">
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderChoose}
                                >
                                <label htmlFor="ChooseModal" className="upload-container"/>
                                </OverlayTrigger>
                                <img className="MyIMG"  height='80' src={choose} id="choose" alt="choose1"/>
                            </li>
                            <li className="nav-item">
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderLang}
                                >
                                <img className="MyIMG"  height='80' alt="lang" src={language} id="language" onClick={this.ChangeLang}/>
                                </OverlayTrigger>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderColor}
                        >
                        <img className="MyIMG" height='80' src={choose_color} alt="fe" ref="mask2" id="mask2"/>
                        </OverlayTrigger>
                        <ul className="NavBottom1">
                            <li className="nav-item">
                                <img className="MyIMG" height='80' src={blush1} alt="fe" ref="mask2" id="mask2" onClick={this.ClickMask2}/>
                            </li>
                            <li className="nav-item">
                                <img className="MyIMG" height='80' src={blush2} alt="fe" ref="mask2" id="mask2" onClick={this.ClickMask1}/>
                            </li>
                            <li className="nav-item">
                                <img className="MyIMG" height='80' src={blush3} alt="fe" ref="mask2" id="mask3" onClick={this.ClickMask3}/>
                            </li>
                            <li className="nav-item">
                                <img className="MyIMG" height='80' src={blush4} alt="fe" ref="mask2" id="mask3" onClick={this.ClickMask4}/>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderFade}
                        >
                        <img className="MyIMG" height='80' src={fade} id="fade" alt="fade1"/>
                        </OverlayTrigger>
                        <ul className="NavBottom1">
                            <li className="nav-item">
                                <MyComponent/>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        //return super.render();
    }
}
export default IconsClick;