function LoadQuestions() //version specific 
{
	ClearQuestions();
	loadJSONQuestions();
//	addjsondb();
 //   if(QuestionViewModel.chkHiraganaNumbers()) {addNumbers();}
 
	
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

function MapQuestions()
{
}

function addQuestionJSON(json)
{
	 var question=
  {
    japanese: json.japanese,
      romanji: json.romanji,
    english: json.english,
    category: json.category
  };
  
	QuestionViewModel.questions.push(question);
}