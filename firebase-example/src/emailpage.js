import React from "react";
import ReactDOM from "react-dom";
import * as emailjs from 'emailjs-com';

export default class MailgunMailer extends React.Component {
  constructor(props) {
    super(props)
    this.data = {
      from: "DocConnectTeam",
      subject: 'Your Appointment Information',
      text: 'Testing some Mailgun awesomeness!'
    };
    this.state= {email: "", submitted: false};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
		
handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      email: value
    });
  }

  
   handleSubmit(event) {
    event.preventDefault(); 
    this.setState({ submitted: true })
	emailjs.send('mailgun','template_AIxKfZ3q', { to_name: this.state.email, from_name: this.data.from, message_html: this.data.text}, 'user_70EuXuPlos72ZbzXxrFz7')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});
	
       //alert(this.state.email + ' was submitted');
}

render() {

return(
    <div>
    <form onSubmit={this.handleSubmit} >
     Email:<input name="email" type="text" onChange={this.handleInputChange} value= {this.state.email}/>
     <input type="submit"/>
     </form>
     {this.state.submitted}
     <input type="submit" value="Next" onClick={this.props.handleClickNext} />
     </div>
	);

}

}


export{MailgunMailer}