/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './modal';


const NewComponent = () =>{
    console.log("componenta",document.getElementById("or").alt)
    if (document.getElementById("or").alt === "en")
        return (
            <p>Blush is a project, that applies some blush on your image. Create new looks and use it for entertaining purposes. Just load your picture or choose one from exacting and get started.</p>
        )
    else
        return (
            <p>Blush - проект, который накладывает румяна на ваше изображение. Придумыйвайте новые образы - только загрузите ваше фото или выберите из имеющихся. Приложение используйте для развлекательных целей.</p>
        )
}

class Sandbox extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    handleCancel = () => {
        console.log('Cancel function!');
        if (document.getElementById("or").alt === "en")
            console.log('truuuue')
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <Fragment>
                <select hidden={true} id="AboutModal" onClick={this.openModal}>Show modal</select>
                <Modal
                    title="About"
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                >
                    <h3>blush</h3>
                    <NewComponent/>
                </Modal>

            </Fragment>
        );
    }
}

export default Sandbox;
/* eslint-enable */