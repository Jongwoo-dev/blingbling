function StarRating(starboxId, appendToSelector, fixed=false){
	var starRating = new Object();
	starRating.id = starboxId

	var template = Handlebars.compile($('#starBoxTemplate').html());
	$('#'+appendToSelector).append(template({"starboxId":starRating.id}))

	var $star = $("#"+starRating.id),
	$result = $star.find("output>b");
	
	for (var i = 1; i < 11; i++) {
		$star.children('.input').children('label[for="'+starRating.id+'-p'+i+'"]')
			.css('width',i*10)
			.css('z-index',11-i);
	}
	
	starRating.star = $star;
	starRating.result = $result.text();
	starRating.fixed = fixed;
	starRating.callback = null;
		

	if (starRating.fixed) {
		$star.children('.input').children().remove();
		return starRating;
	}
	
	$(document)
	.on("change", "#"+starRating.id+" :radio", function(){
		$result.text($(this).next().text());
		starRating.result = $result.text();
		if (starRating.callback != null) {
			starRating.callback();
		}
	})
	.on("mouseover", "#"+starRating.id+" label", function(){
		$result.text($(this).text());
	})
	.on("mouseleave", "#"+starRating.id+">.input", function(){
		var $checked = $star.find(":checked");
		if($checked.length === 0){
			$result.text("0");
		} else {
			$result.text($checked.next().text());
		}
	});
	return starRating;
};

function makeStarBox(containerSelector) {
	$('<div>').attr('class','star-box header')
		.append("<span class='star-box-total'>평점</span>")
		.append("<div id='total-star-box'></div>")
		.appendTo($(containerSelector));	
  
	$('<div>').attr('class','star-box')
		.append("<span class='star-box-label'>시설</span>")
		.append("<div id='facility-star-box'></div>")
		.appendTo(containerSelector);
	
	$('<div>').attr('class','star-box')
		.append("<span class='star-box-label'>서비스</span>")
		.append("<div id='service-star-box'></div>")
		.appendTo(containerSelector);
	
	$('<div>').attr('class','star-box')
		.append("<span class='star-box-label'>청결</span>")
		.append("<div id='clean-star-box'></div>")
		.appendTo(containerSelector);
}

makeStarBox('.star-box-container');

var totalStarBox = new StarRating('total-star-input', 'total-star-box', true);
var facilityStarBox = new StarRating('facility-star-input', 'facility-star-box');
var serviceStarBox = new StarRating('service-star-input', 'service-star-box');
var cleanStarBox = new StarRating('clean-star-input', 'clean-star-box');

function changeTotal() {
	var result = ((parseInt(facilityStarBox.result) 
			+ parseInt(serviceStarBox.result) 
			+ parseInt(cleanStarBox.result))/3).toFixed(1) ;
	totalStarBox.star.find("output>b").text(result);
	stampStar(totalStarBox.star, Math.round(result));
};

function stampStar($starInputBox, num) {
	$starInputBox.children('.input').children().remove();
	$starInputBox.children('.input')
		.append('<input type="radio" name="total-star-input-star-input" id="total-star-input-p'+num+'" value="'+num+'" checked>')
		.append('<label for="total-star-input-p'+num+'" style="width:'+num*10+'px">'+num+'</label>');
}

facilityStarBox.callback = changeTotal;
serviceStarBox.callback = changeTotal;
cleanStarBox.callback = changeTotal;



