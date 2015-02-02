var serverUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
var $messageContainer = $('.messageContainer');
var msgcontent = "";
var username = "";
var currentTime = "";
var $msgLog = "";

(function() {
	'use strict';


//this is the part that pulls and displays msgs from server. Vars inconsistent w/pbranch

$(document).ready(function() {
	
	currentTime = Date.now();

	username = prompt("please enter a username!");

  $.ajax(serverUrl).done(function(posts) {
    _.each(posts, function(post) {
      $messageContainer.append(messageboardTemplate(post));
			console.log(posts);
    });
  });
});

// This is the bit that makes posting work

$('#send-button').on('click', function() {
	event.preventDefault();
	if($('.character-input').val() === ''){
		alert("Invalid input, try again");
	} else {
		msgcontent = $('.character-input').val();
		console.log(msgcontent);

		$.ajax({
			url: serverUrl,
			type: "POST",
			data: {
				message: msgcontent,
				username: username,
				createdAt: Date.now()
			}
		});
	}

		$('.character-input').val('');
	});
})();

	function getData() {
		
		$.ajax(serverUrl).done(chatFilter);
	}

	function chatFilter(chatData) {
		var filteredData = _.filter(chatData, function(parseData) {
			return parseData.createdAt >= currentTime;
		});

		_.each(filteredData, function(printData) {
			$msgLog.append($message-post(printData));
			$('.message-reply').scrollTop($("messageboardTemplate")[0].scrollHeight);
		});
	}

setInterval(getData, 3000);

