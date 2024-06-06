function LoadQuestions()
{
	
	
}

function GetSpecialQuestionType(){}

function ShouldGetSpecialQuestionType()
{
		return false;
}

function MapQuestions()
{
  if(QuestionViewModel.chkFileLoadedQuestions())
    {
      QuestionViewModel.questions = ko.observableArray();
      LoadQuestions();
 
     
    for(let i=0; i<QuestionViewModel.externalQuestions().length; i++)
    {
      var question = QuestionViewModel.externalQuestions()[i];
        addQuestion(
          question["japanese"]
          ,question["romanji"]
          ,question["english"]
          ,question["category"]
        );
    }

   }
}