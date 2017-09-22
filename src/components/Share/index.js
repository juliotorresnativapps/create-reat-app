
import React from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import PropTypes from 'prop-types';
import './index.css';

/**
 * 
 */
export default class Share extends React.Component {
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
        link: '',
        email: '',
        emails: []
    }

    /**
     * 
     */
    handleSendAsChange = (value) => () => {
        this.setState({sendAs: value});
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
    handleCheck = (key, value) => () => {
        if (this.state[key] !== value)
            this.setState({ [key]: value });
        else
            this.setState({ [key]: '' });
    }

    /**
     * 
     */
    handleEmailKeyPress = (e) => {
        if (e.key === 'Enter') {
            const { emails, email } = this.state;
            if (emails.indexOf(email) === -1) {
                emails.push(email);
                this.setState({emails: emails,email:''});
            } 
        }
    }

    /**
     * 
     */
    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({email: e.target.value});
    }

    /**
     * 
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
    handleRemoveEmail = (value) => () => {
        const { emails } = this.state;
        let pos = emails.indexOf(value);
        if (pos >= 0)
            emails.splice(pos, 1);
        this.setState({
            repeats: emails
        });
    }

    /**
     * 
     */
    render() {
        const { open } = this.props;
        const { link, email, emails } = this.state;
        return (
            <div>
                {open ? <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onSubmit={(e) => e.preventDefault()} onClose={this.handleClose}>
                        <div style={{margin: '0 10px 0 10px', cursor: 'pointer'}}>
                            <form className="form-inline">
                                <h3>Share</h3>
                                <div className="form-group">
                                    <input type="link" className="form-control" readOnly placeholder='Link' value={link} />&nbsp;&nbsp;
                                    <button className='btn btn-primary' onClick={this.handleGenerate}>Generate</button>
                                </div>
                                <h3>Send as</h3>
                                <div className="form-group">
                                    {this.renderCheck('Link', 'sendAs', 'link')}&nbsp;&nbsp;
                                    {this.renderCheck('Attachment', 'sendAs', 'attachment')}
                                </div>
                                <br /><br />
                                <div style={{width: '100%'}} className="form-group">
                                    <input
                                        style={{width: '100%'}} type="email" className="form-control"
                                        onKeyPress={this.handleEmailKeyPress} onChange={this.handleEmailChange}
                                        placeholder='Email address' value={email} />
                                </div>
                                <br /><br />
                                {emails.map((value, i) => (
                                    <span key={i}>
                                        <div style={{marginBottom: 5,fontSize: 10}} className="chip">
                                            {value}
                                            <span onClick={this.handleRemoveEmail(value)} className="closebtn" >&times;</span>
                                        </div>
                                        &nbsp;
                                    </span>
                                ))}
                            </form>
                            <br />
                            <div className="center">
                                <button className='btn btn-primary' onClick={this.handleClose}>Share</button>&nbsp;&nbsp;
                                <button className='btn btn-default' onClick={this.handleClose}>Cancel</button>
                            </div>
                        </div>
                    </ModalDialog>
                </ModalContainer> : false}
            </div>
        );
    }
}