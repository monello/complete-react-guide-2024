import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = () => {
        setIsEditing((mode) => !mode);
    };

    return (
        <li>
            <span className="player">
                {!isEditing && <span className="player-name">{name}</span>}
                {isEditing && <input value={name} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleEditMode}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}
