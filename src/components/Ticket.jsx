import React from 'react';

const Ticket = ({ userName, petName, selectedHour, day, month, size, bath }) => {
  return (
		<div className="ticketcontainer">
			<h2 className="appointmentreview">
				Hello {userName}! you can bring {petName} at {selectedHour} on {month} {day}
			</h2>
      <h2 className="appointmentdata">
        {petName} has a {size} size. You has selected a {bath} bath
      </h2>
		</div>
	)
}

export default Ticket