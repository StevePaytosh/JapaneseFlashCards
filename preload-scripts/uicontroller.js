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
	QuestionViewModel.ShowNextButton = ko.observable(true);
	QuestionViewModel.ShowReloadButton = ko.observable(false);
	QuestionViewModel.DisplayQuestion = ko.observable(true);
	QuestionViewModel.DisplayAnswer = ko.observable(false);
	QuestionViewModel.DisplayConjugate = false;
	QuestionViewModel.DisplayConjugateQ = ko.observable(false);
	QuestionViewModel.DisplayConjugateA = ko.observable(false);
	QuestionViewModel.DisplayCard = ko.observable(true);
	QuestionViewModel.questions = ko.observableArray();
	QuestionViewModel.removedQuestions = ko.observableArray();
	QuestionViewModel.externalQuestions = ko.observableArray();
  
	QuestionViewModel.EnableHiragana = ko.observable(true);
	QuestionViewModel.EnableHiraganaDakuten = ko.observable(true);
	QuestionViewModel.EnableHiraganaHandakuten = ko.observable(true);
	QuestionViewModel.EnableKatakanaDakuten = ko.observable(true);
	QuestionViewModel.EnableKatakanaHandakuten = ko.observable(true);
	QuestionViewModel.EnableKatakana = ko.observable(true);
	QuestionViewModel.EnableKanji = ko.observable(true);
	QuestionViewModel.EnableHiraganaNumbers = ko.observable(true);
	QuestionViewModel.EnableWords = ko.observable(false);
	QuestionViewModel.EnablePhrases = ko.observable(false);
	QuestionViewModel.EnableNextButton = ko.observable(false);

	QuestionViewModel.chkHiragana = ko.observable(false);
	QuestionViewModel.chkHiraganaDakuten = ko.observable(false);
	QuestionViewModel.chkHiraganaHandakuten = ko.observable(false);
	QuestionViewModel.chkKatakana = ko.observable(false);
	QuestionViewModel.chkKatakanaDakuten = ko.observable(false);
	QuestionViewModel.chkKatakanaHandakuten = ko.observable(false);
	QuestionViewModel.chkKanji = ko.observable(false);
	QuestionViewModel.chkHiraganaNumbers = ko.observable(false);
	QuestionViewModel.chkWords = ko.observable(false);
	QuestionViewModel.chkPhrases = ko.observable(false);
	QuestionViewModel.chkCategory = ko.observable(true);
	QuestionViewModel.chkConjugate = ko.observable(false);
	QuestionViewModel.chkQuestionCounter = ko.observable(false);
	QuestionViewModel.chkRepeatQuestions = ko.observable(true);
	QuestionViewModel.chkJapaneseToEnglish = ko.observable(true);
	QuestionViewModel.chkRandomNumber = ko.observable(false);
	QuestionViewModel.chkFileLoadedQuestions = ko.observable(true);

	QuestionViewModel.savedOptions = [];
	
};

function setDefaultSettings()
{
	QuestionViewModel.EnableHiragana(true);
	QuestionViewModel.EnableHiraganaDakuten(true);
	QuestionViewModel.EnableHiraganaHandakuten(true);
	QuestionViewModel.EnableKatakana(true);
	QuestionViewModel.EnableKatakanaDakuten(true);
	QuestionViewModel.EnableKatakanaHandakuten(true);
	QuestionViewModel.EnableKanji(true);
	QuestionViewModel.EnableHiraganaNumbers(true);
	QuestionViewModel.EnableWords(true);
	QuestionViewModel.EnablePhrases(true);
	  
	QuestionViewModel.chkHiragana(false);
	QuestionViewModel.chkHiraganaDakuten(false);
	QuestionViewModel.chkHiraganaHandakuten(false);
	QuestionViewModel.chkKatakana(false);
	QuestionViewModel.chkKatakanaDakuten(false);
	QuestionViewModel.chkKatakanaHandakuten(false);
	QuestionViewModel.chkKanji(false);
	QuestionViewModel.chkHiraganaNumbers(false);
	QuestionViewModel.chkWords(false);
	QuestionViewModel.chkPhrases(false);

	QuestionViewModel.chkHiragana(true);
	QuestionViewModel.chkiraganaNumbers(true);
}


function checkBoxChangePreloadedQuestion()
{
    var currentQuestion = 
      {
        japanese: QuestionViewModel.question(),
        english: QuestionViewModel.answer(),
        romanji: QuestionViewModel.conjugate(),
        category: QuestionViewModel.category(),
        showAnswer: QuestionViewModel.DisplayAnswer(),
        questionState: QuestionViewModel.State()
      };
    
	//MapQuestions();  //VSC  
	LoadQuestions();

    QuestionViewModel.question(currentQuestion.japanese);
    QuestionViewModel.answer(currentQuestion.english);
    QuestionViewModel.conjugate(currentQuestion.romanji);
    QuestionViewModel.category(currentQuestion.category);
    QuestionViewModel.DisplayAnswer(currentQuestion.showAnswer);
    QuestionViewModel.State(currentQuestion.questionState);
  
    checkBoxChangeDisplay();
    
}

