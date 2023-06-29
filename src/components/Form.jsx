import React, { useState } from 'react'
import '../stylesheets/Form.css'

const sizes = ["S (less than 5kg)", "M (between 5kg and 15kg)", "L (between 15kg and 25kg)", "XL (more than 25kg)"]

const Form = () => {

	const [name, setName] = useState('')
  const [dogName, setDogName] = useState('')
	const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedBath, setSelectedBath] = useState('');
  const [selectedExtra, setSelectedExtra] = useState([]);
  const [comment, setComment] = useState('')

  const handleCheck = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setSelectedExtra(pre => [...pre,value])
    } else {
      setSelectedExtra(pre => {
        return [...pre.filter(extra => extra!==value)]
      })
    }
  };



	const sendData = (e) => {
		e.preventDefault();
	};

  return (
		<div className="allform">
			<div className="headlings">
				<h2>Please complete this form to make your appointment </h2>
        <hr/>
			</div>
			<form  onSubmit={sendData}>
				<section className="inputs">
					<input 
						className="name"
            name="name"
						type="text" 
						placeholder='Your name'
						onChange={e => setName(e.target.value)}
            value={name} 
            />
					<input 
						className="petName"
            name="petName"
						type="text" 
						placeholder='Your pet name'
						onChange={e => setDogName(e.target.value)}
            value={dogName}
              />
          <hr/>
				</section>
				<section className="dogsize">
					<label htmlFor="size">Size of your pet?</label>
					<select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
						{sizes.map((size) => (
							<option 
								value={size} 
								key={size}>
									{size}
							</option>
						))}
					</select>
          <hr/>
				</section>
				<section className="bathtype">
					<span>Type of bath for your pet</span>
					<br/>
          <div className="bathform">
            <input 
              className="standardbath"
              id="standard" 
              type="radio" 
              name="bath" 
              value="standard"
              checked={selectedBath === 'standard'}
              onChange={e => setSelectedBath(e.target.value)} 
              />
            <label htmlFor="standard">Standard</label>
            <input 
              className="premiumbath"
              id="premium" 
              type="radio" 
              name="bath" 
              value="premium"
              checked={selectedBath === 'premium'}
              onChange={e => setSelectedBath(e.target.value)} 
              />
            <label htmlFor="premium">Premium</label>
            <input 
              className="deluxebath"
              id="deluxe" 
              type="radio" 
              name="bath" 
              value="deluxe"
              checked={selectedBath === 'deluxe'}
              onChange={e => setSelectedBath(e.target.value)} 
              />
            <label htmlFor="deluxe">DeLuxe</label>
          </div>
          <hr/>
				</section>
				<section className="extras">
					<span>Make your pet even prettier</span>
					<br/>
          <div className="checkboxform">
            <input 
              id="ear"
              type="checkbox" 
              name="extras" 
              value="ear"
              onChange={handleCheck}
              />
              <label htmlFor="ear">Ear cleaning</label>
            <input 
              id="pedicure"
              type="checkbox" 
              name="extras" 
              value="pedicure"
              onChange={handleCheck}
              />
            <label htmlFor="pedicure">Pedicure</label>
            <input 
              id="haircut"
              type="checkbox" 
              name="extras" 
              value="haircut"
              onChange={handleCheck}
              />
            <label htmlFor="haircut">Haircut</label>
          </div>
          <hr/>
				</section>
				<section className="comments">
					<label className="question">Does your pet have any peculiarities? Let us know!</label>
					<br/>
					<textarea 
            placeholder="Add your comments here" 
            name="coments" 
            rows="4"
            cols="40" 
            value={comment}
            onChange={e => setComment(e.target.value)}
            >
          </textarea>
          <hr/>
				</section>
        <div className="send">
				<button type="submit" value="send">Send</button>
        </div>
			</form>
		</div>
	)
}

export default Form;