var PSVModel = function()
{
  PSVModel.category = observable();  
}

var QuestionModel = function(question) 
{
    var self = this;
    self.questions = ko.observableArray(question);
    self.displayOutput = ko.observable(false);
    self.output = ko.computed(function()
    {
      var r="";
          for(let i =0; i<self.questions().length; i++)
          {
            r += self.getPSVRow(i)+'<br>';
          }
      return r;
    });
    
  self.getPSVRow = function(row)
  {
    return 
    self.questions()[row].kana+"|"+self.questions()[row].kanji+"|"+self.questions()[row].romanji+"|"+self.questions()[row].english+"|"+PSVModel.category;
  };
  
    self.showOutput = function()
    {
      if(self.displayOutput())
        {
          //turn off
          self.displayOutput(false);
        }
      else
        {
          //turn on
          self.displayOutput(true);
        }
    };
  
    self.addQuestion = function() {
        self.questions.push({
            kana: "",
            kanji:"",
            romanji: "",
            english:""
        });
    };
 
    self.removeQuestion = function(question) {
        self.questions.remove(question);
    };
 

  //  self.save = function(form) {
  //      alert("Could now transmit to server: " + ko.utils.stringifyJson(self.gifts));
        // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
    //};
};
 
 $(document).ready(function()
 {	 
	var doc;
	var viewModel = new QuestionModel([]);
	ko.applyBindings(viewModel);
 });
 
// Activate jQuery Validation
//$("form").validate({ submitHandler: viewModel.save });