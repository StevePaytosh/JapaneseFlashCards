function LoadQuestions() //version specific 
{
	ClearQuestions();
 
	for (let i = 0; i < preloadedQuestions.length; i++) 
	{
		var question = createQuestionModel(preloadedQuestions[i]);
		addQuestionJSON(question);
		addCategory(question);
	}
	
	EnableNextButton(QuestionViewModel.questions().length>0);
	UpdateQuestionCounter()
	
};

function ShouldGetSpecialQuestionType()
{
	return QuestionViewModel.chkRandomNumber();	
}

function GetSpecialQuestionType()
{
	 GetRandomQuestion(); //VSC
    while(QuestionViewModel.question === previousQuestion.japanese)
    {
     GetRandomQuestion(); //VSC
    }
}

function createQuestionModel(json)
{
	var question=
	{
	japanese: json.japanese,
	romanji: json.romanji,
	english: json.english,
	category: json.category
	};
	
	return question;
}

function addQuestionJSON(question)
{
  
	QuestionViewModel.questions.push(question);
	
}

function addCategory(question, isSelected = false)
{
	if(!checkIfCategoryExists(question.category) )
	{
		var category=
		{
			name: question.category,
			selected: isSelected
		};
		
		QuestionViewModel.Categories.push(category);
		
	}
}

function checkIfCategoryExists(categoryName) {
    var match = ko.utils.arrayFirst(QuestionViewModel.Categories(), function(item) {
        return item.name === categoryName;
    });
	
	return match !== undefined;
}