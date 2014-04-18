$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    defaultPageTransition : 'slide'
  });
});

/*
$(document).ready(function () {
	setupClasses();
	setupStyles();
	showClasses();
});

function setupClasses(){
	$.each($("h1"), function(key, element){
//		console.log(element);
		console.log($(element).html().trim());
		$.each($("h2", $(element).parent()), function(key, element){
			console.log("\t" + $(element).html().trim());
		});

		$(element).click(function(){
			var cl = $(this);
			var showing;
			$.each($("h2", cl.parent()), function(key1, element1){
				var el = $(element1);
				if(typeof showing == 'undefined' )
					showing = !el.is(":visible") ;

				if(showing)
					el.show();
				else
					el.hide();
			});
			if(showing){
				$("h1").hide();
				cl.show();
			} else
				$("h1").show();

		});
//		console.log(element.innerHTML.trim());

	});
}

function setupStyles(){
}

function showClasses(){
	$("h1").show();
}
*/