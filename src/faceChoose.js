import React, {Fragment} from "react";
import face001 from './images/faces/face0001.jpg';
import face002 from './images/faces/face0002.jpg';
import face003 from './images/faces/face0003.jpg';
import face004 from './images/faces/face0004.jpg';
import face005 from './images/faces/face0005.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import icon1 from "./images/icons/icons1.png";
import icon2 from "./images/icons/icons2.png";
import icon3 from "./images/icons/icons3.png";
import icon4 from "./images/icons/icons4.png";
import icon5 from "./images/icons/icons5.png";
import Modal from "./modal";

export const faces = [face002, face001, face003, face004, face005]

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
        const cho={
            marginLeft: 'auto'
        }
        this.newface = this.props.func;
        return<Fragment>
            <textarea hidden={true} id="ChooseModal" onClick={this.openModal}>Show modal</textarea>
            <Modal
                title="Select"
                isOpen={this.state.isOpen}
                onCancel={this.handleCancel}
            >
                <NewComponent/>
            <Carousel width="200px" onClickItem={this.newface} selectedItem={1} className={cho} showThumbs={false} showStatus={true}>
                    <img src={icon1} id="icon1" alt="f1"/>
                    <img src={icon2} alt="f2"/>
                    <img src={icon3} alt="f3"/>
                    <img src={icon4} alt="f4"/>
                    <img src={icon5} alt="f5"/>
            </Carousel>
            </Modal>
        </Fragment>
    }
}

export default FaceChoose;