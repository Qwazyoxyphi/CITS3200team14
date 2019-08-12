import React from "react";
import DocItem from "./DocItem";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';


export default class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      error: false,
      history: []
    };
    this.handleListItemClick=this.handleListItemClick.bind(this);
  }

  componentDidMount() {
    const clinicRef = firebase.database().ref(this.props.selectedLocation.title);
    clinicRef.on('value', (snapshot) => {
      let clinics = snapshot.val();
      let newHistory = [];

      for(let clinic in clinics) {
        newHistory.push({
          id: clinic,
          Name: clinics[clinic].Name,
          Photo: clinics[clinic].Photo,
          Specialty: clinics[clinic].Specialty,
          Address: clinics[clinic].Address,
          Appointments: clinics[clinic].Appointments
        })
      }

      // Gives each appointment a unique id/index
      for (var i = 0; i < newHistory.length; i++) {
        var clinic_num = newHistory[i];
        for (var j = 0; j < clinic_num.Appointments.length; j++) {
          clinic_num.Appointments[j]["id"] = j;
        }
      }

      // Filter by day of the week
      for (var i = 0; i < newHistory.length; i++) {
        newHistory[i].Appointments = newHistory[i].Appointments.filter((app) => app["Day"] == "Friday");
      }

      this.setState({
        history: newHistory
      }); 
    })
  }

  handleListItemClick(clinic_id, appointment_id) {
    var booked = this.state.history;
    // If there was a previously booked appointment, set it back to available
    if (this.state.selected) {
      var selected_app = this.state.selected;
      var prev_cid = selected_app.clinic_id;
      var prev_app_id = selected_app.app_id;

      for (var i = 0; i < booked[prev_cid].Appointments.length; i++) {
        if (booked[prev_cid].Appointments[i].id == prev_app_id) {
          booked[prev_cid].Appointments[i]["Available?"] = true;
        }
      }
      //const prev_app_query = this.props.selectedLocation.title + '/' + selected_app.clinic_id + '/Appointments/' + selected_app.app_id + '/Available?';
      //const clinicRef1 = firebase.database().ref(prev_app_query);
      //clinicRef1.set(true);
    }

    // Set the selected appointment (locally) to 'booked'
    for (var j = 0; j < booked[clinic_id].Appointments.length; j++) {
      if (booked[clinic_id].Appointments[j].id == appointment_id) {
        booked[clinic_id].Appointments[j]["Available?"] = "booked";
      }
    }

    //const new_app_query = this.props.selectedLocation.title + '/' + clinic_id + '/Appointments/' + appointment_id + '/Available?';
    //const clinicRef2 = firebase.database().ref(new_app_query);
    //clinicRef2.set('booked');

    // Save the details of new selected appointment in state
    this.setState({
      selected: {clinic_id: clinic_id, app_id: appointment_id},
      history: booked
    });
  }

  moveToNextPage() {
    // First check if the user has selected an appointment
    if (this.state.selected) {
      // Make sure to set the selected appointment to Unavailable before moving on
      var selected_app = this.state.selected;
      const prev_app_query = this.props.selectedLocation.title + '/' + selected_app.clinic_id + '/Appointments/' + selected_app.app_id + '/Available?';
      const clinicRef1 = firebase.database().ref(prev_app_query);
      clinicRef1.set(false);

      // Query the db to get doctor name and time for the selected appointment
      let obj = ""
      const clinicRef2 = firebase.database().ref(this.props.selectedLocation.title + '/' + selected_app.clinic_id);
      clinicRef2.on('value', (snapshot) => {
        let clinics = snapshot.val();
        obj = clinics;
      });

      // Using the appointment id, finds the name of doctor and time of the appointment
      var selected_app_info = {"Name" : obj["Name"], "Time" : obj["Appointments"][selected_app.app_id]["Time"]};
      this.props.handleClickNext(selected_app_info);
    } else {
      // Display an error message saying that the user needs to select an appointment
      this.setState({
        error: true
      });
      alert("Please select an appointment.");
    }
  }

  render() {
    const clinicItems = this.state.history.map((clinic) => <DocItem key={clinic.id}
      id={clinic.id}
      Name={clinic.Name}
      Specialty={clinic.Specialty}
      Address={clinic.Address}
      Appointments={clinic.Appointments}
      handleListItemClick={this.handleListItemClick}
      Photo = {clinic.Photo} />
    );

    return (
      <div>
      <h1> Available appointments </h1>
          <div>
            {clinicItems}
          </div>
      <input type="submit" value="Next" onClick={() => this.moveToNextPage()} />
      </div>
    );
  }
}

