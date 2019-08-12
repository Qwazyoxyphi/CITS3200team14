import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import SympItem from "./SympItem";


export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      history: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      title: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const diseaseRef = firebase.database().ref('symptoms');
    const disease = {
      title: this.state.title
    }

    diseaseRef.child(this.state.title).set(disease);
    this.setState({
      title: ""
    });
  }

  handleListItemClick(key) {
    const diseaseRef = firebase.database().ref(`/symptoms/${key}`);
    diseaseRef.remove();
  }

  componentDidMount() {
    const diseaseRef = firebase.database().ref('symptoms');
    diseaseRef.remove();
    diseaseRef.on('value', (snapshot) => {
      let diseases = snapshot.val();
      let newHistory = [];

      for(let disease in diseases) {
        newHistory.push({
          id: disease,
          title: diseases[disease].title
        });
      }

      this.setState({
        history: newHistory
      })
    })
  }

  moveToNextPage(){

    if (this.state.history.length === 0){
      alert("Please enter symptoms.");
    } else {
      
      this.props.handleClickNext();
    }

  }

  render() {
    const diseaseItems = this.state.history.map((disease) =>
    <SympItem key={disease.id} id={disease.id} title={disease.title}
      handleListItemClick={this.handleListItemClick}/>
    );

    return (
      <div>
      <h1> Welcome to DocConnect </h1>
        <form onSubmit={this.handleSubmit}>
          <br />
            Please enter your symptoms in the following text box and press Enter:
            <br>
            </br>
            <input className="text"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange} />
            <input type="submit" value="Enter" />
          </form>
          <div>
            <ul>
              {diseaseItems}
            </ul>
          </div>
          <input type="submit" value="Next" onClick={() => this.moveToNextPage()} />
      </div>
      );
    }
  }