function toggleRandomNumber()
{
    if(QuestionViewModel.chkRandomNumber())
    {
      SaveSettings();
      QuestionViewModel.chkHiragana(false);
      QuestionViewModel.chkHiraganaDakuten(false);
      QuestionViewModel.chkHiraganaHandakuten(false);
      QuestionViewModel.chkKatakanaDakuten(false);
      QuestionViewModel.chkKatakanaHandakuten(false);
      QuestionViewModel.chkKatakana(false);
      QuestionViewModel.chkKanji(false);
      QuestionViewModel.chkHiraganaNumbers(false);
      QuestionViewModel.chkWords(false);
      QuestionViewModel.chkPhrases(false);
      QuestionViewModel.chkFileLoadedQuestions(false);
      
      QuestionViewModel.EnableHiragana(false);
      QuestionViewModel.EnableKatakana(false);
      QuestionViewModel.EnableKanji(false);
      QuestionViewModel.EnableHiraganaNumbers(false);
      QuestionViewModel.EnableWords(false);
      QuestionViewModel.EnablePhrases(false);
     
    }
  else
    {
      QuestionViewModel.EnableHiragana(true);
      QuestionViewModel.EnableHiraganaDakuten(true);
      QuestionViewModel.EnableHiraganaHandakuten(true);
      QuestionViewModel.EnableKatakanaDakuten(true);
      QuestionViewModel.EnableKatakanaHandakuten(true);
      QuestionViewModel.EnableKatakana(true);
      QuestionViewModel.EnableKanji(true);
      QuestionViewModel.EnableHiraganaNumbers(true);
      QuestionViewModel.EnableWords(true);
      QuestionViewModel.EnablePhrases(true);
      
      restoreSettings();
      QuestionViewModel.savedValues=[];
    }
}

function restoreSettings()
{
   if(hasValue("hiragana"))
        {
           QuestionViewModel.chkHiragana(true);
        }
      
          if(hasValue("hiraganadakuten"))
        {
           QuestionViewModel.chkHiraganaDakuten(true);
        }
      
          if(hasValue("hiraganahandakuten"))
        {
           QuestionViewModel.chkHiraganaHandakuten(true);
        }
      
         if(hasValue("katkanadakuten"))
        {
           QuestionViewModel.chkKatakanaDakuten(true);
        }
      
          if(hasValue("katakanahandakuten"))
        {
           QuestionViewModel.chkKatakanaHandakuten(true);
        }
      
      if(hasValue("katakana"))
        {
           QuestionViewModel.chkKatakana(true);
        }
      
      if(hasValue("kanji"))
        {
           QuestionViewModel.chkKanji(true);
        }
      
      if(hasValue("hiragananumbers"))
        {
           QuestionViewModel.chkHiraganaNumbers(true);
        }

      if(hasValue("words"))
        {
           QuestionViewModel.chkWords(true);
        }
      
           
      if(hasValue("phrases"))
        {
           QuestionViewModel.chkPhrases(true);
        }
     
        if(hasValue("fileloadedquestions"))
          {
            QuestionViewModel.chkFileLoadedQuestions(true);
          }
}

function SaveSettings()
{
   if(QuestionViewModel.chkHiragana())
      { QuestionViewModel.savedOptions.push("hiragana"); }
      
           if(QuestionViewModel.chkHiraganaDakuten())
      { QuestionViewModel.savedOptions.push("hiraganadakuten"); }
      
           if(QuestionViewModel.chkHiraganaHandakuten())
      { QuestionViewModel.savedOptions.push("hiraganahandakuten"); }
      
             if(QuestionViewModel.chkKatakanaDakuten())
      { QuestionViewModel.savedOptions.push("katakanadakuten"); }
      
           if(QuestionViewModel.chkKatakanaHandakuten())
      { QuestionViewModel.savedOptions.push("katakanahandakuten"); }
      
            if(QuestionViewModel.chkKatakana())
      { QuestionViewModel.savedOptions.push("katakana"); }
      
            if(QuestionViewModel.chkKanji())
      { QuestionViewModel.savedOptions.push("kanji"); }
      
            if(QuestionViewModel.chkHiraganaNumbers())
      { QuestionViewModel.savedOptions.push("hiragananumbers"); }
      
            if(QuestionViewModel.chkWords())
      { QuestionViewModel.savedOptions.push("words"); }
      
            if(QuestionViewModel.chkPhrases())
      { QuestionViewModel.savedOptions.push("phrases"); }
      
      if(QuestionViewModel.chkFileLoadedQuestions())
        { QuestionViewModel.savedOptions.push("fileloadedquestions");}
}

function SetInitializationView()
{
	QuestionViewModel.category("Welcome");
	QuestionViewModel.question("Load a Question Type To Begin");
	QuestionViewModel.answer("");
	QuestionViewModel.conjugate("");
	QuestionViewModel.EnableNextButton(false);
}

function SetFileLoadedView()
{
	QuestionViewModel.category("Questions Loaded Successfully");
	QuestionViewModel.question("Hit Next To Continue");
	QuestionViewModel.answer("");
	QuestionViewModel.conjugate("");
	QuestionViewModel.EnableNextButton(true);
	UpdateQuestionCounter();
	ShowNextButton();
}

function AllowFileLoad()
{
}

function DisableFileLoad()
{	
}

function EnableNextButton(val)
{
	QuestionViewModel.EnableNextButton(val);
}

function SetOutOfQuestionsView()
{
	QuestionViewModel.category("Out of Questions")
	QuestionViewModel.question("Hit Reload or Select a new category");
	QuestionViewModel.answer("");
}