$(document).ready(function(){
    $("h1").mouseenter(function(){
        $("h1").css("background-color", "yellow");
    });
    $("h1").mouseleave(function(){
        $("h1").css("background-color", "lightgray");
    });
});
