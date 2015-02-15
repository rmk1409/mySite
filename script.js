$(function() {

    $(".block").css({
        color: "black",
        border: "1px solid black"
    });

    $('body').append('<p>Yep!</p>');

    var months = ["yan", "feb"];

    var $monthsUl = $('<ul>');


    for (var i = 0; i < months.length; i++) {
    	//http://habrahabr.ru/post/38642/
    	(function(i){
	        var $li = $("<li>");
	        $li.html("<h1>header " + i + "</h1>");
	        $li.click(function(){
	        	alert("AAAA " + i);
	        });
	        $monthsUl.append($li);
    	})(i);
    }


    $('body').append($monthsUl);

});