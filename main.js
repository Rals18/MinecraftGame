var canvas=new fabric.Canvas("myCanvas");
ctx=canvas.getContext("2d");
var blockWidth=30;
var blockHeight=30;
var playerX=15;
var playerY=15;
var playerObject="";
var blockObject="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    playerObject = Img;
	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(Img);
	});
}

function newImage(getImage)
{
    fabric.Image.fromURL(getImage, function(Img) {
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
        top:playerY,
        left:playerX
        });
        canvas.add(Img);
        });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e)
{
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80')
    {
        console.log("When shift+p is pressed");
        blockWidth=blockWidth+10;
        blockHeight=blockHeight+10;
        document.getElementById("currentWidth").innerHTML=blockWidth;
        document.getElementById("currentHeight").innerHTML=blockHeight;
    }
    if(e.shiftKey == true && keypressed == '77')
    {
        console.log("When shift+m is pressed");
        blockWidth=blockWidth-10;
        blockHeight=blockHeight-10;
        document.getElementById("currentWidth").innerHTML=blockWidth;
        document.getElementById("currentHeight").innerHTML=blockHeight;
    }
    if(keypressed == '38')
    {
        up();
        console.log("When up key is pressed x = " + playerX + " | y = " + playerY);
    }
    if(keypressed == '40')
    {
        down();
        console.log("When down key is pressed x = " + playerX + " | y = " + playerY);
    }
    if(keypressed == '37')
    {
        left();
        console.log("When left key is pressed x = " + playerX + " | y = " + playerY);
    }
    if(keypressed == '39')
    {
        right();
        console.log("When right key is pressed x = " + playerX + " | y = " + playerY);
    }
    if(keypressed == '84')
    {
        newImage("trunk.jpg")
        console.log("When t is pressed");
    }
    if(keypressed == '67')
    {
        newImage("cloud.jpg")
        console.log("When c is pressed");
    }
    if(keypressed == '68')
    {
        newImage("dark_green.png")
        console.log("When d is pressed");
    }
    if(keypressed == '71')
    {
        newImage("ground.png")
        console.log("When g is pressed");
    }
    if(keypressed == '76')
    {
        newImage("light_green.png")
        console.log("When l is pressed");
    }
    if(keypressed == '82')
    {
        newImage("roof.jpg")
        console.log("When r is pressed");
    }
    if(keypressed == '85')
    {
        newImage("unique.png")
        console.log("When u is pressed");
    }
    if(keypressed == '87')
    {
        newImage("wall.jpg")
        console.log("When w is pressed");
    }
    if(keypressed == '89')
    {
        newImage("yellow_wall.png")
        console.log("When y is pressed");
    }
}

function up()
{
    if(playerY>0)
    {
        playerY=playerY-blockHeight;
        console.log("blockHeight=" + blockHeight);
        console.log("When up arrow is pressed x = " + playerX + " | y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function down()
{
    if(playerY<450)
    {
        playerY=playerY+blockHeight;
        console.log("Block Height = " + blockHeight);
        console.log("When down arrow is pressed x = " + playerX + " | y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function left()
{
    if(playerX>0)
    {
        playerX=playerX-blockWidth;
        console.log("Block Width = " + blockWidth);
        console.log("When left arrow is pressed x = " + playerX + " | y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function right()
{
    if(playerX<650)
    {
        playerX=playerX+blockWidth;
        console.log("Block Width = " + blockWidth);
        console.log("When right arrow is pressed x = " + playerX + " | y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}