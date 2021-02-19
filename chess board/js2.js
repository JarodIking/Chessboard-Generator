window.addEventListener('load',function (){
    var i = 0;
    var tiles = 0;
    var totalTiles = 0;
    var tilesGen = 0;
    var totalTiles = 0;





    document.getElementById('button').addEventListener('click',function (){
        tiles = document.getElementById('amount').value;
        totalTiles = tiles*tiles;
        document.getElementById('button').disabled = true;
        var interval = setInterval(interval, 0.1);
        function interval () {
            if(tiles > 1000 || totalTiles > 100000000){
                alert('max 1000');
                clearInterval(interval);
                document.getElementById('button').disabled = false;               
            }else{
                if (i >= tiles) {
                    clearInterval(interval);
                    i = 0;
                    totalTiles = 0;
                    tiles = 0;
                    tilesGen = 0;
                    totalTiles = 0;
                }else{               
                    var row = document.createElement('div');
                    row.style.position = "relative";
                    row.style.width = (50*tiles)+"px";
                    row.style.height = "50px";   
                    row.style.border = "1px black solid";
                    row.id ="row" + (i % 2);           

                    document.getElementById('tileInsert').appendChild(row);

                    if(row.id == "row" + 0){
                        colourPattern1(row);
                    }else{
                        colourPattern2(row);
                    }
                }
                i++;
            }
        }

        function colourPattern1(row){           
            for(var a=0;a<tiles;a++){
                tilesGen++;         
                var tile = document.createElement('div');
                tile.style.position ="relative";
                tile.style.width = "50px";
                tile.style.height = "50px";
                tile.style.float = "left";
                tile.id=a % 2;
                if(tile.id == 0){
                    tile.style.backgroundColor = "black";
                }else{
                    tile.style.backgroundColor = "white";
                }
                row.appendChild(tile);                
                document.getElementById('loader').innerHTML = "creating " + tilesGen + " of " + totalTiles + " tiles. For new board, delete current board.";                      
            }    
        }

        function colourPattern2(row){           
            for(var a=0;a<tiles;a++){
                tilesGen++;
                var tile = document.createElement('div');
                tile.style.position ="relative";
                tile.style.width = "50px";
                tile.style.height = "50px";
                tile.style.float = "left";
                tile.id= a % 2;

                if(tile.id == 0){
                    tile.style.backgroundColor = "white";
                }else{
                    tile.style.backgroundColor = "black";
                }
                row.appendChild(tile);
                document.getElementById('loader').innerHTML = "creating " + tilesGen + " of " + totalTiles + " tiles. For new board, delete current board.";                                  
            }    
        }
        
        
       
        
        
    });

    document.getElementById('button1').addEventListener('click', function (){
        document.getElementById('tileInsert').innerHTML = "";
        document.getElementById('loader').innerHTML = "";
        document.getElementById('button').disabled = false;

        i = 0;
        tiles = 0;
        totalTiles = 0;
        tilesGen = 0;
        totalTiles = 0;
    })





});

