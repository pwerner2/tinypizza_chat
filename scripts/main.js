(function() {
	'use strict';

var servUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
var userName = "";
var messageContent = "";
var currentTime = "";
var chatTemplate = "";

$(document).ready(function() {

	currentTime = Date.now();

	var $chatContainer = $('.chatContainer');


$('#logButton').on('click', function(){
	event.preventDefault();
	if($(".userName-value").val() === '') {
	alert("Enter an username");
	} else {
	username = $(".userName-value").val();
	console.log(userName);
	$('.userName-stored').text(userName);
	$('.message-reply').removeClass('hidden');
	$('.chatContainer').scrollTop($('.chatContainer')[0].scrollHeight);
	$('.chatContainer').removeClass('hidden');
	$('chatContainer userName').addClass('hidden');
     }

   });
});

var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
  $.ajax(baseURL).done(function(posts) {
    _.each(posts, function(post) {
      _.defaults(post, {
        message: "",
        username: "",
        createdAt: ""
      });
      $messageboardContainer.append(messageboardTemplate(post));
    });
  });

$('.submit').click(function() {
    username = ("#submit").value();
    console.log('username');
  });
setInterval(messageboardTemplate, 7000);

  $('#submit-chat').on('click', function(){
    event.preventDefault();
    if($("#input-field").val() === ''){
      alert("I SAID TO SAY SOMETHING");
    } else {
      messageContent = $("#input-field").val();
      console.log(messageContent);
      $.ajax({
        url: baseURL,
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
