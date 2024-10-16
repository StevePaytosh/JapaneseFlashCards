var JSONModel = function()
{
  JSONModel.questions = ko.observableArray();
  JSONModel.output = ko.computed({read:calculateOutput,pure:true});  
  JSONModel.displayOutput = ko.observable(false);
  JSONModel.displayInput = ko.observable(false);
  JSONModel.JSONInput = ko.observable("");
  JSONModel.PSVInput = ko.observable("");
  
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

function addQuestion(json)
{
	JSONModel.displayInput(false);
	
	JSONModel.questions.push(
		{
			kana: json.japanese,
			kanji: json.kanji,
			romanji: json.romanji,
			english: json.english,
			category: json.category
		}
	); 	
}

function addJSON()
{
	JSONModel.questions([]);
	
	var input = JSON.parse(JSONModel.JSONInput());
	console.log("Input: "+input);
	for (let i = 0; i < input.length; i++)
	{
		addQuestion(input[i]);
	}		
}

function addPSV()
{
	JSONModel.questions([]);
	
//	for (let i = 0; i < input.length; i++)
//	{
//		addQuestion(input[i]);
//	}		
	

		//doc[i]=doc[i].trim();
		//var a = psvInput[i].trim();
		var args=JSONModel.PSVInput().split("|");
    
		//addQuestion(args[0],args[2],args[3],args[4]);
		
		for(let i=0; i<args.length; i++)
		{
			var question=
			{
				kana: args[i++],
				kanji:args[i++],
				romanji: args[i++],
				english: args[i++],
				category: args[i++]
			};
		
			JSONModel.questions.push(question);
		}
		//add some validation please
		//QuestionViewModel.externalQuestions.push(question);
	
}


function removeQuestion(question)
{
	console.log(question);
	JSONModel.questions.remove(question);
}
 
 function clickOutputBtn()
 {
	JSONModel.displayInput(false);
	JSONModel.displayOutput( !JSONModel.displayOutput() );
	
 }
 
  function clickInputBtn()
 {
	JSONModel.displayOutput(false);
	JSONModel.displayInput( !JSONModel.displayInput() );
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
	  console.log("row check: "+ row);
    return "{"
	+ getQuotedText("japanese")
	+":"+getQuotedText(JSONModel.questions()[row].kana)
	+","
	+getQuotedText("kanji")
	+":"+getQuotedText(JSONModel.questions()[row].kanji)
	+","
	+ getQuotedText("romanji")
	+":"+getQuotedText(JSONModel.questions()[row].romanji)
	+","
	+getQuotedText("english")
	+":"+getQuotedText(JSONModel.questions()[row].english)
	+","
	+getQuotedText("category")
	+":"+getQuotedText(JSONModel.questions()[row].category)
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
 