var main = function(){

	var Items = $('#list li'); 
	var listElements = []; 

	$("#submit").click(function(){

		// if the text box has text in it 
		if($("#text").val() != "")
		{
			var list = document.getElementById('list'); 
			var li = document.createElement('li'); 
			li.appendChild(document.createTextNode($("#text").val())); 
			li.setAttribute("class", "listItem");
			$(li).append("<hr />");
			list.appendChild(li); 
			listElements.push(li); 
		}	

		// clear text box
		$("#text").val("");
	});

	
	$("#del").click(function(){

		console.log('del clicked');

		for(var i = 0; i < listElements.length; i++){
			if($(listElements[i]).hasClass('delete')){
				$(listElements[i].remove()); 
				listElements[i] = ' ';
			}
		}
	});

	$("#list").on('click', '.delete', function(){
		$(this).remove(); 
	})

	
	$('body').on('click', '.listItem',function(){	
		$(this).toggleClass("delete");
	});
}

$(document).ready(main);