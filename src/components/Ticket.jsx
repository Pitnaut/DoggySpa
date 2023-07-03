import React from 'react';

const Ticket = ({ userName, petName, selectedHour, selectedDate }) => {
  return (
		<div className="ticketcontainer">
			<h2 className="testprops">
				Hello {userName} you can bring {petName} at {selectedHour} on {selectedDate}
			</h2>
		</div>
	)
}

export default Ticket