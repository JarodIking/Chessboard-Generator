$(window).ready(function (){
    var tiles = 0;
    var tileColour = 0;
    var tilesGen = 0;

    
    $('#button').click(function (){
        tiles = $('#amount').val();
        //console.log(tiles);

    
        
            for(i=0;i<tiles;i++){
                if(i == tiles){                    
                    
                    
                    break;
                }else{
                    console.log(i);
                    $("#loader").html(
                        "displaying " + $("#tileInserter").length +" of " + tiles
                    )

                    setTimeout(function (){
                        if(tileColour == 0){
                            var div = $("<div id=" + i + "></div>").css({
                                "position":"relative",
                                "float":"left",
                                "width":"10px",
                                "height":"10px",
                                "background-color":"black"
                            });
                            $("#tileInsert").append(div);
                            tileColour = 1;
                            //console.log("success");

                            tilesGen++;
                            $("#loader").html(
                                "displaying " + tilesGen +" of " + tiles
                            );

                            console.log(tilesGen);
                            
                            
                        }else{

                            var div = $("<div id=" + i + "></div>").css({
                                "position":"relative",
                                "float":"left",
                                "width":"10px",
                                "height":"10px",
                                "background-color":"white"
                            });
                            $("#tileInsert").append(div);
                            tileColour = 0;
                            //console.log("success");

                            tilesGen++;
                            $("#loader").html(
                                "displaying " + tilesGen +" of " + tiles
                            );

                            console.log(tilesGen);
                            

                         }
    
                    }, 100*i );
                }
            }












    });











})

