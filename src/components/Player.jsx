import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditClick() {
    // !isEditing ? setIsEditing(true) : setIsEditing(false);
    // setIsEditing(!isEditing); //still not perfect
    setIsEditing(edit => !edit); //Good practice. react recommended
    if (isEditing) {
      onChangeName(symbol, playerName)
    } 
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
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
