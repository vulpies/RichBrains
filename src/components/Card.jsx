import React, { useState } from 'react'
import { EducationIcon, DateIcon, PlusIcon } from '../svg/index'
import { Button } from './index'
import { cardsInfo } from '../mocks/cardInfo'
import { RefreshIcon } from '../svg/index'

const Card = () => {
	const [show, setShow] = useState(false)
	const [addCourse, setAddCourse] = useState([])
	const [initialCount, setInitialCount] = useState(6)

	const handleAdd = (id) => {
		const card = cardsInfo.find(item => item.id === id)

		if (!addCourse.includes(id)) {
			setAddCourse([...addCourse, card.id])
		} else {
			setAddCourse(addCourse.filter(item => item !== id))
		}
	}

	const addCourseIcon = (id, className) => {
		return (
			<span
				className={`${addCourse.find(item => item === id) ? `${className} active` : `${className}`}`}
				onClick={() => handleAdd(id)}>
				<PlusIcon />
			</span>
		)
	}

	const handleShow = (data) => {
		if (data.length > initialCount) {
			setInitialCount(count => count + 3)
			setShow(false)
		} else {
			setShow(true)
		}
	}


	return (<>
		<div className='cards'>
			<div className='row'>
				{cardsInfo.slice(0, initialCount).map((card) => (

					<div className='card__wrapper col-12 col-lg-4' key={card.id} >
						<div className='card__inner card__inner-main'>
							<div className='card__inner-top'>
								<div className='card__inner-top-banner'>
									{addCourseIcon(card.id, 'add-icon-front')}
									<span className='card__image'>{card.image}</span>
								</div>
								<h3 className='label card__label'>{card.title}</h3>
								<h3 className='card__subtitle'>{card.subtitle}</h3>
								<p className='card__subtitle-mobile'>{card.education}</p>
							</div>

							<div className='card__inner-bottom'>
								<div className='card__icon'>
									<EducationIcon /><p>{card.education}</p>
								</div>
								<div className='card__icon'>
									<DateIcon /> <p>{card.date}</p>
								</div>
								<p className='card__count-mobile'>{card.cost}</p>

								<Button className='card__btn card__btn-main' text='More Info' />
							</div>
						</div>

						<div className='card__inner card__inner-back'>
							<div className='card__inner-top card__inner-top-back'>
								{addCourseIcon(card.id, 'add-icon')}
								<h3>{card.backInfo}</h3>

								<span>Duration:</span>
								<p>{card.durationMin}</p>
								<p>{card.durationMax}</p>

								<span>Start Dates:</span>
								<p>{card.start.join(', ')}</p>

							</div>
							<div className='card__inner-bottom'>
								<span>{card.cost}</span>
								<Button className='card__btn card__btn-hover' text='More Info' />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>

		<div className='main__content-edition'>
			<span onClick={() => handleShow(cardsInfo)}
				style={{ 'cursor': show ? 'default' : 'pointer' }}>
				<p>{show ? "That's our all programmes!" : 'More programmes'}</p> {show ? null : <RefreshIcon />}
			</span>

		</div>
	</>
	)
}

export default Card