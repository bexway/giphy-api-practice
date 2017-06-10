// var topics = ["dogs", "cats"];


var giphy = {
  topics:["dogs", "cats"],


  initialButtons: function(){
    for (var i = 0; i < this.topics.length; i++) {
      this.addButton(this.topics[i]);
    }
  },

  addButton: function(gifname){
    console.log("placeholder");
    var button = $("<button>").addClass("gifbutton").addClass("gifbutton").text(gifname).attr("data-name", gifname);
    $(".js-button-list").append(button);
  },

  giphySearch: function(){
    console.log("search");
    console.log($(this));
  }
};







$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gif = $("#gif-input").val().trim();
  giphy.topics.push(gif);
  giphy.addButton(gif);

});

$(document).on("click", ".gifbutton", giphy.giphySearch);





giphy.initialButtons();
