try {
	  var search = location.href.split('?')[1].split('=')[1];
	} catch (error) {
		var search = -1;
	}
	
	console.log(search);
var keyword =$('#contentsearchtitle');
 $('<span>').text(decodeURIComponent(search)).appendTo(keyword);
	$.getJSON('../corporate/searchBysearchbar.json?searchbar='+search, function(ajaxResult) {
		var status = ajaxResult.status;
		if (status != "success")
			return;
		//$('#content-main').children().remove();
		
		var list = ajaxResult.data;
		var main = $('#content_main');
		var template = Handlebars.compile($('#corTemplate').html());
		var count = $('#countlist');
		
		var countli = $('<span>').addClass('titlenum').text(list.length).appendTo(count);
		$('<span>').addClass('titletext').text("개 업체").appendTo(countli);
		console.log(list);

		main.html(template({"list": list}));
	});