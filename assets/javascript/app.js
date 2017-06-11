// var topics = ["dogs", "cats"];


var giphy = {
  topics:["dogs", "cats"],
  limit:10,

  initialButtons: function(){
    for (var i = 0; i < this.topics.length; i++) {
      this.addButton(this.topics[i]);
    }
  },

  addButton: function(gifname){
    var button = $("<button>").addClass("gifbutton").addClass("gifbutton").text(gifname).attr("data-name", gifname);
    $(".js-button-list").append(button);
    $("#gif-input").val("");
  },

  giphySearch: function(){
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+$(this).attr("data-name")+"&limit="+giphy.limit+"&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url:queryURL,
      method:"GET"
    }).done(function(gifdata){
      console.log(gifdata);
      var gifDiv = $(".js-gifholder");
      gifDiv.empty();
      for(var i=0;i<gifdata.data.length;i++){
        var imageDiv = $("<div class='border-thin display-inline-block margin-small'>");
        var imagejq = $("<img>").attr("src", gifdata.data[i].images.fixed_height_still.url).attr("alt", "a gif").addClass("js-gif").attr("data-state", "still").data("data-still-url", gifdata.data[i].images.fixed_height_still.url).data("data-moving-url", gifdata.data[i].images.fixed_height.url);
        imageDiv.append(imagejq);
        imageDiv.append($("<p>").html("Rating: "+gifdata.data[i].rating).addClass("text-center"));
        gifDiv.append(imageDiv);
      }
    });
  },

  toggleMotion: function(){
    if($(this).attr("data-state")==="still"){
      $(this).attr("src", $(this).data("data-moving-url")).attr("data-state", "moving");
    }
    else{
      $(this).attr("src", $(this).data("data-still-url")).attr("data-state", "still");
    }
  }
};







$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gif = $("#gif-input").val().trim();
  giphy.topics.push(gif);
  giphy.addButton(gif);

});

$(document).on("click", ".gifbutton", giphy.giphySearch);
$(document).on("click", ".js-gif", giphy.toggleMotion);





giphy.initialButtons();
