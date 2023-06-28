import React, { useState } from 'react'

const sizes = ["Small (less than 5kg)", "Medium between (5kg and 15kg)", "Big (between 15kg and 25kg)", "Very Big (more than 25kg)"]

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
				<h1>Welcome to Shinny Paws!</h1>
				<h2>Please complete this form to make your appointment </h2>
			</div>
			<form  onSubmit={sendData}>
				<section className="inputs">
					<input 
						name="name"
						type="text" 
						placeholder='your name'
						onChange={e => setName(e.target.value)}
            value={name} 
            />
					<input 
						name="petName"
						type="text" 
						placeholder='your pet name'
						onChange={e => setDogName(e.target.value)}
            value={dogName}
              />
				</section>
				<section className="dogsize">
					<label htmlFor="size">What is the size of your pet?</label>
					<select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
						{sizes.map((size) => (
							<option 
								value={size} 
								key={size}>
									{size}
							</option>
						))}
					</select>
				</section>
				<section className="bathtype">
					<span>Type of bath for your pet</span>
					<br/>
					<input 
            id="standard" 
            type="radio" 
            name="bath" 
            value="standard"
            checked={selectedBath === 'standard'}
            onChange={e => setSelectedBath(e.target.value)} 
            />
					<label htmlFor="standard">Standard</label>
					<input 
            id="premium" 
            type="radio" 
            name="bath" 
            value="premium"
            checked={selectedBath === 'premium'}
            onChange={e => setSelectedBath(e.target.value)} 
            />
					<label htmlFor="premium">Premium</label>
          <input 
            id="deluxe" 
            type="radio" 
            name="bath" 
            value="deluxe"
            checked={selectedBath === 'deluxe'}
            onChange={e => setSelectedBath(e.target.value)} 
            />
					<label htmlFor="premium">DeLuxe</label>
				</section>
				<section className="extras">
					<span>Make your pet even prettier</span>
					<br/>
					<input 
            type="checkbox" 
            name="extras" 
            value="ear"
            onChange={handleCheck}
            />
					<label htmlFor="ear">Ear cleaning</label>
					<input 
            type="checkbox" 
            name="extras" 
            value="pedicure"
            onChange={handleCheck}
            />
					<label htmlFor="pedicure">Pedicure</label>
					<input 
            type="checkbox" 
            name="extras" 
            value="haircut"
            onChange={handleCheck}
            />
					<label htmlFor="haircut">Haircut</label>
				</section>
				<section className="comments">
					<label>Does your pet have any peculiarities? Let us know!</label>
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
				</section>
				<button type="submit" value="send">Send</button>
			</form>
		</div>
	)
}

export default Form;