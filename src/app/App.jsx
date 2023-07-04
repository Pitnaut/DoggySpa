import React, { useState } from 'react';
import '../stylesheets/App.css';
import Header from '../components/Header'
import Form from '../components/Form'
import Ticket from '../components/Ticket'
import { monthNames, toOrdinal, sizeReducer } from '../utilities/data'

function App() {

  const [userName, setUserName] = useState('');
  const [petName, setPetName] = useState('');
  const [hour, setHour] = useState('')
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [size, setSize] = useState('');
  const [bath, setBath] = useState('');

  const handleFormSubmit = formData => {
    
    const { selectedDate } = formData;
    const selectedDay = selectedDate.getDate();
    const selectedMonth = selectedDate.getMonth();
    const selectedSize = formData.selectedSize;


    setUserName(formData.userName);
    setPetName(formData.petName);
    setHour(formData.selectedHour);
    setDay(toOrdinal(selectedDay));
    setMonth(monthNames[selectedMonth]);
    setSize(sizeReducer(selectedSize))
    setBath(formData.selectedBath)
  };


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
      />
    </div>
  )
}

export default App
