function LoadQuestions() //version specific 
{
	ClearQuestions();
 
	for (let i = 0; i < preloadedQuestions.length; i++) 
	{
		var question = createQuestionModel(preloadedQuestions[i]);
		addQuestionJSON(question);
		addCategory(question);
	}
	
	EnableNextButton(QuestionViewModel.questions().length>0); //ui functions
	UpdateQuestionCounter() //ui functions
	
}

function run_json_file(doc,start,end) //io
{
		var json='';
	for (var i =start;i<end;i++)
	{
		json+=doc[i];
	}
	
	return JSON.parse(json);
}

function get_json_file(filename) //io
{
	var output;
	var fileInput = document.getElementById('inputfile');
		//var fileDisplayArea = document.getElementById('out');


		//fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			//var textType = /text.*/;
			//var textType = /.*/

			//if (file.type.match(textType)) {
				var reader = new FileReader();

			//	reader.onload = function(e) {
					 //doc=reader.result.split('\n');
		//			 output = reader.readAsText(filename);
 					
			//	}

				return reader.readAsText(file);	
				//AllowFileLoad();
			//} else {
				//DisableFileLoad();
				//fileDisplayArea.innerText = "File not supported!"
			//}
		//}
		//);
	
}

function LoadFilteredQuestions(filter)
{
	ClearQuestions();
	
	 for (let i = 0; i < preloadedQuestions.length; i++) 
	{
		if(filter.length > 0 && filter.includes(preloadedQuestions[i].category) )
		{
			var question = createQuestionModel(preloadedQuestions[i]);
			addQuestionJSON(question);
			addCategory(question);
		}
	}
	
	EnableNextButton(QuestionViewModel.questions().length>0); //ui functions
	UpdateQuestionCounter() //ui functions
}


function ShouldGetSpecialQuestionType()
{
	return QuestionViewModel.chkRandomNumber();	
}

function GetSpecialQuestionType()
{
	 GetRandomQuestion(); //VSC
    while(QuestionViewModel.question === previousQuestion.japanese)
    {
     GetRandomQuestion(); //VSC
    }
}

function createQuestionModel(json)
{
	var question=
	{
	japanese: json.japanese,
	romanji: json.romanji,
	english: json.english,
	category: json.category
	};
	
	return question;
}

function addQuestionJSON(question)
{
  
	QuestionViewModel.questions.push(question);
	
}

function addCategory(question, isSelected = false)
{
	if(!checkIfCategoryExists(question.category) )
	{
		var category=
		{
			name: question.category,
			selected: isSelected
		};
		
		QuestionViewModel.Categories.push(category);
		
	}
}

function isCategorySelected(category)
{
	return QuestionViewModel.Categories()[category].selected;
}

function categoryName(category)
{
	return QuestionViewModel.Categories()[category].name;
}

function checkIfCategoryExists(categoryName) {
    var match = ko.utils.arrayFirst(QuestionViewModel.Categories(), function(item) {
        return item.name === categoryName;
    });
	
	return match !== undefined;
}