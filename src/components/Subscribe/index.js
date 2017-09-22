
import React from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import successLogo from '../../images/success.png';
import PropTypes from 'prop-types';
import './index.css';

/**
 * 
 */
const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];
/**
 * 
 */
const daysOfMonth = [];
for (let i = 1; i <= 31; i++) {
    daysOfMonth.push(i);
}
const hoursOfDay = [];
for (let i = 1; i <= 12; i++) {
    let zero = i <= 9 ? '0': '';
    hoursOfDay.push(`${zero}${i}:00:00`);
}

/**
 * 
 */
const customStyles = {
    modal: {
        width: 500,
        cursor: 'pointer'
    },
    successLogo: {
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginTop: 30,
        marginBottom: 10
    },
    successMessage: {
        textAlign: 'center'
    }
};

/**
 * 
 */
export default class Subscribe extends React.Component {

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
        startDate: '',
        repeat: 'daily',
        repeats: [],
        success: false,
        hourOfDay: '',
        hourRange: 'am'
    }

    /**
     * 
     */
    handleStartDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    /**
     * 
     */
    handleRepeaChange = (e) => {
        this.setState({
            repeat: e.target.value
        });
    }

    /**
     * 
     */
    handleHourChange = (e) => {
        this.setState({
            hourOfDay: e.target.value,
        });
    }

    /**
     * 
     */
    handleHourRangeChange = (e) => {
        this.setState({
            hourRange: e.target.value,
        });
    }

    /**
     * 
     */
    handleDayChange = (e) => {
        const { repeats } = this.state;
        if (repeats.indexOf(e.target.value) === -1)
            repeats.push(e.target.value);
        this.setState({
            dayOfWeek: e.target.value,
            repeats: repeats
        });
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
    handleRemoveRepeats = (value) => () => {
        const { repeats } = this.state;
        let pos = repeats.indexOf(value);
        if (pos >= 0)
            repeats.splice(pos, 1);
        this.setState({
            repeats: repeats
        });
    }

    /**
     * 
     */
    handleSuscribe = () => {
        this.setState({success: true});
    }

    /**
     * 
     */
    renderSuccess = () => (
        <ModalContainer onClose={this.handleClose}>
            <ModalDialog onClose={this.handleClose}>
                <div style={customStyles.modal}>
                    <img style={customStyles.successLogo} src={successLogo} />
                    <div style={customStyles.successMessage}>Successfully suscribed</div>
                    <br />
                    <button className='btn btn-primary' onClick={this.handleSuscribe}>Suscribe</button>&nbsp;&nbsp;
                    <button className='btn btn-default' onClick={this.handleClose}>Cancel</button>
                </div>
            </ModalDialog>
        </ModalContainer>
    );

    /**
     * 
     */
    render() {
        const { open } = this.props;
        const { repeat, repeats, success, hourOfDay, hourRange } = this.state;
        if (success) {
            return this.renderSuccess();
        }
        return (
            <div>
                {open ? <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                        <div style={customStyles.modal}>
                            <form className="form-inline">
                                <h3>Subscribe</h3>
                                <div>Start Date</div>
                                <div style={{border: '1px solid #ccc',borderRadius: 5, width: 214}}>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleStartDateChange}
                                    />
                                </div>
                                <br />
                                <div>Repeat</div>
                                <select className='form-control' value={repeat} onChange={this.handleRepeaChange}>
                                    <option value='daily'>Daily</option>
                                    <option value='weekly'>Weekly</option>
                                    <option value='monthly'>Monthly</option>
                                </select>&nbsp;&nbsp;



                                <span>
                                    Hour&nbsp;&nbsp;
                                    <select className='form-control' value={hourOfDay} onChange={this.handleHourChange}>
                                        {hoursOfDay.map((v, i) => <option key={i} value={v}>{v}</option>)}
                                    </select>&nbsp;&nbsp;
                                </span>
                                <span>
                                    <select className='form-control' value={hourRange} onChange={this.handleHourRangeChange}>
                                        <option value='am'>AM</option>
                                        <option value='pm'>PM</option>
                                    </select>&nbsp;&nbsp;
                                </span>
                                {repeat === 'weekly' ?
                                    <span>
                                        Day&nbsp;&nbsp;
                                        <select className='form-control' onChange={this.handleDayChange}>
                                            {daysOfWeek.map((v, i) => <option key={i} value={v}>{v}</option>)}
                                        </select>
                                    </span>: false
                                }
                                {repeat === 'monthly' ?
                                    <span>
                                        Day&nbsp;&nbsp;
                                        <select className='form-control' onChange={this.handleDayChange}>
                                            {daysOfMonth.map((v, i) => <option key={i} value={v}>{v}</option>)}
                                        </select>
                                    </span>: false
                                }



                                <br /><br />
                                {repeats.map((value, i) => (
                                    <span key={i}>
                                        <div style={{marginBottom: 5}} className="chip">
                                            {value}
                                            <span className="closebtn" onClick={this.handleRemoveRepeats(value)}>&times;</span>
                                        </div>
                                        &nbsp;
                                    </span>
                                ))}
                            </form>
                            <br />
                            <div className='center'>
                                <button className='btn btn-primary' onClick={this.handleSuscribe}>Suscribe</button>&nbsp;&nbsp;
                                <button className='btn btn-default' onClick={this.handleClose}>Cancel</button>
                            </div>
                        </div>
                    </ModalDialog>
                </ModalContainer> : false}
            </div>
        );
    }
}
