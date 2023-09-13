const React = require("react");

class New extends React.Component {
  render() {
    const date = new Date();
    const futureDate = date.getDate() + 367;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-CA");
    return (
      <div>
        <h1>Add New Flight</h1>
        <form action="/flights" method="POST">
          Airline <input type="text" name="airline" />
          <br />
          Flight Number{" "}
          <input type="number" name="flightNo" min={10} max={9999} />
          <br />
          Departure{" "}
          <input
            type="datetime-locale"
            name="departs"
            defaultValue={defaultValue}
          />
          <br />
          <input type="submit" value="Submit New Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;
