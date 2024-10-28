import { useState } from 'react';

export default function RandomNumber() {
  let n = 15;
	const [randomNumber, setRandomNumber] = useState(0);
	const [sum, setSum] = useState(0);

	const generateRandomNumber = () => {
		const newRandomNumber = Math.floor(Math.random() * 900) + 100;
		let tempNumber = newRandomNumber;
		let totalSum = 0;

		while (tempNumber > 0) {
			const rem = tempNumber % 10;
			totalSum += rem;
			tempNumber = Math.floor(tempNumber / 10);
		}

		setSum(totalSum);
		setRandomNumber(newRandomNumber);
	};

	let styleLose = { color: 'red' };
	let styleWin = { color: 'green' };
	let currentStyle = sum === n ? styleWin : styleLose; 

  return (
    <div>
    <div>
      <h1>Lottery Game!</h1>
    </div>
		<div>
			<h1 style={currentStyle}>
				{sum === n ? 'Lottery: Congratulations, you Won! ❤️' : 'Try Again 💥'}
			</h1>
			<h2>Lottery Ticket = {randomNumber}</h2>
			<button onClick={generateRandomNumber}>Generate New Ticket</button>
			<p>
				Note: If the sum of the lottery number is equal to 15, then you won 😊,
				else you lose 😒
			</p>
		</div>
    </div>
	);
}
