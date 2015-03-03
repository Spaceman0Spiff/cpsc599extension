//http://crunchify.com/how-to-refresh-div-content-without-reloading-page-using-jquery-and-ajax/

var i = 1;
var j = 1;

var divClass = "watch-sidebar-gutter   yt-card yt-card-has-padding    yt-uix-expander yt-uix-expander-collapsed";

// adds container and header
$('#watch7-sidebar').prepend('<div id="comment-container" class="watch-sidebar comment-container"></div>');
$('#comment-container').before('<div id="comment-header"><p class="comment-header"><strong>Comments</strong></p></div>');

$(document).ready(function() {
			auto_refresh();
		});
function auto_refresh(){
    var randomnumber = Math.floor(Math.random() * 100);
    addComment("Test Author", randomnumber, "3:27");
    /*
    var comment = $('#comment-container').prepend('<div id="'+i+'" class="watch-sidebar-gutter   yt-card yt-card-has-padding    yt-uix-expander yt-uix-expander-collapsed">Test ' + randomnumber + '<br/>2nd line</div>'); //inserts a comment every second
    i++;
    */
    
    /*setTimeout(function (){
        //$( 'div#' + j ).remove(); //deletes that comment 7 seconds later
        //j++;
    }, 9000);*/
}
var refreshId = setInterval(auto_refresh, 1000);

function addComment(author, content, time){

    var comment = '<div id="'+i+'" class="' + divClass + '"><p><span class="comment-author">' + author + '</span><span class="comment-time"> at ' + time + '</span></p><p class="comment-body">' + content + '</p></div>';
    
    $(comment).prependTo('#comment-container').hide().slideDown(1000, 'linear');
    
    /*
    var comment = $('#comment-container').prepend('<div id="'+i+'" class="' + divClass + '"><p><span class="comment-author">' + author + '</span><span class="comment-time"> at ' + time + '</span></p><p class="comment-body">' + content + '</p></div>'); //inserts a comment every second
    i++;
    */

}


