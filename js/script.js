$(document).ready(function(){
    $(".button").click(function(){
        var value = $(this).attr("data-filter");
        if (value == "all")
        {
            $(".filter").show("1000");
        }
        else
        {
             $(".filter").not("."+value).hide("10000");
             $(".filter").filter("."+value).show("10000");
        }
        //add active class with name 
        $("ul .button").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })
    
    $("#toggleModeBtn").click(function() {
        $("body").toggleClass("dark-mode");
        $("#modeIcon").text($("body").hasClass("dark-mode") ? "🌙" : "🌞");
    });
})