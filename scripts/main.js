(function() {
	'use strict';

var servUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
var $messageContainer = $('.messageContainer');

//this is the part that pulls and displays msgs from server. Vars inconsistent w/pbranch

$(document).ready(function() {
  $.ajax(servUrl).done(function(posts) {
    _.each(posts, function(post) {
      $messageContainer.append(messageboardTemplate(post));
			console.log(posts);
    });
  });
});
})();
