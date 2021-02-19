window.addEventListener('load', function (){
    var tiles = 0;
    var tileColour = 0;
    var tilesGen = 0;
    var i = 0;
    var totalTiles = 0;
    var boardLength = 0; 
    var deleteTiles = 0;


    document.getElementById("button").addEventListener('click' , function (){
        document.getElementById("button").disabled = true;
        document.getElementById("button1").disabled = true;
        tiles = document.getElementById("amount").value;
        totalTiles = tiles*tiles;

        var interval = setInterval(interval, 0.1);
        var modTotalTiles = totalTiles%2;
        var modTiles = tiles%2;
       
        if(tiles > 999){
            alert("only a max of 999 tiles!");
            tiles = 0;
        }
        
        function interval (){
            if(totalTiles == 999 || modTotalTiles == 0){
                clearInterval(interval);
                document.getElementById("button").disabled = false;
                document.getElementById("button1").disabled = false;
                tiles = 0;
                tileColour = 0;
                tilesGen = 0;
                i = 0;
                totalTiles = 0;
                alert("only an odd number!");
            }else{
                i++;
                deleteTiles = totalTiles;              
                if(i > totalTiles){
                    clearInterval(interval);
                    document.getElementById("button").disabled = false;
                    document.getElementById("button1").disabled = false;
                    tiles = 0;
                    tileColour = 0;
                    tilesGen = 0;
                    i = 0;                    
                }else{
                    document.getElementById('tileInsert').style.width = (totalTiles/tiles)*50;


                    if(tileColour == 0){
                        var div = document.createElement("div");
                            div.style.position = "relative";
                            div.style.float = "left";
                            div.style.width = "50px";
                            div.style.height = "50px";
                            div.style.backgroundColor = "white";

                        document.getElementById("tileInsert").appendChild(div);
                        tileColour = 1;

                        tilesGen++;                        
                        document.getElementById("loader").innerHTML = "creating " + tilesGen +" of " + totalTiles + ", please be patient this may take a while";
                        
                        
                    }else{
                    var div = document.createElement("div");
                        div.style.position = "relative";
                        div.style.float = "left";
                        div.style.width = "50px";
                        div.style.height = "50px";
                        div.style.backgroundColor = "black";

                        document.getElementById("tileInsert").appendChild(div);
                        tileColour = 0;
                        

                        tilesGen++;
                        document.getElementById("loader").innerHTML = "creating " + tilesGen +" of " + totalTiles + ", please be patient this may take a while";

                        

                    }

                }




            }
        }
    })

    var deleter = document.getElementById('tileInsert');


    document.getElementById('button1').addEventListener('click',function () {
            deleter.innerHTML="";
    });






})