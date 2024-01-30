import { useState } from 'react';

export default function Player({
    initialName,
    symbol,
    isActive,
    onChangeName,
}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((currEditMode) => !currEditMode);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    };

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    };

    return (
        <li className={isActive ? 'active' : undefined}>
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
