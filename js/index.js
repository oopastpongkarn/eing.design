$(document).ready(function () {
	//  $("#work-window").show();

	$("#xprojects").click(function() {
		$("#work-window").hide();

		$("#works").click(function() {
			$("#work-window").show();

		});          });          


	$("#window-about").hide();

	$("#about").click(function() {
		$("#window-about").show();

		$("#xabout").click(function() {
			$("#window-about").hide();


		});          });   


	$("#window-contact").hide();

	$("#contacteing").click(function() {
		$("#window-contact").show();

		$("#xcontact").click(function() {
			$("#window-contact").hide();


		});          });   



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


	$(document).ready(function() {
		var a = 500;

	

		$('#work-window').draggable({
			start: function(event, ui) {
				$('#work-window').css("z-index", a++);
			}   
		});


	

		$( "#work-window,.detailed-project-windows" ).draggable({
			containment: [-800, 0, 1350, 850] });

		$('.detailed-project-windows,#window-about,#window-contact').draggable({
			start: function(event, ui) {
				$(this).css("z-index", a++);
			}   
		});

		$('#works, .workbar').click(function() {
			$('#work-window').css("z-index", a++);
		});

		$('.detailed-project-windows').click(function() {
			$(this).css("z-index", a++);
		});


		$('#about,#window-about').click(function() {
			$('#window-about').css("z-index", a++);
		});
		$('#contacteing,#window-contact').click(function() {
			$('#window-contact').css("z-index", a++);
		});


		// new codes UP
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
			$("#abookaboutablock-detail").show().css("z-index", a++);


			$("#xabookaboutablock").click(function() {
				$("#abookaboutablock-detail").hide();

			});          });    

		//bobaboba

		$("#bobaboba").click(function() {
			$("#bobaboba-detail").show().css("z-index", a++);

			$("#xbobaboba").click(function() {
				$("#bobaboba-detail").hide();

			});          });      

		//chrysp

		$("#chrysp").click(function() {
			$("#chrysp-detail").show().css("z-index", a++);

			$("#xchrysp").click(function() {
				$("#chrysp-detail").hide();

			});          });         

		//filled

		$("#filled").click(function() {
			$("#filled-detail").show().css("z-index", a++);

			$("#xfilled").click(function() {
				$("#filled-detail").hide();

			});          });  


		//appstore

		$("#appstore").click(function() {
			$("#appstore-detail").show().css("z-index", a++);

			$("#xappstore").click(function() {
				$("#appstore-detail").hide();

			});          });      


		//pong

		$("#pong").click(function() {
			$("#pong-detail").show().css("z-index", a++);

			$("#xpong").click(function() {
				$("#pong-detail").hide();

			});          });      


		//l3r

		$("#l3r").click(function() {
			$("#l3r-detail").show().css("z-index", a++);

			$("#xl3r").click(function() {
				$("#l3r-detail").hide();

			});          });      

		//bart

		$("#bart").click(function() {
			$("#bart-detail").show().css("z-index", a++);

			$("#xbart").click(function() {
				$("#bart-detail").hide();

			});          });      

		//soundjourney

		$("#soundjourney").click(function() {
			$("#soundjourney-detail").show().css("z-index", a++);

			$("#xsoundjourney").click(function() {
				$("#soundjourney-detail").hide();

			});          });      

		//neverlame

		$("#neverlame").click(function() {
			$("#neverlame-detail").show().css("z-index", a++);

			$("#xneverlame").click(function() {
				$("#neverlame-detail").hide();

			});          });      

		//cheese

		$("#cheese").click(function() {
			$("#cheese-detail").show().css("z-index", a++);

			$("#xcheese").click(function() {
				$("#cheese-detail").hide();

			});          });    

		//storycenter

		$("#storycenter").click(function() {
			$("#storycenter-detail").show().css("z-index", a++);

			$("#xstorycenter").click(function() {
				$("#storycenter-detail").hide();

			});  }); 

		$( ".movethis,#leave-stay-window,#einglogo,#about,#contacteing,#works,#statement" ).draggable({


		}); 

	});	});
