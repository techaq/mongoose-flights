const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1> New Flight Page </h1>
        <form action="/flights" method="POST">
          Airline: <input type="text" name="airline" /> <br />
          FlightNo: <input type="number" name="flightNo" /> <br />
          Departs: <input type="datetime-local" name="departs" /> <br />
          <input type="submit" value="Create Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;
