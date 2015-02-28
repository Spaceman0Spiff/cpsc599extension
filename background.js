//http://crunchify.com/how-to-refresh-div-content-without-reloading-page-using-jquery-and-ajax/

var i = 1;
var j = 1;

$(document).ready(function() {
			auto_refresh();
		});
		function auto_refresh(){
			var randomnumber = Math.floor(Math.random() * 100);
			var comment = $("div#watch7-sidebar").prepend('<div id="'+i+'" class="watch-sidebar-gutter   yt-card yt-card-has-padding    yt-uix-expander yt-uix-expander-collapsed">Test ' + randomnumber + '</div>'); //inserts a comment every second
            i++;
            setTimeout(function (){
                $( 'div#' + j ).remove(); //deletes that comment 7 seconds later
                j++;
            }, 9000);
		}
		var refreshId = setInterval(auto_refresh, 1000);




