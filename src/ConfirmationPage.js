import React from "react";

export default class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
            Great - you're booked with {this.props.app["Name"]} on Friday at {this.props.app["Time"]}!
          </form>
          <input type="submit" value="Restart" onClick={this.props.handleClickNext} />
      </div>
    );
  }
}
