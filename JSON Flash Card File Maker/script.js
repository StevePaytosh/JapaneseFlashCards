var JSONModel = function()
{
  JSONModel.questions = ko.observableArray();
  JSONModel.output = ko.computed({read:calculateOutput,pure:true});  
  JSONModel.displayOutput = ko.observable(false);
  
}

function addQuestionRow()
{
	JSONModel.questions.push(
		{
			kana: ko.observable(""),
			kanji: ko.observable(""),
			romanji: ko.observable(""),
			english: ko.observable(""),
			category: ko.observable("")
		}
	); 
}

function removeQuestion(question)
{
	console.log(question);
	JSONModel.questions.remove(question);
}
 
 function clickOutputBtn()
 {
	JSONModel.displayOutput( !JSONModel.displayOutput() );
 }
 
 function calculateOutput(format="html")
 {
	  var rowResult="";
          for(let row =0; row<JSONModel.questions().length; row++)
          {
            rowResult += getJSONRow(row);
			if( (row+1) < JSONModel.questions().length)
			{
				if(format === "html")
				{
					rowResult+=",<br>";
				}
				
				if(format === "newline")
				{
					console.log("newline");
					rowResult+=",\n"
				}
				
			}
          }
      return rowResult;
 }
 
  function getJSONRow(row)
  {
    return "{"
	+ getQuotedText("japanese")
	+":"+getQuotedText(JSONModel.questions()[row].kana())
	+","
	+getQuotedText("kanji")
	+":"+getQuotedText(JSONModel.questions()[row].kanji())
	+","
	+ getQuotedText("romanji")
	+":"+getQuotedText(JSONModel.questions()[row].romanji())
	+","
	+getQuotedText("english")
	+":"+getQuotedText(JSONModel.questions()[row].english())
	+","
	+getQuotedText("category")
	+":"+getQuotedText(JSONModel.questions()[row].category())
	+"}";
  };
  
  function getQuotedText(input)
  {
	  var result = "\""+input+"\""
	  return result;
  }
 
function copyText() {
  
	var copyText = calculateOutput("newline");
    //copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText);
}

function clickSaveFileBtn()
{
	var outputText = calculateOutput("newline");
	var filename = "";
	if(JSONModel.category() != "")
	{
		fileName = JSONModel.category()+".txt";
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
	var viewModel = new JSONModel([]);
	ko.applyBindings(viewModel);
 });
 