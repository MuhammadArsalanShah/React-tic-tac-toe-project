export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player {turn.player} Selected - Row: {turn.square.row}, Column: {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
