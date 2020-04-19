import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

class Survey extends React.Component {
	constructor() {
		super();
		this.state = {
			major: '',
			year: '',
			Ans1: '',
			Ans2: '',
			Ans3: '',
			Ans4: '',
			Ans5: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.clearFields = this.clearFields.bind(this);

	}

	//function IsNum (string) {
		//var value = parseInt(string);
		//return (value > 0);
	//}
	//function CheckInput() {
		//var ErrorMessage = '';
		//var NumErrors = 0;
		//var Major = document.UserInfo.Major;
		//if (IsNum(Major.value)) {
			//NumErrors++;
			//ErrorMessage += '\n' + NumErrors + ') Major should be a valid name, not a number. For example: CS, SWE, IT, etc.';
		//}
		//if (Major.value == '')
        //{
			//NumErrors++;
			//ErrorMessage += '\n' + NumErrors + ') Missing major. ';
		//}
		//var Year = document.UserInfo.Year;
		//if (!IsNum(Year.value)) {
			//NumErrors++;
			//ErrorMessage += '\n' + NumErrors + ') Year should be an integer (ex: 1 = Freshman, 2 = Sophomore, etc.). ';
		//}
		//if (Year.value == '')
        //{
			//NumErrors++;
			//ErrorMessage += '\n' + NumErrors + ') Missing year.  ';
		//}
		//if (NumErrors > 0)
		//{

		//	return (false);
		//}
		//else
		//{
			//alert('Your responses have been saved. Thank you for your feedback!');
			//return (true);
		//}
	//}

	handleSubmit(event) {
		if (this.state.major % 1 === 0 & this.state.year % 1 !== 0) {
			alert("Please correct these errors:\nMajor should be a valid name, not a number. For example: CS, SWE, IT, etc.\nYear should be an integer (ex: 1 = Freshman, 2 = Sophomore, etc.");
			event.preventDefault();
		}
		else if (this.state.major % 1 === 0){
			alert("Please correct this error: Major should be a valid name, not a number. For example: CS, SWE, IT, etc.");
			event.preventDefault();
		}
		else if (this.state.year % 1 !== 0) {
			alert("Please correct this error: Year should be an integer (ex: 1 = Freshman, 2 = Sophomore, etc.");
			event.preventDefault();
		}
		else {
			alert('Your responses have been saved. Thank you for your feedback!');
		}
	}

	handleChange(event) {
		if (event.target.name === "Major") {
			this.setState({
				major: event.target.value
			});
		}
		if (event.target.name === "Year") {
			this.setState({
				year: event.target.value
			});
		}
		if (event.target.name === "Q1") {
			this.setState({
				Ans1: event.target.value
			});
		}
		if (event.target.name === "Q2") {
			this.setState({
				Ans2: event.target.value
			});
		}
		if (event.target.name === "Q3") {
			this.setState({
				Ans3: event.target.value
			});
		}
		if (event.target.name === "Q4") {
			this.setState({
				Ans4: event.target.value
			});
		}
		if (event.target.name === "Q5") {
			this.setState({
				Ans5: event.target.value
			});
		}
	}


	 clearFields(event) {
		 //clear input fields
		 document.getElementById("Major").value = "";
		 document.getElementById("Year").value = "";
		 document.getElementById("textArea").value = "";

	 }

	render() {
		return(

		<form id="bookstorerating" method="post" action="https://swe432vkeshava.herokuapp.com/asst7" name="UserInfo" onSubmit={this.handleSubmit}>
			<div>
				<label htmlFor="Major">Major: </label>
				<input type="text" id="Major" name="Major" required onChange={this.handleChange}/>
				<br/>
				<br/>
				<label htmlFor="Year"> Year:     </label>
				<input type="text" id="Year" name="Year" required onChange={this.handleChange}/>
				<br/>
				<br/>
				<div className="radio-button-div">
					<label> 1. How easy was it for you to find your textbooks in the store? </label>
					<br/>
					<input type="radio" name = "Q1" id="Very Easy" value="Very Easy" onChange={this.handleChange}/>
					<label htmlFor="Very Easy">Very Easy</label>
					<br/>
					<input type="radio" name = "Q1" id="Easy" value="Easy" onChange={this.handleChange}/>
					<label htmlFor="Easy">Easy</label>
					<br/>
					<input type="radio" name = "Q1" id="Hard" value="Hard" onChange={this.handleChange}/>
					<label htmlFor="Hard">Hard</label>
					<br/>
					<input type="radio" name = "Q1" id="Very Hard" value="Very Hard" onChange={this.handleChange}/>
					<label htmlFor="Very Hard">Very Hard</label>
					<br/>
					<br/>
					<label> 2. How many times were the textbooks you needed (digital or hard copy) out of stock? </label>
					<br/>
					<input type="radio" name="Q2" id="Never" value="Never" onChange={this.handleChange}/>
					<label htmlFor="Never">Never</label>
					<br/>
					<input type="radio" name="Q2" id="1-3 times" value="1-3 times" onChange={this.handleChange}/>
					<label htmlFor="1-3 times">1-3 times</label>
					<br/>
					<input type="radio" name="Q2" id="4-6 times" value="4-6 times" onChange={this.handleChange}/>
					<label htmlFor="4-6 times">4-6 times</label>
					<br/>
					<input type="radio" name="Q2" id="7 or more times" value="7 or more times" onChange={this.handleChange}/>
					<label htmlFor="7 or more times">7 or more times</label>
					<br/>
					<br/>

					<label> 3. How reasonable do you think the textbook prices were compared to other sellers? </label>
					<br/>
					<input type="radio" name="Q3" id="Very Reasonable" value="Very Reasonable" onChange={this.handleChange}/>
					<label htmlFor="Very Reasonable">Very Reasonable</label>
					<br/>
					<input type="radio" name="Q3" id="Reasonable" value="Reasonable" onChange={this.handleChange}/>
					<label htmlFor="Reasonable">Reasonable</label>
					<br/>
					<input type="radio" name="Q3" id="Expensive" value="Expensive" onChange={this.handleChange}/>
					<label htmlFor="Expensive">Expensive</label>
					<br/>
					<input type="radio" name="Q3" id="Very Expensive" value="Very Expensive" onChange={this.handleChange}/>
					<label htmlFor="Very Expensive">Very Expensive</label>
					<br/>
			        <br/>
					<label> 4. If given the option, do you prefer digital or hard copy textbooks? </label>
					<br/>
					<input type="radio" name="Q4" id="Yes" value="Yes" onChange={this.handleChange}/>
					<label htmlFor="Yes">Yes</label>
					<br/>
					<input type="radio" name="Q4" id="No" value="No" onChange={this.handleChange}/>
					<label htmlFor="No">No, I prefer using hard copies for these classes</label>
					<br/>
					<input type="radio" name="Q4" id="Depends" value="Depends" onChange={this.handleChange}/>
					<label htmlFor="Depends">Depends on the class</label>
					<br/>
			        <br/>
					<label> 5. How accurate are the recommended and required textbook lists that the bookstore provides online? </label>
					<br/>
					<input type="radio" name="Q5" id="Very Accurate" value="Very Accurate" onChange={this.handleChange}/>
					<label htmlFor="Very Accurate">Very Accurate, used all textbooks frequently</label>
					<br/>
					<input type="radio" name="Q5" id="Accurate" value="Accurate" onChange={this.handleChange}/>
					<label htmlFor="Accurate">Somewhat Accurate, occasionally used some textbooks</label>
					<br/>
					<input type="radio" name="Q5" id="Not Accurate" value="Not Accurate" onChange={this.handleChange}/>
					<label htmlFor="Not Accurate">Not Accurate, never used any textbooks</label>
					<br/>
					<br/>
				</div>
				<div>
					<p> Additional Comments, Suggestions, and Concerns:</p>
					<textarea id="textArea" name="Comments" rows="6" cols="40"></textarea>
				</div>
			<button type="submit" style="width: 10%; height: 4%; font-size: 13px;">Submit Answers</button>
			<br/>
			<button type="clear" style="width: 10%; height: 4%; font-size: 13px;" onClick={this.clearFields}>Clear All Answers</button>
			</div>
		</form>

	);
	}
}
ReactDOM.render(
    <Survey />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
