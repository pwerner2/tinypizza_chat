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


		var $url = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
		var $user;
		var $message;

		$user = "Sinatra";
		$message = "DOOBIE DOOBIE DOOOOOOOOOO";
		// $createdAt = date.

		//
		// Get All Chat Messages From Server
		//
		$.ajax({
			url: $url,
			type: "GET"
		}).done(function(data) {
			console.log(data);

		});

		$.ajax({
			url: "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats",
			type: "POST",
			data: {
				message: "I don't have to drink my urine, but it's sterile and I like the taste",
				username: "That guy from waterworld",
				createdAt: Date.now()
			}
		}).done(function(data) {
			console.log(data);

		});



	});
})();
