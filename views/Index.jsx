const React = require("react");

class Index extends React.Component {
  render() {
    const { flight } = this.props;

    return (
      <div>
        <h1> The Flight Page! </h1>
        <ul>
          {flight.map((flight, i) => {
            return (
              <li
                key={i}
              >{`${flight.airline} ${flight.flightNo} ${flight.departs}`}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
