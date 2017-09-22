
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function DropdownMenu({active, keyName, displayName, list, onChange = () => {}, displayValue = 'displayName', keyValue = 'value'}) {
    return (
        <li className="dropdown">
            <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {displayName} <span className="caret" />
            </a>
            <ul className="dropdown-menu">
                {list.map((v, i) => (
                    <li className={classnames({active: active === v[keyValue]})} key={i}>
                        <a href="" onClick={onChange(keyName, v[keyValue], v.onClick)}>
                            {v[displayValue]}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
}

DropdownMenu.propTypes = {
    active: PropTypes.string,
    displayName: PropTypes.string,
    displayValue: PropTypes.string,
    keyName: PropTypes.string,
    keyValue: PropTypes.string,
    list: PropTypes.array,
    onChange: PropTypes.func
};

export default DropdownMenu;