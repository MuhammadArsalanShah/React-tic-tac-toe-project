import { useState } from "react";

export default function Player({name, symbol}) {

  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditClick() {
    if (!isEditing) {
      setIsEditing(true)
    } else {
      setIsEditing(false);
    }
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" name="" id="" required />
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
}
