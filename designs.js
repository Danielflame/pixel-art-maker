// Select color input
// Select size input
var height,width,color;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
	event.preventDefault();
	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	makeGrid(height, width);
})

function makeGrid(n,m) {
	$("tr").remove();
	for(var x = 1; x<=n; x++){
	    $("#pixelCanvas").append("<tr id=table" + x +"></tr>");
	    for(var y = 1; y<=m; y++){ 
          $("#table" + x).append("<td></td>");
        }
	}
	   $("td").click(function addColor(){
	   	  color = $("#colorPicker").val();
	   	  if($(this).attr("style")){
	   		  $(this).removeAttr("style")
	   	    }else{
	   		     $(this).attr("style" , "background-color: " + color);
	   	        }
	   })

// Your code goes here!

}
