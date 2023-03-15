import React from 'react';
import './PersonCard.css'

const PersonCard = (props) => {
	let {firstName, lastName, age, hairColor} = props

	return (
		<div className="hooman">
			<h2>{firstName} {lastName}</h2>
			<p>Age: {age}</p>
			<p>Hair Color: {hairColor}</p>
		</div>
	);
}

export default PersonCard;