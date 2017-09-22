
import React from 'react';
import './index.css';

/**
 * 
 */
export default class ToolbarComponent extends React.Component {

    /**
     * 
     */
    static propTypes = {
        children: () => {}
    }

    /**
     * 
     */
    state = {

    }

    /**
     * 
     */
    render() {
        const {children} = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    {children.map((child, i) => React.cloneElement(child, {key: i}))}
                </div>
            </nav>
        );
    }
}
