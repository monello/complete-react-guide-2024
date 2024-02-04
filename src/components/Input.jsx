import { styled } from 'styled-components';

export const Input = ({ label, ...props }) => {
    return (
        <p>
            <label>{label}</label>
            <input {...props} />
        </p>
    );
};
