$(document).ready(function(){
    for(var i = 1; i < 200; i++) {
        $("body").append(
            "<img src='http://pokeapi.co/media/sprites/pokemon/" + i +  ".png' alt='" + i + "'>"
        );
    }
});