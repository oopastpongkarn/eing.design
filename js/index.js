// this thing makes the windows pop when doubleclicking and close them when hit 

// this thing makes the windows pop when doubleclicking and close them when hit x
// this thing makes the windows pop when doubleclicking and close them when hit x
// this thing makes the windows pop when doubleclicking and close them when hit x
// this thing makes the windows pop when doubleclicking and close them when hit x

////BEHIND EING
//
//$(function() {
//  $("#behindeing").hide();
//
//$("#about").hover(function() {
//  $("#behindeing").fadeTo( 300, 1 );
//    $("#about").animate({color: '#d3d3d3'}, 300);
//  
// $("#about").mouseleave(function() {
//  $("#behindeing").fadeTo( 90, 0 );
//     $("#about").animate({color: 'white'}, 90);
//     
//});          });         }); 
//
////BEHIND process
//
//$(function() {
//  $("#behindeing").hide();
//
//$(".miniport").hover(function() {
//  $("#behindeing").fadeTo( 300, 1 );
//    $(".miniport").animate({color: '#d3d3d3'}, 300);
//  
// $(".miniport").mouseleave(function() {
//  $("#behindeing").fadeTo( 90, 0 );
//    $(".miniport").animate({color: 'white'}, 90);
//     
//});          });         }); 
//
////STUFFFFFF CONTACT EING
//
//$(function() {
//  $("#behindeing").hide();
//
//$("#contacteing").hover(function() {
//  $("#behindeing").fadeTo( 300, 1 );
//    $("#contacteing").animate({color: '#d3d3d3'}, 300);
//  
// $("#contacteing").mouseleave(function() {
//  $("#behindeing").fadeTo( 90, 0 );
//    $("#contacteing").animate({color: 'black'}, 90);
//     
//});          });         }); 
//
////STUFFFFFF Eing's RESUME
//
//$(function() {
//  $("#behindeing").hide();
//
//$("#eingsresume").hover(function() {
//  $("#behindeing").fadeTo( 300, 1 );
//    $("#eingsresume").animate({color: '#d3d3d3'}, 300);
//  
// $("#eingsresume").mouseleave(function() {
//  $("#behindeing").fadeTo( 90, 0 );
//    $("#eingsresume").animate({color: 'white'}, 90);
//     
//});          });         }); 
//
////STUFFFFFF EING LIKES TAKING PHOTOS
//
//$(function() {
//  $("#behindeing").hide();
//
//$("#einglikestakingphotos").hover(function() {
//  $("#behindeing").fadeTo( 90, 1 );
//    $("#einglikestakingphotos").animate({color: '#d3d3d3'}, 90);
//  
// $("#einglikestakingphotos").mouseleave(function() {
//  $("#behindeing").fadeTo( 300, 0 );
//    $("#einglikestakingphotos").animate({color: 'white'}, 300);
//     
//});          });         }); 






// J K
// NO .dblclick
// SINCE NO ONE WILL GET THE DOUBLE CLICKING THING AND THINK MY SITE JUST BROKE

$(document).ready(function () {
  $("#projects-window").hide();

$("#projects").click(function() {
//    $("#behindeing").fadeTo( 300, 1 );
  $("#projects-window").show();
  
 $("#xprojects").click(function() {
  $("#projects-window").hide();
  
});          });          });

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


 //--------S T I C K Y -------///


