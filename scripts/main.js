(function(){

	$(document).ready(function(){
		$('.submitmsg').click(function(){
			
var $url = 'http://tiny-pizza-server.herokuapp.com/collections/greenville-chats';
var $usr;
var $msg;

$.ajax({
	url: $url,
	type: 'GET',
	});.done(function(data){
	console.log(data);
});

$.ajax({
	url: $url,
	type: 'POST',
	data: {
		message:'#',
		username:'#',
		createdAt: Date.now()
	}
	}).done(function(data) {
	console.log(data);
});

function renderTemplate(name, data) {
	var $template = $('[data-template-name=' + name + ']').text();
		$.each(data, function(prop, value) {
			$template = $template.replace('<% ' + data + ' %>', value);
		});

		});
	});
});
});
