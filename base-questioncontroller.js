function RemoveQuestion(q)
{
	QuestionViewModel.questions.remove(q);
	QuestionViewModel.removedQuestions.push(q);
	//QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
	UpdateQuestionCounter();
}

function NextQuestion()
{
  
	var previousQuestion = {};
	
	if(QuestionViewModel.chkJapaneseToEnglish() )
	{
		previousQuestion =
		{
			japanese: QuestionViewModel.question(),
			romanji: QuestionViewModel.conjugate(),
			english: QuestionViewModel.answer(),
			category: QuestionViewModel.category()
		};
	}
	else
	{
		previousQuestion =
		{
			japanese: QuestionViewModel.answer(),
			romanji: QuestionViewModel.conjugate(),
			english: QuestionViewModel.question(),
			category: QuestionViewModel.category()
		};
	}
  
	QuestionViewModel.question('');
	QuestionViewModel.conjugate('');
	QuestionViewModel.answer('');
	QuestionViewModel.category('');
	
	if(QuestionViewModel.questions().length > 0)
	{
		GetRandomQuestion();
		if(QuestionViewModel.chkJapaneseToEnglish() )
		{
			while(QuestionViewModel.question === previousQuestion.japanese)
			{
				GetRandomQuestion();
			}
		}
		else
		{
			while(QuestionViewModel.question === previousQuestion.english)
			{
				GetRandomQuestion();
			}
			
		}
	}
	else
	{
		//QuestionViewModel.State('OutOfQuestions');
		SetOutOfQuestionState();
		//QuestionViewModel.ShowReloadButton(true);
		ShowReloadButton();
		SetOutOfQuestionsView();
		//QuestionViewModel.ShowNextButton(false);
		HideNextButton();
		return;
	}

	QuestionViewModel.DisplayAnswer(false); //UI control

	if(!QuestionViewModel.ShowNextButton())
	{
		QuestionViewModel.ShowNextButton(true);
	}
	
	//QuestionViewModel.State('QuestionLoaded');
	SetQuestionLoadedState();
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
	//QuestionViewModel.ShowReloadButton(true);
	LoadQuestions();
	ClearRemovedQuestions();
	//QuestionViewModel.removedQuestions = ko.observableArray(); 
	//QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
	UpdateQuestionCounter();
	//QuestionViewModel.State('FileLoaded');
	SetFileLoadedState();
	SetFileLoadedView();
	//QuestionViewModel.question('Questions Reloaded');
	//QuestionViewModel.ShowNextButton(true);
	//QuestionViewModel.ShowReloadButton(false);
	HideReloadButton();
	ShowNextButton();
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
		
		if(typeof q.romanji==='undefined' || q.romanji == '')
		{
			QuestionViewModel.conjugate('');
		}
		else
		{
			QuestionViewModel.conjugate(' ('+q.romanji+')');
		}
		
		if(QuestionViewModel.chkJapaneseToEnglish()) //this part might be UI
		{
			QuestionViewModel.answer(q.english);
			QuestionViewModel.question(q.japanese);
		}
		else
		{
			QuestionViewModel.answer(q.japanese);
			QuestionViewModel.question(q.english);
		}
		
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

function SetFileLoadedState()
{
	QuestionViewModel.State('FileLoaded');
}

function SetQuestionLoadedState()
{
	QuestionViewModel.State('QuestionLoaded');
}

function SetOutOfQuestionState()
{
	QuestionViewModel.State('OutOfQuestions');
}

function ClearQuestions()
{
	QuestionViewModel.questions = ko.observableArray();
}

function ClearRemovedQuestions()
{
	QuestionViewModel.removedQuestions = ko.observableArray(); 
}