$(document).ready(function(){
  $("#stickyandx").hide();


   $("#contacteing").click(function() {
  $("#stickyandx").show();
  
  
 $(".xstickyeing").click(function() {
  $("#stickyandx").hide();
  
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

// toggle

$(document).ready(function(){
  $(".detailed-project-windows").hide();
});
    
$(".detailed-project-windows").click(function() {
$(this).show();
}); 
    
$('.xclosemex').click(function() {
$(this).parent().hide(".detailed-project-windows");
    
}); 

// detailed projects windows
//GD1-book
$(document).ready(function(){
$("#gd1-book").click(function() {
  $("#gd1-book-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xgd1-book").click(function() {
  $("#gd1-book-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//TYPE1-22
$(document).ready(function(){
$("#type1-44").click(function() {
  $("#type1-44-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xtype1-44").click(function() {
  $("#type1-44-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//GD3-BOBA
$(document).ready(function(){
$("#gd3-boba").click(function() {
  $("#gd3-boba-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xgd3-boba").click(function() {
  $("#gd3-boba-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });

//filmphoto
$(document).ready(function(){
$("#filmphoto").click(function() {
  $("#filmphoto-detail").show();
//  document.body.style.background = "#818181";
    
 $("#xfilmphoto").click(function() {
  $("#filmphoto-detail").hide();
// document.body.style.background = "#c6c6c6";
  
});          });          });

//l3r
$(document).ready(function(){
$("#lr").click(function() {
  $("#lr-detail").show();
//  document.body.style.background = "#818181";
    
 $("#xlr").click(function() {
  $("#lr-detail").hide();
// document.body.style.background = "#c6c6c6";
  
});          });          });

// milestone
$(document).ready(function(){
$("#milestone").click(function() {
  $("#milestone-detail").show();
//  document.body.style.background = "#818181";
    
 $("#xmilestone").click(function() {
  $("#milestone-detail").hide();
// document.body.style.background = "#c6c6c6";
  
});          });          });

//type2-book
$(document).ready(function(){
$("#type2-book").click(function() {
  $("#type2-book-detail").show();
  
 $("#xtype2-book").click(function() {
  $("#type2-book-detail").hide();
  
});          });          });

//type1-nov
$(document).ready(function(){
$("#type1-nov").click(function() {
  $("#type1-nov-detail").show();
  
 $("#xtype1-nov").click(function() {
  $("#type1-nov-detail").hide();
  
});          });          });

//type2-id-trick-vid
$(document).ready(function(){
$("#type2-id-trick-vid").click(function() {
  $("#type2-id-trick-vid-detail").show();
  
 $("#xtype2-id-trick-vid").click(function() {
  $("#type2-id-trick-vid-detail").hide();
  
});          });          });

//pong_game
$(document).ready(function(){
$("#pong_game").click(function() {
  $("#pong_game-detail").show();
  
 $("#xpong_game").click(function() {
  $("#pong_game-detail").hide();
  
});          });          });

//s o u n d
$(document).ready(function(){
$("#sound").click(function() {
  $("#sound-detail").show();
  
 $("#xsound").click(function() {
  $("#sound-detail").hide();
  
});          });          });

// k e y n o t e
$(document).ready(function(){
$("#keynote").click(function() {
  $("#keynote-detail").show();
  
 $("#xkeynote").click(function() {
  $("#keynote-detail").hide();
  
});          });          });



// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!

$( function() {
	var a = 500;

//bar
   $('#projects-window,#contact-window,.detailed-project-windows').draggable({handle: '.bar'
});

//contain in the imaginary bounding box
   $( "#projects-window,#contact-window,.detailed-project-windows" ).draggable({
  containment: [-800, 0, 1350, 850] });

	$( "#projects-window,#eingsresume_lol,#contact-window,.detailed-project-windows" ).draggable({
start: function(event, ui) { $(this).css("z-index", a++); }
});

 });



/////// G R E Y S C A L E  H O V E R /////////

$(function() {
  $('#projects').hover(function() {
    $('#pj-icon').css('filter', 'none');
  }, 
  function() {
    $('#pj-icon').css('filter', 'grayscale(100)');
  });

  //-----

  $('#resume').hover(function() {
    $('#r-icon').css('filter', 'none');
  }, 
  function() {
    $('#r-icon').css('filter', 'grayscale(100)');
  });

  //-----

  $('#contact').hover(function() {
    $('#c-icon').css('filter', 'none');
  }, 
  function() {
    $('#c-icon').css('filter', 'grayscale(100)');
  });
});

 
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

   $( ".movethis,#about-window,#leave-stay-window,#eingsresume_lol" ).draggable({
         
});  

    $("#eingandnav").draggable({
     handle: "#eeiinngg"
});  });

	


