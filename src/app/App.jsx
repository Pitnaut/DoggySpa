import React, { useState, useEffect } from 'react';
import '../stylesheets/App.css';
import Header from '../components/Header'
import Form from '../components/Form'
import Ticket from '../components/Ticket'
import { monthNames, toOrdinal, sizeReducer, calculateSizePrice, calculateBathPrice, calculateExtraPrice } from '../utilities/data'

function App() {


  const [userName, setUserName] = useState('');
  const [petName, setPetName] = useState('');
  const [hour, setHour] = useState('')
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [size, setSize] = useState('');
  const [bath, setBath] = useState('');
  const [extras, setExtras] = useState([]);
  const [sizePrice, setSizePrice] = useState(0);
  const [bathPrice, setBathPrice] = useState(0);
  const [extraPrice, setExtraPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFormSubmit = formData => {

    
    const { selectedDate, userName, petName, selectedHour, selectedSize, selectedBath, selectedExtra } = formData;
    const selectedDay = selectedDate.getDate();
    const selectedMonth = selectedDate.getMonth();
    

    setUserName(userName);
    setPetName(petName);
    setHour(selectedHour);
    setDay(toOrdinal(selectedDay));
    setMonth(monthNames[selectedMonth]);
    setSize(sizeReducer(selectedSize));
    setBath(selectedBath);
    setExtras(selectedExtra)
  };

  useEffect(() => {
    const sizePrice = calculateSizePrice(size);
    const bathPrice = calculateBathPrice(bath);
    const extraPrice = calculateExtraPrice(extras)
    setSizePrice(sizePrice);
    setBathPrice(bathPrice);
    setExtraPrice(extraPrice)
    setTotalPrice(sizePrice + bathPrice + extraPrice)
  }, [size, bath, extras]);



  return (
    <div className='main'>
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <Ticket
      userName={userName}
      petName={petName}
      selectedHour={hour}
      day={day}
      month={month}
      size={size}
      bath={bath}
      extras={extras}
      sizePrice={sizePrice}
      bathPrice={bathPrice}
      extraPrice={extraPrice}
      totalPrice={totalPrice}
      />
    </div>
  )
}

export default App
