import React from 'react';
import '../stylesheets/Ticket.css';

const Ticket = ({ userName, petName, selectedHour, day, month, size, bath, extras, sizePrice, bathPrice, extraPrice, totalPrice }) => {
  return (
		<div className="ticketcontainer">
			<h3 className="appointmentdate">
				Hello {userName}! you can bring {petName} at {selectedHour} on {month} {day}
			</h3>
      <div className="appointmentdata">
        <p>
          {petName} has a {size} size. You has selected a {bath} bath with the following extras: {extras.join(", ")}
        </p>
      </div>
      <div className="detail">
        <h3 className="sizedetail">
          {size} size: {sizePrice}€
        </h3>
        <h3 className="bathdetail">
          {bath} bath: {bathPrice}€
        </h3>
        <h3 className="extradetail">
          Extras: {extraPrice}€
        </h3>
        <h3 className="totalprice">
          Total price will be {totalPrice}€
        </h3>
      </div>
		</div>
	)
}

export default Ticket