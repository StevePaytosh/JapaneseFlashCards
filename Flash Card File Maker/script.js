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
 
function copyText() {
  
	var copyText = getFormatedOutput();
    //copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText);
}

function getFormatedOutput()
{
	 var copyText = PSVModel.output();
	 copyText = copyText.replaceAll("<br>","\n");
	 return copyText;
}

function clickSaveFileBtn()
{
	var outputText = getFormatedOutput();
	var filename = "";
	if(PSVModel.category() != "")
	{
		fileName = PSVModel.category()+".txt";
	}
	download(fileName,outputText);
   
}

function download(file, text) 
{
	var element = document.createElement('a');
	element.setAttribute('href',
	'data:text/plain;charset=utf-8,'
	+ encodeURIComponent(text));
	element.setAttribute('download', file);
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
         
 
 $(document).ready(function()
 {	 
	var doc;
	var viewModel = new PSVModel([]);
	ko.applyBindings(viewModel);
 });
 