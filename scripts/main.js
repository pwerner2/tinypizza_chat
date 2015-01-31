(function() {
	'use strict';

var servUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
var userName = "";
var messageContent = "";
var currentTime = "";
var chatTemplate = "";

$(document).ready(function() {

	currentTime = Date.now();

	var $messageContainer = $('.messageContainer');


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

var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
  $.ajax(servUrl).done(function(posts) {
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
