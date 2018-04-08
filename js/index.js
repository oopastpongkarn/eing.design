$(document).ready(function () {
  $("#projects-window").hide();

  // $("#works").click(function() {
  //   $("#projects-window").show();
  // });  

  //  $("#xprojects").click(function() {
  //   $("#projects-window").hide();

  //  });          
});

// // _________________________

$(document).ready(function () {
  $("#eingsresume_lol").hide();

  // $("#resume,#r_in_about").click(function() {
  //   $("#eingsresume_lol").show();
  // }); 
  //  $("#xresume").click(function() {
  //   $("#eingsresume_lol").hide();

  //  });          
});

// // _________________________

$(document).ready(function () {
  $("#about-window").hide();

  // $("#about").click(function() {
  //   $("#about-window").show();
  // }); 

  //  $("#xabout").click(function() {
  //   $("#about-window").hide();
  // }); 
});


//--------S T I C K Y -------///


$(document).ready(function () {
  $("#stickyandx").hide();


  $("#contacteing").click(function () {
    $("#stickyandx").show();


    $(".xstickyeing").click(function () {
      $("#stickyandx").hide();

    });
  });
});




//+++++++++ STAY-LEAVE-+++++++++++//

$(document).ready(function () {
  $("#leave-stay-window").hide();

  $(".miniport").click(function () {
    $("#leave-stay-window").show();

  });
});


$(function () {

  $("#stay").click(function () {
    $("#leave-stay-window").hide();


  });
});

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

$(document).ready(function () {
  $(".detailed-project-windows").hide();
});

$(".detailed-project-windows").click(function () {
  $(this).show();
});

$('.xclosemex').click(function () {
  $(this).parent().hide(".detailed-project-windows");

});

// detailed projects windows down
// detailed projects windows down
// detailed projects windows down
// detailed projects windows down

//GD1-book
$(document).ready(function () {
  $("#name").click(function () {
    $("#name-detail").show();
    //    document.body.style.background = "#818181";

    $("#xname").click(function () {
      $("#name-detail").hide();
      //     document.body.style.background = "#c6c6c6";

    });
  });
});




// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!
// this makes the popup windows draggable!!!

$(function () {
  var a = 500;

  //bar
  $('#projects-window,#contact-window,.detailed-project-windows').draggable({
    handle: '.bar'
  });

  //contain in the imaginary bounding box
  $("#projects-window,#contact-window,.detailed-project-windows").draggable({
    containment: [-800, 0, 1350, 850]
  });

  $("#projects-window,#eingsresume_lol,#contact-window,.detailed-project-windows").draggable({
    start: function (event, ui) { $(this).css("z-index", a++); }
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


var figure = $("#type2-id-trick-vid").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
  $('video', this).get(0).play();
}

function hideVideo(e) {
  $('video', this).get(0).pause();
}


//  d r a g     b a c k g r o u n d

$(function () {

  $(".movethis,#about-window,#leave-stay-window,#einglogo,#about,#contacteing,#works, #statement").draggable({

  });

  //    $("#eingandnav").draggable({
  //     handle: "#einglogo"
  //}); 

});






