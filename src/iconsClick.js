import React, {useState, useEffect} from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
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
class IconsClick  extends React.Component{
    constructor(props) {
        super(props);
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
    changeImage(e) {
        let file
        if (e === false)
            file = null
        else {
            file = e.target.files[0];
            console.log("file", file);
            let b
            if (file) {
                b = URL.createObjectURL(file);
                document.getElementById("giff").hidden = false
                document.getElementById("or").hidden = true
                let try1 = document.getElementById("face")
                try1.src = b;
                this.processImage(this.state.imageSrc);
            }
        }
    }
    //<img height='80' src={add} onChange={this.changeImage.bind(this)} id="add"/>
    render() {
        return<nav className="Navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img height='80' src={settings} alt="fe" ref="mask2" id="mask2"/>
                        <ul className="NavBottom1">
                            <li className="nav-item">
                                <img height='80' src={about} id="about"/>
                                <label htmlFor="file-input" className="upload-container"/>
                            </li>
                            <li className="nav-item">
                                <img height='80' src={add}/>
                            </li>
                            <li className="nav-item">
                                <img height='80' src={choose} id="choose"/>
                            </li>
                            <li className="nav-item">
                                <img height='80' src={language} id="language"/>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <img height='80' src={choose_color} alt="fe" ref="mask2" id="mask2"/>
                        <ul className="NavBottom1">
                            <li className="nav-item">
                                <img height='80' src={blush1} alt="fe" ref="mask2" id="mask2" onClick={this.ClickMask2}/>
                            </li>
                            <li className="nav-item">
                                <img height='80' src={blush2} alt="fe" ref="mask2" id="mask2" onClick={this.ClickMask1}/>
                            </li>
                            <li className="nav-item">
                                <img height='80' src={blush3} alt="fe" ref="mask2" id="mask3" onClick={this.ClickMask3}/>
                            </li>
                            <li className="nav-item">
                                <img height='80' src={blush4} alt="fe" ref="mask2" id="mask3" onClick={this.ClickMask4}/>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <img height='80' src={fade} id="fade"/>
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