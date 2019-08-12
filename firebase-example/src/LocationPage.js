import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Dropdown from './Dropdown';
import onClickOutside from "react-onclickoutside";

class LocationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        {
          id: 0,
          title: 'San Francisco',
          selected: false,
          key: 'location'
        },
        {
          id: 1,
          title: 'Oakland',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'Berkeley',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Alameda',
          selected: false,
          key: 'location'
        },
      ],
      selectedId: 0
    };
  }

  resetThenSet = (id, key) => {
    this.setState({
      selectedId: id
    })
  }

  handleClickNext() {
    let selectedLocation = this.state.locations[this.state.selectedId]

    this.props.setSelectedLocation(selectedLocation);
    this.props.handleClickNext();
  }

  render() {
    return (
      <div className="App">
        <h1>Please select your location</h1>
        <div className="wrapper">
          <Dropdown
            title="Select location"
            list={this.state.locations}
            resetThenSet={this.resetThenSet}
          />
        </div>
        <input type="submit" value="Next" onClick={this.handleClickNext.bind(this)}/>
      </div>
    );
  }
}

export default LocationPage;
