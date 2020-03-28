/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './modal';

class Sandbox extends Component {
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

    render() {
        return (
            <Fragment>

                <textarea hidden={true} id="AboutModal" onClick={this.openModal}>Show modal</textarea>
                <Modal
                    title="About"
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                >
                    <h3>blush</h3>
                    <p>Blush is a project, that applies some blush on your image. Create new looks and use it for entertaining purposes. Just load your picture or choose one from exacting and get started.</p>
                </Modal>

            </Fragment>
        );
    }
}

export default Sandbox;
/* eslint-enable */