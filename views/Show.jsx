const React = require("react");

class Show extends React.Component {
  render() {
    const { flight } = this.props;

    return (
      <div>
        <h1>Flight Details</h1>
        <p>Airline: {flight.airline}</p>
        <p>Flight Number: {flight.flightNo}</p>
        <p>Departure: {flight.departs.toLocaleString()}</p>
        <p>Airport: {flight.airport}</p>

        <h2>Destinations:</h2>
        <ul>
          {flight.destination.map((destination, i) => (
            <li key={i}>
              Airport: {destination.airport}, Arrival:{" "}
              {destination.arrival.toLocaleString()}
            </li>
          ))}
        </ul>
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
          Airport:{" "}
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL </option>
            <option value="LAX">LAX </option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          Arrival: <input type="datetime-local" name="arrival" /> <br />
          <input type="submit" value="Submit Updated Flight" />
        </form>

        <a href="/flights">Back to Flight List</a>
      </div>
    );
  }
}

module.exports = Show;
