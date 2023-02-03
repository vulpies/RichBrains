import React from 'react'

const Button = ({ className, text }) => {

	const handleClick = () => {
		console.log('Clicked!')
	}
	return (
		<button className={className} onClick={handleClick}>{text}</button>
	)
}

export default Button