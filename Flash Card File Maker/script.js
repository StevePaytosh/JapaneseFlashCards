var PSVModel = function()
{
  PSVModel.category = ko.observable("");  
  PSVModel.questions = ko.observableArray();
  PSVModel.output = ko.computed({read:calculateOutput,pure:true});  
  PSVModel.displayOutput = ko.observable(false);
  
}

function addQuestionRow()
{
	PSVModel.questions.push(
		{
			kana: ko.observable(""),
			kanji: ko.observable(""),
			romanji: ko.observable(""),
			english: ko.observable("")
		}
	); 
}

function removeQuestion(question)
{
	console.log(question);
	PSVModel.questions.remove(question);
}
 
 function clickOutputBtn()
 {
	PSVModel.displayOutput( !PSVModel.displayOutput() );
 }
 
 function calculateOutput()
 {
	  var rowResult="";
          for(let row =0; row<PSVModel.questions().length; row++)
          {
            rowResult += getPSVRow(row)+'<br>';
          }
      return rowResult;
 }
 
  function getPSVRow(row)
  {
    return PSVModel.questions()[row].kana()+"|"+PSVModel.questions()[row].kanji()+"|"+PSVModel.questions()[row].romanji()+"|"+PSVModel.questions()[row].english()+"|"+PSVModel.category();
  };
 
 $(document).ready(function()
 {	 
	var doc;
	var viewModel = new PSVModel([]);
	ko.applyBindings(viewModel);
 });
 