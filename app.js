$(document).ready(function(){
    for(var i = 1; i <= 151; i++) {
        $("#pokemons").append(
            "<img id='" + i + "' src='http://pokeapi.co/media/sprites/pokemon/" + i +  ".png' alt='" + i + "'>"
        );
    }

    $("img").click(function(){
        $("#detail").html("<img src='images/loading.gif'" + " width='300px' height='300px' >"
                            + "<h1>Thank you for waiting...</h1>");
        //http://pokeapi.salestock.net/api/v2/
        //https://cors.now.sh/https://pokeapi.co/api/v2/ --> NOt working
        //http://pokeapi.co/api/v2 -->has been blocked by CORS policy
        var apiUrl = "http://pokeapi.salestock.net/api/v2/pokemon/" + $(this).attr("id")
        $.get(apiUrl, function(res) {
            //console.log(res);
            var types = "<ul>";
            for (var i = 0; i < res.types.length; i++){
                types += "<li>" + res.types[i].type.name + "</li>";
            }
            types += "</ul>"
            $("#detail").html(
                "<h1>" + res.name + "</h1>"
                + "<img src='" + res.sprites.front_default + "'" + " >"
                + "<h3>Types:</h3> " + types + ""
                + "<h3>Height: " + res.height + "</h3>"
                + "<h3>Weight: " + res.weight + "</h3>"
            );
        }, "json");
        
    });
});