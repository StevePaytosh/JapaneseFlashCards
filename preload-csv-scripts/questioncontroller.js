function LoadQuestions() //version specific 
{
    if(QuestionViewModel.chkHiraganaNumbers()) {addNumbers();}
    if(QuestionViewModel.chkHiragana()){ addHiragana();}
    if(QuestionViewModel.chkHiraganaDakuten()){ addHiraganaDakuten();}
    if(QuestionViewModel.chkHiraganaHandakuten()){ addHiraganaHandakuten();}
    if(QuestionViewModel.chkKatakana()){ addKatakana();}
    if(QuestionViewModel.chkKatakanaDakuten()){ addKatakanaDakuten();}
    if(QuestionViewModel.chkKatakanaHandakuten()){ addKatakanaHandakuten();}
    if(QuestionViewModel.chkKanji()){addKanji();}
    if(QuestionViewModel.chkWords()){addWords();}
    if(QuestionViewModel.chkPhrases()){addPhrases();}
};

function ShouldGetSpecialQuestionType()
{
	return QuestionViewModel.chkRandomNumber();	
}

function GetSpecialQuestionType()
{
	 GetRandomQuestion(); //VSC
    while(QuestionViewModel.japanese === previousQuestion.japanese)
    {
     GetRandomQuestion(); //VSC
    }
}