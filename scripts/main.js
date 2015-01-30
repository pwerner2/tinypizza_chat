// (function(){
//
// 	$(document).ready(function(){
// 		$('.submitmsg').click(function(){
//
// var $url = 'http://tiny-pizza-server.herokuapp.com/collections/greenville-chats';
// var $usr;
// var $msg;
//
// $.ajax({
// 	url: $url,
// 	type: 'GET',
// 	});.done(function(data){
// 	console.log(data);
// });
//
// $.ajax({
// 	url: $url,
// 	type: 'POST',
// 	data: {
// 		message:'shibbidy doo wop',
// 		username:'frank sinatra',
// 		createdAt: Date.now()
// 	}
// 	}).done(function(data) {
// 	console.log(data);
// });
//
// function renderTemplate(name, data) {
// 	var $template = $('[data-template-name=' + name + ']').text();
// 		$.each(data, function(prop, value) {
// 			$template = $template.replace('<% ' + data + ' %>', value);
// 		});
//
// 		});
// 	});
// });
// });


(function() {
	'use strict';


	$(document).ready(function() {


		var servUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
		
		var userName = prompt("Username?");

		if (username === null){
			userName = "Anonymous";
		}

		var renderMessageTemplate = _.template($('.message-data').text());
		var messageTemplate = $('.messages-list');

		$('.send-button').on('click', sendMessage);

		function storeUsername() {
			userName = $('.username-field').val();
			console.log(userName);
		}

		function sendMessage() {
			var timeStamp = moment().format();
			var newMessage = $('.text-box').val();
			$.ajax({
				url: servUrl,
				type: "POST",
				data: {
					username: userName,
					message: newMessage,
					createdAt: timeStamp
				}
			}).done(function(data) {
				console.log(data);
			});
		}

// message retrieval
		
	function getMsg() {
	messageTemplate.empty();
	$.ajax({
		url: servUrl,
		type: "GET"
	}).done(function(messages) {
	
	messages = messages.reverse();
	_.each(messages, function(message) {

		if (message.created.At == null) {
			message.createdAt = "unknown";
		} else {
			message.createdAt = moment(message.createdAt).fromNow();
		}

		if (message.message == null) {
			message.message = '';
		}
		
		if (message.username == null) {
			message.username = '';
		}

		messageTemplate.append(renderMessageTemplate(message));
		$('messages-container').scrollTop($'.messages-container').prop('scrollHeight'));
	});
	});
});
