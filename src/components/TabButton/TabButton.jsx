import React from 'react';

const TabButton = (props) => {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    );
};

export default TabButton;
