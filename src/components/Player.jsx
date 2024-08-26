import { useState } from "react";

export default function Player({ initialName, symbol }) {

  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditClick() {
    // !isEditing ? setIsEditing(true) : setIsEditing(false);
    // setIsEditing(!isEditing); //still not perfect
    setIsEditing(Edit => !Edit); //Good practice. react recommended
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameField = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    playerNameField = <input type="text" value={playerName} required onChange={handleChange}/>
    btnCaption="Save";
  }

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
