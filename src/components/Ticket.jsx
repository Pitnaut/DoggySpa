import React from 'react';

const Ticket = ({ userName, petName, selectedHour, day, month, size, bath, extras, sizePrice, bathPrice, extraPrice, totalPrice }) => {
  return (
		<div className="ticketcontainer">
			<h2 className="appointmentreview">
				Hello {userName}! you can bring {petName} at {selectedHour} on {month} {day}
			</h2>
      <h2 className="appointmentdata">
        {petName} has a {size} size. You has selected a {bath} bath with the following extras: {extras}
      </h2>
      <h2 className="detail">
        {size} size: {sizePrice}€
        <br/>
        {bath} bath: {bathPrice}€
        <br/>
        {extras}: {extraPrice}€
      </h2>
      <h2 className="totalprice">
        Total price will be {totalPrice}€
      </h2>
		</div>
	)
}

export default Ticket