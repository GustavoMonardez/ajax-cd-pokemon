$(document).ready(function(){
    for(var i=1; i <= 100;++i){
        var src = "https://pokeapi.co/api/v2/pokemon/"+i+"/";
        $.get(src,function(res){
            $(".wrapper").append("<img src='" + res.sprites.front_default + "'>");
        });
    }    
});