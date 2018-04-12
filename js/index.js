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
  $("#eingsresume_lol").hide();

$("#resume,#r_in_about").click(function() {
  $("#eingsresume_lol").show();
  
 $("#xresume").click(function() {
  $("#eingsresume_lol").hide();
  
});          });          });

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




//+++++++++ STAY-LEAVE-+++++++++++//

$(document).ready(function(){
  $("#leave-stay-window").hide();
  
 $(".miniport").click(function() {
  $("#leave-stay-window").show();
  
});          });


$(function(){
  
 $("#stay").click(function() {
  $("#leave-stay-window").hide();

  
});          }); 

// VVVIIIIDDDEEEEEEOOOSSS
//$(document).ready(function(){
// if ($('.productDescription').is(':visible')) {
//       player.pauseVideo();
//      }
//  else {
//       player.playVideo();
//      }
//    }); 


// detailed projects windows down
// detailed projects windows down
// detailed projects windows down
// detailed projects windows down

//abookaboutablock
$(document).ready(function(){
$("#abookaboutablock").click(function() {
  $("#abookaboutablock-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xabookaboutablock").click(function() {
  $("#abookaboutablock-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//bobaboba
$(document).ready(function(){
$("#bobaboba").click(function() {
  $("#bobaboba-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xbobaboba").click(function() {
  $("#bobaboba-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//chrysp
$(document).ready(function(){
$("#chrysp").click(function() {
  $("#chrysp-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xchrysp").click(function() {
  $("#chrysp-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//filled
$(document).ready(function(){
$("#filled").click(function() {
  $("#filled-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xfilled").click(function() {
  $("#filled-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });


//appstore
$(document).ready(function(){
$("#appstore").click(function() {
  $("#appstore-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xappstore").click(function() {
  $("#appstore-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });


//pong
$(document).ready(function(){
$("#pong").click(function() {
  $("#pong-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xpong").click(function() {
  $("#pong-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });


//l3r
$(document).ready(function(){
$("#l3r").click(function() {
  $("#l3r-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xl3r").click(function() {
  $("#l3r-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//bart
$(document).ready(function(){
$("#bart").click(function() {
  $("#bart-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xbart").click(function() {
  $("#bart-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//soundjourney
$(document).ready(function(){
$("#soundjourney").click(function() {
  $("#soundjourney-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xsoundjourney").click(function() {
  $("#soundjourney-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//sula
$(document).ready(function(){
$("#sula").click(function() {
  $("#sula-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xsula").click(function() {
  $("#sula-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//cheese
$(document).ready(function(){
$("#cheese").click(function() {
  $("#cheese-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xcheese").click(function() {
  $("#cheese-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//storycenter
$(document).ready(function(){
$("#storycenter").click(function() {
  $("#storycenter-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xstorycenter").click(function() {
  $("#storycenter-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//eee
$(document).ready(function(){
$("#eee").click(function() {
  $("#eee-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xeee").click(function() {
  $("#eee-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });




// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!

$( function() {
	var a = 500;

//bar
   $('#projects-window,.detailed-project-windows').draggable({handle: '.bar'
});

//contain in the imaginary bounding box
   $( "#projects-window,.detailed-project-windows" ).draggable({
  containment: [-800, 0, 1350, 850] });

	$( "#projects-window,#statement,#contact-window,.detailed-project-windows" ).draggable({
start: function(event, ui) { $(this).css("z-index", a++); }
});

 });

document.getElementById("works").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("projects-window").css("z-index", a++); }





//sendontop

//function sendontop(div_id) {
//  if (typeOf(div_id)=="string") {
//    div_id=document.getElementById(div_id);
//  }
//  div_id.style.zIndex = a++;
//}
//
//
//$(document).ready(function(){
//$("#storycenter").click(function() {
//  $("#storycenter-detail").show();
////    document.body.style.background = "#818181";
//  
// $("#xstorycenter").click(function() {
//  $("#storycenter-detail").hide();
////     document.body.style.background = "#c6c6c6";
//  
//});          });          });

 
///////////////////

// $('.click-to-front').click(function(){
//     var topZ = 1000;
//     $('.click-to-front').each(function(){
//         var thisZ = parseInt($(this).css('z-index'), 500);
//         if (thisZ > topZ){
//             topZ = thisZ;
//         }
//     });
//     $(this).css('z-index', topZ+1);
// });

// vVIDEO PLAY WHEN HOVEERRREDD


var figure = $("#type2-id-trick-vid").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


//  d r a g     b a c k g r o u n d

$( function() {

   $( ".movethis,#about-window,#leave-stay-window,#einglogo,#about,#contacteing,#works,#statement,#contact-window" ).draggable({
         
});  

//    $("#eingandnav").draggable({
//     handle: "#einglogo"
//}); 

});