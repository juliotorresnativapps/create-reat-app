
import React from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import PropTypes from 'prop-types';
import './index.css';

/**
 * 
 */
export default class Export extends React.Component {
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
        report: '',
        format: ''
    }

    /**
     * 
     * 
     * @param {*} key
     * @param {*} value
     */
    handleCheck = (key, value) => () => {
        if (this.state[key] !== value)
            this.setState({ [key]: value });
        else
            this.setState({ [key]: '' });
    }

    /**
     * 
     * 
     * @param {*} displayName
     * @param {*} key
     * @param {*} value
     */
    renderCheck = (displayName, key, value) => (
        <div className="form-group">
            <input
                onChange={this.handleCheck(key, value)}
                type="checkbox" className="form-control"
                style={{height: 'auto', margin: 0}}
                checked={this.state[key] === value}
            />&nbsp;
            <label
                style={{ cursor: 'pointer' }}
                onClick={this.handleCheck(key, value)}>
                {displayName}
            </label>
        </div>
    );

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
                        <div style={{margin: '0 10px 0 10px', cursor: 'pointer'}}>
                            <form className="form-inline">
                                <h3>Export</h3>
                                {this.renderCheck('Cost Breakdown', 'report', 'costBreakdown')}
                                <br />
                                {this.renderCheck('Cost Trend', 'report', 'costTrend')}
                                <br />
                                {this.renderCheck('Cost per medication', 'report', 'costMedication')}

                                <h3>Format</h3>
                                {this.renderCheck('PDF', 'format', 'PDF')}
                                <br />
                                {this.renderCheck('CSV', 'format', 'CSV')}
                            </form>
                            <br />
                            <div className="center">
                                <button className='btn btn-primary' onClick={this.handleClose}>Download</button>&nbsp;&nbsp;
                                <button className='btn btn-default' onClick={this.handleClose}>Cancel</button>
                            </div>
                        </div>
                    </ModalDialog>
                </ModalContainer> : false}
            </div>
        );
    }
}