//Oh boi it's 1:19am and the entire thing kinda broke - Mon Apr 9

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
<<<<<<< Updated upstream

  });
});


=======

  });
});


>>>>>>> Stashed changes
$(function () {

  $("#stay").click(function () {
    $("#leave-stay-window").hide();


  });
});


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

<<<<<<< HEAD
//abookaboutablock
$(document).ready(function(){
$("#abookaboutablock").click(function() {
  $("#abookaboutablock-detail").show();
//    document.body.style.background = "#818181";
  
 $("#xabookaboutablock").click(function() {
  $("#abookaboutablock-detail").hide();
//     document.body.style.background = "#c6c6c6";
  
});          });          });
=======
//GD1-book
$(document).ready(function () {
  $("#name").click(function () {
    $("#name-detail").show();

    $("#xname").click(function () {
      $("#name-detail").hide();

    });
  });
});
<<<<<<< Updated upstream
=======
>>>>>>> origin/master


//bobaboba
$(document).ready(function(){
$("#bobaboba").click(function() {
  $("#bobaboba-detail").show();

  
 $("#xbobaboba").click(function() {
  $("#bobaboba-detail").hide();
  
});          });          });

//chrysp
$(document).ready(function(){
$("#chrysp").click(function() {
  $("#chrysp-detail").show();
  
 $("#xchrysp").click(function() {
  $("#chrysp-detail").hide();
  
});          });          });

//filled
$(document).ready(function(){
$("#filled").click(function() {
  $("#filled-detail").show();
  
 $("#xfilled").click(function() {
  $("#filled-detail").hide();
  
});          });          });


//appstore
$(document).ready(function(){
$("#appstore").click(function() {
  $("#appstore-detail").show();
  
 $("#xappstore").click(function() {
  $("#appstore-detail").hide();
  
});          });          });


//pong
$(document).ready(function(){
$("#pong").click(function() {
  $("#pong-detail").show();
  
 $("#xpong").click(function() {
  $("#pong-detail").hide();
  
});          });          });


//l3r
$(document).ready(function(){
$("#l3r").click(function() {
  $("#l3r-detail").show();
  
 $("#xl3r").click(function() {
  $("#l3r-detail").hide();
  
});          });          });

//bart
$(document).ready(function(){
$("#bart").click(function() {
  $("#bart-detail").show();
  
 $("#xbart").click(function() {
  $("#bart-detail").hide();
  
});          });          });

//soundjourney
$(document).ready(function(){
$("#soundjourney").click(function() {
  $("#soundjourney-detail").show();
  
 $("#xsoundjourney").click(function() {
  $("#soundjourney-detail").hide();
  
});          });          });

//sula
$(document).ready(function(){
$("#sula").click(function() {
  $("#sula-detail").show();
  
 $("#xsula").click(function() {
  $("#sula-detail").hide();
  
});          });          });

//cheese
$(document).ready(function(){
$("#cheese").click(function() {
  $("#cheese-detail").show();
  
 $("#xcheese").click(function() {
  $("#cheese-detail").hide();
  
});          });          });
>>>>>>> Stashed changes

//storycenter
$(document).ready(function(){
$("#storycenter").click(function() {
  $("#storycenter-detail").show();
  
 $("#xstorycenter").click(function() {
  $("#storycenter-detail").hide();
  
});          });          });

//eee
$(document).ready(function(){
$("#eee").click(function() {
  $("#eee-detail").show();
  
 $("#xeee").click(function() {
  $("#eee-detail").hide();
  
});          });          });



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






