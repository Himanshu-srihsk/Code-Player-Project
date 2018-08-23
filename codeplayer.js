
	   function updateoutput(){
	   $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#csspanel").val()
	+"</style></head><body>"+$("#htmlpanel").val()+"</body></html>");
	   document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
	   }
	   $(".togglebutton").hover(function(){
	  $(this).addClass("highlightebutton");
	  },function(){
	    $(this).removeClass("highlightebutton");
	   });
	   $(".togglebutton").click(function(){
	   $(this).toggleClass("active");
	   $(this).removeClass("highlightebutton");
	  var panelid= $(this).attr("id")+"panel";
	  
	  $("#"+ panelid).toggleClass("hidden");
	  var noofactivepanels=4-$('.hidden').length;
	  $(".panel").width(($(window).width()/noofactivepanels)-10);
	   });
	   $(".panel").height($(window).height()-$("#header").height()-15);
	   $(".panel").width(($(window).width()/2)-10);
	   updateoutput();
	   $("textarea").on('change keyup paste', function() {
    updateoutput();
	  
	 });
