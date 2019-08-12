import React from "react";
import CalendarPage from "./CalendarPage";


export default class DocItem extends React.Component {
  constructor(props) {
    super(props);
  }  	 

  render() {
    var apps = this.props.Appointments.map((app) => <AppItem id={app["id"]}
      day={app["Day"]}
      time={app["Time"]}
      avail={app["Available?"]}
      clinic={this.props.id}
      handleListItemClick={this.props.handleListItemClick} />);

    return (
      <div className = "grid-container">
        <div className = "grid-item-doc">
          <img src={this.props.Photo}/>
          <br />
          Name: {this.props.Name}
          <br />
          Position: {this.props.Specialty}
          <br />
          Address: {this.props.Address}
        </div>
          {apps}
      </div>
    );
  }
}

class AppItem extends React.Component {
  constructor(props) {
    super(props);
  }

  clickEvent() {
    if (this.props.avail === true) {
      var clinic_id = this.props.clinic;
      var app_id = this.props.id;
      this.props.handleListItemClick(clinic_id, app_id);
    }
  }

  findAvailability() {
    if (this.props.avail === true) {
      return "AVAILABLE";
    } else if (this.props.avail === 'booked') {
      return "BOOKED";
    } else if (this.props.avail === false) {
      return "UNAVAILABLE";
    }
  }

  resolveClassName() {
    if (this.props.avail === true) {
      return "grid-item-app";
    } else if (this.props.avail === 'booked') {
      return "grid-item-app-selected";
    } else if (this.props.avail === false) {
      return "grid-item-app-unselected";
    }
  }

  render() {
    return (
      <div className = {this.resolveClassName()} onClick= {() => this.clickEvent()}>
        {this.props.time} - {this.findAvailability()}
      </div>
    );
  }
}


{/*
 render() {
    return (
      <div>
        <div id="bookingContainer">
          <div id="pageHeading">
            Please select a doctor and a time:
          </div>
          <div id="daysList">
            Mon, Nov 19
            Tues, Nov 20
            Wed, Nov 21
          </div>
          <div id="doctorCard">
            <div id="docPhoto">
              [doc1Photo]
            </div>
            <div id="docDetails">
              Dr. Hurtsalot
              123 Fake St.
            </div>
            <div id="calendarContainer">
              <div id="calendarRow">
                <div id="calendarColumn">
                  10:00am
                </div>
                <div id="calendarColumn">
                  11:00am
                </div>
                <div id="calendarColumn">
                  12:00am
                </div>      
              </div>
              <div id="calendarRow">
                <div id="calendarColumn">
                  -
                </div>
                <div id="calendarColumn">
                  4:00pm
                </div>
                <div id="calendarColumn">
                  5:00pm
                </div>      
              </div>
              <div id="calendarRow">
                <div id="calendarColumn">
                  -
                </div>
                <div id="calendarColumn">
                  11:00am
                </div>
                <div id="calendarColumn">
                  -
                </div>
              </div>
            </div>
          </div>
          <div id="doctorCard">
            Dr. Ouchberg
          </div>
          <div id="doctorCard">
            Dr. Painsworth
          </div>
        </div>
          <input type="submit" value="Next" onClick={this.props.handleClickNext} />
      </div>
    );
  }
*/}