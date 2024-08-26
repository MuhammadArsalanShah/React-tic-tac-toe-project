import { useState } from "react";

export default function Player({name, symbol}) {

  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditClick() {
    // !isEditing ? setIsEditing(true) : setIsEditing(false);
    setIsEditing(!isEditing); //still not perfect
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" name="" id="" required value={name}/>
    btnCaption="Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
