
$(document).ready(function(){
	var doc;
	ko.applyBindings(new QuestionViewModel() );     
	LoadQuestions();
	process();                  
});