
function checkBoxChangeOptions(category)
{
    checkBoxChangeDisplay();
}

function checkBoxChangeDisplay()
{
	 QuestionViewModel.DisplayCategory(QuestionViewModel.chkCategory());
	 SetRomanjiVisibility();
	 QuestionViewModel.DisplayQuestionCounter(!QuestionViewModel.chkRepeatQuestions());
}

function hasValue(chkValue)
{
	return QuestionViewModel.savedOptions.includes(chkValue,0);  
}

function clearOutput()
{
    QuestionViewModel.State('');
    QuestionViewModel.ShowCenterButtons(false);
    QuestionViewModel.DisplayCard(false);
    QuestionViewModel.DisplayQuestionCounter(false);
    QuestionViewModel.questions = ko.observableArray();
}

function AnswerQuestion()
{
	QuestionViewModel.DisplayEnglish(true);
	QuestionViewModel.State('Answered');
}

function GetNext()
{
	switch(QuestionViewModel.State())
	{
		case '': 
		QuestionViewModel.ShowCenterButtons(false);
		QuestionViewModel.DisplayCard(false);
		QuestionViewModel.DisplayQuestionCounter(false);
		break;
		case 'QuestionLoaded':
		AnswerQuestion();
		break;
		case 'Answered':
		case 'FileLoaded':
		NextQuestion();
		break;
		case 'OutOfQuestions':
		break;
		deafault: break;
	}
  
	QuestionViewModel.DisplayCategory(QuestionViewModel.chkCategory());
	SetRomanjiVisibility();
}

function SetRomanjiVisibility()
{
  if(QuestionViewModel.chkRomanji())
  {
     QuestionViewModel.DisplayRomanjiQ(QuestionViewModel.chkJapaneseToEnglish());
     QuestionViewModel.DisplayRomanjiA(!QuestionViewModel.chkJapaneseToEnglish());
  }
  else
  {
     QuestionViewModel.DisplayRomanjiQ(false);
     QuestionViewModel.DisplayRomanjiA(false);
  }
}

function process() //rename me please
{
	QuestionViewModel.ShowCenterButtons(true);
	QuestionViewModel.DisplayCard(true);
	QuestionViewModel.category("Ready: Hit Next to Start!");
	QuestionViewModel.DisplayJapanese(true);
	SetRomanjiVisibility();
	QuestionViewModel.DisplayEnglish(false);
	QuestionViewModel.DisplayCategory(true);
	QuestionViewModel.ShowNextButton (true);  
	QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
	QuestionViewModel.State('FileLoaded');
}




