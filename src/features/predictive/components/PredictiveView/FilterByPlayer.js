
import React from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import PropTypes from 'prop-types';

export default class FilterByPlayer extends React.Component {

    /**
     * 
     */
    static propTypes = {
        onClose: PropTypes.func,
        open: PropTypes.bool
    }

    /**
     * 
     */
    state = {

    }

    /**
     * 
     */
    handleClose = () => {
        const { onClose } = this.props;
        if (typeof onClose === 'function') {
            onClose();
        }
    }

    /**
     * 
     */
    render() {
        const { open } = this.props;
        return (
            <div>
                {open ? <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                        <h1>Period of time</h1>
                        <br />

                        fsdgt

                        <br />
                        <button className='btn btn-primary' onClick={this.handleClose}>Send</button>
                    </ModalDialog>
                </ModalContainer> : false}
            </div>
        );
    }
}