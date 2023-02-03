import React, { useState } from 'react'
import { Arrow } from '../svg/index'
import { accordionDate } from '../mocks/accordion'

const Accordion = () => {
	const [active, setActive] = useState('')
	const [subMenu, setSubMenu] = useState('')

	const handleOpen = (title) => {
		if (title === active) {
			return setActive('')
		}
		setActive(title)
		setSubMenu('')
	}

	return (
		<div className='sidebar__accordion'>

			{accordionDate.map((item) => (
				<div className='sidebar__accordion-item' key={item.id}>
					<div className='sidebar__accordion-title' onClick={() => handleOpen(item.title)}>
						<p className={active === item.title ? "sidebar__accordion-title active" : ''}>{item.title}</p>
						<span className={active === item.title ? 'sidebar__accordion-arrow arrow-active' : 'sidebar__accordion-arrow'}>
							<Arrow /></span>
					</div>
					<div className={active === item.title ? 'sidebar__accordion-content show' : 'sidebar__accordion-content'}>
						{item.points.map((p, i) => (
							<li
								key={i}
								className={subMenu === p ? 'li-active' : ''}
								onClick={() => setSubMenu(p)}>{p}</li>
						))}
					</div>
				</div>
			))}

		</div>
	)
}

export default Accordion