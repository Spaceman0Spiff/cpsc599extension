//http://crunchify.com/how-to-refresh-div-content-without-reloading-page-using-jquery-and-ajax/

var i = 1;
var j = 1;

// adds container and header
$('#watch7-sidebar').prepend('<div id="comment-container" class="watch-sidebar comment-container"></div>');
$('#comment-container').before('<div id="comment-header"><p class="comment-header"><strong>Comments</strong></p></div>');

$(document).ready(function() {
			auto_refresh();
		});
		function auto_refresh(){
			var randomnumber = Math.floor(Math.random() * 100);
			var comment = $('#comment-container').prepend('<div id="'+i+'" class="watch-sidebar-gutter   yt-card yt-card-has-padding    yt-uix-expander yt-uix-expander-collapsed">Test ' + randomnumber + '</div>'); //inserts a comment every second
            i++;
            setTimeout(function (){
                $( 'div#' + j ).remove(); //deletes that comment 7 seconds later
                j++;
            }, 9000);
		}
		var refreshId = setInterval(auto_refresh, 1000);




