var QuestionViewModel = function()
{
	QuestionViewModel.answer = ko.observable('');
	QuestionViewModel.conjugate = ko.observable('');
	QuestionViewModel.question = ko.observable('');
	QuestionViewModel.category = ko.observable('');
	QuestionViewModel.State = ko.observable('');
	QuestionViewModel.QuestionCounter = ko.observable(0);
	QuestionViewModel.DisplayQuestionCounter = ko.observable(false);
	QuestionViewModel.ShowCenterButtons = ko.observable(false);
	QuestionViewModel.ShowNextButton = ko.observable(false);
	QuestionViewModel.ShowReloadButton = ko.observable(false);
	QuestionViewModel.DisplayQuestion = ko.observable(true);
	QuestionViewModel.DisplayAnswer = ko.observable(false);
	QuestionViewModel.chkCategory = ko.observable(true);
	QuestionViewModel.DisplayConjugate = false;
	QuestionViewModel.DisplayConjugateQ = ko.observable(false);
	QuestionViewModel.DisplayConjugateA = ko.observable(false);
	QuestionViewModel.DisplayCategory = ko.observable(true);
	QuestionViewModel.DisplayCard = ko.observable(true);
	QuestionViewModel.questions = ko.observableArray();
	QuestionViewModel.removedQuestions = ko.observableArray();
	QuestionViewModel.externalQuestions = ko.observableArray();
	
	QuestionViewModel.EnableNextButton = ko.observable(false);
	QuestionViewModel.EnableFileLoadedQuestions = ko.observable(false);
	QuestionViewModel.chkConjugate = ko.observable(false);
	QuestionViewModel.chkQuestionCounter = ko.observable(false);
	QuestionViewModel.chkRepeatQuestions = ko.observable(true);
	QuestionViewModel.chkJapaneseToEnglish = ko.observable(true);
	QuestionViewModel.chkRandomNumber = ko.observable(false);
	QuestionViewModel.chkFileLoadedQuestions = ko.observable(true);

	QuestionViewModel.savedOptions = [];
	
};

function SetInitializationView()
{
	QuestionViewModel.category("Welcome");
	QuestionViewModel.question("Load a File To Begin");
	QuestionViewModel.answer("");
	QuestionViewModel.conjugate("");
	QuestionViewModel.EnableNextButton(false);
	QuestionViewModel.EnableFileLoadedQuestions(false);
}

function SetFileLoadedView()
{
	QuestionViewModel.category("File Loaded Successfully");
	QuestionViewModel.question("Hit Next To Continue");
	QuestionViewModel.answer("");
	QuestionViewModel.conjugate("");
	QuestionViewModel.EnableNextButton(true);
	UpdateQuestionCounter();
}

function AllowFileLoad()
{
	QuestionViewModel.EnableFileLoadedQuestions(true);
}

function DisableFileLoad()
{
	QuestionViewModel.EnableFileLoadedQuestions(false);
}

function SetOutOfQuestionsView()
{
	QuestionViewModel.category("Out of Questions")
	QuestionViewModel.answer("");
	QuestionViewModel.question("");
}