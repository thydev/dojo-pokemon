$(document).ready(function(){
    for(var i = 1; i <= 151; i++) {
        $("#pokemons").append(
            "<img id='" + i + "' src='http://pokeapi.co/media/sprites/pokemon/" + i +  ".png' alt='" + i + "'>"
        );
    }

    $("img").click(function(){
        
        //http://pokeapi.salestock.net/api/v2/
        //https://cors.now.sh/https://pokeapi.co/api/v2/ --> NOt working
        //http://pokeapi.co/api/v2 -->has been blocked by CORS policy
        var apiUrl = "http://pokeapi.salestock.net/api/v2/pokemon/" + $(this).attr("id")
        $.get(apiUrl, function(res) {
            //console.log(res);
            $("#detail").html(
                "<h1>" + res.name + "</h1>"
                + "<img src='" + res.sprites.front_default + "'" + " >"
                + "<h3>Types: " + res.types[0].type.name + "</he>"
                + "<h3>Height: " + res.height + "</h3>"
                + "<h3>Weight: " + res.weight + "</he>"
            );
        }, "json");
        
    });
});