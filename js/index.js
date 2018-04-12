$(document).ready(function () {
  $("#projects-window").show();
	
	 
 $("#xprojects").click(function() {
  $("#projects-window").hide();

$("#works").click(function() {
  $("#projects-window").show();
 
  
});          });          });

// _________________________

$(document).ready(function(){
  $(".detailed-project-windows").hide();
});
    
$(".detailed-project-windows").click(function() {
$(this).show();
}); 
    
$('.xclosemex').click(function() {
$(this).parent().hide(".detailed-project-windows");
    
}); 


// _________________________

$(document).ready(function(){
  $("#about-window").hide();

$("#about").click(function() {
  $("#about-window").show();
  
 $("#xabout").click(function() {
  $("#about-window").hide();
  
});          });          });


 //--------C O N T A C T content -------///


$(document).ready(function(){
  $("#contact-window").hide();


   $("#contacteing").click(function() {
  $("#contact-window").show();
  
  
 $("#xcontact").click(function() {
  $("#contact-window").hide();
  
});          });         }); 



// Set up on DOM-ready
$(document).ready(function() {
  var a = 500;

	$('#projects-window').draggable({
	   handle: '.bar'
});
	
//	$('#projects-window .bar').click(function() {
//    $('#projects-window').css("z-index", a++);
//  });

  $('.detailed-project-windows,#about-window,#contact-window').draggable({
    start: function(event, ui) {
      $(this).css("z-index", a++);
    }
  });

 $('#works').click(function() {
    $('#projects-window').css("z-index", a++);
  });
	
  $('.detailed-project-windows').click(function() {
    $(this).css("z-index", a++);
  });
	
  $('#about,#about-window').click(function() {
    $('#about-window').css("z-index", a++);
  });
  $('#contacteing,#contact-window').click(function() {
    $('#contact-window').css("z-index", a++);
  });
	
	
  


// new codes UP
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes


// detailed projects windows down
// detailed projects windows down
// detailed projects windows down
// detailed projects windows down

//abookaboutablock

$("#abookaboutablock").click(function() {
  $("#abookaboutablock-detail").show();
	
  
 $("#xabookaboutablock").click(function() {
  $("#abookaboutablock-detail").hide();
  
});          });    

//bobaboba

$("#bobaboba").click(function() {
  $("#bobaboba-detail").show();
  
 $("#xbobaboba").click(function() {
  $("#bobaboba-detail").hide();
  
});          });      

//chrysp

$("#chrysp").click(function() {
  $("#chrysp-detail").show();
  
 $("#xchrysp").click(function() {
  $("#chrysp-detail").hide();
  
});          });         

//filled

$("#filled").click(function() {
  $("#filled-detail").show();
  
 $("#xfilled").click(function() {
  $("#filled-detail").hide();
  
});          });  


//appstore

$("#appstore").click(function() {
  $("#appstore-detail").show();
  
 $("#xappstore").click(function() {
  $("#appstore-detail").hide();
  
});          });      


//pong

$("#pong").click(function() {
  $("#pong-detail").show();
  
 $("#xpong").click(function() {
  $("#pong-detail").hide();
  
});          });      


//l3r

$("#l3r").click(function() {
  $("#l3r-detail").show();
  
 $("#xl3r").click(function() {
  $("#l3r-detail").hide();
  
});          });      

//bart

$("#bart").click(function() {
  $("#bart-detail").show();
  
 $("#xbart").click(function() {
  $("#bart-detail").hide();
  
});          });      

//soundjourney

$("#soundjourney").click(function() {
  $("#soundjourney-detail").show();
  
 $("#xsoundjourney").click(function() {
  $("#soundjourney-detail").hide();
  
});          });      

//sula

$("#sula").click(function() {
  $("#sula-detail").show();
  
 $("#xsula").click(function() {
  $("#sula-detail").hide();
  
});          });      

//cheese

$("#cheese").click(function() {
  $("#cheese-detail").show();
  
 $("#xcheese").click(function() {
  $("#cheese-detail").hide();
  
});          });      

//storycenter

$("#storycenter").click(function() {
  $("#storycenter-detail").show();
  
 $("#xstorycenter").click(function() {
  $("#storycenter-detail").hide();
  
});          }); 

//eee
$("#eee").click(function() {
  $("#eee-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xeee").click(function() {
  $("#eee-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          

$( function() {

   $( ".movethis,#leave-stay-window,#einglogo,#about,#contacteing,#works,#statement" ).draggable({
         
}); 

});




// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!

//$( function() {
//	var a = 500;
//
////bar
//   $('#projects-window,.detailed-project-windows').draggable({
//	   handle: '.bar'
//});
//
////contain in the imaginary bounding box
//   $( "#projects-window,.detailed-project-windows" ).draggable({
//  containment: [-800, 0, 1350, 850] });
//
//	$( "#projects-window,#statement,#contact-window,.detailed-project-windows" ).draggable({
//start: function(event, ui) { $(this).css("z-index", a++); }
//});
//
// });



//  d r a g     b a c k g r o u n d

 

//    $("#eingandnav").draggable({
//     handle: "#einglogo"
//}); 

});


// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes
// new codes DOWN


