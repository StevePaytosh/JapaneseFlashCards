function getRandomNumberQuestion()
{
  var magnitude = Math.floor(Math.random()*4);
  var number = 0;
  if(magnitude==0)
    {
      number = Math.floor(Math.random()*100);
      QuestionViewModel.category("(small) number");
    }
  else if(magnitude==1)
    {
      number = Math.floor(Math.random()*1000);
      QuestionViewModel.category("(medium) number");
    }
  else if(magnitude==2)
    {
      number = Math.floor(Math.random()*10000);
      QuestionViewModel.category("(large) number");
    }
  else if(magnitude==3)
    {
      number = Math.floor(Math.random()*100000);
      QuestionViewModel.category("(larger) number");
    }
  else 
    {
        QuestionViewModel.category("failed to get number -- "+magnitude);
    }
  
  calculateNumberInJapanese(number);
  QuestionViewModel.question(number);
  
}


function calculateNumberInJapanese(number)
{
  
    var ones = Math.floor(number % 10);
    var tens = Math.floor(number/10 % 10);
    var hundreds = Math.floor(number/100 % 10);
    var thousands = Math.floor(number/1000 % 10);
    var tenThousands = Math.floor(number / 10000 % 10);
  
    var answer = '';
  if(tenThousands>0)
     {
         switch(tenThousands)
       {
         case 1: answer+= 'ichiman '; break;
         case 2: answer+= 'niman '; break;
         case 3: answer+= 'sanman '; break;
         case 4: answer+= 'yonman '; break;
         case 5: answer+= 'goman '; break;
         case 6: answer+= 'rokkuman '; break;
         case 7: answer+= 'nanaman '; break;
         case 8: answer+= 'hachiman '; break;
         case 9: answer+= 'kyuman '; break;
       }
     }
  
   if(thousands>0)
     {
         switch(thousands)
       {
         case 1: answer+= 'sen '; break;
         case 2:  answer+= 'nisen '; break;
         case 3:  answer+= 'sanzen '; break;
         case 4: answer+=  'yonsen '; break;
         case 5:  answer+= 'gosen '; break;
         case 6:  answer+= 'rokusen '; break;
         case 7:  answer+= 'nanasen '; break;
         case 8:  answer+= 'hasssen '; break;
         case 9:  answer+= 'kyuusen '; break;
       };
     }
  
     if(hundreds>0)
     {
         switch(hundreds)
       {
         case 1: answer+=  'hyaku '; break;
         case 2: answer+=  'nihyaku '; break;
         case 3: answer+=  'sanbyaku '; break;
         case 4: answer+=  'yonhyaku '; break;
         case 5: answer+=  'gohyaku '; break;
         case 6: answer+=  'roppyaku '; break;
         case 7: answer+=  'nanahyaku '; break;
         case 8: answer+=  'happyaku '; break;
         case 9: answer+=  'kyuuhyaku '; break;
       };
     }
  
       if(tens>0)
     {
         switch(tens)
       {
         case 1: answer+=  'ju '; break;
         case 2: answer+=  'niju '; break;
         case 3:  answer+= 'sanju '; break;
         case 4: answer+=  'yonju '; break;
         case 5: answer+=  'goku '; break;
         case 6: answer+=  'rokuju '; break;
         case 7: answer+=  'nanaju '; break;
         case 8: answer+=  'hachiju '; break;
         case 9: answer+=  'kyuuju '; break;
       };
     }
  
         if(ones>0)
     {
         switch(ones)
       {
         case 1: answer+=  'ichi'; break;
         case 2: answer+=  'ni'; break;
         case 3: answer+=  'san'; break;
         case 4: answer+=  'yon'; break;
         case 5: answer+=  'go'; break;
         case 6: answer+=  'roku'; break;
         case 7: answer+=  'nana'; break;
         case 8: answer+=  'hachi'; break;
         case 9: answer+=  'kyuu'; break;
       };
     }
  
	if(QuestionViewModel.chkJapaneseToEnglish())
	{
		QuestionViewModel.answer(answer); //UI
	}
	else
	{
		QuestionViewModel.question(answer); //UI
	}
}
