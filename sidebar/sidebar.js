$(document).ready(function(){
    $(".page i").click(function(){
        $(".bar,.page").addClass("active")
        $(this).css(
            {"visibility":"hidden",
            
    })
    });
    $(".content i").click(function(){
        $(".page i").css({"visibility":"visible"})
        $(".bar,.page").removeClass("active")
        
    });
    
 

})

