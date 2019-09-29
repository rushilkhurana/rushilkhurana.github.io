class Question {
	
	constructor(text, choices, answer){
		this.text = text;
		this.choices = choices;
		this.answer = answer;
	}

	isCorrectAnswer(choice){
		return this.answer === choice;
	}
}


// create questions here
var questions = [
	new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
	new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
	new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
	new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
	new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
];

function populate() {

		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
 
		// show options
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}	 
};


class Quiz{

	constructor (questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
	}
	
	getQuestionIndex(){

		return this.questions[this.questionIndex];

	}

	guess(answer) {
		if(this.getQuestionIndex().isCorrectAnswer(answer)) {
			this.score++;
		}

		this.questionIndex++;
	}

}

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};


var quiz = new Quiz(questions);
populate();