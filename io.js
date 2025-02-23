function run_file(doc,start, end)
{
	for(var i=start;i<end;i++)
	{
		doc[i]=doc[i].trim();
		var args=doc[i].split("|");
		var ans="";
    
		addQuestion(args[0],args[2],args[3],args[4]);
		
		var question=
		{
			japanese: args[0],
			romanji: args[2],
			english: args[3],
			category: args[4]
		};

		//add some validation please
		QuestionViewModel.externalQuestions.push(question);
	}
	
	if(QuestionViewModel.externalQuestions().length>0)
	{
		SetFileLoadedView();
	}
}

 window.onload = function() {
		
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('out');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			//var textType = /text.*/;
			var textType = /.*/

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					 doc=reader.result.split('\n');
 					
				}

				reader.readAsText(file);	
				AllowFileLoad();
			} else {
				DisableFileLoad();
				fileDisplayArea.innerText = "File not supported!"
			}
		});
}; 

function processFile()
{
	run_file(doc,0,doc.length);
	MapQuestions();
}