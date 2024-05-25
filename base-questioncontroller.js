function RemoveQuestion(q)
{
	QuestionViewModel.questions.remove(q);
	QuestionViewModel.removedQuestions.push(q);
	QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
}

function NextQuestion()
{
  
  var previousQuestion = 
      {
        	japanese: QuestionViewModel.japanese(),
          romanji: QuestionViewModel.romanji(),
          english: QuestionViewModel.english(),
          category: QuestionViewModel.category()
      };
  
	QuestionViewModel.japanese('');
  QuestionViewModel.romanji('');
	QuestionViewModel.english('');
  QuestionViewModel.category('');
	
	if(QuestionViewModel.questions().length > 0)
	{
		GetRandomQuestion();
		while(QuestionViewModel.japanese === previousQuestion.japanese)
		{
			GetRandomQuestion();
		}
	}
	else
	{
		QuestionViewModel.State('OutOfQuestions');
		QuestionViewModel.ShowReloadButton(true);
		QuestionViewModel.ShowNextButton(false);
		return;
	}

	QuestionViewModel.DisplayEnglish(false);

	if(!QuestionViewModel.ShowNextButton())
	{
		QuestionViewModel.ShowNextButton(true);
	}
	
	QuestionViewModel.State('QuestionLoaded');
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

function ResetQuestions()
{
  LoadQuestions();
  MapQuestions();
}

function addQuestion(j,r,e,category='')
{
  var question=
  {
    japanese: j,
      romanji: r,
    english: e,
    category: category
  };
  
  QuestionViewModel.questions.push(question);
}

function ReloadQuestions()
{
	QuestionViewModel.ShowReloadButton(true);
	LoadQuestions();
	QuestionViewModel.removedQuestions = ko.observableArray(); QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
	QuestionViewModel.State('FileLoaded');
	QuestionViewModel.japanese('Questions Reloaded');
	QuestionViewModel.ShowNextButton(true);
	QuestionViewModel.ShowReloadButton(false);
}


function GetRandomQuestion()
{
  if(ShouldGetSpecialQuestionType()) 
	{
	  GetSpecialQuestionType();
	} 
  else
    {
		var length=QuestionViewModel.questions().length;
		var q = QuestionViewModel.questions()[Math.floor( Math.random()*length ) ];
		QuestionViewModel.japanese(q.japanese);
  
		if(typeof q.romanji==='undefined' || q.romanji == '')
		{
			QuestionViewModel.romanji('');
		}
		else
		{
			QuestionViewModel.romanji(' ('+q.romanji+')');
		}
   
		QuestionViewModel.english(q.english);
		QuestionViewModel.category(q.category);
  
		if(!QuestionViewModel.chkRepeatQuestions())
		{
			RemoveQuestion(q);
		}	
    }
}

function getRandomValue(length)
{
	return Math.floor( Math.random()*length ); 
}
