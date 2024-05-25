var QuestionViewModel = function()
{
	QuestionViewModel.english = ko.observable('');
	QuestionViewModel.romanji = ko.observable('');
	QuestionViewModel.japanese = ko.observable('');
	QuestionViewModel.category = ko.observable('');
	QuestionViewModel.State = ko.observable('');
	QuestionViewModel.QuestionCounter = ko.observable(0);
	QuestionViewModel.DisplayQuestionCounter = ko.observable(false);
	QuestionViewModel.ShowCenterButtons = ko.observable(false);
	QuestionViewModel.ShowNextButton = ko.observable(false);
	QuestionViewModel.ShowReloadButton = ko.observable(false);
	QuestionViewModel.DisplayJapanese = ko.observable(true);
	QuestionViewModel.DisplayEnglish = ko.observable(false);
	QuestionViewModel.chkCategory = ko.observable(true);
	QuestionViewModel.DisplayRomanji = false;
	QuestionViewModel.DisplayRomanjiQ = ko.observable(false);
	QuestionViewModel.DisplayRomanjiA = ko.observable(false);
	QuestionViewModel.DisplayCategory = ko.observable(true);
	QuestionViewModel.DisplayCard = ko.observable(true);
	QuestionViewModel.questions = ko.observableArray();
	QuestionViewModel.removedQuestions = ko.observableArray();
	QuestionViewModel.externalQuestions = ko.observableArray();

	QuestionViewModel.EnableFileLoadedQuestions = ko.observable(true);
	QuestionViewModel.chkRomanji = ko.observable(false);
	QuestionViewModel.chkQuestionCounter = ko.observable(false);
	QuestionViewModel.chkRepeatQuestions = ko.observable(true);
	QuestionViewModel.chkJapaneseToEnglish = ko.observable(true);
	QuestionViewModel.chkRandomNumber = ko.observable(false);
	QuestionViewModel.chkFileLoadedQuestions = ko.observable(true);

	QuestionViewModel.savedOptions = [];
	
};

