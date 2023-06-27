import React, { useState } from 'react'

const Form = () => {

	const [names, setnames] =useState({
		name: '',
		petName: ''
	})

	const handleInputChange = (event) => {
		setnames({
			...names,
			[event.target.value] : event.target.value
		})
	};

	const sendData = (event) => {
		event.preventDefault();
	}

  return (
		<div className="allform">
			<div className="headlings">
				<h1>Welcome to Shinny Paws!</h1>
				<h2>Please complete this form to make your appointment </h2>
			</div>
			<form  onSubmit={sendData}>
				<section className="inputs">
					<input 
						name="name"
						type="text" 
						placeholder='your name'
						onChange={handleInputChange} />
					<input 
						name="petName"
						type="text" 
						placeholder='your pet name'
						onChange={handleInputChange} />
				</section>
				<section className="dogsize">
					<label htmlFor="size">What is the size of your pet?</label>
					<select id="size" name="size">
						<option value="small">Small (less than 5kg.)</option>
						<option value="medium">Medium (between 5kg. and 15kg. )</option>
						<option value="big">Big (between 15kg. and 25kg.) </option>
						<option value="very big">Very big (more than 25kg.)</option>
					</select>
				</section>
				<section className="washtype">
					<span>Type of washing for your pet</span>
					<br/>
					<input id="standard" type="radio" name="wash" value="standard"/>
					<label htmlFor="standard">Standard</label>
					<input id="premium" type="radio" name="wash" value="premium"/>
					<label htmlFor="premium">Premium</label>
				</section>
				<section className="extras">
					<span>Make your pet even prettier</span>
					<br/>
					<input id="ear" type="checkbox" name="extras" value="ear"/>
					<label htmlFor="ear">Ear cleaning</label>
					<input id="pedicure" type="checkbox" name="extras" value="pedicure"/>
					<label htmlFor="pedicure">Pedicure</label>
					<input id="haircut" type="checkbox" name="extras" value="haircut"/>
					<label htmlFor="haircut">Haircut</label>
				</section>
				<section className="comments">
					<label>Does your pet have any peculiarities? Let us know!</label>
					<br/>
					<textarea id="comments" name="coments" rows="4"
					cols="40"></textarea>
				</section>
				<button type="submit" value="send">Send</button>
			</form>
		</div>
	)
}

export default Form;