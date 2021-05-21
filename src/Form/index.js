import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form as RBForm } from 'react-bootstrap'
import { setUser } from '../actions'
import './form.scss'

const Form = ({ dispatch, user }) => {
	const name = useRef(null)
	const role = useRef(null)
	const [render, forceRender] = useState(false)

	const save = () => {
		const data = { name: name.current?.value, role: role.current?.value }
		dispatch(setUser(data))
		forceRender(!render)
	}
	const title = `Welcome Page - ${user?.set ? `${user.name} (${user.role})` : 'Log In'}`
	return (
		<span id='form'>
			<h2 id='form-title'>{title}</h2>
			<br />
			<h4>Here's the practice app, enter some information below:</h4>
			<br />
			<span className='flex even'>
				<RBForm>
					<RBForm.Group>
						<RBForm.Label>Name</RBForm.Label>
						<RBForm.Control
							ref={name}
						/>
					</RBForm.Group>
				</RBForm>
				<RBForm>
					<RBForm.Group>
						<RBForm.Label>Role</RBForm.Label>
						<RBForm.Control
							ref={role}
						/>
					</RBForm.Group>
				</RBForm>
				<Button 
					variant="primary"
					onClick={ save }
				>
					Submit
				</Button>
			</span>
		</span>
	)
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps)(Form)
