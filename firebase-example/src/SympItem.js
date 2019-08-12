import React from "react";

export default class SympItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleListItemClick(this.props.id);
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.title}
      </li>
    );
  }
}
