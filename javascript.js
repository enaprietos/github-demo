var cont=0;
	$(document).ready(function(){
	for(var a=0; a<3; a++){
		
		$("table").append("<tr id='f"+a+"'></tr>")
		for(var b=10; b<13; b++){
		
			$("#f"+a).append("<td id='f"+a+"c"+b+"'><div class='lifes'></div> </td>")
			console.log($("#f"+a+"c"+b+""));
			
		}
	}
	
		for(var a=0; a<3; a++){
		
		
		for(var b=10; b<13; b++){
		if(a!=0){
		var aa=a--;
			if( ($("#f"+aa+"c"+b+"")) )
			
		}
	}
	
	var turn = 0;
	
	$("td").click(function(e){
	
	
			var but = $(this);
		
			var player = turn%2==0 ? "equis" : "circulo";
			
			$(but).children().addClass(player);
			turn++;
			console.log($(but).children())
		
	});
	
	
	
	$("#limpiaButton").click(function(){
		$("td div").removeClass("circulo");
		$("td div").removeClass("equis");
		$("td div").addClass("button");
		turn = 0;
	});
	
});