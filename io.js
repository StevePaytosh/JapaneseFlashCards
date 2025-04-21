function get_json_file(filename)
{
	var fileInput = filename;

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /.*/

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					 doc=reader.result.split('\n');
 					
				}

				return reader.readAsText(file);	
				//AllowFileLoad();
			} else {
				DisableFileLoad();
				//fileDisplayArea.innerText = "File not supported!"
			}
		});
	
}

function run_file(doc,start, end)
{
	//parse json
	var json='';
	for (var i =start;i<end;i++)
	{
		json+=doc[i];
	}
	
	QuestionViewModel.externalQuestions.push(JSON.parse(json));

}

 window.onload = function() {
		
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('out');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
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
};

