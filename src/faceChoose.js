import React, {Fragment} from "react";
import face001 from './images/faces/face0001.jpg';
import face002 from './images/faces/face0002.jpg';
import face003 from './images/faces/face0003.jpg';
import face004 from './images/faces/face0004.jpg';
import face005 from './images/faces/face0005.jpg';
import face006 from './images/faces/face0006.jpg';
import face007 from './images/faces/face0007.jpg';
import face008 from './images/faces/face0008.jpg';
import face009 from './images/faces/face0009.jpg';
import face010 from './images/faces/face0010.jpg';
import face011 from './images/faces/face0011.jpg';
import face012 from './images/faces/face0012.jpg';
import face013 from './images/faces/face0013.jpg';
import face014 from './images/faces/face0014.jpg';
import face015 from './images/faces/face0015.jpg';
import face016 from './images/faces/face0016.jpg';
import face017 from './images/faces/face0017.jpg';
import face018 from './images/faces/face0018.jpg';
import face019 from './images/faces/face0019.jpg';
import face020 from './images/faces/face0020.jpg';
import face021 from './images/faces/face0021.jpg';
import face022 from './images/faces/face0022.jpg';
import face023 from './images/faces/face0023.jpg';
import face024 from './images/faces/face0024.jpg';
import face025 from './images/faces/face0025.jpg';
import face026 from './images/faces/face0026.jpg';
import face027 from './images/faces/face0027.jpg';
import face028 from './images/faces/face0028.jpg';
import face029 from './images/faces/face0029.jpg';
import face030 from './images/faces/face0030.jpg';
import face031 from './images/faces/face0031.jpg';
import face032 from './images/faces/face0032.jpg';
import face033 from './images/faces/face0033.jpg';
import face034 from './images/faces/face0034.jpg';
import face035 from './images/faces/face0035.jpg';
import face036 from './images/faces/face0036.jpg';
import face037 from './images/faces/face0037.jpg';
import face038 from './images/faces/face0038.jpg';
import face039 from './images/faces/face0039.jpg';
import face040 from './images/faces/face0040.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import icon1 from "./images/icons/icons1.png";
import icon2 from "./images/icons/icons2.png";
import icon3 from "./images/icons/icons3.png";
import icon4 from "./images/icons/icons4.png";
import icon5 from "./images/icons/icons5.png";
import icon6 from './images/icons/icons6.png';
import icon7 from './images/icons/icons7.png';
import icon8 from './images/icons/icons8.png';
import icon9 from './images/icons/icons9.png';
import icon10 from './images/icons/icons10.png';
import icon11 from './images/icons/icons11.png';
import icon12 from './images/icons/icons12.png';
import icon13 from './images/icons/icons13.png';
import icon14 from './images/icons/icons14.png';
import icon15 from './images/icons/icons15.png';
import icon16 from './images/icons/icons16.png';
import icon17 from './images/icons/icons17.png';
import icon18 from './images/icons/icons18.png';
import icon19 from './images/icons/icons19.png';
import icon20 from './images/icons/icons20.png';
import icon21 from './images/icons/icons21.png';
import icon22 from './images/icons/icons22.png';
import icon23 from './images/icons/icons23.png';
import icon24 from './images/icons/icons24.png';
import icon25 from './images/icons/icons25.png';
import icon26 from './images/icons/icons26.png';
import icon27 from './images/icons/icons27.png';
import icon28 from './images/icons/icons28.png';
import icon29 from './images/icons/icons29.png';
import icon30 from './images/icons/icons30.png';
import icon31 from './images/icons/icons31.png';
import icon32 from './images/icons/icons32.png';
import icon33 from './images/icons/icons33.png';
import icon34 from './images/icons/icons34.png';
import icon35 from './images/icons/icons35.png';
import icon36 from './images/icons/icons36.png';
import icon37 from './images/icons/icons37.png';
import icon38 from './images/icons/icons38.png';
import icon39 from './images/icons/icons39.png';
import icon40 from './images/icons/icons40.png';

import Modal from "./modal";
import './face.css'
export const faces = [face002, face001, face003, face004, face005, face006, face007, face008, face009,
    face010, face011, face012, face013, face014, face015, face016, face017, face018, face019, face020, face021,
    face022, face023, face024, face025, face026, face027, face028, face029, face030, face031, face032,
    face033, face034, face035, face036, face037, face038, face039, face040,]

const NewComponent = () =>{
    console.log("componenta",document.getElementById("or").alt)
    if (document.getElementById("or").alt === "en")
        return (
            <div>Click on image to select it</div>
        )
    else
        return (
            <div>Нажмите на изображение, чтобы выбрать</div>
        )
}

