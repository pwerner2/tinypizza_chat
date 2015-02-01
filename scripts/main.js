(function() {
	'use strict';


var userName = "";
var messageContent = "";
var currentTime = "";
var chatTemplate = "";

var servUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
var $messageContainer = $('.messageContainer');


$(document).ready(function() {

	currentTime = Date.now();




$('#logButton').on('click', function(){
	event.preventDefault();
	if($(".userName-value").val() === '') {
	prompt("Enter an username");
	} else {
	username = $(".userName-value").val();
	console.log(userName);
	$('.userName-stored').text(userName);
	$('.message-reply').removeClass('hidden');
	$('.messageContainer').scrollTop($('.messageContainer')[0].scrollHeight);
	$('.messageContainer').removeClass('hidden');
	$('messageContainer userName').addClass('hidden');
     }

   });
});

$(document).ready(function() {
  $.ajax(servUrl).done(function(posts) {
    _.each(posts, function(post) {
      $messageContainer.append(messageboardTemplate(post));
			console.log(posts);
    });
  });
});


$('.submit').click(function() {
    username = ("#submit").value();
    console.log('username');
  });
setInterval(messageboardTemplate, 7000);

  $('.send-button').on('click', function(){
    event.preventDefault();
    if($("#input-field").val() === ''){
      alert("pizza bell taco hut");
    } else {
      messageContent = $("#input-field").val();
      console.log(messageContent);
      $.ajax({
        url: servUrl,
        type: "POST",
        data: {
          message: messageContent,
          username: username,
          createdAt: Date.now()
        }
      });
    }
    $('#input-field').val('');
  });

})();
