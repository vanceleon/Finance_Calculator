import React from "react";

class FutureValue extends React.Component {
  constructor() {
    super();
    this.state = {
      pv: null,
      int: null,
      years: null
    };
  }

  render() {
    return (
      <form>
        <h1>Calculator:</h1>
        <input
          className="present-value"
          name="presentValue"
          type="number"
          placeholder="Present Value"
          value="pv"
        />
      </form>
    );
  }
}

export default FutureValue;
