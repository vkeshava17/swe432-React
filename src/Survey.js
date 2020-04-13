import React, { useState, useEffect } from 'react';

export default function Survey(props) {
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
    return (
      <div>
				<label htmlFor="Major">Major:</label>
				<input type="text" id="Major" name="Major" className="input-box" required/>
				<label htmlFor="Year"> Year:</label>
				<input type="text" id="Year" name="Year" className="input-box" required/>
				<div className="radio-button-div">
					<label> 1. How easy was it for you to find your textbooks in the store? </label>
					<input type="radio" name = "Question1" id="Very Easy" value="Very Easy" required/>
					<label htmlFor="Very Easy">Very Easy</label>
					<input type="radio" name = "Question1" id="Easy" value="Easy" required/>
					<label htmlFor="Easy">Easy</label>
					<input type="radio" name = "Question1" id="Hard" value="Hard" required/>
					<label htmlFor="Hard">Hard</label>
					<input type="radio" name = "Question1" id="Very Hard" value="Very Hard" required/>
					<label htmlFor="Very Hard">Very Hard</label>
					<label> 2. How many times were the textbooks you needed (digital or hard copy) out of stock? </label>
					<input type="radio" name="Question2" id="Never" value="Never" required/>
					<label htmlFor="Never">Never</label>
					<input type="radio" name="Question2" id="1-3 times" value="1-3 times" required/>
					<label htmlFor="1-3 times">1-3 times</label>
					<input type="radio" name="Question2" id="4-6 times" value="4-6 times" required/>
					<label htmlFor="4-6 times">4-6 times</label>
					<input type="radio" name="Question2" id="7 or more times" value="7 or more times" required/>
					<label htmlFor="7 or more times">7 or more times</label>

					<label> 3. How reasonable do you think the textbook prices were compared to other sellers? </label>
					<input type="radio" name="Question3" id="Very Reasonable" value="Very Reasonable" required/>
					<label htmlFor="Very Reasonable">Very Reasonable</label>
					<input type="radio" name="Question3" id="Reasonable" value="Reasonable" required/>
					<label htmlFor="Reasonable">Reasonable</label>
					<input type="radio" name="Q3" id="Expensive" value="Expensive" required/>
					<label htmlFor="Expensive">Expensive</label>
					<input type="radio" name="Question3" id="Very Expensive" value="Very Expensive" required/>
					<label htmlFor="Very Expensive">Very Expensive</label>

					<label> 4. If given the option, do you prefer digital or hard copy textbooks? </label>
					<input type="radio" name="Question4" id="Yes" value="Yes" required/>
					<label htmlFor="Yes">Yes</label>
					<input type="radio" name="Question4" id="No" value="No" required/>
					<label htmlFor="No">No, I prefer using hard copies for these classes</label>
					<input type="radio" name="Question4" id="Depends" value="Depends" required/>
					<label htmlFor="Depends">Depends on the class</label>

					<label> 5. How accurate are the recommended and required textbook lists that the bookstore provides online? </label>
					<input type="radio" name="Question5" id="Very Accurate" value="Very Accurate" required/>
					<label htmlFor="Very Accurate">Very Accurate, used all textbooks frequently</label>
					<input type="radio" name="Question5" id="Accurate" value="Accurate" required/>
					<label htmlFor="Accurate">Somewhat Accurate, occasionally used some textbooks</label>
					<input type="radio" name="Question5" id="Not Accurate" value="Not Accurate" required/>
					<label htmlFor="Not Accurate">Not Accurate, never used any textbooks</label>
				</div>
				<div>
					<p> Additional Comments, Suggestions, and Concerns:</p>
					<textarea id="textArea" name="Comments" rows="6" cols="40"></textarea>
				</div>


    );
}
