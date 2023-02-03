import React, { useState } from 'react'
import { Button, Accordion } from './index'
import { Arrow, EducationIcon } from '../svg'

const Sidebar = () => {
	const [active, setActive] = useState(false)

	const sidebarBody = <>
		<div className='sidebar__body'>

			<Accordion />
		</div>
		<div className='sidebar__footer'>
			<Button className='sidebar__btn' text='Show all programmes'></Button>
		</div>
	</>

	return (
		<>
			<div className='sidebar'>
				<div className='sidebar__header'>
					<span>
						<EducationIcon /><h3 className='label sidebar__label'>Careers</h3>
					</span>
				</div>
				{sidebarBody}
			</div>

			<div className='sidebar__mobile'>
				<div className='sidebar__accordion'>
					<div className='sidebar__mobile-item'>
						<div className='sidebar__mobile-title' onClick={() => setActive(!active)}>
							<span className='sidebar__mobile-top'>
								<EducationIcon /> <p className={active ? "sidebar__mobile-title active" : ''}>Choose your career</p>
							</span>

							<span className={active ? 'sidebar__mobile-arrow arrow-active' : 'sidebar__mobile-arrow'}>
								<Arrow />
							</span>
						</div>

						<div className={active ? 'sidebar__accordion-content show' : 'sidebar__accordion-content'}>
							{sidebarBody}
						</div>

					</div>

				</div>
			</div>
		</>
	)
}

export default Sidebar