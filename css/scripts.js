$(document).ready(
	function(){
		$(".l-cart").css("visibility", "hidden");
		$(".search").css("visibility", "hidden");
		$(".l-search").css("visibility", "hidden");
		$('.dot1').click(function(e){
			e.preventDefault();
			$(".col7").css("display", "inline-block");
			$(".col5").css("display", "inline-block");
			$(".col6").css("display", "none");
			$(".col5").css("margin-right", "36px");

			$(".dot1").css("color", "#8262b5");
			$(".dot1").css("font-size", "185px");
			$(".dot2").css("color", "#b3a6c7");
			$(".dot2").css("font-size", "125px");
			$(".dot3").css("color", "#b3a6c7");
			$(".dot3").css("font-size", "125px");
		});
		$('.dot2').click(function(e){
			e.preventDefault();
			$(".col7").css("display", "none");
			$(".col5").css("display", "inline-block");
			$(".col6").css("display", "inline-block");
			$(".col5").css("margin-right", "36px");
			$(".col6").css("margin", "0px");

			$(".dot2").css("color", "#8262b5");
			$(".dot2").css("font-size", "185px");
			$(".dot1").css("color", "#b3a6c7");
			$(".dot1").css("font-size", "125px");
			$(".dot3").css("color", "#b3a6c7");
			$(".dot3").css("font-size", "125px");
		});
		$('.dot3').click(function(e){
			e.preventDefault();
			$(".col7").css("display", "inline-block");
			$(".col5").css("display", "none");
			$(".col6").css("display", "inline-block");
			$(".col6").css("margin-right", "36px");

			$(".dot3").css("color", "#8262b5");
			$(".dot3").css("font-size", "185px");
			$(".dot2").css("color", "#b3a6c7");
			$(".dot2").css("font-size", "125px");
			$(".dot1").css("color", "#b3a6c7");
			$(".dot1").css("font-size", "125px");
		});
		$(window).on('resize', function(){
			var width = $(this).width();
			console.log(width);
		})
	}
);
function list_search(){
	$(".list-s").css("visibility", "visible");

	$('#mySearch').on('keyup', function(event) {
	  	event.preventDefault();
	    var tukhoa = $(this).val().toLowerCase();
	    $('.list-s li').filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa)>-1);
	    });

	});	
}
var dems = 1;
function close_search(){
 	$(".search").css("visibility", "hidden");
 	$(".list-s").css("visibility", "hidden");
 	dems--;
}
function searchbox(){
	dems++;
	$(".list-s").css("visibility", "hidden");
	if(dems%2==0){
		$(".search").css("visibility", "visible");	
	}else{
		$(".search").css("visibility", "hidden");	
	}
}
var demc=1;
function cart(){
	demc++;
	if(demc%2==0){
		$(".l-cart").css("visibility", "visible");
	}else{
		$(".l-cart").css("visibility", "hidden");
	}
}

var index = 0;
function btnn(){
	index++;
    if(index==3){
    	index=0;
    }	
 	var imgs = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];
    document.getElementById('slide').src= imgs[index];     
}

function btnp(){
	index--;
    if(index==-1){
    	index=2;
    }
	var imgs = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];
    document.getElementById('slide').src= imgs[index];
}
function changeImage(){
	index++;
    if(index==3){
    	index=0;
    }  
	var imgs = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];
    document.getElementById('slide').src= imgs[index]; 
}
setInterval(changeImage,3000);

var demmn = 1;
function showMenu(){
	demmn++;
	if(demmn%2==0){
	    $(".menu-content").css("display", "block");		
	}else{
	    $(".menu-content").css("display", "none");		
	}

}

function showProduct1(){
	$(".row1").css("display", "inline-block");
	$(".row2").css("display", "none");
}
function showProduct2(){
	$(".row2").css("display", "inline-block");
	$(".row1").css("display", "none");
}

function blog1(){
	$(".col7").css("display", "inline-block");
	$(".col5").css("display", "inline-block");
	$(".col6").css("display", "none");
	$(".col5").css("margin-right", "36px");

	$(".dot1").css("color", "#8262b5");
	$(".dot1").css("font-size", "185px");
	$(".dot2").css("color", "#b3a6c7");
	$(".dot2").css("font-size", "125px");
	$(".dot3").css("color", "#b3a6c7");
	$(".dot3").css("font-size", "125px");
}
function blog2(){
	$(".col7").css("display", "none");
	$(".col5").css("display", "inline-block");
	$(".col6").css("display", "inline-block");
	$(".col5").css("margin-right", "36px");
	$(".col6").css("margin", "0px");

	$(".dot2").css("color", "#8262b5");
	$(".dot2").css("font-size", "185px");
	$(".dot1").css("color", "#b3a6c7");
	$(".dot1").css("font-size", "125px");
	$(".dot3").css("color", "#b3a6c7");
	$(".dot3").css("font-size", "125px");
}
function blog3(){
	$(".col7").css("display", "inline-block");
	$(".col5").css("display", "none");
	$(".col6").css("display", "inline-block");
	$(".col6").css("margin-right", "36px");

	$(".dot3").css("color", "#8262b5");
	$(".dot3").css("font-size", "185px");
	$(".dot2").css("color", "#b3a6c7");
	$(".dot2").css("font-size", "125px");
	$(".dot1").css("color", "#b3a6c7");
	$(".dot1").css("font-size", "125px");
}

