(function(){

	$(document).ready(function(){
		$('.submitmsg').click(function(){
			var 

$.ajax({
	url: 'http://tiny-pizza-server.herokuapp.com/collections/greenville-chats',
	type: 'GET',
	datatype: 'jsonp',

	});

$.ajax({
	url: 'http://tiny-pizza-server.herokuapp.com/collections/greenville-chats',
	type: 'POST',
	datatype: 'jsonp',

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
