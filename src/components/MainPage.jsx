import React from 'react'
import { Card, Sidebar } from './index'


const MainPage = () => {
	return (

		<div className='main__page'>
			<div className='main__navbar'>
				<Sidebar />
			</div>
			<div className='main__content'>
				<Card />
			</div>
		</div>

	)
}

export default MainPage