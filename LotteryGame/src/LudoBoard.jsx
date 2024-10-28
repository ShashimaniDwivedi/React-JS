import { useState } from 'react';

export default function LudoBoard() {

  // const [blue, setBlue] = useState(0);
	const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 }); 

  const incrementMoves = (color) => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      
			[color]: prevMoves[color] + 1,
		}));
	};

  // const incrementMoves = (color) => {
	// 	// Create a new moves object based on the current state
	// 	let newMoves = {
	// 		blue: moves.blue,
	// 		red: moves.red,
	// 		yellow: moves.yellow,
	// 		green: moves.green,
	// 	};

	// 	// Increment the move count for the specified color
	// 	newMoves[color] += 1;

	// 	// Update the state with the new moves object
	// 	setMoves(newMoves);
	// };

	return (
		<div>
			<h1>Game Begins!</h1>
			<div>
				<p>Blue move = {moves.blue}</p>
				<button
					style={{ backgroundColor: 'blue' }}
					onClick={() => incrementMoves('blue')}
				>
					+1
				</button>

				<p>Yellow move = {moves.yellow}</p>
				<button
					style={{ backgroundColor: 'yellow' }}
					onClick={() => incrementMoves('yellow')}
				>
					+1
				</button>

				<p>Red move = {moves.red}</p>
				<button
					style={{ backgroundColor: 'red' }}
					onClick={() => incrementMoves('red')}
				>
					+1
				</button>

				<p>Green move = {moves.green}</p>
				<button
					style={{ backgroundColor: 'green' }}
					onClick={() => incrementMoves('green')}
				>
					+1
				</button>
			</div>
		</div>
	);
}
