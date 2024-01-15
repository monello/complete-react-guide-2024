import { useState } from 'react';

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((currEditMode) => !currEditMode);
    };

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    };

    return (
        <li>
            <span className="player">
                {!isEditing && (
                    <span className="player-name">{playerName}</span>
                )}
                {isEditing && (
                    <input
                        type="text"
                        required
                        value={playerName}
                        onChange={handleNameChange}
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}
