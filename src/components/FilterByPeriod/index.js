
import React from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import { Calendar } from 'react-date-picker';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const customStyles = {
    modal: {
        cursor: 'pointer',
        margin: -20
    }
};

const today = new Date();
const date = (today.getFullYear()) + '/' + 
             (today.getMonth() > 9 ? '': '0') + today.getMonth() + '/' + 
             (today.getDate() > 9 ? '': '0') + today.getDate();

/**
 * 
 */
export default class FilterByPeriod extends React.Component {

    /**
     * 
     */
    static propTypes = {
        onClose: PropTypes.func,
        open: PropTypes.bool,
        typesFilterPeriod: PropTypes.array
    }

    /**
     * 
     */
    state = {
        startDate: date,
        endtDate: date,
        week: null,
        type: '',
        tab: 'from'
    }

    /**
     * 
     */
    handleCalendarChange = (value) => {
        if (this.state.tab === 'from')
            this.setState({ startDate: value });
        else
            this.setState({ endtDate: value });
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
    handleTabChange = (e) => {
        e.preventDefault();
        this.setState({
            tab: e.target.dataset.src
        });
    }

    /**
     * 
     */
    handleCancel = (e) => {
        e.preventDefault();
        this.handleClose();
    }

    /**
     * 
     */
    handleOk = (e) => {
        e.preventDefault();
        this.handleClose();
    }

    /**
     * 
     */
    render() {
        const { open } = this.props;
        const { tab, startDate, endtDate } = this.state;
        const date = tab === 'from' ? startDate: endtDate;
        return (
            <div>
                {open ? <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                        <div style={customStyles.modal}>
                            <div className='title-filter'>
                                <div className='row'>
                                    <div className='col-md-6' style={{textAlign: 'center'}}>{startDate}</div>
                                    <div className='col-md-6' style={{textAlign: 'center'}}>{endtDate}</div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs">
                                <li className={classnames({"nav-item": true, active: tab === 'from'})}>
                                    <a className="nav-link" href="" data-src='from' onClick={this.handleTabChange}>From</a>
                                </li>
                                <li className={classnames({"nav-item": true, active: tab === 'to'})}>
                                    <a className="nav-link" href="" data-src='to' onClick={this.handleTabChange}>To</a>
                                </li>
                            </ul>
                            <Calendar
                                dateFormat="YYYY-MM-DD"
                                date={date}
                                onChange={this.handleCalendarChange} />
                            <div>
                                <div style={{display: 'inline-block', width: '40%'}} />
                                <div style={{display: 'inline-block', width: '60%'}} >
                                    <div style={{display: 'block', marginBottom: '20px'}}>
                                        <div style={{textAlign: 'center', display: 'inline-block', width: '50%'}}>
                                            <a href='' onClick={this.handleOk}>OK</a>
                                        </div>
                                        <div style={{textAlign: 'center', display: 'inline-block', width: '50%'}}>
                                            <a href='' onClick={this.handleCancel}>Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalDialog>
                </ModalContainer> : false}
            </div>
        );
    }
}