import React, { useState } from 'react';
import '../stylesheets/App.css';
import Header from '../components/Header'
import Form from '../components/Form'
import Ticket from '../components/Ticket'

function App() {

  const [userData, setUserData] = useState({});

  const handleFormSubmit = formData => {

    setUserData({
      userName: formData.userName,
      petName: formData.petName,
      selectedSize: formData.selectedSize,
      selectedBath: formData.selectedBath,
      selectedExtra: formData.selectedExtra,
      comment: formData.comment,
      selectedDate: formData.selectedDate,
      selectedHour: formData.selectedHour
    })
  };

  console.log(userData)



  return (
    <div className='main'>
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <Ticket
      userName={userData.userName}
      petName={userData.petName}
      selectedHour={userData.selectedHour}
      selectedDate={userData.selectedDate.toDateString()}
      />
    </div>
  )
}

export default App
