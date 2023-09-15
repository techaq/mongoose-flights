// NewDestination.jsx
const React = require("react");

class New extends React.Component {
  render() {
    const { flight } = this.props;

    return (
      <div>
        <h2>Add Destination to Flight </h2>
        <form action={`/flights/${flight._id}/destinations`} method="POST">
          Airport:
          <select name="airport">
            <option value="AUS">
              Austin-Bergstrom International Airport (AUS)
            </option>
            <option value="DAL">Dallas Love Field Airport (DAL)</option>
            <option value="LAX">Los Angeles International Airport (LAX)</option>
            <option value="SAN">San Diego International Airport (SAN)</option>
            <option value="SEA">
              Seattle-Tacoma International Airport (SEA)
            </option>
          </select>
          <br />
          Arrival Date and Time: <input type="datetime-local" name="arrival" />
          <br />
          <input type="submit" value="Add Destination" />
        </form>
        <a href={`/flights/${flight._id}`}>Back to Flight Details</a>
      </div>
    );
  }
}

module.exports = New;
