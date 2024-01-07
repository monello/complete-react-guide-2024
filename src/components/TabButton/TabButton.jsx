import React from 'react';

const TabButton = ({ children }) => {
    function handleClick() {
        console.log(
            `%cHello World!`,
            'color: cornflowerblue;font-family:sans-serif; font-size: 20px'
        );
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
};

export default TabButton;
