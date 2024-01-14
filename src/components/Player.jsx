import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [nameValue, setNameValue] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = () => {
        setIsEditing((mode) => !mode);
    };

    const onNameChange = (event) => {
        setNameValue(event.target.value);
    };

    return (
        <li>
            <span className="player">
                {!isEditing && <span className="player-name">{nameValue}</span>}
                {isEditing && (
                    <input value={nameValue} onChange={onNameChange} />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleEditMode}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}