class FaceChoose extends React.Component{
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    handleCancel = () => {
        console.log('Cancel function!');
        this.setState({ isOpen: false });
    }
    constructor(props) {
        super(props);
        this.newface = null;
    }
    render() {
        this.newface = this.props.func;
        //console.log(document.documentElement.clientWidth)
        if (parseFloat(document.documentElement.clientWidth) >= 700)
        return<Fragment>
            <textarea hidden={true} id="ChooseModal" onClick={this.openModal}>Show modal</textarea>
            <Modal
                title="Select"
                isOpen={this.state.isOpen}
                onCancel={this.handleCancel}
                className="ch"
            >
                <NewComponent/>
            <Carousel width="300px" onClickItem={this.newface} selectedItem={1} className="cho"
                      showThumbs={false} showStatus={true}
                      //showArrows={false} showIndicators={false}
            >
                    <img src={icon1} id="icon1" alt="f1"/>
                    <img src={icon2} alt="f2"/>
                    <img src={icon3} alt="f3"/>
                    <img src={icon4} alt="f4"/>
                    <img src={icon5} alt="f5"/>
                    <img src={icon6} alt='f6'/>
                    <img src={icon7} alt='f7'/>
                    <img src={icon8} alt='f8'/>
                    <img src={icon9} alt='f9'/>
                    <img src={icon10} alt='f10'/>
                    <img src={icon11} alt='f11'/>
                    <img src={icon12} alt='f12'/>
                    <img src={icon13} alt='f13'/>
                    <img src={icon14} alt='f14'/>
                    <img src={icon15} alt='f15'/>
                    <img src={icon16} alt='f16'/>
                    <img src={icon17} alt='f17'/>
                    <img src={icon18} alt='f18'/>
                    <img src={icon19} alt='f19'/>
                    <img src={icon20} alt='f20'/>
                    <img src={icon21} alt='f21'/>
                    <img src={icon22} alt='f22'/>
                    <img src={icon23} alt='f23'/>
                    <img src={icon24} alt='f24'/>
                    <img src={icon25} alt='f25'/>
                    <img src={icon26} alt='f26'/>
                    <img src={icon27} alt='f27'/>
                    <img src={icon28} alt='f28'/>
                    <img src={icon29} alt='f29'/>
                    <img src={icon30} alt='f30'/>
                    <img src={icon31} alt='f31'/>
                    <img src={icon32} alt='f32'/>
                    <img src={icon33} alt='f33'/>
                    <img src={icon34} alt='f34'/>
                    <img src={icon35} alt='f35'/>
                    <img src={icon36} alt='f36'/>
                    <img src={icon37} alt='f37'/>
                    <img src={icon38} alt='f38'/>
                    <img src={icon39} alt='f39'/>
                    <img src={icon40} alt='f40'/>
            </Carousel>
            </Modal>
        </Fragment>
        else return<Fragment>
            <textarea hidden={true} id="ChooseModal" onClick={this.openModal}>Show modal</textarea>
            <Modal
                title="Select"
                isOpen={this.state.isOpen}
                onCancel={this.handleCancel}
                className="ch"
            >
                <NewComponent/>
                <Carousel width="200px" onClickItem={this.newface} selectedItem={1} className="cho"
                          showThumbs={false} showStatus={true}
                    //showArrows={false} showIndicators={false}
                >
                    <img src={icon1} id="icon1" alt="f1"/>
                    <img src={icon2} alt="f2"/>
                    <img src={icon3} alt="f3"/>
                    <img src={icon4} alt="f4"/>
                    <img src={icon5} alt="f5"/>
                    <img src={icon6} alt='f6'/>
                    <img src={icon7} alt='f7'/>
                    <img src={icon8} alt='f8'/>
                    <img src={icon9} alt='f9'/>
                    <img src={icon10} alt='f10'/>
                    <img src={icon11} alt='f11'/>
                    <img src={icon12} alt='f12'/>
                    <img src={icon13} alt='f13'/>
                    <img src={icon14} alt='f14'/>
                    <img src={icon15} alt='f15'/>
                    <img src={icon16} alt='f16'/>
                    <img src={icon17} alt='f17'/>
                    <img src={icon18} alt='f18'/>
                    <img src={icon19} alt='f19'/>
                    <img src={icon20} alt='f20'/>
                    <img src={icon21} alt='f21'/>
                    <img src={icon22} alt='f22'/>
                    <img src={icon23} alt='f23'/>
                    <img src={icon24} alt='f24'/>
                    <img src={icon25} alt='f25'/>
                    <img src={icon26} alt='f26'/>
                    <img src={icon27} alt='f27'/>
                    <img src={icon28} alt='f28'/>
                    <img src={icon29} alt='f29'/>
                    <img src={icon30} alt='f30'/>
                    <img src={icon31} alt='f31'/>
                    <img src={icon32} alt='f32'/>
                    <img src={icon33} alt='f33'/>
                    <img src={icon34} alt='f34'/>
                    <img src={icon35} alt='f35'/>
                    <img src={icon36} alt='f36'/>
                    <img src={icon37} alt='f37'/>
                    <img src={icon38} alt='f38'/>
                    <img src={icon39} alt='f39'/>
                    <img src={icon40} alt='f40'/>
                </Carousel>
            </Modal>
        </Fragment>
    }
}

export default FaceChoose;