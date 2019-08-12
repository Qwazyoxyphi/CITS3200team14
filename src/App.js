import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import LocationPage from "./LocationPage";
import CalendarPage from "./CalendarPage";
import ConfirmationPage from "./ConfirmationPage";
import MailgunMailer from "./emailpage";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'landing',
      selectedApp: ""
    };
    this.changeToEmailPage = this.changeToEmailPage.bind(this);
  }

  changeToLocationPage() {
    this.setState({
      currentPage: 'location',
    });
  }

  changeToCalendarPage() {
    this.setState({
      currentPage: 'calendar',
    });
  }
 changeToEmailPage(selectedApp) {
  // Leaves the calendar page but saves the appointment information
    this.setState({
      currentPage: 'emailpage',
      selectedApp: selectedApp
    });
  }

  changeToConfirmationPage() {
    this.setState({
      currentPage: 'confirmation'
    });
  }

  changeToLandingPage() {
    this.setState({
      currentPage: 'landing'
    });
  }

  setSelectedLocation(selectedLocation) {
    this.setState({
      selectedLocation: selectedLocation
    })
  }

  render() {

    if (this.state.currentPage === 'landing') {
      return <LandingPage handleClickNext={this.changeToLocationPage.bind(this)} />
    } else if (this.state.currentPage === 'location') {
      return <LocationPage setSelectedLocation={this.setSelectedLocation.bind(this)} handleClickNext={this.changeToCalendarPage.bind(this)} />
    } else if (this.state.currentPage === 'calendar') {
      return <CalendarPage selectedLocation={this.state.selectedLocation} handleClickNext={this.changeToEmailPage} />
    } else if (this.state.currentPage === 'emailpage') {
      return <MailgunMailer handleClickNext={this.changeToConfirmationPage.bind(this)} />
    }  else if (this.state.currentPage === 'confirmation') {
      return <ConfirmationPage app={this.state.selectedApp} handleClickNext={this.changeToLandingPage.bind(this)} />
    }
  }
}
